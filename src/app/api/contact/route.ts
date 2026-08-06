import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, projectType, budget } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    let dbSaved = false;

    // Save to MongoDB if database connection is available
    try {
      const conn = await connectToDatabase();
      if (conn) {
        await Contact.create({
          name,
          email,
          message,
          projectType: projectType || "Full Application",
          budget: budget || "Flexible",
        });
        dbSaved = true;
      }
    } catch (dbError) {
      console.warn("MongoDB contact saving skipped or failed:", dbError);
    }

    // Send email notification if Nodemailer / SMTP settings exist
    let emailSent = false;
    const apiKey = process.env.EMAIL_SERVICE_API_KEY;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "hello@developer.com";

    if (apiKey && apiKey !== "your_email_api_key_or_smtp_pass" && apiKey !== "local_dummy_key") {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: receiver,
            pass: apiKey,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${receiver}>`,
          to: receiver,
          replyTo: email,
          subject: `⚡ New Project Inquiry from ${name} [${projectType || "General"}]`,
          text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; background-color: #0b0b0c; color: #f4f1ea; padding: 24px; border-radius: 8px;">
              <h2 style="color: #c1502e; border-bottom: 1px solid #26262a; padding-bottom: 8px;">New Contact Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #c1502e;">${email}</a></p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <hr style="border-color: #26262a;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background-color: #141416; padding: 16px; border-radius: 4px;">${message}</p>
            </div>
          `,
        });
        emailSent = true;
      } catch (mailError) {
        console.warn("Nodemailer send error:", mailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully! I will reach out within 24 hours.",
      dbSaved,
      emailSent,
    });
  } catch (error) {
    console.error("API POST /api/contact error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your message." },
      { status: 500 }
    );
  }
}
