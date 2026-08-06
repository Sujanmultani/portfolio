import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  category: string;
  year: number;
  coverImage: string;
  gallery: string[];
  role: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  problem: string;
  solution: string;
  result: string;
  featured: boolean;
  order: number;
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    year: { type: Number, required: true },
    coverImage: { type: String, required: true },
    gallery: { type: [String], default: [] },
    role: { type: String, required: true },
    techStack: { type: [String], required: true },
    liveUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    result: { type: String, required: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
