"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, ArrowRight, X } from "lucide-react";
import { MOCK_PROJECTS, ProjectData } from "@/data/mockProjects";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const normalizedSlug = slug === "eye-leads-care" ? "eyeleads-eyewear-store" : slug;
  const projectIndex = MOCK_PROJECTS.findIndex((p) => p.slug === normalizedSlug);
  const project: ProjectData | undefined = MOCK_PROJECTS[projectIndex];

  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  const prevProject =
    projectIndex > 0
      ? MOCK_PROJECTS[projectIndex - 1]
      : MOCK_PROJECTS[MOCK_PROJECTS.length - 1];

  const nextProject =
    projectIndex < MOCK_PROJECTS.length - 1
      ? MOCK_PROJECTS[projectIndex + 1]
      : MOCK_PROJECTS[0];

  return (
    <article className="py-12 space-y-16">
      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-md p-4"
        >
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full border border-line bg-bg-elevated text-text hover:text-accent"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-lg overflow-hidden border border-line">
            <Image
              src={activeLightboxImage}
              alt="Project Gallery Image Lightbox"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Back Navigation Bar */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="mx-auto max-w-7xl px-6 md:px-12 space-y-6">
        <div className="flex items-center gap-3">
          <span className="eyebrow-label">{project.category}</span>
          <span className="text-line">|</span>
          <span className="font-mono text-xs text-text-muted">{project.year}</span>
        </div>

        <h1 className="font-display-fluid font-black text-text tracking-tight">
          {project.title}
        </h1>

        {/* Metadata Grid Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-y border-line py-6 font-mono text-xs">
          <div>
            <span className="block text-text-muted uppercase text-[10px]">MY ROLE</span>
            <span className="block font-semibold text-text mt-1">{project.role}</span>
          </div>

          <div>
            <span className="block text-text-muted uppercase text-[10px]">TIMELINE / YEAR</span>
            <span className="block font-semibold text-text mt-1">{project.year}</span>
          </div>

          <div>
            <span className="block text-text-muted uppercase text-[10px]">TECH STACK</span>
            <span className="block font-semibold text-text mt-1">
              {project.techStack.slice(0, 3).join(", ")}
            </span>
          </div>

          <div>
            <span className="block text-text-muted uppercase text-[10px]">PROJECT LINKS</span>
            <div className="flex items-center gap-4 mt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent-hover font-bold"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-text-muted hover:text-text"
                >
                  <span>CODE REPO</span>
                  <Github className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Cover Image */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative aspect-[16/9] w-full rounded-xl border-2 border-line bg-bg-elevated overflow-hidden shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Narrative Case Breakdown: Problem -> Solution -> Result */}
      <section className="mx-auto max-w-5xl px-6 md:px-12 space-y-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-line pb-12">
          <div className="md:col-span-4">
            <span className="eyebrow-label">01 // THE CHALLENGE</span>
            <h2 className="font-display text-2xl font-bold text-text mt-2">
              Problem Statement
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-line pb-12">
          <div className="md:col-span-4">
            <span className="eyebrow-label">02 // ARCHITECTURE</span>
            <h2 className="font-display text-2xl font-bold text-text mt-2">
              Engineering Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              {project.solution}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs border border-line bg-bg-elevated px-3 py-1 text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="eyebrow-label">03 // OUTCOME</span>
            <h2 className="font-display text-2xl font-bold text-text mt-2">
              Key Metric Result
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-text font-medium text-base md:text-xl leading-relaxed border-l-2 border-accent pl-4 py-1">
              {project.result}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-6 pt-6">
          <span className="eyebrow-label">INTERFACE GALLERY (CLICK TO EXPAND)</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(img)}
                data-cursor="Expand"
                className="group relative aspect-[4/3] rounded-lg border border-line bg-bg-elevated overflow-hidden cursor-pointer shadow-lg hover:border-accent transition-all duration-300"
              >
                <Image
                  src={img}
                  alt={`${project.title} interface snapshot ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next/Prev Navigation Footer */}
      <footer className="mx-auto max-w-7xl px-6 md:px-12 border-t border-line pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prev Project */}
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col p-6 rounded-lg border border-line bg-bg-elevated hover:border-accent transition-all duration-300 space-y-3"
          >
            <span className="font-mono text-xs text-text-muted flex items-center gap-2">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>PREVIOUS CASE STUDY</span>
            </span>
            <h4 className="font-display text-xl font-bold text-text group-hover:text-accent">
              {prevProject.title}
            </h4>
          </Link>

          {/* Next Project */}
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-end p-6 rounded-lg border border-line bg-bg-elevated hover:border-accent transition-all duration-300 space-y-3 text-right"
          >
            <span className="font-mono text-xs text-text-muted flex items-center gap-2">
              <span>NEXT CASE STUDY</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <h4 className="font-display text-xl font-bold text-text group-hover:text-accent">
              {nextProject.title}
            </h4>
          </Link>
        </div>
      </footer>
    </article>
  );
}
