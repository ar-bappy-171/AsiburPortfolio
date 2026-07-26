"use client";

import { useEffect } from "react";

/**
 * Adds a ripple animation at the click position on every `.btn` element.
 */
export function useRipple() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement)?.closest<HTMLElement>(".btn");
      if (!btn) return;
      const r = document.createElement("span");
      r.className = "ripple";
      const rect = btn.getBoundingClientRect();
      r.style.left = (e.clientX - rect.left) + "px";
      r.style.top = (e.clientY - rect.top) + "px";
      btn.appendChild(r);
      setTimeout(() => r.remove(), 900);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
