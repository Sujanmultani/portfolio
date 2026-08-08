"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Code2, Sparkles, Wrench } from "lucide-react";

const SERVICES_WORKFLOW = [
  {
    title: "E-Commerce Development",
    subtitle: "D2C Stores & Payment Gateways",
    description: "Custom online store development with React/Next.js, Razorpay payment gateway integration, Shiprocket shipping APIs, product catalogs, and custom checkout flows.",
    category: "SERVICE 01",
    icon: ShoppingCart,
  },
  {
    title: "Full-Stack Web Applications",
    subtitle: "MERN Stack & Next.js Architecture",
    description: "End-to-end web application development using React, Next.js 14 App Router, Node.js, Express, and MongoDB with clean REST API architecture.",
    category: "SERVICE 02",
    icon: Code2,
  },
  {
    title: "UI/UX & Motion Engineering",
    subtitle: "GSAP & Framer Motion UI",
    description: "High-performance, responsive frontends featuring custom GSAP ScrollTrigger animations, smooth Lenis scrolling, and pixel-perfect dark UI aesthetics.",
    category: "SERVICE 03",
    icon: Sparkles,
  },
  {
    title: "Maintenance & Optimization",
    subtitle: "Performance & Bug Resolution",
    description: "Refactoring legacy codebases, fixing layout/responsiveness bugs, optimizing load speed, and deploying live production applications.",
    category: "SERVICE 04",
    icon: Wrench,
  },
];

export function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 border-t border-line bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
        <span className="eyebrow-label">04 — SERVICES &amp; SPECIALIZATIONS</span>
        <h2 className="font-heading-fluid font-extrabold text-text tracking-tight mt-3">
          Core engineering services &amp; solutions.
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto pb-6 scrollbar-none"
          data-cursor="Drag"
        >
          {SERVICES_WORKFLOW.map((item, index) => {
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
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-text group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="block font-mono text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between font-mono text-xs text-text">
                  <span className="text-text-muted text-[11px]">DEVELOPER</span>
                  <span className="font-bold text-accent">SUJAN MULTANI</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
