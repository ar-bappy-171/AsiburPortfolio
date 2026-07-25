"use client";

/**
 * Footer — shows the current year. Uses lazy initial state to avoid
 * a setState-in-effect lint violation. Renders an empty year on the
 * server (which the client will fill in immediately on first paint).
 */
export function Footer() {
  const year = typeof window !== "undefined" ? new Date().getFullYear() : null;
  return (
    <footer>
      <div className="container">
        © {year ?? ""} Asibur Rahman Bappy. All rights reserved.
      </div>
    </footer>
  );
}
