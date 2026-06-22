import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  delay = 0,
  animateOnScroll = true,
  ...props
}) {
  const cardClasses = cn(
    "glass-card rounded-2xl p-6 md:p-8 overflow-hidden relative",
    hoverEffect && "glass-card-hover",
    className
  );

  if (animateOnScroll) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className={cardClasses}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}
