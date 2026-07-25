"use client";

import { useEffect, useState } from "react";

/**
 * Preloader — covers the screen until the page has loaded, then fades out.
 * Has a 3-second safety timeout in case the load event never fires.
 */
export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hide = () => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 500);
    };
    window.addEventListener("load", hide);
    const safety = setTimeout(hide, 3000);
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(safety);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="preloader" className={hidden ? "hide" : ""} role="status" aria-live="polite" aria-label="Loading page">
      <div className="spinner" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
