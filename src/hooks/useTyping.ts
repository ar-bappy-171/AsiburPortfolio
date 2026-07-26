"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cycles through an array of words with a typewriter effect.
 * Respects prefers-reduced-motion (returns the first word, no animation).
 */
export function useTyping(words: string[], opts?: { typeSpeed?: number; deleteSpeed?: number; pause?: number }) {
  const { typeSpeed = 85, deleteSpeed = 45, pause = 1800 } = opts || {};

  // Lazy initial state — picks the right starting value based on reduced-motion
  // preference without needing a setState-in-effect.
  const [text, setText] = useState<string>(() => {
    if (typeof window === "undefined") return words[0] || "";
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || words.length === 0) return words[0] || "";
    return "";
  });

  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced.current || words.length === 0) return;

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[roleIdx % words.length];
      if (!deleting) {
        charIdx += 1;
        setText(word.slice(0, charIdx));
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
      } else {
        charIdx -= 1;
        setText(word.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          roleIdx += 1;
        }
      }
      timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [words.join("|"), typeSpeed, deleteSpeed, pause]);

  return text;
}
