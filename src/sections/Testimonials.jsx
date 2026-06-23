import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const TimerRef = useRef(null);

  const slidePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const slideNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const setSlide = useCallback((idx) => {
    setCurrentIndex(idx);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (TimerRef.current) {
      clearInterval(TimerRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    TimerRef.current = setInterval(() => {
      slideNext();
    }, 7000);
  }, [stopAutoplay, slideNext]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Editorial slow crossfade variants (800ms+) with no bounce/slide
  const fadeVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.8 }
      }
    },
    exit: {
      opacity: 0,
      transition: {
        opacity: { duration: 0.6 }
      }
    }
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-brand-cream border-b border-brand-line">
      {/* Background warm light glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] radial-glow-amber opacity-40 pointer-events-none" />

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
              06
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Client Feedback
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              Testimonials.
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Slider Area - cardless, centered pull-quote */}
        <div 
          className="max-w-4xl mx-auto relative px-4 sm:px-8 py-4"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden min-h-[360px] sm:min-h-[280px] flex items-center justify-center relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center space-y-6"
              >
                {/* Large serif italic pull-quote */}
                <blockquote className="font-display italic text-2xl sm:text-3xl md:text-4xl text-brand-ink leading-[1.4] max-w-3xl mx-auto">
                  "{activeReview.quote}"
                </blockquote>

                {/* Thin dividing element */}
                <div className="w-12 h-[1px] bg-brand-amber mx-auto" />

                {/* Author Credentials */}
                <div className="space-y-1">
                  <cite className="not-italic text-sm font-bold text-brand-ink font-sans uppercase tracking-[0.2em] block">
                    {activeReview.name}
                  </cite>
                  <span className="text-xs text-brand-inkMuted font-sans block">
                    {activeReview.role} &mdash; <span className="text-brand-amber font-semibold">{activeReview.company}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal controls below */}
          <div className="flex justify-between items-center gap-4 mt-8 border-t border-brand-line/50 pt-6">
            
            {/* Dots directory indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                    dotIdx === currentIndex ? "w-6 bg-brand-amber" : "w-1.5 bg-brand-line hover:bg-brand-inkMuted"
                  }`}
                />
              ))}
            </div>

            {/* Micro buttons */}
            <div className="flex gap-2">
              <button
                onClick={slidePrev}
                aria-label="Previous Testimonial"
                className="w-9 h-9 rounded-xl border border-brand-line bg-brand-paper hover:bg-brand-cream text-brand-inkSoft hover:text-brand-ink transition-colors flex items-center justify-center focus:outline-none"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={slideNext}
                aria-label="Next Testimonial"
                className="w-9 h-9 rounded-xl border border-brand-line bg-brand-paper hover:bg-brand-cream text-brand-inkSoft hover:text-brand-ink transition-colors flex items-center justify-center focus:outline-none"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
