"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  // Fallback: read from localStorage or system preference.
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  } catch {}
  return "dark";
}

/**
 * Theme manager — reads initial value from <html data-theme> (set by the
 * inline pre-paint script in layout.tsx), then keeps it in sync with
 * localStorage and the document attribute.
 *
 * The post-mount useEffect re-applies the data-theme attribute, which is
 * necessary because React hydration can strip attributes that weren't
 * present in the server-rendered HTML.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Re-apply the attribute after mount (React hydration may have stripped it).
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#070a12" : "#f1f5fa");
  }, [theme]);

  // Listen for system theme changes (only when user hasn't set a preference).
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const next: Theme = e.matches ? "dark" : "light";
        setThemeState(next);
      }
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setThemeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  return { theme, setTheme, toggle };
}
