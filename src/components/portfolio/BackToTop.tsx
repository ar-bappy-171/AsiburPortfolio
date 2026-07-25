"use client";

import { useEffect, useState } from "react";

/**
 * Floating back-to-top button. Appears after scrolling 600px down.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    handler();
    document.addEventListener("scroll", handler, { passive: true });
    return () => document.removeEventListener("scroll", handler);
  }, []);

  const onClick = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <button
      className={"to-top" + (show ? " show" : "")}
      id="toTop"
      aria-label="Back to top"
      onClick={onClick}
    >
      <i className="fas fa-chevron-up" aria-hidden="true" />
    </button>
  );
}
