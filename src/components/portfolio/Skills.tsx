"use client";

import { skills } from "@/lib/portfolio-data";
import type { CardItem } from "@/lib/portfolio-data";
import { useEffect, useRef } from "react";

function SkillCard({ item, index }: { item: CardItem; index: number }) {
  const ref = useRef<HTMLElement>(null);

  // 3D tilt on hover (desktop fine-pointer only).
  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || prefersReduced) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          const rx = (0.5 - y) * 6;
          const ry = (x - 0.5) * 8;
          card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
          raf = 0;
        });
      }
    };
    const reset = () => {
      card.style.transform = "";
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", reset);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Hover spotlight that follows the cursor.
  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    let raf = 0;
    const move = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width * 100).toFixed(2) + "%";
      const y = ((e.clientY - r.top) / r.height * 100).toFixed(2) + "%";
      if (!raf) {
        raf = requestAnimationFrame(() => {
          card.style.setProperty("--hx", x);
          card.style.setProperty("--hy", y);
          raf = 0;
        });
      }
    };
    const leave = () => {
      card.style.removeProperty("--hx");
      card.style.removeProperty("--hy");
    };
    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", leave);
    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Bento layout: first card spans 2 columns + 2 rows on desktop
  const bentoClass = index === 0 ? "bento-lg" : index === 3 ? "bento-wide" : "";

  return (
    <article
      className={`card tilt glass reveal ${bentoClass}`}
      ref={ref}
    >
      <div className="badge">
        <span className="badge-dot" aria-hidden="true" />
        {item.badge}
      </div>
      <ul className="clean muted skill-list">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="skills-heading">
          Technical Skills
        </h2>
        <p className="section-sub reveal center">
          Design tools, programming, and platforms I work with.
        </p>
        <div className="bento-grid">
          {skills.map((s, i) => (
            <SkillCard key={i} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
