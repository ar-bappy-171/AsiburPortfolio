"use client";

import { useProgressBar } from "@/hooks/useProgressBar";

/**
 * Thin progress bar under the nav that fills as the user scrolls.
 */
export function ProgressBar() {
  useProgressBar();
  return <div className="progress" id="progress" aria-hidden="true" />;
}
