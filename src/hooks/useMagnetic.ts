"use client";

import { useEffect } from "react";

/**
 * Magnetic buttons — elements with the `.magnetic` class are pulled
 * gently toward the cursor on hover, then spring back on leave.
 *
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function useMagnetic() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || prefersReduced) return;

    const STRENGTH = 0.35; // 0–1, how strongly the element follows the cursor
    const MAX = 14; // max displacement in px

    const targets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));

    const handlers = targets.map((el) => {
      let raf = 0;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * STRENGTH;
        const dy = (e.clientY - cy) * STRENGTH;
        const clampedX = Math.max(-MAX, Math.min(MAX, dx));
        const clampedY = Math.max(-MAX, Math.min(MAX, dy));
        if (!raf) {
          raf = requestAnimationFrame(() => {
            el.style.transform = `translate3d(${clampedX.toFixed(2)}px, ${clampedY.toFixed(2)}px, 0)`;
            raf = 0;
          });
        }
      };
      const onLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        el.style.transform = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return { el, onMove, onLeave };
    });

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}
