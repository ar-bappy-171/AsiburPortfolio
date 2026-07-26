"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor that follows the mouse on fine-pointer devices.
 * Also nudges the background video for a subtle parallax effect.
 * Disabled entirely on touch / coarse pointers.
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !finePointer) return;

    const cursor = cursorRef.current;
    const bgVideo = document.getElementById("bgVideo") as HTMLVideoElement | null;
    if (!cursor) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let raf = 0;

    const loop = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      cursor.style.transform = `translate(${cx}px, ${cy}px)`;
      if (bgVideo) {
        const dx = (cx - window.innerWidth / 2) * 0.04;
        const dy = (cy - window.innerHeight / 2) * 0.04;
        bgVideo.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(1.12)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div className="cursor" id="cursor" ref={cursorRef} aria-hidden="true" />;
}
