"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="relative py-24 border-t border-line bg-bg-elevated/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-lg border-2 border-line bg-bg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Developer Working at Workstation"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded border border-line bg-bg/90 backdrop-blur">
                <div className="grid grid-cols-2 gap-4 font-mono text-center">
                  <div>
                    <span className="block text-2xl font-bold text-accent">8+</span>
                    <span className="text-[10px] text-text-muted uppercase">Years Exp.</span>
                  </div>
                  <div className="border-l border-line">
                    <span className="block text-2xl font-bold text-text">45+</span>
                    <span className="text-[10px] text-text-muted uppercase">Projects Shipped</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Excerpt */}
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow-label">03 — BIOGRAPHY &amp; CAPABILITIES</span>
            <h2 className="font-heading-fluid font-bold text-text tracking-tight">
              Engineering with architectural rigor and editorial perfection.
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              With over eight years of experience building web platforms, I bridge the gap between high-performance backends and high-fidelity user interfaces. My work focuses on scalable microservices, low-latency API handlers, and editorial motion systems that elevate digital products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs text-text">
              <div className="flex items-center gap-2.5 border border-line bg-bg p-3">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Next.js 14 App Router &amp; Server Actions</span>
              </div>
              <div className="flex items-center gap-2.5 border border-line bg-bg p-3">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Distributed MongoDB Schema Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 border border-line bg-bg p-3">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Scroll-Driven GSAP 3D &amp; Motion</span>
              </div>
              <div className="flex items-center gap-2.5 border border-line bg-bg p-3">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>TypeScript Strict Type Systems</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
              >
                <span>Read Full Story &amp; Experience Timeline</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
