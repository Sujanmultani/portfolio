import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { MOCK_PROJECTS } from "@/data/mockProjects";

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      // Fallback to mock data if MongoDB is not connected
      return NextResponse.json({ projects: MOCK_PROJECTS, source: "mock" });
    }

    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    if (!projects || projects.length === 0) {
      return NextResponse.json({ projects: MOCK_PROJECTS, source: "mock-fallback" });
    }

    return NextResponse.json({ projects, source: "mongodb" });
  } catch (error) {
    console.error("API GET /api/projects error:", error);
    return NextResponse.json({ projects: MOCK_PROJECTS, source: "error-fallback" });
  }
}
