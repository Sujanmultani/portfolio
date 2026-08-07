"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter, ShieldCheck, QrCode } from "lucide-react";

interface IDCardProps {
  /** Optional ref to an ancestor element (e.g. the full hero <section>) that
   * should be pinned instead of this component's own small container. Pass
   * this whenever IDCard sits alongside other content (like a headline
   * column) so the WHOLE section pins together instead of just the card —
   * otherwise later page sections scroll underneath the still-fixed card. */
  pinTarget?: React.RefObject<HTMLElement>;
}

export function IDCard({ pinTarget }: IDCardProps) {
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

    // Pin the full hero section if one was passed down, otherwise fall
    // back to this component's own container (standalone usage).
    const triggerEl = pinTarget?.current ?? containerEl;

    gsap.set([cardEl, shadowEl, lanyardEl], { willChange: "transform" });

    const lanyardWobble = lanyardEl
      ? gsap.quickTo(lanyardEl, "rotateZ", { duration: 0.3, ease: "power2.out" })
      : null;

    let flippedRef = false;
    const bioTarget = document.getElementById("bio-card-target");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        endTrigger: bioTarget || undefined,
        start: "top top+=60",
        end: bioTarget ? "top center+=100" : "+=600",
        scrub: 1,
        onUpdate: (self) => {
          const nowFlipped = self.progress > 0.4;
          if (nowFlipped !== flippedRef) {
            flippedRef = nowFlipped;
            setIsFlipped(nowFlipped);
          }

          if (lanyardWobble) {
            const velocity = self.getVelocity();
            const rotateXWobble = Math.max(-15, Math.min(15, velocity / 120));
            lanyardWobble(rotateXWobble * 0.5);
          }
        },
      },
    });

    if (bioTarget && containerRef.current) {
      tl.to(
        containerRef.current,
        {
          x: () => {
            if (window.innerWidth < 1024) return 0;
            const containerBounds = containerRef.current!.getBoundingClientRect();
            const targetBounds = bioTarget.getBoundingClientRect();
            const containerCenter = containerBounds.left + containerBounds.width / 2;
            const targetCenter = targetBounds.left + targetBounds.width / 2;
            return targetCenter - containerCenter;
          },
          y: () => {
            if (window.innerWidth < 1024) return 0;
            const containerBounds = containerRef.current!.getBoundingClientRect();
            const targetBounds = bioTarget.getBoundingClientRect();
            const containerCenter = containerBounds.top + containerBounds.height / 2;
            const targetCenter = targetBounds.top + targetBounds.height / 2;
            return targetCenter - containerCenter;
          },
          scale: () => (window.innerWidth < 1024 ? 1 : 0.92),
          ease: "power2.inOut",
        },
        0
      );
    }

    tl.to(
      cardEl,
      {
        rotateY: 180,
        ease: "power2.inOut",
      },
      0
    );

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
  }, [pinTarget]);

  const [hoverTilt, setHoverTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / (rect.height / 2)) * -8;
    const tiltY = (x / (rect.width / 2)) * 8;
    setHoverTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverTilt({ x: 0, y: 0 });
  };

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
      className="relative z-40 flex flex-col items-center justify-center py-12 perspective-container w-full max-w-sm mx-auto"
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
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${hoverTilt.x}deg) rotateY(${isFlipped ? 180 + hoverTilt.y : hoverTilt.y}deg)`
            : undefined,
        }}
        className="relative w-[320px] sm:w-[350px] h-[500px] cursor-pointer preserve-3d shadow-2xl transition-transform duration-200 ease-out -mt-1"
      >
        {/* Hole Punch Circle */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 h-4 w-8 rounded-full bg-bg border border-line shadow-inner flex items-center justify-center">
          <div className="h-2.5 w-5 rounded-full bg-bg" />
        </div>

        {/* FRONT FACE */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-xl border-2 border-line bg-bg-elevated p-6 backface-hidden shadow-2xl overflow-hidden">
          {/* Moving Reflection Sheen Overlay */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-500 z-20 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          />

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
              src="/profile.jpg"
              alt="Developer Profile Portrait"
              fill
              unoptimized
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute bottom-2 left-2 rounded bg-bg/90 backdrop-blur border border-line px-2 py-0.5 text-[9px] font-mono text-text">
              VERIFIED ARCHITECT
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight text-text">
              Sujan Multani
            </h3>
            <p className="font-mono text-xs text-text-muted tracking-wide">
              Full-Stack Web Developer
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
        <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-xl border-2 border-line bg-bg-elevated p-4 rotate-y-180 backface-hidden shadow-2xl overflow-hidden">
          {/* Custom Poster Image Background */}
          <div className="relative h-full w-full rounded-lg overflow-hidden border border-line bg-bg">
            <Image
              src="/profile-back.jpg"
              alt="Developer Brand Poster Back"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
            {/* Subtle Gradient & Badge Details Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-bg/30 pointer-events-none" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-md" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-md" />

            {/* Tap to Flip Pill Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-bg/95 backdrop-blur border border-line px-3 py-1 text-[9px] font-mono text-text flex items-center gap-1.5 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="uppercase tracking-wider">TAP OR SCROLL TO ROTATE</span>
            </div>
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
