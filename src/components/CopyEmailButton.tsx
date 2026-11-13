"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";
import { buttonClasses } from "./Button";
import type { ButtonVariant } from "./Button";

type Status = "idle" | "copied" | "failed";

/**
 * Copies the email address and shows a small toast (§8). Pair it with a
 * mailto link so both ways of reaching out sit side by side.
 */
export function CopyEmailButton({
  variant = "secondary",
}: {
  variant?: ButtonVariant;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    let next: Status = "copied";
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      next = "failed";
    }
    setStatus(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2200);
  }

  return (
    <>
      <button type="button" onClick={copy} className={buttonClasses(variant)}>
        Copy email
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-50 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-center text-sm font-medium text-bg transition-opacity duration-200 ${
          status === "idle" ? "opacity-0" : "opacity-100"
        }`}
      >
        {status === "copied" && "Copied"}
        {status === "failed" && "Copy failed. Use the email link."}
      </span>
    </>
  );
}
