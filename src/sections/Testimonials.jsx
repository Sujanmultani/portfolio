import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const timerRef = useRef(null);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const setSlide = useCallback((idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [currentIndex]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      slideNext();
    }, 6000);
  }, [stopAutoplay, slideNext]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Framer motion variants for sliding animations
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-brand-darker bg-dots-pattern">
      {/* Background glow shadow */}
      <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] radial-glow-indigo opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            06 . Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight font-sans">
            Client & Colleague Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4 mx-auto" />
        </div>

        {/* Testimonials Slider area */}
        <div 
          className="max-w-4xl mx-auto relative px-4 sm:px-8 py-4"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden min-h-[380px] sm:min-h-[300px] flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <GlassCard hoverEffect={false} animateOnScroll={false} className="p-8 sm:p-12 relative">
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute right-8 bottom-8 text-brand-accent/5 w-24 h-24 pointer-events-none select-none" />
                  
                  <div className="flex flex-col gap-6">
                    {/* Stars Rating row */}
                    {activeReview.rating && (
                      <div className="flex gap-1">
                        {[...Array(activeReview.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                    )}

                    {/* Quote text */}
                    <blockquote className="text-brand-textPrimary text-base sm:text-lg md:text-xl font-sans italic leading-relaxed">
                      "{activeReview.quote}"
                    </blockquote>

                    <hr className="border-brand-border/40" />

                    {/* Client info profile */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-brand-violet/20 border border-indigo-500/30 flex items-center justify-center text-brand-textPrimary font-bold text-sm tracking-wide select-none shrink-0">
                        {activeReview.initials}
                      </div>
                      <div>
                        <cite className="not-italic text-sm font-bold text-brand-textPrimary font-sans block">
                          {activeReview.name}
                        </cite>
                        <span className="text-xs text-brand-textMuted font-medium block mt-0.5">
                          {activeReview.role} at <span className="text-indigo-400">{activeReview.company}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls buttons */}
          <div className="flex justify-between items-center gap-4 mt-8">
            {/* Dots indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    dotIdx === currentIndex ? "w-6 bg-brand-accent" : "w-2 bg-brand-border"
                  }`}
                />
              ))}
            </div>

            {/* Arrow controllers */}
            <div className="flex gap-2">
              <button
                onClick={slidePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-xl border border-brand-border bg-brand-card hover:bg-white/5 text-brand-textSecondary hover:text-brand-textPrimary transition-colors flex items-center justify-center focus:outline-none"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={slideNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-xl border border-brand-border bg-brand-card hover:bg-white/5 text-brand-textSecondary hover:text-brand-textPrimary transition-colors flex items-center justify-center focus:outline-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
