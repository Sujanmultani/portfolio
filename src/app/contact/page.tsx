"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Web Application",
    budget: "$10k - $25k",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formCardRef = useRef<HTMLDivElement>(null);

  // Subtle 3D cursor tilt on the form card (mouse-move parallax 3-5deg)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formCardRef.current) return;
    const rect = formCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / rect.height) * -6; // max 6deg
    const tiltY = (x / rect.width) * 6;

    formCardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    if (formCardRef.current) {
      formCardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (name, email, message).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="py-12 space-y-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-6">
        <span className="eyebrow-label">04 — INITIATE CONTACT</span>
        <h1 className="font-display-fluid font-black text-text tracking-tight">
          Let&apos;s Talk.
        </h1>
        <p className="text-text-muted text-base md:text-xl max-w-2xl leading-relaxed">
          Have a project inquiry, system architecture consultation, or custom Next.js development need? Drop a line below.
        </p>
      </section>

      {/* Main Grid: Form Card & Direct Contact Metadata */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 rounded-lg border border-line bg-bg-elevated p-8">
              <h3 className="font-display text-xl font-bold text-text">Direct Contact Information</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Preferred communication channel is email. Response time is typically within 24 business hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-line font-mono text-xs">
                <a
                  href="mailto:hello@developer.com"
                  className="flex items-center gap-3 text-text hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span>hello@developer.com</span>
                </a>

                <div className="flex items-center gap-3 text-text-muted">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>San Francisco, California, USA (UTC-7)</span>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="space-y-4 rounded-lg border border-line bg-bg-elevated p-8">
              <h3 className="font-display text-xl font-bold text-text">Social Channels</h3>
              <div className="flex flex-col gap-3 font-mono text-xs">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Cursor-Tilt Contact Form Card */}
          <div className="lg:col-span-7">
            <div
              ref={formCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="rounded-xl border-2 border-line bg-bg-elevated p-8 md:p-10 shadow-2xl transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="font-display text-2xl font-bold text-text mb-6">
                Project Inquiry Form
              </h2>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-success">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-text">
                        Message Transmitted Successfully!
                      </h3>
                      <p className="text-text-muted text-sm max-w-md mx-auto">
                        Thank you for reaching out, {formData.name}. Your message has been stored in MongoDB and emailed directly. I will review and respond within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          email: "",
                          projectType: "Full Web Application",
                          budget: "$10k - $25k",
                          message: "",
                        });
                      }}
                      className="border border-accent bg-accent/10 px-6 py-2.5 font-mono text-xs font-bold uppercase text-accent hover:bg-accent hover:text-bg transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Banner */}
                    {status === "error" && (
                      <div className="flex items-center gap-3 border border-red-950 bg-red-950/40 p-4 text-xs font-mono text-red-300">
                        <AlertCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label className="block font-mono text-xs uppercase text-text-muted">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full border border-line bg-bg px-4 py-3 text-sm text-text placeholder-text-muted/60 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label className="block font-mono text-xs uppercase text-text-muted">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@company.com"
                          className="w-full border border-line bg-bg px-4 py-3 text-sm text-text placeholder-text-muted/60 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Project Type Select */}
                      <div className="space-y-2">
                        <label className="block font-mono text-xs uppercase text-text-muted">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full border border-line bg-bg px-4 py-3 text-sm text-text focus:border-accent focus:outline-none transition-colors"
                        >
                          <option value="Full Web Application">Full Web Application</option>
                          <option value="Next.js Migration">Next.js Migration</option>
                          <option value="Backend System & API Architecture">
                            Backend System &amp; API Architecture
                          </option>
                          <option value="Technical Consulting & Audit">
                            Technical Consulting &amp; Audit
                          </option>
                        </select>
                      </div>

                      {/* Budget Select */}
                      <div className="space-y-2">
                        <label className="block font-mono text-xs uppercase text-text-muted">
                          Project Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full border border-line bg-bg px-4 py-3 text-sm text-text focus:border-accent focus:outline-none transition-colors"
                        >
                          <option value="< $10k">&lt; $10,000</option>
                          <option value="$10k - $25k">$10,000 - $25,000</option>
                          <option value="$25k - $50k">$25,000 - $50,000</option>
                          <option value="$50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label className="block font-mono text-xs uppercase text-text-muted">
                        Project Details &amp; Objectives *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project goals, timelines, and technical requirements..."
                        className="w-full border border-line bg-bg px-4 py-3 text-sm text-text placeholder-text-muted/60 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group w-full flex items-center justify-center gap-3 border-2 border-accent bg-accent py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>TRANSMITTING MESSAGE...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>SUBMIT PROJECT INQUIRY</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
