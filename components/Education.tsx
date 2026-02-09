"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface EducationItemProps {
  title: string;
  location?: string;
  period?: string;
  description?: string;
  color?: string;
  icon?: JSX.Element;
  badges?: string[];
}

const EducationItem = ({
  title,
  location,
  period,
  description,
  color = "border-gray-700",
  icon,
  badges,
}: EducationItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`relative border-l-4 ${color} pl-8 py-6 group hover:scale-[1.03] transition-transform`}
  >
    {/* Icon circle */}
    <div className="absolute -left-4 top-0 w-8 h-8 bg-gray-900/50 border border-gray-700 rounded-full flex items-center justify-center text-white group-hover:bg-gradient-to-tr from-blue-500 to-cyan-400 transition-all">
      {icon}
    </div>

    {/* Title */}
    <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>

    {/* Location & Period */}
    {(location || period) && (
      <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm md:text-base">
        {location && (
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt size={14} /> <span>{location}</span>
          </div>
        )}
        {period && (
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={14} /> <span>{period}</span>
          </div>
        )}
      </div>
    )}

    {/* Description */}
    {description && (
      <p className="text-gray-400 mt-3 leading-relaxed md:text-base text-sm">{description}</p>
    )}

    {/* Badges */}
    {badges && badges.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs md:text-sm rounded-full border border-gray-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            {badge}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

export default function Education() {
  return (
    <section className="section max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Education & Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="section-subtitle"
      >
        A summary of my academic journey and professional certifications.
      </motion.p>

      <div className="space-y-12">
        {/* Master */}
        <EducationItem
          title="Master’s in Cyber Security"
          location="SupNum Institute — Mauritania"
          period="2024 – Present"
          description="Focused on secure system design, network security, API hardening, authentication, and ethical hacking. Actively participating in CTF challenges and cybersecurity labs."
          color="border-blue-500"
          icon={<FaGraduationCap size={16} />}
        />

        {/* Licence */}
        <EducationItem
          title="Bachelor in Computer Science"
          location="SupNum Institute — Mauritania"
          period="2021 – 2024"
          description="Comprehensive education in web development, backend systems, OCR applications, databases, and software engineering principles."
          color="border-gray-500"
          icon={<FaGraduationCap size={16} />}
          badges={["L1 → L3", "GPA: Mention Bien"]}
        />

        {/* Certifications */}
        <EducationItem
          title="Certifications & Trainings"
          color="border-purple-500"
          icon={<FaCertificate size={16} />}
          badges={[
            "UI/UX Design with Figma – Udemy (2024)",
            "Digital Marketing Training – Yamina Prod Enterprise (2023)",
            "Adobe Creative Suite – Startup Cube, SupNum (2022)",
          ]}
        />
      </div>
    </section>
  );
}
