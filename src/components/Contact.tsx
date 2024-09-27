"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";
import LinkedIn from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";
import { LinkPreview } from "./ui/link-preview";
import { useState } from "react";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "a85wu@uwaterloo.ca";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <FadeInSection>
      <div id="contact">
        <h2 className="py-12 font-semibold text-4xl text-center">Contact</h2>

        {/* Email Copy Button */}
        <div className="flex flex-col items-center pb-12 px-4 py-3">
          <button
            onClick={handleCopyEmail}
            className="text-purple-300 w-full max-w-96 bg-transparent border border-purple-300 rounded-md px-4 py-2 cursor-pointer hover:shadow-[0_0_8px_1px_rgba(212,159,255,1)] transition-all duration-500"
          >
            {isCopied ? "Email Copied!" : email}
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-8 justify-center">
          <LinkPreview url="https://github.com/anglerona">
            <Github className="size-12 text-purple-300" />
          </LinkPreview>
          <LinkPreview url="https://linkedin.com/in/anglerona">
            <LinkedIn className="size-12 text-purple-300" />
          </LinkPreview>
        </div>

        {/* Divider */}
        {/* <FadeInSection> */}
          <div className="inline-flex py-20 items-center justify-center w-full px-8">
            <hr className="w-96 h-px rounded bg-purple-300 border-0 " />
            <span className="absolute text-sm px-3 bg-background text-purple-300">
              anglerona • 2024
            </span>
          </div>
        {/* </FadeInSection> */}
      </div>
    </FadeInSection>
  );
};

export default Contact;
