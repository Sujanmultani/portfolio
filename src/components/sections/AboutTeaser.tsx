"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, ShieldCheck, Sparkles } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="relative py-24 border-t border-line bg-bg-elevated/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D ID Card Landing Destination Target */}
          <div id="bio-card-target" className="lg:col-span-5 relative min-h-0 lg:min-h-[560px] flex items-center justify-center rounded-xl border-0 lg:border lg:border-line/40 bg-transparent lg:bg-bg-elevated/10 p-0 lg:p-4">
            {/* Mobile / Fallback Card View */}
            <div className="block lg:hidden relative aspect-[4/5] w-full max-w-sm rounded-xl border-2 border-line bg-bg overflow-hidden shadow-2xl mx-auto my-4">
              <Image
                src="/profile.jpg"
                alt="Developer Profile Portrait"
                fill
                unoptimized
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded border border-line bg-bg/90 backdrop-blur font-mono text-center">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <span className="block text-lg font-bold text-accent">8+</span>
                    <span className="text-[9px] text-text-muted uppercase">Years Exp.</span>
                  </div>
                  <div className="border-x border-line">
                    <span className="block text-lg font-bold text-text">45+</span>
                    <span className="text-[9px] text-text-muted uppercase">Shipped</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-success">99.9%</span>
                    <span className="text-[9px] text-text-muted uppercase">Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Pillars Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow-label">02 — BIOGRAPHY &amp; ARCHITECTURE</span>
            <h2 className="font-heading-fluid font-bold text-text tracking-tight">
              Engineering with architectural rigor and editorial perfection.
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Software is most effective when technical resilience and creative motion operate in total harmony. I specialize in 3 core engineering pillars:
            </p>

            {/* 3 Editorial Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 border border-line bg-bg p-4 rounded-md">
                <Layers className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-text">Distributed System Architecture</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    High-throughput Next.js 14 App Router, lock-free microservices, and indexed MongoDB data pipelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-line bg-bg p-4 rounded-md">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-text">Performance &amp; Type Precision</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    Strict TypeScript contracts, sub-5ms API response latency, and zero-layout-shift render cycles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-line bg-bg p-4 rounded-md">
                <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-text">Scroll-Driven Motion &amp; 3D Physics</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    GSAP ScrollTrigger, Lenis smooth scroll, and hardware-accelerated 3D transform interactions.
                  </p>
                </div>
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
