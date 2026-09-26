"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up stat card.
 * - When `value` is a number, it counts up from 0 when scrolled into view.
 * - When `value` is a string, it just displays the text (no animation).
 */
type Stat = {
  value: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isNumeric = typeof stat.value === "number";
  const numericValue = isNumeric ? (stat.value as number) : 0;
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    // For string values, no animation needed
    if (!isNumeric) return;

    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(numericValue);
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
              setDisplay(numericValue * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(numericValue);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isNumeric, numericValue]);

  const formatted = isNumeric
    ? numericValue % 1 === 0
      ? Math.round(display).toString()
      : display.toFixed(2)
    : (stat.value as string);

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
  // { value: 3.4, suffix: " / 4.00", label: "CGPA", sublabel: "BSc EEE · AUST" },
  { value: "PnR", suffix: " / ICPD", label: "UVTI", sublabel: "Oct 26 – Jan 27" },
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
