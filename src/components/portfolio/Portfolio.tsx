"use client";

import { useReveal } from "@/hooks/useReveal";
import { useRipple } from "@/hooks/useRipple";
import { Background } from "./Background";
import { Preloader } from "./Preloader";
import { Navbar } from "./Navbar";
import { ProgressBar } from "./ProgressBar";
import { CustomCursor } from "./CustomCursor";
import { BackToTop } from "./BackToTop";
import { Hero } from "./Hero";
import { Profile } from "./Profile";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Reference } from "./Reference";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { ToastProvider } from "./Toast";

export function Portfolio() {
  useReveal();
  useRipple();

  return (
    <ToastProvider>
      <Background />
      <Preloader />
      <Navbar />
      <ProgressBar />
      <CustomCursor />
      <BackToTop />

      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Reference />
        <Contact />
      </main>

      <Footer />
    </ToastProvider>
  );
}
