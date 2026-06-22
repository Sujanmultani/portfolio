// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dns from 'dns';
import helmet from 'helmet';
import crypto from 'crypto';
import { rateLimit } from 'express-rate-limit';
import ContactMessage from './models/ContactMessage.js';

// Force DNS resolution to prioritize IPv4 to resolve SRV connection failures on dual-stack ISP configurations
dns.setDefaultResultOrder('ipv4first');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Cap JSON body size

// Lock down CORS origins
const allowedOrigins = (process.env.FRONTEND_URL || '').split(',').map(o => o.trim()).filter(Boolean);
if (allowedOrigins.length === 0) {
  console.warn("WARNING: FRONTEND_URL not set — CORS will block all browser origins");
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Rate Limiters
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 15, // increased from 5 to 15 requests per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many messages sent. Please try again in a few minutes.' },
});

const messagesLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 50, // increased from 20 to 50 — this is an admin-only route protected by ADMIN_SECRET anyway
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/contact', contactLimiter);
app.use('/api/messages', messagesLimiter);

// Disable Mongoose command buffering so queries fail instantly instead of hanging when DB is offline
mongoose.set('bufferCommands', false);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Helpers
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeCompare(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// Startup check for strong ADMIN_SECRET
if (!process.env.ADMIN_SECRET || process.env.ADMIN_SECRET.length < 24) {
  console.error('ERROR: ADMIN_SECRET in server config is either missing or too weak (must be at least 24 characters long).');
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, honeypot } = req.body;

    // Honeypot spam trap
    if (honeypot) return res.status(200).json({ success: true });

    // Validate type and structure of inputs
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      (phone && typeof phone !== 'string') ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return res.status(400).json({ success: false, error: 'Invalid input format.' });
    }

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    // Enforce size limits before Mongoose schema to prevent oversized payload abuse
    if (name.length > 200 || subject.length > 200 || email.length > 200 || (phone && phone.length > 30)) {
      return res.status(400).json({ success: false, error: 'Input field exceeds length limit.' });
    }
    if (message.length > 5000) {
      return res.status(400).json({ success: false, error: 'Message content exceeds 5000 characters.' });
    }

    let savedMessage = null;
    let dbError = null;

    // 1. SAVE FIRST — attempt to save to database (fails fast if DB is offline)
    try {
      savedMessage = await ContactMessage.create({
        name: name.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : null,
        subject: subject.trim(),
        message: message.trim(),
      });
    } catch (dbErr) {
      console.error('Database save failed (will fallback to direct email):', dbErr.message);
      dbError = dbErr.message;
    }

    // 2. THEN attempt to send the email notification (escaped user inputs)
    let emailSent = false;
    let emailError = null;

    const escapedName = escapeHtml(name.trim());
    const escapedEmail = escapeHtml(email.trim());
    const escapedPhone = phone ? escapeHtml(phone.trim()) : 'Not Provided';
    const escapedSubject = escapeHtml(subject.trim());
    const escapedMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Portfolio <onboarding@resend.dev>',
          to: process.env.EMAIL_USER,
          reply_to: email.trim(),
          subject: `[Portfolio] ${escapedSubject}`,
          html: `<p><strong>Name:</strong> ${escapedName}</p><p><strong>Email:</strong> ${escapedEmail}</p><p><strong>Phone:</strong> ${escapedPhone}</p><p><strong>Message:</strong><br/>${escapedMessage}</p>`,
        });
      } else {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          replyTo: email.trim(),
          subject: `[Portfolio] ${escapedSubject}`,
          html: `<p><strong>Name:</strong> ${escapedName}</p><p><strong>Email:</strong> ${escapedEmail}</p><p><strong>Phone:</strong> ${escapedPhone}</p><p><strong>Message:</strong><br/>${escapedMessage}</p>`,
        });
      }
      emailSent = true;
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr.message);
      emailError = emailErr.message;
    }

    // Update database status if the record was successfully created initially
    if (savedMessage) {
      savedMessage.emailSent = emailSent;
      savedMessage.emailError = emailError;
      await savedMessage.save().catch(err => console.error('Failed to update DB record status:', err.message));
    }

    // If BOTH database save AND email sending failed, return a generic 500 error to the client
    if (!savedMessage && !emailSent) {
      console.error('Contact submission fully failed:', { dbError, emailError });
      return res.status(500).json({ 
        success: false, 
        error: 'Could not process your message right now. Please try again shortly or email me directly.' 
      });
    }

    // Return success if at least one of the routes (DB save or Email send) succeeded
    res.status(200).json({ success: true, message: 'Message processed successfully.' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ success: false, error: 'Something went wrong. Please try again or email me directly.' });
  }
});

// Private route to see every message (Timing-Safe Comparison)
app.get('/api/messages', async (req, res) => {
  try {
    const secret = req.headers['x-admin-secret'] || '';
    if (!process.env.ADMIN_SECRET || !safeCompare(secret, process.env.ADMIN_SECRET)) {
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
  } catch (err) {
    console.error('Fetch messages error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
