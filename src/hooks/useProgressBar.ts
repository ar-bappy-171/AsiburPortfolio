"use client";

import { useEffect } from "react";

/**
 * Reading-progress bar that fills based on how far the user has scrolled.
 * Targets an element with id `progress`.
 */
export function useProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("progress");
    if (!bar) return;

    const handler = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const ratio = max > 0 ? h.scrollTop / max : 0;
      bar.style.width = (ratio * 100).toFixed(2) + "%";
    };

    handler();
    document.addEventListener("scroll", handler, { passive: true });
    return () => document.removeEventListener("scroll", handler);
  }, []);
}
