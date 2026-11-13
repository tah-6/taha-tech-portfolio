"use client";

import { ThemeIcon } from "./icons";

/**
 * Switches between light and dark. With no stored choice the site follows the
 * system preference (handled in globals.css); a click stores an explicit one.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the choice still applies for this page.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-surface hover:text-fg"
    >
      <ThemeIcon />
    </button>
  );
}

/** Inline script for <head>: applies a stored theme before first paint. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})();`;
