"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Activity } from "lucide-react";

const ENGINEERING_METRICS = [
  {
    metric: "99.999%",
    label: "Uptime Availability",
    description: "Deterministic lock-free financial order matching pipeline with microsecond drift control.",
    system: "Chronos Engine",
    icon: ShieldCheck,
  },
  {
    metric: "64%",
    label: "Latency Reduction",
    description: "Multi-dimensional telemetry ingest stream processing optimized using Next.js & MongoDB vector queries.",
    system: "Aura Neural Analytics",
    icon: Zap,
  },
  {
    metric: "180%",
    label: "Engagement Increase",
    description: "Block-based 3D scroll interaction publishing engine recognized on Awwwards Site of the Day.",
    system: "Kintsugi Engine",
    icon: Activity,
  },
  {
    metric: "15,000+",
    label: "Active Engineers",
    description: "Hardware-accelerated spatial audio workspace with zero buffer underruns across web browsers.",
    system: "Vortex Spatial Audio",
    icon: Cpu,
  },
];

export function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 border-t border-line bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
        <span className="eyebrow-label">04 — SYSTEM BENCHMARKS</span>
        <h2 className="font-heading-fluid font-extrabold text-text tracking-tight mt-3">
          Engineering impact &amp; verified metrics.
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto pb-6 scrollbar-none"
          data-cursor="Drag"
        >
          {ENGINEERING_METRICS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex-none w-[320px] md:w-[400px] rounded-lg border border-line bg-bg-elevated p-8 flex flex-col justify-between space-y-6 shadow-xl hover:border-accent transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded border border-line bg-bg text-accent group-hover:border-accent transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase border border-line bg-bg px-2.5 py-1 text-accent font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <div>
                    <span className="font-display text-4xl md:text-5xl font-black text-text group-hover:text-accent transition-colors">
                      {item.metric}
                    </span>
                    <span className="block font-mono text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">
                      {item.label}
                    </span>
                  </div>

                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between font-mono text-xs text-text">
                  <span className="text-text-muted text-[11px]">SYSTEM</span>
                  <span className="font-bold text-accent">{item.system}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
