import { useState } from "react";
import { Mail, Copy, Check, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "../components/SocialIcons";
import GlassCard from "../components/GlassCard";
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
      // A TypeError here specifically means fetch could not reach the server at all
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
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] radial-glow-indigo opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            07 . Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight font-sans">
            Let's Collaborate On Your Next Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4" />
        </div>

        {/* Form Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-textPrimary font-sans">
                Have a project idea in mind?
              </h3>
              <p className="text-brand-textSecondary text-sm sm:text-base leading-relaxed">
                Whether you need a dedicated full stack developer to augment your engineering team, or a product architect to build a platform from scratch, my inbox is always open.
              </p>
            </div>

            {/* Structured Contact channels list */}
            <div className="space-y-4">
              
              {/* Email channel card */}
              <div className="p-4 rounded-xl border border-brand-border bg-white/[0.01] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-brand-textMuted font-medium block">Drop an Email</span>
                    <a href={`mailto:${personalInfo.socials.email}`} className="text-sm font-bold text-brand-textPrimary hover:text-brand-accent transition-colors block mt-0.5">
                      {personalInfo.socials.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  aria-label="Copy Email"
                  className="w-8 h-8 rounded-lg border border-brand-border bg-brand-card hover:bg-white/5 text-brand-textSecondary hover:text-brand-textPrimary transition-colors flex items-center justify-center shrink-0"
                >
                  {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="p-4 rounded-xl border border-brand-border bg-white/[0.01] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <WhatsappIcon size={18} />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-brand-textMuted font-medium block">Direct WhatsApp Chat</span>
                  <a
                    href={`https://wa.me/${personalInfo.socials.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-brand-textPrimary hover:text-brand-accent transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    Send message
                    <span className="text-xs font-semibold text-brand-textMuted">(Secure & Instant)</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Social channels block */}
            <div className="space-y-3 pt-4 border-t border-brand-border/40">
              <span className="text-xs font-bold text-brand-textMuted uppercase tracking-wider block">
                Social Hubs
              </span>
              <div className="flex gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-accent/10 hover:border-brand-accent/50 text-brand-textSecondary hover:text-brand-accent transition-all flex items-center justify-center focus:outline-none"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-accent/10 hover:border-brand-accent/50 text-brand-textSecondary hover:text-brand-accent transition-all flex items-center justify-center focus:outline-none"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-accent/10 hover:border-brand-accent/50 text-brand-textSecondary hover:text-brand-accent transition-all flex items-center justify-center focus:outline-none"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side form card */}
          <div className="lg:col-span-7">
            <GlassCard hoverEffect={false} animateOnScroll={true} className="p-6 md:p-8">
              <form onSubmit={handleFormSubmit} className="space-y-5">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-brand-textSecondary uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white/[0.02] text-brand-textPrimary text-sm transition-all focus:bg-white/[0.04]"
                    />
                    {formErrors.name && (
                      <span className="text-xs font-medium text-rose-400 block">{formErrors.name}</span>
                    )}
                  </div>
                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-textSecondary uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white/[0.02] text-brand-textPrimary text-sm transition-all focus:bg-white/[0.04]"
                    />
                    {formErrors.email && (
                      <span className="text-xs font-medium text-rose-400 block">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-brand-textSecondary uppercase tracking-wider block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      placeholder="+91 99999 99999"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white/[0.02] text-brand-textPrimary text-sm transition-all focus:bg-white/[0.04]"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-brand-textSecondary uppercase tracking-wider block">
                      Subject Line
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry / Hiring"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white/[0.02] text-brand-textPrimary text-sm transition-all focus:bg-white/[0.04]"
                    />
                    {formErrors.subject && (
                      <span className="text-xs font-medium text-rose-400 block">{formErrors.subject}</span>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-textSecondary uppercase tracking-wider block">
                    Message Content
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me a bit about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white/[0.02] text-brand-textPrimary text-sm transition-all focus:bg-white/[0.04] resize-none"
                  />
                  {formErrors.message && (
                    <span className="text-xs font-medium text-rose-400 block">{formErrors.message}</span>
                  )}
                </div>

                {/* Feedback notifications */}
                {isSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    Thank you! Your message has been sent successfully. I will get back to you within 24 hours.
                  </div>
                )}
                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium">
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
                  className="w-full justify-center"
                >
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </Button>
              </form>
              <div className="mt-6 text-center text-xs text-brand-textMuted font-medium">
                Or email me directly at{" "}
                <a href={`mailto:${personalInfo.socials.email}`} className="text-brand-textSecondary hover:text-brand-accent transition-colors font-bold">
                  {personalInfo.socials.email}
                </a>{" "}
                / WhatsApp{" "}
                <a href={`https://wa.me/${personalInfo.socials.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-brand-textSecondary hover:text-brand-accent transition-colors font-bold">
                  +{personalInfo.socials.whatsapp}
                </a>
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
