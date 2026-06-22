import { useState, useEffect } from "react";
import { FileText, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { personalInfo } from "../data/personalInfo";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#timeline" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ activeSection = "" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile navigation is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => setIsMobileOpen(false);

  // Hamburger line animations
  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: 45, y: 6 }
  };
  const line2Variants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  };
  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: -45, y: -6 }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "py-3 glass-panel shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
            : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Name */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group focus:outline-none"
            onClick={closeMobileMenu}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-violet flex items-center justify-center font-sans font-black text-white text-lg shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300">
              S
            </div>
            <span className="font-sans font-bold text-xl text-brand-textPrimary tracking-tight group-hover:text-brand-accent transition-colors duration-300">
              {personalInfo.name.split(" ")[0]}
              <span className="text-brand-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm font-medium tracking-wide transition-all relative py-1 hover:text-brand-textPrimary focus:outline-none select-none",
                        isActive ? "text-brand-accent" : "text-brand-textSecondary"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="/resume.pdf"
              download
              target="_blank"
              variant="secondary"
              size="sm"
              icon={FileText}
              iconPosition="left"
            >
              Resume
            </Button>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={Send}
            >
              Let's Talk
            </Button>
          </div>

          {/* Hamburger Menu Toggle button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="lg:hidden flex flex-col gap-1.5 justify-center items-center w-10 h-10 rounded-xl border border-brand-border bg-brand-card hover:bg-white/5 hover:border-brand-borderHover transition-all focus:outline-none z-50 select-none"
          >
            <motion.span
              variants={line1Variants}
              animate={isMobileOpen ? "opened" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-brand-textPrimary rounded-full block origin-center"
            />
            <motion.span
              variants={line2Variants}
              animate={isMobileOpen ? "opened" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-brand-textPrimary rounded-full block origin-center"
            />
            <motion.span
              variants={line3Variants}
              animate={isMobileOpen ? "opened" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-brand-textPrimary rounded-full block origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-brand-darker/60 backdrop-blur-sm"
            />

            {/* Slider Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full glass-panel border-l border-brand-border/60 shadow-2xl p-8 pt-24 flex flex-col justify-between"
            >
              {/* Menu lists */}
              <nav className="flex flex-col gap-8">
                <span className="text-[10px] font-bold text-brand-textMuted uppercase tracking-widest border-b border-brand-border pb-2">
                  Navigation Directory
                </span>
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.href}
                      >
                        <a
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "text-lg font-semibold tracking-wide block py-2 select-none hover:text-brand-accent transition-colors",
                            isActive ? "text-brand-accent" : "text-brand-textPrimary"
                          )}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Action buttons footer */}
              <div className="flex flex-col gap-3 mt-auto">
                <Button
                  href="/resume.pdf"
                  download
                  target="_blank"
                  variant="secondary"
                  size="md"
                  icon={FileText}
                  iconPosition="left"
                  onClick={closeMobileMenu}
                  className="w-full justify-center"
                >
                  Resume
                </Button>
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  icon={Send}
                  onClick={closeMobileMenu}
                  className="w-full justify-center"
                >
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
