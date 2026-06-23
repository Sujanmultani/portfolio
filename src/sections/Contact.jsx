import { useState } from "react";
import { Copy, Check, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { personalInfo } from "../data/personalInfo";

const API_BASE = import.meta.env.VITE_API_URL || '';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "", honeypot: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Form input changes handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSubmitError(null);
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  // Email copy utility
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  // Client side validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message content is required";
    return errors;
  };

  // Form submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", honeypot: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      if (err instanceof TypeError) {
        setSubmitError("Could not reach the server right now. Please try again in a moment, or email me directly at sujanmultani321@gmail.com.");
      } else {
        setSubmitError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-brand-cream">
      {/* Background warm light glow - dramatic closing scene */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] radial-glow-amber opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-brand-line pb-6"
          >
            <span className="font-display italic text-2xl md:text-3xl text-brand-amber">
              07
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Consultation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              Let's Collaborate.
            </h2>
          </motion.div>
        </div>

        {/* Closing Scene Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info Text & Copy Email Trigger */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-3xl font-bold text-brand-ink leading-tight">
              Have a project idea in mind?
            </h3>
            <p className="text-brand-inkSoft text-base leading-relaxed font-sans">
              Whether you need a dedicated full stack developer to augment your engineering team, or a product architect to build a platform from scratch, my inbox is always open.
            </p>

            {/* Email Copy Card - Cleaned to match paper aesthetic */}
            <div className="p-4 rounded-xl border border-brand-line bg-brand-paper/50 flex items-center justify-between gap-4 max-w-md">
              <div>
                <span className="text-[9px] font-bold tracking-widest text-brand-inkMuted uppercase block">Quick Copy</span>
                <span className="text-sm font-semibold text-brand-ink block mt-0.5">{personalInfo.socials.email}</span>
              </div>
              <button
                onClick={copyEmailToClipboard}
                aria-label="Copy Email"
                className="w-8 h-8 rounded-lg border border-brand-line bg-brand-cream hover:bg-brand-paper text-brand-inkSoft hover:text-brand-ink transition-colors flex items-center justify-center shrink-0 focus:outline-none"
              >
                {isCopied ? <Check size={14} className="text-brand-amber" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Right Column: Contact form (Presented minimally with underlined inputs) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              {/* Honeypot field (hidden from users, exposed to bots) */}
              <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
                <label htmlFor="contact_verification_field">Leave this field empty</label>
                <input
                  type="text"
                  id="contact_verification_field"
                  name="contact_verification_field"
                  autoComplete="off"
                  tabIndex="-1"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-[10px] font-bold text-brand-inkSoft uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-0 py-2.5 bg-transparent border-b border-brand-line text-brand-ink text-sm transition-all placeholder:text-brand-inkMuted/45 focus:border-brand-amber focus:outline-none"
                  />
                  {formErrors.name && (
                    <span className="text-xs font-semibold text-brand-amber block mt-1">{formErrors.name}</span>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-[10px] font-bold text-brand-inkSoft uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@example.com"
                    className="w-full px-0 py-2.5 bg-transparent border-b border-brand-line text-brand-ink text-sm transition-all placeholder:text-brand-inkMuted/45 focus:border-brand-amber focus:outline-none"
                  />
                  {formErrors.email && (
                    <span className="text-xs font-semibold text-brand-amber block mt-1">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="phone" className="text-[10px] font-bold text-brand-inkSoft uppercase tracking-wider block">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                    placeholder="+91 99999 99999"
                    className="w-full px-0 py-2.5 bg-transparent border-b border-brand-line text-brand-ink text-sm transition-all placeholder:text-brand-inkMuted/45 focus:border-brand-amber focus:outline-none"
                  />
                </div>

                {/* Subject field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="subject" className="text-[10px] font-bold text-brand-inkSoft uppercase tracking-wider block">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full px-0 py-2.5 bg-transparent border-b border-brand-line text-brand-ink text-sm transition-all placeholder:text-brand-inkMuted/45 focus:border-brand-amber focus:outline-none"
                  />
                  {formErrors.subject && (
                    <span className="text-xs font-semibold text-brand-amber block mt-1">{formErrors.subject}</span>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-[10px] font-bold text-brand-inkSoft uppercase tracking-wider block">
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me a bit about your project..."
                  className="w-full px-0 py-2.5 bg-transparent border-b border-brand-line text-brand-ink text-sm transition-all placeholder:text-brand-inkMuted/45 focus:border-brand-amber focus:outline-none resize-none"
                />
                {formErrors.message && (
                  <span className="text-xs font-semibold text-brand-amber block mt-1">{formErrors.message}</span>
                )}
              </div>

              {/* Alerts */}
              {isSuccess && (
                <div className="p-4 rounded-xl bg-brand-amberLight text-brand-amberDeep border border-brand-amber/10 text-sm font-semibold">
                  Thank you! Your message has been sent successfully. I will get back to you within 24 hours.
                </div>
              )}
              {submitError && (
                <div className="p-4 rounded-xl bg-brand-amberLight text-brand-amberDeep border border-brand-amber/10 text-sm font-semibold">
                  {submitError}
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                icon={isSubmitting ? Loader2 : Send}
                iconPosition="right"
                className="w-full justify-center py-3.5"
              >
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </Button>
            </form>
          </div>

        </div>

        {/* Contact details as simple understated text links beneath the grid */}
        <div className="mt-20 pt-8 border-t border-brand-line">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4 text-xs tracking-wider uppercase font-sans font-bold text-brand-inkSoft">
            <a 
              href={`mailto:${personalInfo.socials.email}`}
              className="hover:text-brand-amber underline underline-offset-4 decoration-brand-line hover:decoration-brand-amber transition-colors"
            >
              Email: {personalInfo.socials.email}
            </a>
            <a 
              href={`https://wa.me/${personalInfo.socials.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-amber underline underline-offset-4 decoration-brand-line hover:decoration-brand-amber transition-colors"
            >
              WhatsApp Messenger
            </a>
            <a 
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-amber underline underline-offset-4 decoration-brand-line hover:decoration-brand-amber transition-colors"
            >
              GitHub Profile
            </a>
            <a 
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-amber underline underline-offset-4 decoration-brand-line hover:decoration-brand-amber transition-colors"
            >
              LinkedIn Profile
            </a>
            <a 
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-amber underline underline-offset-4 decoration-brand-line hover:decoration-brand-amber transition-colors"
            >
              Instagram Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
