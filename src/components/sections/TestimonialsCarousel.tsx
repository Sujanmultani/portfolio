"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Alexandre transformed our complex real-time telemetry streaming needs into a lightning-fast Next.js platform. His attention to performance and motion detail is exceptional.",
    name: "Dr. Elena Rostova",
    role: "CTO, Vantage Systems",
    company: "Vantage AI",
  },
  {
    quote:
      "The 3D scroll interaction and MongoDB architecture delivered for our editorial CMS exceeded every expectation. Our reader retention soared immediately after launch.",
    name: "Marcus Sterling",
    role: "VP of Product",
    company: "Kintsugi Digital",
  },
  {
    quote:
      "Rarely do you find an engineer who writes bulletproof TypeScript backend systems while designing award-worthy user interfaces. Alexandre is a true craftsman.",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "Chronos Labs",
  },
];

export function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 border-t border-line bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
        <span className="eyebrow-label">04 — ENDORSEMENTS</span>
        <h2 className="font-heading-fluid font-extrabold text-text tracking-tight mt-3">
          What engineering leaders say.
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto pb-6 scrollbar-none"
          data-cursor="Drag"
        >
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="flex-none w-[320px] md:w-[420px] rounded-lg border border-line bg-bg-elevated p-8 flex flex-col justify-between space-y-6 shadow-xl hover:border-accent/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-accent/40" />
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-text leading-relaxed text-sm italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-text">{t.name}</h4>
                  <p className="font-mono text-xs text-text-muted">{t.role}</p>
                </div>
                <span className="font-mono text-[10px] uppercase border border-line bg-bg px-2 py-0.5 text-accent">
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
