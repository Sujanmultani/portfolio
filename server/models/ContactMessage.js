import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, trim: true, default: null },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  emailSent: { type: Boolean, default: false },
  emailError: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('ContactMessage', contactMessageSchema);
