"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up stat card.
 * Triggers when the stat scrolls into view.
 */
type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(stat.value);
      started.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(stat.value * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(stat.value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  const formatted =
    stat.value % 1 === 0 ? Math.round(display).toString() : display.toFixed(2);

  return (
    <div className="stat-card reveal" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-value">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
      {stat.sublabel && <div className="stat-sublabel">{stat.sublabel}</div>}
    </div>
  );
}

const stats: Stat[] = [
  { value: 14, suffix: "+", label: "Projects", sublabel: "Hardware · Software · Research" },
  { value: 2, suffix: "nd / 13", label: "ULKASEMI Training", sublabel: "IC Mask Design · 2025" },
  { value: 3.2, suffix: " / 4.00", label: "CGPA", sublabel: "BSc EEE · AUST" },
  { value: 4, suffix: "", label: "Languages", sublabel: "Bangla · English · Deutsch · Japanese" },
];

export function StatsRow() {
  return (
    <section className="stats-row" aria-label="Quick stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
