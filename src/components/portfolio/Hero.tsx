"use client";

import { profile } from "@/lib/portfolio-data";
import { useTyping } from "@/hooks/useTyping";
import { useEffect, useRef } from "react";

/**
 * Hero section — name, typing role, lead paragraph, CTAs, and avatar.
 * Includes a subtle parallax on scroll (desktop only).
 */
export function Hero() {
  const typed = useTyping(profile.typingRoles);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !finePointer) return;

    let ticking = false;
    const run = () => {
      const vhMid = window.scrollY + window.innerHeight * 0.5;
      [
        { el: copyRef.current, speed: 0.04 },
        { el: visualRef.current, speed: 0.08 },
      ].forEach(({ el, speed }) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elMid = window.scrollY + rect.top + rect.height * 0.5;
        const delta = (elMid - vhMid) * speed;
        const dy = Math.max(-24, Math.min(24, -delta));
        el.style.transform = `translate3d(0, ${dy.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", run);
    run();
    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", run);
    };
  }, []);

  return (
    <header id="home">
      <div className="container">
        <div className="hero">
          <div className="hero-copy reveal" ref={copyRef}>
            <span className="eyebrow">{profile.eyebrowQuote}</span>
            <h1 className="title">
              <span className="name">{profile.name}</span>
            </h1>
            <h2 className="typing">
              <span id="typing">{typed}</span>
            </h2>
            <p className="lead">{profile.lead}</p>
            <div className="cta-row reveal">
              <a className="btn" href={profile.resume} download>
                <i className="fas fa-file-pdf" aria-hidden="true" /> Download Resume
              </a>
              <a className="btn primary" href="#contact">
                <i className="fa-regular fa-paper-plane" aria-hidden="true" /> Hire Me
              </a>
            </div>
          </div>
          <div className="hero-visual reveal" ref={visualRef}>
            <img
              className="avatar"
              src={profile.avatar}
              alt="Portrait of Asibur Rahman Bappy"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
