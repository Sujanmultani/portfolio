import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  projectType: string;
  budget: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    projectType: { type: String, default: "Full Application" },
    budget: { type: String, default: "Flexible" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
