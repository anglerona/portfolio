"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  immediate?: boolean;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  immediate = false,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: immediate ? 0 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={immediate ? undefined : { once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
