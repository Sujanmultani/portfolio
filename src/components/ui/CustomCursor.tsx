"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    if (cursorRef.current) {
      // quickTo = one persistent interpolator per axis, reused every
      // mousemove — no React re-render, no new tween allocation per frame.
      quickX.current = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      quickY.current = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.4,
        ease: "power3.out",
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      quickX.current?.(e.clientX - 8);
      quickY.current?.(e.clientY - 8);

      setIsVisible((v) => (v ? v : true));

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
      } else if (target.closest("a, button, [role='button'], input, select, textarea")) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  const size = isHovered ? (cursorText ? 72 : 48) : 16;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-accent text-text mix-blend-difference font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg transition-[width,height,opacity] duration-300 ease-out"
      style={{
        width: size,
        height: size,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {cursorText && <span className="px-1 text-center leading-none">{cursorText}</span>}
    </div>
  );
}
