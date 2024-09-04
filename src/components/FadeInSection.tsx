"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly shifted down
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger animation only once when 20% of the div is in view
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
