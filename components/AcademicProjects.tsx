"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaDoorOpen,
  FaUsers,
  FaDatabase,
  FaShoppingCart,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiCodeigniter,
  SiOracle,
  SiApachetomcat,
  SiElasticsearch,
  SiMongodb,
  SiPrestashop,
  SiApachekafka,
} from "react-icons/si";

// Liste des projets
const projects = [
  {
    title: "OCR + AI Application",
    description:
      "Advanced application for text extraction using OCR, with AI-powered text summarization and semantic analysis. Built with Spring Boot, React, Elasticsearch, and Kafka.",
    semester: "L3 - Semester 5",
    technologies: ["Spring Boot", "React", "OCR", "AI", "Elasticsearch", "Kafka"],
    icons: [SiSpringboot, FaRobot, FaDatabase, SiElasticsearch, SiApachekafka],
    color: "border-pink-500",
    bgColor: "bg-pink-900/20",
  },
  {
    title: "Visitor Management System",
    description:
      "Comprehensive visitor management system with OCR-based visitor recognition. Includes Spring Boot backend, React web interface, and mobile application.",
    semester: "L3 - Semester 6",
    technologies: ["Spring Boot", "React", "Mobile", "OCR"],
    icons: [SiSpringboot, FaDoorOpen, FaUsers],
    color: "border-yellow-500",
    bgColor: "bg-yellow-900/20",
  },
  {
    title: "SMS Management System",
    description:
      "PHP application developed with CodeIgniter for managing SMS services using Oracle database. Developed across semesters 3 and 4.",
    semester: "L2 - Semesters 3-4",
    technologies: ["PHP", "CodeIgniter", "Oracle", "Git"],
    icons: [SiCodeigniter, SiOracle],
    color: "border-purple-500",
    bgColor: "bg-purple-900/20",
  },
  {
    title: "Client Management Application",
    description:
      "Java EE application for client management using Apache Tomcat server. Developed during semester 4.",
    semester: "L2 - Semester 4",
    technologies: ["Java EE", "JEE", "Apache Tomcat"],
    icons: [SiApachetomcat, FaUsers],
    color: "border-green-500",
    bgColor: "bg-green-900/20",
  },
  {
    title: "E-commerce Boutique",
    description:
      "Online store built with PrestaShop for semester 2 project. Implemented product management and basic e-commerce functionality.",
    semester: "L1 - Semester 2",
    technologies: ["PrestaShop", "E-commerce"],
    icons: [SiPrestashop, FaShoppingCart],
    color: "border-orange-500",
    bgColor: "bg-orange-900/20",
  },
  {
    title: "Big Data Exercises",
    description:
      "Practical exercises with Apache Kafka and NoSQL databases (MongoDB) for big data processing and management.",
    semester: "L3 - Semester 5",
    technologies: ["Kafka", "MongoDB", "NoSQL", "Big Data"],
    icons: [SiApachekafka, SiMongodb, FaDatabase],
    color: "border-blue-500",
    bgColor: "bg-blue-900/20",
  },
];

// Couleurs années
const yearColors: Record<string, string> = {
  L1: "bg-orange-500",
  L2: "bg-green-500",
  L3: "bg-blue-500",
};

export default function AcademicProjects() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Filtrer projets selon année
  const filteredProjects = selectedYear
    ? projects.filter((p) => p.semester.startsWith(selectedYear))
    : projects;

  return (
    <AnimatedSection className="max-w-6xl mx-auto px-6 py-20" yOffset={50}>
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4 text-white text-center"
      >
        Academic Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-10 text-center max-w-3xl mx-auto"
      >
        Projects developed during my Licence degree at SupNum Institute,
        organized by academic year.
      </motion.p>

      {/* Légende interactive années */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {Object.entries(yearColors).map(([year, color]) => (
          <div
            key={year}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setSelectedYear(selectedYear === year ? null : year)}
          >
            <div
              className={`w-4 h-4 rounded-full ${color} transition-transform ${
                selectedYear === year ? "scale-125" : ""
              }`}
            ></div>
            <span
              className={`text-sm ${
                selectedYear === year ? "text-white font-semibold" : "text-gray-400"
              }`}
            >
              {year}
            </span>
          </div>
        ))}
      </div>

      {/* Cartes projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 15px 25px rgba(0,0,0,0.4)",
            }}
            className={`border rounded-xl p-6 transition-all duration-300 cursor-pointer ${project.color} ${project.bgColor}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full">
                {project.semester}
              </span>
              <div className="flex gap-2">
                {project.icons.map((Icon, i) => (
                  <Icon
                    key={i}
                    className="text-gray-400"
                    size={18}
                    title={project.technologies[i] || ""}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/70 text-gray-200 text-xs rounded-full border border-gray-700 hover:bg-blue-500 hover:text-white transition-all"
                  title={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Résumé parcours académique */}
      <AnimatedSection className="mt-16 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">
          Academic Journey Summary
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-orange-400 font-semibold mb-2 text-lg">L1 - First Year</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Static Website (HTML/CSS)</li>
              <li>• E-commerce with PrestaShop</li>
              <li>• Web Development Fundamentals</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-green-400 font-semibold mb-2 text-lg">L2 - Second Year</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• SMS Management System (PHP/Oracle)</li>
              <li>• Client Management (Java EE/Tomcat)</li>
              <li>• Adobe Suite Training</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-blue-400 font-semibold mb-2 text-lg">L3 - Third Year</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• OCR + AI Application (Spring Boot/React)</li>
              <li>• Visitor Management System</li>
              <li>• Big Data with Kafka & MongoDB</li>
              <li>• UI/UX Certification (Figma)</li>
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>
    </AnimatedSection>
  );
}
