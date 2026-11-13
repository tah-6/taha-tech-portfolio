"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/content";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

/** Menu button + dropdown panel shown below the header on small screens. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-fg transition-colors duration-150 hover:bg-surface"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg"
      >
        <nav aria-label="Mobile" className="wrap flex flex-col py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-line py-3.5 text-base text-fg"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-3">
            <span className="text-sm text-muted">Theme</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </div>
  );
}
