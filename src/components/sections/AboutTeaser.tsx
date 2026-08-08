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
          {/* Left Column: Profile Card Frame Target & Portrait View */}
          <div id="bio-card-target" className="lg:col-span-5 relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center rounded-xl border border-line/40 bg-bg-elevated/20 p-4 shadow-xl">
            <div className="relative aspect-[4/5] w-full max-w-sm rounded-xl border-2 border-line bg-bg overflow-hidden shadow-2xl mx-auto">
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
                    <span className="block text-sm font-bold text-accent">MCA</span>
                    <span className="text-[9px] text-text-muted uppercase">DEGREE</span>
                  </div>
                  <div className="border-x border-line">
                    <span className="block text-xs font-bold text-text">FULL-STACK</span>
                    <span className="text-[9px] text-text-muted uppercase">DEV</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-success">SURAT</span>
                    <span className="text-[9px] text-text-muted uppercase">GUJARAT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Pillars Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow-label">02 — BIOGRAPHY &amp; CAPABILITIES</span>
            <h2 className="font-heading-fluid font-bold text-text tracking-tight">
              Crafting modern web applications with technical precision.
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Full-Stack Web Developer and MCA student based in Surat, Gujarat. Operating as MS Solutions, I build responsive e-commerce web platforms and web applications focused on 3 core capabilities:
            </p>

            {/* 3 Editorial Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 border border-line bg-bg p-4 rounded-md">
                <Layers className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-text">Full-Stack E-Commerce &amp; Web Apps</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    React, Next.js, Node.js, Express, MongoDB, and payment gateway integration (Razorpay, Shiprocket).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-line bg-bg p-4 rounded-md">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-text">TypeScript &amp; Responsive Engineering</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    Structured TypeScript contracts, clean REST APIs, and mobile-first Tailwind CSS styling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-line bg-bg p-4 rounded-md">
                <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-text">Interactive UI &amp; Motion Design</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    GSAP ScrollTrigger, Lenis smooth scroll, and Framer Motion micro-interactions.
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
