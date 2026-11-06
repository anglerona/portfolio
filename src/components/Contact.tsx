"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";
import LinkedIn from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";
import Instagram from "@/assets/instagram.svg";
import { LinkPreview } from "./ui/link-preview";
import { useState } from "react";

interface ContactProps {
  /** Show the Instagram (art account) link. Used on the design page only. */
  showInstagram?: boolean;
}

const Contact = ({ showInstagram = false }: ContactProps) => {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const email = "a85wu@uwaterloo.ca";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      // Clipboard can be blocked (permissions, insecure context); open mail app instead.
      setCopyStatus("failed");
      window.location.href = `mailto:${email}`;
    }
    setTimeout(() => setCopyStatus("idle"), 1500);
  };

  return (
    <FadeInSection>
      <div id="contact" className="scroll-mt-20">
        <h2 className="py-12 font-semibold text-4xl text-center">Contact</h2>

        {/* Email Copy Button */}
        <div className="flex flex-col items-center pb-12 px-4 py-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label={`Copy email address ${email}`}
            className="text-purple-300 w-full max-w-96 bg-transparent border border-purple-300 px-4 py-2 cursor-pointer hover:shadow-[0_0_8px_1px_rgba(212,159,255,1)] transition-all duration-500"
          >
            {copyStatus === "copied" ? "Email Copied!" : email}
          </button>
          <p role="status" className="sr-only">
            {copyStatus === "copied" ? "Email address copied to clipboard" : ""}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-8 justify-center">
          <LinkPreview url="https://github.com/anglerona">
            <Github className="size-12 text-purple-300" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </LinkPreview>
          <LinkPreview url="https://linkedin.com/in/anglerona">
            <LinkedIn className="size-12 text-purple-300" aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </LinkPreview>
          {showInstagram && (
            <a
              href="https://www.instagram.com/alonatanuki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-12" aria-hidden="true" />
              <span className="sr-only">Instagram (alonatanuki, opens in a new tab)</span>
            </a>
          )}
        </div>

        {/* Divider */}
        {/* <FadeInSection> */}
          <div className="inline-flex py-20 items-center justify-center w-full px-8">
            <hr className="w-96 h-px bg-purple-300 border-0 " />
            <span className="absolute text-sm px-3 bg-background text-purple-300">
              anglerona • 2026
            </span>
          </div>
        {/* </FadeInSection> */}
      </div>
    </FadeInSection>
  );
};

export default Contact;
