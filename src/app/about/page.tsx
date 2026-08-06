"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, CheckCircle2, Briefcase, GraduationCap, Code2, Server, Terminal, Cpu } from "lucide-react";

const TIMELINE = [
  {
    year: "2024 — PRESENT",
    role: "Principal Full-Stack Engineer",
    company: "Vantage Systems Labs",
    description: "Architecting real-time telemetry streaming platforms using Next.js App Router, Go microservices, and MongoDB. Reduced ingest latency by 64%.",
    type: "experience",
  },
  {
    year: "2022 — 2024",
    role: "Senior Systems Architect",
    company: "Chronos Algorithmic Trading",
    description: "Designed low-latency gRPC order matching engine and real-time operational audit dashboards for institutional fund trading.",
    type: "experience",
  },
  {
    year: "2020 — 2022",
    role: "Lead Interactive Developer",
    company: "Kintsugi Studio",
    description: "Built custom block-based editorial engine with 3D scroll triggers and WebGL canvas backgrounds for Awwwards-winning publishing clients.",
    type: "experience",
  },
  {
    year: "2016 — 2020",
    role: "B.S. in Computer Science & Engineering",
    company: "University of California, Berkeley",
    description: "Specialized in Distributed Systems, Compiler Design, and Interactive Computer Graphics. Graduated Magna Cum Laude.",
    type: "education",
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Frontend & Interface",
    icon: Code2,
    skills: [
      { name: "Next.js 14 (App Router)", dots: 5 },
      { name: "React & TypeScript", dots: 5 },
      { name: "GSAP & ScrollTrigger", dots: 5 },
      { name: "Tailwind CSS", dots: 5 },
      { name: "Framer Motion", dots: 4 },
      { name: "WebGL / CSS 3D", dots: 4 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      { name: "Node.js & Express", dots: 5 },
      { name: "MongoDB & Mongoose", dots: 5 },
      { name: "Go (Golang)", dots: 4 },
      { name: "REST & GraphQL APIs", dots: 5 },
      { name: "Redis Caching", dots: 4 },
      { name: "Python FastAPI", dots: 4 },
    ],
  },
  {
    title: "Architecture & DevOps",
    icon: Cpu,
    skills: [
      { name: "Vercel & AWS Deployments", dots: 5 },
      { name: "Docker Containerization", dots: 4 },
      { name: "System Design & Microservices", dots: 5 },
      { name: "CI/CD Pipeline Automation", dots: 4 },
      { name: "Database Schema Indexing", dots: 5 },
    ],
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    skills: [
      { name: "Git & GitHub Workflows", dots: 5 },
      { name: "Postman & Insomnia", dots: 5 },
      { name: "VS Code & Neovim", dots: 5 },
      { name: "Performance Profiling", dots: 5 },
    ],
  },
];

export default function AboutPage() {
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const line = lineRef.current;
    const timelineContainer = timelineRef.current;

    if (!line || !timelineContainer) return;

    // Animated vertical timeline drawing line
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineContainer,
          start: "top center+=100",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="py-12 space-y-24">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-6">
        <span className="eyebrow-label">03 — BIOGRAPHY &amp; SKILLS</span>
        <h1 className="font-display-fluid font-black text-text tracking-tight">
          About &amp; Experience
        </h1>
        <p className="text-text-muted text-base md:text-xl max-w-3xl leading-relaxed">
          I craft software where backend architectural integrity meets meticulous design engineering. Over 8 years in high-stakes engineering environments.
        </p>

        {/* Resume Download CTA */}
        <div className="pt-4">
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 border-2 border-accent bg-accent px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-bg transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover shadow-lg"
          >
            <Download className="h-4 w-4" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      </section>

      {/* Story & Personal Photos Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading-fluid font-bold text-text tracking-tight">
              A commitment to code clarity and editorial precision.
            </h2>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              My path began at UC Berkeley studying distributed software systems. Over the years, I realized that true product mastery requires equal excellence across the whole stack — from microsecond database query indexing to frame-perfect 60fps animations.
            </p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              Today, I help ambitious companies, startups, and creative studios architect digital systems built to scale. When not engineering code, I experiment with generative typography, physical computing, and mechanical keyboards.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-lg border border-line overflow-hidden bg-bg-elevated">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Engineering Team Collaboration"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg border border-line overflow-hidden bg-bg-elevated mt-6">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                alt="Developer Workstation Studio"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline with GSAP Animated Line */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        <div className="space-y-3">
          <span className="eyebrow-label">CAREER CHRONOLOGY</span>
          <h2 className="font-heading-fluid font-extrabold text-text tracking-tight">
            Experience &amp; Education
          </h2>
        </div>

        <div ref={timelineRef} className="relative pl-6 md:pl-12 border-l-2 border-line space-y-12">
          {/* Animated Line Overlay */}
          <div
            ref={lineRef}
            className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-accent origin-top scale-y-0"
          />

          {TIMELINE.map((item, index) => (
            <div key={index} className="relative space-y-3 group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-line bg-bg group-hover:border-accent group-hover:bg-accent transition-colors">
                {item.type === "experience" ? (
                  <Briefcase className="h-3 w-3 text-text-muted group-hover:text-bg" />
                ) : (
                  <GraduationCap className="h-3 w-3 text-text-muted group-hover:text-bg" />
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                  {item.year}
                </span>
                <span className="font-mono text-[11px] text-text-muted uppercase border border-line px-2 py-0.5 w-fit">
                  {item.company}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-text group-hover:text-accent transition-colors">
                {item.role}
              </h3>

              <p className="text-text-muted text-sm max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categorized Skills Grid with Filled-Dot Indicators */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        <div className="space-y-3">
          <span className="eyebrow-label">TECHNICAL COMPETENCIES</span>
          <h2 className="font-heading-fluid font-extrabold text-text tracking-tight">
            Skills &amp; Mastery Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-line bg-bg-elevated p-8 space-y-6 shadow-xl"
              >
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <div className="p-2 rounded border border-line bg-bg text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text">{cat.title}</h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between font-mono text-xs">
                      <span className="text-text">{skill.name}</span>
                      {/* Filled Dot Proficiency Rating */}
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, dIdx) => (
                          <span
                            key={dIdx}
                            className={`h-2 w-2 rounded-full ${
                              dIdx < skill.dots ? "bg-accent" : "bg-line"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
