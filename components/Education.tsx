"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface EducationItemProps {
  title: string;
  location: string;
  period: string;
  description: string;
  color?: string;
  icon?: JSX.Element;
  badges?: string[];
}

const EducationItem = ({ title, location, period, description, color = "border-gray-700", icon, badges }: EducationItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`border-l-4 ${color} pl-6 relative group hover:scale-[1.01] transition-transform`}
  >
    <div className="absolute -left-3 top-0 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <div className="flex items-center gap-4 mt-2 text-gray-400 flex-wrap">
      <div className="flex items-center gap-2"><FaMapMarkerAlt size={14} /> <span>{location}</span></div>
      <div className="flex items-center gap-2"><FaCalendarAlt size={14} /> <span>{period}</span></div>
    </div>
    <p className="text-gray-400 mt-3">{description}</p>
    {badges && badges.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span key={badge} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full">{badge}</span>
        ))}
      </div>
    )}
  </motion.div>
);

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-white"
      >
        Education & Certifications
      </motion.h2>

      <div className="space-y-10">
        {/* Master */}
        <EducationItem
          title="Master in Cyber Security"
          location="SupNum Institute — Mauritania"
          period="2024 – Present"
          description="Focus on secure systems design, network security, API protection, authentication/authorization systems, and cyber security fundamentals. Currently exploring ethical hacking and CTF challenges."
          color="border-blue-600"
          icon={<FaGraduationCap size={12} />}
        />

        {/* Licence */}
        <EducationItem
          title="Licence in Computer Science"
          location="SupNum Institute — Mauritania"
          period="2021 – 2024"
          description="Comprehensive computer science education with hands-on projects in web development, backend systems, OCR applications, big data, databases, and software engineering principles."
          color="border-gray-700"
          icon={<FaGraduationCap size={12} />}
          badges={["L1 → L3", "GPA: Mention Bien"]}
        />

        {/* Certifications */}
        <EducationItem
          title="Certifications & Trainings"
          location=""
          period=""
          description=""
          color="border-gray-700"
          icon={<FaCertificate size={12} />}
          badges={[
            "UI/UX Design with Figma - Udemy (2024)",
            "Digital Marketing Training - Yamina Prod Enterprise (2023)",
            "Adobe Creative Suite - Startup Cube, SupNum (2022)",
          ]}
        />
      </div>
    </section>
  );
}
