// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import AcademicProjects from "@/components/AcademicProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => (
  <section id={id} className={`scroll-mt-20 ${className}`} aria-label={id}>
    {children}
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20">
      <SectionWrapper id="home">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <AcademicProjects />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </main>
  );
}
