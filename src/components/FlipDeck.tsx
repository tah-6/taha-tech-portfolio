"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import type { Experience } from "@/data/content";
import { buttonClasses } from "./Button";
import { Chip } from "./Chip";

type Scatter = { x: number; rotate: number };

const STACK_OFFSET_PX = 12;
const STACK_SCALE_STEP = 0.04;
const SWIPE_THRESHOLD_PX = 40;

/** Returns a random ordering that differs from `current`. */
function shuffledOrder(current: number[]): number[] {
  let next = current;
  while (next.every((value, position) => value === current[position])) {
    next = [...current];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
  }
  return next;
}

/** Small random offsets used for the brief fan-out when the stack reorders. */
function randomScatter(count: number): Scatter[] {
  return Array.from({ length: count }, () => ({
    x: Math.round(Math.random() * 120 - 60),
    rotate: Math.round(Math.random() * 16 - 8),
  }));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Experience Flip Deck (§11). One card per experience in a single stack.
 * - Click / tap / Enter / Space flips the top card.
 * - Previous / Next buttons, left / right arrow keys and horizontal swipes
 *   change the card.
 * - Shuffle reorders the stack; Reset restores the default order.
 * Each card is a <button aria-expanded>; both faces stay in the DOM.
 */
export function FlipDeck({ items }: { items: Experience[] }) {
  const count = items.length;

  // order[position] = index into `items`. Position `active` is on top.
  const [order, setOrder] = useState<number[]>(() => items.map((_, i) => i));
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [scatter, setScatter] = useState<Scatter[] | null>(null);

  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const lastSwipeAt = useRef(0);
  const scatterTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(scatterTimer.current), []);

  const isShuffled = order.some((itemIndex, position) => itemIndex !== position);
  const activeItem = items[order[active]];

  function go(delta: number, moveFocus = false) {
    const next = (active + delta + count) % count;
    setActive(next);
    setFlipped(false);
    if (moveFocus) {
      const target = order[next];
      requestAnimationFrame(() => cardRefs.current[target]?.focus());
    }
  }

  function shuffle() {
    if (count < 2) return;
    applyOrder(shuffledOrder(order));
  }

  function reset() {
    applyOrder(items.map((_, i) => i));
  }

  function applyOrder(next: number[]) {
    setOrder(next);
    setActive(0);
    setFlipped(false);
    if (prefersReducedMotion()) return;
    // Fan the cards out briefly, then let them spring back into the stack.
    setScatter(randomScatter(count));
    window.clearTimeout(scatterTimer.current);
    scatterTimer.current = window.setTimeout(() => setScatter(null), 200);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const fromCard = (event.target as HTMLElement).closest("[data-flip-card]");
    go(event.key === "ArrowRight" ? 1 : -1, fromCard !== null);
  }

  function onPointerDown(event: PointerEvent<HTMLButtonElement>) {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }

  function onPointerUp(event: PointerEvent<HTMLButtonElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) return;
    lastSwipeAt.current = Date.now();
    go(dx < 0 ? 1 : -1);
  }

  function onCardClick() {
    // A swipe ends with a click on the same element; don't treat it as a flip.
    if (Date.now() - lastSwipeAt.current < 400) return;
    setFlipped((value) => !value);
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Experience cards"
      onKeyDown={onKeyDown}
      className="mx-auto w-full sm:max-w-[520px]"
    >
      <div
        className="relative h-[80svh] min-h-[27rem] sm:h-[27rem]"
        style={{ marginBottom: (count - 1) * STACK_OFFSET_PX }}
      >
        {items.map((item, itemIndex) => {
          const position = order.indexOf(itemIndex);
          const rank = (position - active + count) % count;
          const isActive = rank === 0;
          const isFlipped = isActive && flipped;
          const offset = scatter?.[itemIndex];

          return (
            <button
              key={item.id}
              ref={(node) => {
                cardRefs.current[itemIndex] = node;
              }}
              type="button"
              data-flip-card
              aria-expanded={isFlipped}
              inert={!isActive}
              onClick={onCardClick}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              className="flip-card absolute inset-0 block w-full cursor-pointer touch-pan-y rounded-xl text-left select-none"
              style={{
                zIndex: count - rank,
                transform: `translate(${offset?.x ?? 0}px, ${rank * STACK_OFFSET_PX}px) rotate(${offset?.rotate ?? 0}deg) scale(${1 - rank * STACK_SCALE_STEP})`,
              }}
            >
              <span className="flip-inner relative block size-full">
                {/* Front */}
                <span className="flip-face flip-front absolute inset-0 flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-8">
                  <span className="block font-mono text-xs text-muted">
                    {item.date}
                  </span>
                  <span className="mt-auto block">
                    <span className="block text-2xl leading-tight font-medium tracking-tight sm:text-[1.75rem]">
                      {item.role}
                    </span>
                    <span className="mt-2 block text-lg text-muted">
                      {item.company}
                      {item.companyNote && (
                        <span className="block text-sm">{item.companyNote}</span>
                      )}
                    </span>
                    {(item.note || item.location) && (
                      <span className="mt-3 block font-mono text-xs text-muted">
                        {[item.note, item.location].filter(Boolean).join(" · ")}
                      </span>
                    )}
                  </span>
                  <span className="mt-auto block pt-6 text-sm text-muted">
                    <span className="pointer-coarse:hidden">
                      Flip <span aria-hidden="true">→</span>
                    </span>
                    <span className="hidden pointer-coarse:inline">
                      Tap to flip
                    </span>
                  </span>
                </span>

                {/* Back */}
                <span className="flip-face flip-back absolute inset-0 flex flex-col overflow-y-auto rounded-xl border border-line bg-surface p-6 sm:p-8">
                  <span className="block font-mono text-xs text-muted">
                    {item.company} · {item.date}
                  </span>
                  <span className="mt-5 block space-y-3.5">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted sm:text-sm sm:leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-1 shrink-0 rounded-full bg-line-strong"
                        />
                        <span>{bullet}</span>
                      </span>
                    ))}
                  </span>
                  <span className="mt-auto flex flex-wrap items-center gap-1.5 pt-6">
                    {item.chips?.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                    <span className="ml-auto text-sm text-muted">
                      <span aria-hidden="true">←</span> Flip back
                    </span>
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className={buttonClasses("secondary", "sm")}
          >
            <span aria-hidden="true">←</span> Previous
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className={buttonClasses("secondary", "sm")}
          >
            Next <span aria-hidden="true">→</span>
          </button>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="ml-2 font-mono text-sm text-muted"
          >
            <span aria-hidden="true">
              {active + 1} / {count}
            </span>
            <span className="sr-only">
              Card {active + 1} of {count}: {activeItem.role},{" "}
              {activeItem.company}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {isShuffled && (
            <button
              type="button"
              onClick={reset}
              className="link cursor-pointer text-sm text-muted"
            >
              Reset
            </button>
          )}
          <button
            type="button"
            onClick={shuffle}
            className={buttonClasses("outline", "sm")}
          >
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
