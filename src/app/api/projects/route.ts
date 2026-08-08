import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { MOCK_PROJECTS } from "@/data/mockProjects";

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      // Purge any legacy fake project entries from MongoDB
      const validSlugs = MOCK_PROJECTS.map((p) => p.slug);
      await Project.deleteMany({ slug: { $nin: validSlugs } });

      for (const item of MOCK_PROJECTS) {
        await Project.updateOne(
          { slug: item.slug },
          { $set: item },
          { upsert: true }
        );
      }
      const projects = await Project.find({ slug: { $in: validSlugs } }).sort({ order: 1 });
      return NextResponse.json({ projects: projects.length > 0 ? projects : MOCK_PROJECTS, source: "mongodb-synced" });
    }

    return NextResponse.json({ projects: MOCK_PROJECTS, source: "mock" });
  } catch (error) {
    console.error("API GET /api/projects error:", error);
    return NextResponse.json({ projects: MOCK_PROJECTS, source: "mock-fallback" });
  }
}
