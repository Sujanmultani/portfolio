import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { IndexListPattern } from "@/components/projects/IndexListPattern";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTASection } from "@/components/sections/CTASection";
import { MOCK_PROJECTS } from "@/data/mockProjects";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Always serve fresh, real content

export default function HomePage() {
  const featuredProjects = MOCK_PROJECTS.filter((p) => p.featured);

  return (
    <div className="space-y-12">
      <HeroSection />
      <MarqueeTicker />
      <AboutTeaser />
      <IndexListPattern projects={featuredProjects} title="03 — FEATURED WORK" />
      <TestimonialsCarousel />
      <CTASection />
    </div>
  );
}
