"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaCode,
  FaShieldAlt,
  FaBrain,
  FaGlobeAfrica,
} from "react-icons/fa";

export default function About() {
  /* 3D hover effect */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const skills = [
    "Spring Boot", "React", "Next.js", "Docker",
    "MongoDB", "Kafka", "OCR", "AI", "Cybersecurity"
  ];

  return (
    <AnimatedSection
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
      yOffset={50}
    >
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-14 text-white text-center"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Profile image 3D hover */}
          <div className="flex justify-center mb-10">
            <motion.div
              style={{ rotateX, rotateY, perspective: 900 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/test.jpeg"
                alt="Taher Ahmedou"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 0 60px rgba(59,130,246,0.6)",
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I’m <span className="text-white font-semibold">Taher Ahmedou</span>, a Mauritanian{" "}
              <span className="text-blue-400 font-medium">Backend & Full-Stack Developer</span> and Master’s student in{" "}
              <span className="text-green-400 font-medium">Cyber Security</span> at SupNum Institute.
            </p>
            <p>
              My background started with web development fundamentals and evolved towards building robust backend systems, secure APIs, and real-world applications using Spring Boot, React, and Next.js.
            </p>
            <p>
              I’m passionate about the intersection of{" "}
              <span className="text-purple-400">Artificial Intelligence</span>,{" "}
              <span className="text-purple-400">OCR technologies</span>, and{" "}
              <span className="text-purple-400">Cybersecurity</span>, designing intelligent and secure systems.
            </p>
          </div>

          {/* Languages */}
          <div className="mt-10">
            <h3 className="text-white font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <LanguageBadge flag="🇸🇦" text="Arabic — Native" />
              <LanguageBadge flag="🇫🇷" text="French — C1" />
              <LanguageBadge flag="🇬🇧" text="English — B1" />
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-white font-semibold mb-4">Key Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gray-900/50 text-gray-200 text-sm rounded-lg border border-gray-700 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <InfoCard
            icon={<FaCode size={22} />}
            title="Full-Stack Engineering"
            text="Building complete applications from secure backend APIs to modern, performant frontend interfaces using Spring Boot, React, and Next.js."
            color="blue"
          />
          <InfoCard
            icon={<FaShieldAlt size={22} />}
            title="Cybersecurity Mindset"
            text="Focused on secure-by-design principles, API protection, and vulnerability awareness through academic training and hands-on practice."
            color="green"
          />
          <InfoCard
            icon={<FaBrain size={22} />}
            title="AI & OCR Systems"
            text="Designing intelligent document-processing pipelines combining OCR engines with AI models for structured data extraction."
            color="purple"
          />
          <InfoCard
            icon={<FaGlobeAfrica size={22} />}
            title="Mauritanian Tech Profile"
            text="Driven to contribute to the growing African tech ecosystem through research, engineering, and continuous learning."
            color="yellow"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ---------- Reusable Components ---------- */

function InfoCard({
  icon,
  title,
  text,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: "blue" | "green" | "purple" | "yellow";
}) {
  const colors: Record<string, string> = {
    blue: "bg-blue-600/20 text-blue-400",
    green: "bg-green-600/20 text-green-400",
    purple: "bg-purple-600/20 text-purple-400",
    yellow: "bg-yellow-600/20 text-yellow-400",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      className={`flex gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900/40 cursor-pointer transition-all duration-300`}
    >
      <div className={`p-3 rounded-lg ${colors[color]}`}>{icon}</div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

function LanguageBadge({
  flag,
  text,
}: {
  flag: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-800 cursor-default text-sm text-gray-300"
    >
      <span>{flag}</span>
      <span>{text}</span>
    </motion.div>
  );
}
