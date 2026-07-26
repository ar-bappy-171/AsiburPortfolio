"use client";

import { useEffect } from "react";

/**
 * Adds the `in` class to any element with the `reveal` class when it scrolls
 * into view, then stops observing it. Mirrors the original IntersectionObserver
 * behavior from the static site.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
