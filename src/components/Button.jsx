import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  iconClassName = "",
  href,
  to,
  disabled = false,
  loading = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none";
  
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-opacity-95 shadow-[0_0_15px_rgba(99,102,241,0.25),_0_0_15px_rgba(232,185,93,0.15)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4),_0_0_25px_rgba(232,185,93,0.3)] border border-indigo-500/20",
    secondary: "border border-brand-border text-brand-textPrimary bg-transparent hover:bg-white/5 hover:border-brand-textSecondary/50",
    glass: "glass-card text-brand-textPrimary hover:bg-brand-cardHover border border-brand-border hover:border-brand-borderHover shadow-lg",
    ghost: "text-brand-textSecondary hover:text-brand-textPrimary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-5 py-2.5 text-base gap-2",
    lg: "px-7 py-3.5 text-lg gap-2.5",
  };

  const isLoader = loading || (Icon && (Icon.name === "Loader2" || Icon.displayName === "Loader2" || Icon.name === "Loader" || iconClassName.includes("spin")));
  const isDisabled = disabled || loading;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={cn("shrink-0", isLoader && "animate-spin", iconClassName)} size={size === "sm" ? 16 : size === "md" ? 18 : 22} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={cn("shrink-0", isLoader && "animate-spin", iconClassName)} size={size === "sm" ? 16 : size === "md" ? 18 : 22} />
      )}
    </>
  );

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  // Use motion animations wrapper for links and anchors
  const motionProps = {
    whileHover: isDisabled ? {} : { scale: 1.02 },
    whileTap: isDisabled ? {} : { scale: 0.98 },
    className: "inline-flex"
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {content}
    </motion.button>
  );
}
