import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { connectToDatabase } from "../lib/mongodb";
import Project from "../models/Project";
import { MOCK_PROJECTS } from "../data/mockProjects";

async function seedDatabase() {
  console.log("🌱 Starting Database Seed Script...");

  const conn = await connectToDatabase();

  if (!conn) {
    console.error("❌ Failed to connect to MongoDB. Please check your MONGODB_URI in .env.local.");
    process.exit(1);
  }

  try {
    console.log("🧹 Clearing existing projects...");
    await Project.deleteMany({});

    console.log(`📦 Inserting ${MOCK_PROJECTS.length} sample projects...`);
    const inserted = await Project.insertMany(MOCK_PROJECTS);

    console.log(`✅ Successfully seeded ${inserted.length} projects into MongoDB!`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
