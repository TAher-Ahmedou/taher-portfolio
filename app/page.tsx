// app/page.tsx
"use client";

import { Suspense } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import AcademicProjects from "@/components/AcademicProjects";
import Security from "@/components/security";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-28 scroll-smooth">

      <section id="home" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Hero...</div>}>
          <Hero />
        </Suspense>
      </section>

      <section id="about" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading About...</div>}>
          <About />
        </Suspense>
      </section>

      <section id="education" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Education...</div>}>
          <Education />
        </Suspense>
      </section>

      {/* Academic Projects — animation gérée INTERNEMENT */}
      <section id="academic-projects" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Academic Projects...</div>}>
          <AcademicProjects />
        </Suspense>
      </section>

      <section id="projects" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Projects...</div>}>
          <Projects />
        </Suspense>
      </section>

      <section id="security" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Security...</div>}>
          <Security />
        </Suspense>
      </section>

      <section id="skills" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Skills...</div>}>
          <Skills />
        </Suspense>
      </section>

      <section id="contact" className="scroll-mt-20">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </section>

    </main>
  );
}
