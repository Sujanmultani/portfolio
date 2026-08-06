import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { IndexListPattern } from "@/components/projects/IndexListPattern";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTASection } from "@/components/sections/CTASection";
import { MOCK_PROJECTS } from "@/data/mockProjects";

export const revalidate = 60; // revalidate every 60 seconds

async function getFeaturedProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/projects`,
      { cache: "no-store" }
    );
    if (!res.ok) return MOCK_PROJECTS.filter((p) => p.featured);
    const data = await res.json();
    return data.projects ? data.projects.filter((p: { featured: boolean }) => p.featured) : MOCK_PROJECTS.filter((p) => p.featured);
  } catch {
    return MOCK_PROJECTS.filter((p) => p.featured);
  }
}

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="space-y-12">
      <HeroSection />
      <MarqueeTicker />
      <IndexListPattern projects={featuredProjects} />
      <AboutTeaser />
      <TestimonialsCarousel />
      <CTASection />
    </div>
  );
}
