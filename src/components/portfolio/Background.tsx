"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/portfolio-data";

/**
 * Background video — fades in when ready, paused for reduced-motion users.
 */
export function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => setReady(true);
    v.addEventListener("loadeddata", onLoaded);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      v.pause();
      v.removeAttribute("autoplay");
    }

    return () => v.removeEventListener("loadeddata", onLoaded);
  }, []);

  return (
    <div className="bg-video" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={ready ? "ready" : ""}
      >
        <source src={profile.video} type="video/mp4" />
      </video>
      <div className="bg-tint" />
    </div>
  );
}
