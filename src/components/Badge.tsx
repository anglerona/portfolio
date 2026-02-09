import React from "react";

interface BadgeProps {
  label: string;
  variant?: "filled" | "outlined" | "glass";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "filled",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-3 py-1 text-xs leading-none select-none";

  const filledClasses = "bg-[#482F54] text-purple-200";
  const outlinedClasses = "border border-white/70 text-white bg-transparent";
  const glassClasses =
    "border border-white/15 text-white/80 bg-black/35 backdrop-blur-sm";

  const variantClasses =
    variant === "outlined"
      ? outlinedClasses
      : variant === "glass"
        ? glassClasses
        : filledClasses;

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {label}
    </span>
  );
};

export default Badge;
