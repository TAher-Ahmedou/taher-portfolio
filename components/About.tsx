"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaCode, FaShieldAlt, FaBrain, FaGlobeAfrica } from "react-icons/fa";

export default function About() {
  // Motion values pour l'effet 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotation en fonction de la souris
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Profile Photo with 3D Hover */}
          <div className="flex justify-center mb-8">
            <motion.div
              style={{ rotateX, rotateY, perspective: 800 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const posX = e.clientX - rect.left - rect.width / 2;
                const posY = e.clientY - rect.top - rect.height / 2;
                x.set(posX);
                y.set(posY);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-xl"
            >
              <Image
                src="/images/test.jpeg"
                alt="Taher Ahmedou"
                fill
                priority
                className="object-cover"
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ boxShadow: "0px 0px 40px rgba(59,130,246,0.6)" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-4">
            I’m <span className="text-white font-semibold">Taher Ahmedou</span>, a
            Mauritanian <span className="text-blue-400">Backend & Full-Stack Developer</span>{" "}
            and Master’s student in <span className="text-green-400">Cyber Security</span>{" "}
            at SupNum Institute.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            My journey in computer science started with web development fundamentals
            and evolved into building robust backend systems using Spring Boot,
            OCR-powered applications, and secure APIs.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I’m passionate about the intersection of{" "}
            <span className="text-purple-400">AI</span>,{" "}
            <span className="text-purple-400">OCR technologies</span>, and{" "}
            <span className="text-purple-400">cybersecurity</span>. I enjoy solving
            complex problems and designing scalable, reliable software systems.
          </p>

          {/* Languages */}
          <div className="mt-10">
            <h3 className="text-white font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg">
                <span>🇸🇦</span>
                <span className="text-gray-300">Arabic (Native)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg">
                <span>🇫🇷</span>
                <span className="text-gray-300">French (C1)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg">
                <span>🇬🇧</span>
                <span className="text-gray-300">English (B1)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Card 1 */}
          <InfoCard
            icon={<FaCode size={24} />}
            title="Full-Stack Development"
            text="Designing and building complete applications from backend APIs to modern frontend interfaces using Spring Boot, React, and Next.js."
            color="blue"
          />

          {/* Card 2 */}
          <InfoCard
            icon={<FaShieldAlt size={24} />}
            title="Cyber Security Focus"
            text="Specialized in secure software design, API security, and cybersecurity best practices as part of my Master’s studies."
            color="green"
          />

          {/* Card 3 */}
          <InfoCard
            icon={<FaBrain size={24} />}
            title="AI & OCR Integration"
            text="Passionate about combining OCR technology with AI models to extract, analyze, and structure information intelligently."
            color="purple"
          />

          {/* Card 4 */}
          <InfoCard
            icon={<FaGlobeAfrica size={24} />}
            title="Mauritanian Developer"
            text="Proud to contribute to the growing tech ecosystem in Mauritania through academic projects, innovation, and continuous learning."
            color="yellow"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
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
  const colors: any = {
    blue: "bg-blue-600/20 text-blue-400",
    green: "bg-green-600/20 text-green-400",
    purple: "bg-purple-600/20 text-purple-400",
    yellow: "bg-yellow-600/20 text-yellow-400",
  };

  return (
    <div className="flex items-start gap-4 p-5 bg-gray-900/30 rounded-xl">
      <div className={`p-3 rounded-lg ${colors[color]}`}>{icon}</div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
}
