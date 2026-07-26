"use client";

import { projects } from "@/lib/portfolio-data";
import type { CardItem } from "@/lib/portfolio-data";
import { useEffect, useRef } from "react";

function ProjectCard({ item }: { item: CardItem }) {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <article className={`card tilt glass reveal ${item.featured ? "featured" : ""}`} ref={ref}>
      {item.featured && (
        <span className="featured-ribbon" aria-label="Featured project">
          <i className="fas fa-star" aria-hidden="true" /> Featured
        </span>
      )}
      <div className="badge">
        <span className="badge-dot" aria-hidden="true" />
        {item.badge}
      </div>
      <ul className="clean muted">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {item.techStack && item.techStack.length > 0 && (
        <ul className="tech-badges" aria-label="Tech stack">
          {item.techStack.map((t) => (
            <li key={t} className="tech-chip">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="projects-heading">
          Project Experience
        </h2>
        <p className="section-sub reveal center">
          Hands-on experience across hardware, software, and research projects.
        </p>
        <div className="grid3">
          {projects.map((p, i) => (
            <ProjectCard key={i} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
