"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <div className="relative group inline-block">
      <motion.button
        whileHover={{ scale: 1.05 }} 
        transition={{ type: "spring", stiffness: 300, damping: 20 }} 
        className="relative border border-white text-white font-semibold opacity-70 hover:opacity-100 rounded-full flex items-center justify-center py-3 md:px-6 w-full md:w-auto border-1 overflow-hidden z-10"
      >
        <Link href={href} className="z-10">
          {children}
        </Link>
      </motion.button>
    </div>
  );
};

export default Button;
