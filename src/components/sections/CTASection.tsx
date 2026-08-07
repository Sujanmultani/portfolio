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
            className="group relative inline-flex items-center gap-3 overflow-hidden border-2 border-accent bg-accent px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover shadow-2xl hover:scale-105"
          >
            <div className="relative z-10 overflow-hidden h-5">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Start A Project Inquiry
              </span>
              <span className="block absolute top-0 left-0 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-white font-bold">
                Start A Project Inquiry
              </span>
            </div>
            <ArrowUpRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
