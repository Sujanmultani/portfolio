"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter, ShieldCheck, QrCode } from "lucide-react";

export function IDCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lanyardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cardEl = cardRef.current;
    const containerEl = containerRef.current;
    const shadowEl = shadowRef.current;
    const lanyardEl = lanyardRef.current;

    if (!cardEl || !containerEl) return;

    // GPU-friendly hints — promote these to their own compositor layer
    // once, instead of the browser discovering it mid-animation.
    gsap.set([cardEl, shadowEl, lanyardEl], { willChange: "transform" });

    // Reusable quickTo interpolator for the lanyard wobble — created ONCE,
    // reused on every tick, instead of spawning a new tween per frame.
    const lanyardWobble = lanyardEl
      ? gsap.quickTo(lanyardEl, "rotateZ", { duration: 0.3, ease: "power2.out" })
      : null;

    // Track flip state WITHOUT forcing a React re-render every scroll frame.
    // Only setState when the boolean actually flips (crosses the 50% mark).
    let flippedRef = false;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl,
        start: "top top+=80",
        end: "+=600",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const nowFlipped = self.progress > 0.5;
          if (nowFlipped !== flippedRef) {
            flippedRef = nowFlipped;
            setIsFlipped(nowFlipped); // fires at most once per crossing, not per frame
          }

          if (lanyardWobble) {
            const velocity = self.getVelocity();
            const rotateXWobble = Math.max(-12, Math.min(12, velocity / 150));
            lanyardWobble(rotateXWobble * 0.5);
          }
        },
      },
    });

    tl.to(cardEl, {
      rotateY: 180,
      ease: "none",
    });

    // Only animate transform + opacity here (cheap, compositor-only).
    // The blur radius stays a static Tailwind class (blur-md in the JSX)
    // instead of being recalculated every scroll frame.
    if (shadowEl) {
      tl.to(
        shadowEl,
        {
          scaleX: 0.6,
          opacity: 0.4,
          ease: "none",
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleTapFlip = () => {
    if (!cardRef.current) return;
    const targetY = isFlipped ? 0 : 180;
    gsap.to(cardRef.current, {
      rotateY: targetY,
      duration: 0.8,
      ease: "power2.out",
    });
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center py-12 perspective-container w-full max-w-sm mx-auto"
      data-cursor="Scroll / Flip"
    >
      {/* Lanyard Strap & Clip Graphic */}
      <div
        ref={lanyardRef}
        className="relative z-20 flex flex-col items-center origin-top transition-transform duration-200"
      >
        <div className="h-16 w-4 bg-gradient-to-b from-accent to-accent-hover shadow-md border-x border-line flex items-center justify-center">
          <div className="h-full w-1 border-r border-dashed border-bg/30" />
        </div>
        {/* Metal ID Clip */}
        <div className="h-4 w-8 rounded-sm bg-line border border-text-muted shadow-sm flex items-center justify-center -mt-1">
          <div className="h-2 w-3 rounded-full bg-text-muted/50" />
        </div>
      </div>

      {/* 3D Physical ID Badge Card */}
      <div
        ref={cardRef}
        onClick={handleTapFlip}
        className="relative w-[320px] sm:w-[350px] h-[500px] cursor-pointer preserve-3d shadow-2xl transition-shadow duration-300 -mt-1"
      >
        {/* Hole Punch Circle */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 h-4 w-8 rounded-full bg-bg border border-line shadow-inner flex items-center justify-center">
          <div className="h-2.5 w-5 rounded-full bg-bg" />
        </div>

        {/* FRONT FACE */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-xl border-2 border-line bg-bg-elevated p-6 backface-hidden shadow-2xl overflow-hidden">
          {/* Terracotta Badge Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-xl" />

          {/* Badge Header Bar */}
          <div className="flex items-center justify-between pt-4 pb-2 border-b border-line">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
                STUDIO CREDENTIAL
              </span>
            </div>
            <span className="font-mono text-[10px] font-bold text-accent">ID #8049-FX</span>
          </div>

          {/* Profile Photo (Portrait Crop) */}
          <div className="relative my-3 aspect-[4/5] w-full rounded-lg overflow-hidden border border-line bg-bg">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
              alt="Developer Profile Portrait"
              fill
              className="object-cover object-top grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              priority
            />
            <div className="absolute bottom-2 left-2 rounded bg-bg/90 backdrop-blur border border-line px-2 py-0.5 text-[9px] font-mono text-text">
              VERIFIED ARCHITECT
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight text-text">
              Alexandre Vance
            </h3>
            <p className="font-mono text-xs text-text-muted tracking-wide">
              Principal Full-Stack Engineer
            </p>
          </div>

          {/* Badge Footer with QR Graphic */}
          <div className="flex items-center justify-between pt-3 border-t border-line text-xs font-mono text-text-muted">
            <div className="space-y-0.5">
              <p className="text-[9px] uppercase tracking-wider">ISSUED: 2026.08</p>
              <p className="text-[9px] text-accent uppercase tracking-wider">CLEARANCE: LEVEL 5</p>
            </div>
            <div className="flex items-center justify-center p-1 border border-line bg-bg rounded">
              <QrCode className="h-6 w-6 text-text" />
            </div>
          </div>
        </div>

        {/* BACK FACE (Pre-rotated 180deg) */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-xl border-2 border-line bg-bg-elevated p-6 rotate-y-180 backface-hidden shadow-2xl overflow-hidden">
          {/* Terracotta Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-xl" />

          {/* Stylized Magnetic Stripe */}
          <div className="mt-4 -mx-6 h-10 bg-bg border-y border-line flex items-center px-6">
            <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#26262a,#26262a_4px,#0b0b0c_4px,#0b0b0c_8px)]" />
          </div>

          {/* Tagline / Statement Quote */}
          <div className="my-3 space-y-2">
            <p className="font-mono text-[10px] text-accent uppercase tracking-widest">// PHILOSOPHY</p>
            <p className="font-display text-sm font-semibold text-text leading-snug italic">
              &quot;Crafting resilient distributed systems and immersive digital interfaces where code meets editorial craft.&quot;
            </p>
          </div>

          {/* Barcode-Style Skill Tags Row */}
          <div className="space-y-2 border-y border-line py-3">
            <p className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
              PRIMARY COMPETENCIES
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="bg-bg border border-line px-2 py-0.5 text-text">NEXT.JS 14</span>
              <span className="bg-bg border border-line px-2 py-0.5 text-text">TYPESCRIPT</span>
              <span className="bg-bg border border-line px-2 py-0.5 text-accent">GSAP 3D</span>
              <span className="bg-bg border border-line px-2 py-0.5 text-text">MONGODB</span>
              <span className="bg-bg border border-line px-2 py-0.5 text-text">NODE.JS</span>
            </div>
            {/* Visual Barcode Lines */}
            <div className="h-6 w-full bg-[repeating-linear-gradient(90deg,#f4f1ea,#f4f1ea_2px,#141416_2px,#141416_5px,#f4f1ea_5px,#f4f1ea_8px,#141416_8px,#141416_10px)] opacity-60 rounded-xs mt-1" />
          </div>

          {/* Social Icons & Fine Print */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <span className="font-mono text-[9px] text-text-muted">TAP OR SCROLL TO ROTATE</span>
          </div>
        </div>
      </div>

      {/* Realistic Ground Shadow */}
      <div
        ref={shadowRef}
        className="h-4 w-64 rounded-[100%] bg-accent/20 blur-md mt-6 transition-all duration-300"
      />
    </div>
  );
}
