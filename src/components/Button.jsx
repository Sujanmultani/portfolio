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
    primary: "bg-brand-amber text-brand-cream hover:bg-brand-amberDeep border border-brand-amberDeep/10 shadow-sm font-sans tracking-wide",
    secondary: "border border-brand-line text-brand-inkSoft bg-transparent hover:bg-brand-paper transition-colors font-sans tracking-wide",
    glass: "bg-brand-paper text-brand-ink border border-brand-line hover:border-brand-amber hover:bg-brand-cream shadow-sm font-sans tracking-wide",
    ghost: "text-brand-inkMuted hover:text-brand-ink transition-colors font-sans tracking-wide",
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
