"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Code2, Server, Terminal, Cpu } from "lucide-react";

const TIMELINE = [
  {
    year: "2024 — PRESENT",
    role: "Freelance Full-Stack Web Developer",
    company: "MS Solutions — Surat, Gujarat",
    description: "Architecting and shipping production-ready D2C e-commerce platforms (EyeLeads), custom web applications, and payment gateway integrations (Razorpay, Shiprocket).",
    type: "experience",
  },
  {
    year: "2023 — PRESENT",
    role: "Master of Computer Applications (MCA)",
    company: "Postgraduate Student",
    description: "Specializing in Full-Stack Web Architecture, Database Systems (MongoDB & SQL), Web API Design, and Software Engineering methodologies.",
    type: "education",
  },
  {
    year: "2024",
    role: "Full-Stack Project Developer",
    company: "EstatePortal (Capstone Build)",
    description: "Engineered EstatePortal real estate marketplace featuring property filters, agent inquiry routing, NextAuth authentication, and role-based admin dashboard.",
    type: "experience",
  },
  {
    year: "2020 — 2023",
    role: "Bachelor's Degree in Computer Studies",
    company: "Undergraduate Graduation",
    description: "Core academic foundation in Object-Oriented Programming, Web Technologies, Database Management, and Data Structures.",
    type: "education",
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Frontend & E-Commerce",
    icon: Code2,
    skills: [
      { name: "React & Next.js 14", dots: 5 },
      { name: "TypeScript & JavaScript", dots: 5 },
      { name: "Tailwind CSS & Styling", dots: 5 },
      { name: "Razorpay & Payment Gateways", dots: 5 },
      { name: "GSAP & ScrollTrigger", dots: 4 },
      { name: "Framer Motion UI", dots: 4 },
    ],
  },
  {
    title: "Backend & Databases",
    icon: Server,
    skills: [
      { name: "Node.js & Express", dots: 5 },
      { name: "MongoDB & Mongoose", dots: 5 },
      { name: "REST API Design", dots: 5 },
      { name: "Shiprocket Logistics API", dots: 4 },
      { name: "Authentication & JWT", dots: 4 },
    ],
  },
  {
    title: "Architecture & Tools",
    icon: Cpu,
    skills: [
      { name: "Vercel & Netlify Deployments", dots: 5 },
      { name: "Git & GitHub Workflows", dots: 5 },
      { name: "Responsive Mobile UI", dots: 5 },
      { name: "SEO & Web Vitals Tuning", dots: 4 },
    ],
  },
  {
    title: "Developer Environment",
    icon: Terminal,
    skills: [
      { name: "VS Code Setup", dots: 5 },
      { name: "Postman API Testing", dots: 5 },
      { name: "NPM & Package Management", dots: 5 },
      { name: "Cross-Browser Testing", dots: 5 },
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
          About &amp; Background
        </h1>
        <p className="text-text-muted text-base md:text-xl max-w-3xl leading-relaxed">
          I am Sujan Multani — a freelance full-stack web developer and MCA student based in Surat, Gujarat. Operating as MS Solutions, I build responsive e-commerce web applications, full-stack systems, and modern digital craft.
        </p>
      </section>

      {/* Story & Personal Photos Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading-fluid font-bold text-text tracking-tight">
              Honest engineering, clean code, and user-focused web development.
            </h2>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              My journey in software development began with a passion for building practical digital tools. Currently pursuing my Master of Computer Applications (MCA) in Surat, I combine academic computer science fundamentals with real-world full-stack development experience.
            </p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              Through MS Solutions, I work directly with business owners, brands, and startups to build high-converting e-commerce storefronts (like EyeLeads Eyewear Store), full-stack web applications, and responsive UI interfaces.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-lg border border-line overflow-hidden bg-bg-elevated">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Web Development Collaboration"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg border border-line overflow-hidden bg-bg-elevated mt-6">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                alt="Developer Workstation"
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
            Background &amp; Education
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
