import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/models/Project";
import { MOCK_PROJECTS } from "@/data/mockProjects";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug: rawSlug } = params;
  const slug = rawSlug === "eye-leads-care" ? "eyeleads-eyewear-store" : rawSlug;

  try {
    const conn = await connectToDatabase();
    if (!conn) {
      const mock = MOCK_PROJECTS.find((p) => p.slug === slug);
      if (mock) {
        return NextResponse.json({ project: mock, source: "mock" });
      }
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const project = await Project.findOne({ slug });
    if (!project) {
      const mock = MOCK_PROJECTS.find((p) => p.slug === slug);
      if (mock) {
        return NextResponse.json({ project: mock, source: "mock-fallback" });
      }
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project, source: "mongodb" });
  } catch (error) {
    console.error(`API GET /api/projects/${slug} error:`, error);
    const mock = MOCK_PROJECTS.find((p) => p.slug === slug);
    if (mock) {
      return NextResponse.json({ project: mock, source: "error-fallback" });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
