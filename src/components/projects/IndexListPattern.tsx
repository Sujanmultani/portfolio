"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "@/data/mockProjects";

interface IndexListPatternProps {
  projects: ProjectData[];
  title?: string;
  subtitle?: string;
}

export function IndexListPattern({
  projects,
  title = "02 — FEATURED WORK",
  subtitle = "Selected Engineering & Case Studies",
}: IndexListPatternProps) {
  const [hoveredProject, setHoveredProject] = useState<ProjectData | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Smooth lerp cursor tracking for floating preview
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { stiffness: 250, damping: 25, mass: 0.5 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <section className="relative py-24 px-6 md:px-12 mx-auto max-w-7xl">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-3">
          <span className="eyebrow-label">{title}</span>
          <h2 className="font-heading-fluid font-extrabold text-text tracking-tight">
            {subtitle}
          </h2>
        </div>
        <p className="text-text-muted text-sm max-w-md">
          Hover over any row to inspect case preview, technology stack, and architectural outcome.
        </p>
      </div>

      {/* Floating Image Preview (Desktop Only) */}
      {isDesktop && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-30 overflow-hidden rounded-lg border-2 border-line bg-bg-elevated shadow-2xl"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            width: 320,
            height: 200,
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          animate={{
            opacity: hoveredProject ? 1 : 0,
            scale: hoveredProject ? 1 : 0.8,
            rotate: hoveredProject ? 3 : -4,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {hoveredProject && (
            <div className="relative h-full w-full">
              <Image
                src={hoveredProject.coverImage}
                alt={hoveredProject.title}
                fill
                className="object-cover contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-text">
                <span className="bg-bg/90 backdrop-blur px-2 py-0.5 border border-line">
                  {hoveredProject.category}
                </span>
                <span className="bg-accent text-bg px-2 py-0.5 font-bold">
                  {hoveredProject.year}
                </span>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Stacked Vertical Index Rows */}
      <div className="divide-y divide-line border-y border-line">
        {projects.map((project, index) => {
          const formattedIndex = String(index + 1).padStart(2, "0");
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              data-cursor="View Case"
              className="group relative block py-8 transition-colors duration-300 hover:bg-bg-elevated/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-2 md:px-4">
                {/* Index Number + Title */}
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-mono text-lg md:text-xl text-text-muted transition-colors duration-300 group-hover:text-accent font-semibold">
                    {formattedIndex}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-text transition-transform duration-300 group-hover:translate-x-3 group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>

                {/* Mobile Inline Static Image Fallback */}
                <div className="block lg:hidden relative h-48 w-full rounded-md border border-line overflow-hidden my-2">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Metadata Tags & Link Arrow */}
                <div className="flex flex-wrap items-center gap-6 justify-between lg:justify-end">
                  <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
                    <span className="border border-line bg-bg px-2.5 py-1 text-text">
                      {project.category}
                    </span>
                    <span className="text-line">|</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
