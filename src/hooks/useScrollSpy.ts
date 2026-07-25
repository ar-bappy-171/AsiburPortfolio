"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view for nav highlighting.
 * Returns the id of the active section.
 */
export function useScrollSpy(ids: string[], offset = 80) {
  const [active, setActive] = useState<string>(ids[0] || "");

  useEffect(() => {
    const navHVar = getComputedStyle(document.documentElement).getPropertyValue("--navH");
    const navH = parseFloat(navHVar) || 72;

    const handler = () => {
      const y = window.scrollY + navH + offset;
      let current = ids[0] || "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (y >= top) current = id;
      }
      setActive(current);
    };

    handler();
    document.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      document.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids.join("|"), offset]);

  return active;
}
