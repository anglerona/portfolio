import React from "react";

interface BadgeProps {
  label: string; // Prop to accept a label string
  variant?: "filled" | "outlined"; // Prop to define the style variant
}

const Badge: React.FC<BadgeProps> = ({ label, variant = "filled" }) => {
  const baseClasses = "rounded-full px-4 py-1 text-xs";
  const filledClasses = "bg-[#482F54] text-purple-200";
  const outlinedClasses = "border border-white text-white bg-transparent";

  return (
    <div
      className={`${baseClasses} ${
        variant === "outlined" ? outlinedClasses : filledClasses
      }`}
    >
      {label}
    </div>
  );
};

export default Badge;
