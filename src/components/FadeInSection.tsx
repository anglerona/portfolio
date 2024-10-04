"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  immediate?: boolean; // Add immediate prop
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, immediate = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: immediate ? 0 : 50 }} // If immediate, don't shift down
      animate={{ opacity: 1, y: 0 }} // Always animate to visible
      viewport={immediate ? undefined : { once: true, amount: 0.2 }} // Skip viewport triggering if immediate
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;

