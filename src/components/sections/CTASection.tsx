"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-28 border-t border-line bg-bg-elevated text-center overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 md:px-12 space-y-8">
        <span className="eyebrow-label">05 — INITIATE COLLABORATION</span>

        <h2 className="font-display-fluid font-black text-text tracking-tight text-balance leading-none">
          Have a vision in mind? <br />
          <span className="text-accent underline underline-offset-8 decoration-line">Let&apos;s build it.</span>
        </h2>

        <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Currently taking on select full-stack development contracts, engineering leadership advisory, and custom Next.js web applications.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/contact"
            className="group flex items-center gap-3 border-2 border-accent bg-accent px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover shadow-2xl hover:scale-105"
          >
            <span>Start A Project Inquiry</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
