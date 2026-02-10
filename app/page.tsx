// app/page.tsx
"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import AcademicProjects from "@/components/AcademicProjects";
import Security from "@/components/security";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

// Animated Section Wrapper
const SectionWrapper = ({
  id,
  children,
  className = "",
}: SectionWrapperProps) => (
  <motion.section
    id={id}
    role="region"
    aria-labelledby={`${id}-title`}
    className={`scroll-mt-20 ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-28 scroll-smooth">
      
      <SectionWrapper id="home">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Hero...</div>}>
          <Hero />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="about">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading About...</div>}>
          <About />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="education">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Education...</div>}>
          <Education />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Projects...</div>}>
          <AcademicProjects />
        </Suspense>
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Projects...</div>}>
          <Projects />
        </Suspense>
      </SectionWrapper>
      <SectionWrapper id="security">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Security...</div>}>
          <Security />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Skills...</div>}>
          <Skills />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Suspense fallback={<div className="text-center text-gray-400 py-24">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </SectionWrapper>
    </main>
  );
}
