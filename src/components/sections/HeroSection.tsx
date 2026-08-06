"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, FolderGit2, Mail } from "lucide-react";
import { IDCard } from "@/components/hero/IDCard";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 mx-auto max-w-7xl pt-6 pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headlines & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Section Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="eyebrow-label">01 — STUDIO PORTFOLIO</span>
            <span className="h-px w-12 bg-line" />
            <span className="font-mono text-xs text-text-muted uppercase">SYSTEMS & INTERACTION</span>
          </div>

          {/* Confident Large Headline */}
          <h1 className="font-display-fluid font-extrabold tracking-tight text-text text-balance">
            Architecting <span className="text-accent underline underline-offset-8 decoration-line">resilient</span> web systems &amp; digital craft.
          </h1>

          {/* Editorial Paragraph */}
          <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            I am a senior full-stack engineer and interactive developer crafting high-throughput backend APIs, Next.js architecture, and scroll-driven 3D web experiences with mathematical precision.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="group flex items-center gap-3 border-2 border-accent bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover shadow-lg"
            >
              <FolderGit2 className="h-4 w-4" />
              <span>Explore Projects</span>
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-line bg-bg-elevated px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-text transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Meta Tech Stack Pills */}
          <div className="pt-6 border-t border-line/60 flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>NEXT.JS 14 APP ROUTER</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>TYPESCRIPT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>MONGODB &amp; GSAP</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D ID Card Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <IDCard pinTarget={sectionRef} />
        </motion.div>
      </div>
    </section>
  );
}
