"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-line bg-bg pt-20 pb-12 text-text overflow-hidden">
      {/* Huge Faded Architectural Watermark */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none opacity-[0.03] whitespace-nowrap font-display text-[12vw] font-black uppercase tracking-tighter leading-none text-text">
        SUJAN MULTANI // STAFF ENGINEER
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-line/60">
          {/* Main Footer Headline & Status */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="eyebrow-label">06 — GET IN TOUCH</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-elevated px-3 py-1 font-mono text-[10px] text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                <span>AVAILABLE Q3/Q4</span>
              </span>
            </div>

            <h2 className="font-heading-fluid font-bold text-text tracking-tight">
              Let&apos;s engineer something extraordinary together.
            </h2>
            <p className="text-text-muted text-sm max-w-md leading-relaxed">
              Available for select full-stack architecture contracts, high-throughput backend design, and creative motion engineering.
            </p>
            <div className="pt-2">
              <a
                href="mailto:hello@developer.com"
                className="group inline-flex items-center gap-3 text-lg font-mono font-medium text-accent hover:text-accent-hover transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="underline underline-offset-4 decoration-accent/40 group-hover:decoration-accent">
                  hello@developer.com
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links & Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted">Navigation</h3>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  01 // Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  02 // Projects Directory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  03 // About &amp; Biography
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  04 // Initiate Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted">Connect</h3>
            <div className="flex flex-col gap-3 text-sm font-mono">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span>X / Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Meta Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-muted font-mono">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} Studio Portfolio. All Rights Reserved.</span>
            <span className="hidden md:inline text-line">|</span>
            <span>
              LOCATION: <strong className="text-text font-normal">SAN FRANCISCO, CA</strong>
            </span>
            <span className="hidden md:inline text-line">|</span>
            <span>
              LOCAL TIME: <strong className="text-text font-normal">{timeString || "12:00:00 PM"} PST</strong>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 border border-line bg-bg-elevated px-3.5 py-2 text-text-muted hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="Back to top"
          >
            <span className="uppercase tracking-wider">Top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
