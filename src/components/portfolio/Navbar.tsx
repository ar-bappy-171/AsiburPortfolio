"use client";

import { useTheme } from "@/hooks/useTheme";
import { navLinks, socials } from "@/lib/portfolio-data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useEffect, useRef, useState } from "react";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useScrollSpy(sectionIds);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navlinksRef = useRef<HTMLDivElement>(null);
  const [fabOpen, setFabOpen] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const fabPanelRef = useRef<HTMLDivElement>(null);

  // Position the nav indicator under the active link.
  useEffect(() => {
    const container = navlinksRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;
    const activeLink = container.querySelector<HTMLAnchorElement>("a.active");
    if (!activeLink) {
      indicator.style.width = "0";
      return;
    }
    const r = activeLink.getBoundingClientRect();
    const c = container.getBoundingClientRect();
    indicator.style.width = r.width + "px";
    indicator.style.transform = `translateX(${r.left - c.left}px)`;
  }, [active]);

  // Close FAB on outside click / Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        fabPanelRef.current &&
        !fabPanelRef.current.contains(e.target as Node) &&
        fabRef.current &&
        !fabRef.current.contains(e.target as Node)
      ) {
        setFabOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFabOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const themeIconClass =
    theme === "dark" ? "fas fa-sun" : "fas fa-moon";

  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>

      <nav className="top-nav" role="navigation" aria-label="Primary" id="topNav">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Home — Asibur Rahman Bappy">
            <span className="logo" aria-hidden="true" />
            <span>Asibur Rahman Bappy</span>
          </a>

          <div className="navlinks" id="navlinks" ref={navlinksRef}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
              >
                {l.label}
              </a>
            ))}
            <span className="nav-indicator" id="navIndicator" ref={indicatorRef} aria-hidden="true" />
          </div>

          <div className="spacer" />

          <div className="actions">
            <a
              className="icon-btn"
              href={socials.find((s) => s.label === "LinkedIn")?.href}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn (opens in new tab)"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a
              className="icon-btn"
              href={socials.find((s) => s.label === "Facebook")?.href}
              target="_blank"
              rel="noopener"
              aria-label="Facebook (opens in new tab)"
            >
              <i className="fab fa-facebook" aria-hidden="true" />
            </a>
            <button
              className="icon-btn"
              id="themeToggle"
              aria-label="Toggle dark / light theme"
              onClick={toggle}
            >
              <i id="themeIcon" className={themeIconClass} aria-hidden="true" />
              <span className="theme-label">Theme</span>
            </button>
          </div>
        </div>
      </nav>
      <div className="nav-spacer" aria-hidden="true" />

      {/* Mobile FAB */}
      <button
        className="mobile-fab"
        id="mobileFab"
        ref={fabRef}
        aria-label="Open quick menu"
        aria-expanded={fabOpen}
        aria-controls="fabPanel"
        onClick={(e) => {
          e.stopPropagation();
          setFabOpen((v) => !v);
        }}
      >
        <i className="fas fa-bars" aria-hidden="true" />
      </button>
      <div
        className={"fab-panel" + (fabOpen ? " open" : "")}
        id="fabPanel"
        ref={fabPanelRef}
        role="menu"
        aria-label="Quick navigation"
      >
        <div className="fab-links">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              role="menuitem"
              onClick={() => setFabOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
