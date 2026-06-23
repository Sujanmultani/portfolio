import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Badge({
  text,
  icon: Icon,
  variant = "success", // success, info, warning
  className = "",
}) {
  const badgeColors = {
    success: "bg-brand-amberLight/50 border-brand-amber/20 text-brand-amberDeep",
    info: "bg-brand-paper border-brand-line text-brand-inkSoft",
    warning: "bg-brand-amberLight/40 border-brand-amber/20 text-brand-amber",
    gold: "bg-brand-amberLight/60 border-brand-amber/25 text-brand-amberDeep",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border shadow-sm select-none backdrop-blur-sm font-sans tracking-wide",
        badgeColors[variant],
        className
      )}
    >
      {variant === "success" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-amber"></span>
        </span>
      )}
      {Icon && <Icon className="shrink-0" size={12} />}
      <span>{text}</span>
    </motion.div>
  );
}
