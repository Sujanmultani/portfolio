import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Badge({
  text,
  icon: Icon,
  variant = "success", // success, info, warning
  className = "",
}) {
  const badgeColors = {
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    info: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    gold: "bg-brand-gold/10 border-brand-gold/25 text-brand-gold",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border shadow-sm select-none backdrop-blur-sm",
        badgeColors[variant],
        className
      )}
    >
      {variant === "success" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
      )}
      {Icon && <Icon className="shrink-0" size={12} />}
      <span>{text}</span>
    </motion.div>
  );
}
