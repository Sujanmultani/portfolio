"use client";

import React from "react";

const TICKER_ITEMS = [
  "FULL-STACK ARCHITECTURE",
  "NEXT.JS 14 APP ROUTER",
  "TYPESCRIPT",
  "MONGODB & MONGOOSE",
  "GSAP SCROLLTRIGGER",
  "CSS 3D TRANSFORMS",
  "DISTRIBUTED SYSTEMS",
  "NODE.JS BACKEND",
  "TAILWIND CSS",
  "REST & GRAPHQL APIS",
  "PERFORMANCE OPTIMIZATION",
];

export function MarqueeTicker() {
  return (
    <section className="relative w-full border-y border-line bg-bg-elevated py-4 overflow-hidden">
      <div className="flex w-max animate-marquee-infinite hover:[animation-play-state:paused] select-none [will-change:transform]">
        {/* Double array for seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center mx-6 gap-6">
            <span className="font-display text-sm md:text-base font-bold tracking-widest text-text uppercase">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
