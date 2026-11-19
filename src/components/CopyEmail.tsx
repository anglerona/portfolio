"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/data/site";

/** Big email address with a Copy button (falls back to opening the mail app). */
export default function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("copied");
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus("idle"), 1500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={`mailto:${EMAIL}`}
        className="break-all font-display text-[26px] font-black italic leading-tight tracking-[-0.02em] hover:underline underline-offset-4 md:text-[32px]"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-line px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink"
      >
        {status === "copied" ? "Copied!" : "Copy"}
        <span className="sr-only"> email address</span>
      </button>
      <p role="status" className="sr-only">
        {status === "copied" ? "Email address copied to clipboard" : ""}
      </p>
    </div>
  );
}
