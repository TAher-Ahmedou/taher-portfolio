"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaPhp,
  FaShoppingCart,
  FaSms,
  FaUsers,
  FaRobot,
  FaDoorOpen,
  FaDatabase,
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

const projects = [
  {
    title: "OCR + AI Application",
    description:
      "Advanced application for text extraction using OCR, with AI-powered text summarization and semantic analysis. Built with Spring Boot, React, Elasticsearch, and Kafka.",
    semester: "L3 - Semester 5",
    technologies: ["Spring Boot", "React", "OCR", "AI", "Elasticsearch", "Kafka"],
    icons: [SiSpringboot, FaReact, FaRobot, SiElasticsearch, SiApachekafka],
    color: "border-pink-500 hover:border-pink-600",
    bgColor: "bg-pink-900/20",
  },
  {
    title: "Visitor Management System",
    description:
      "Comprehensive visitor management system with OCR-based visitor recognition. Includes Spring Boot backend, React web interface, and mobile application.",
    semester: "L3 - Semester 6",
    technologies: ["Spring Boot", "React", "Mobile", "OCR"],
    icons: [SiSpringboot, FaReact, FaDoorOpen],
    color: "border-yellow-500 hover:border-yellow-600",
    bgColor: "bg-yellow-900/20",
  },
  {
    title: "SMS Management System",
    description:
      "PHP application developed with CodeIgniter for managing SMS services using Oracle database. Developed across semesters 3 and 4.",
    semester: "L2 - Semesters 3-4",
    technologies: ["PHP", "CodeIgniter", "Oracle", "Git"],
    icons: [FaPhp, SiCodeigniter, SiOracle],
    color: "border-purple-500 hover:border-purple-600",
    bgColor: "bg-purple-900/20",
  },
  {
    title: "Client Management Application",
    description:
      "Java EE application for client management using Apache Tomcat server. Developed during semester 4.",
    semester: "L2 - Semester 4",
    technologies: ["Java EE", "JEE", "Apache Tomcat"],
    icons: [FaJava, SiApachetomcat, FaUsers],
    color: "border-green-500 hover:border-green-600",
    bgColor: "bg-green-900/20",
  },
  {
    title: "E-commerce Boutique",
    description:
      "Online store built with PrestaShop for semester 2 project. Implemented product management and basic e-commerce functionality.",
    semester: "L1 - Semester 2",
    technologies: ["PrestaShop", "E-commerce"],
    icons: [SiPrestashop, FaShoppingCart],
    color: "border-orange-500 hover:border-orange-600",
    bgColor: "bg-orange-900/20",
  },
  {
    title: "Big Data Exercises",
    description:
      "Practical exercises with Apache Kafka and NoSQL databases (MongoDB) for big data processing and management.",
    semester: "L3 - Semester 5",
    technologies: ["Kafka", "MongoDB", "NoSQL", "Big Data"],
    icons: [SiApachekafka, SiMongodb, FaDatabase],
    color: "border-blue-500 hover:border-blue-600",
    bgColor: "bg-blue-900/20",
  },
];

// Couleurs pour légende années
const yearColors: Record<string, string> = {
  L1: "bg-orange-500",
  L2: "bg-green-500",
  L3: "bg-blue-500",
};

export default function AcademicProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
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
          <div key={year} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full ${color}`}></div>
            <span className="text-gray-400 text-sm">{year}</span>
          </div>
        ))}
      </div>

      {/* Cartes projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, y: -5 }}
            className={`border rounded-xl p-6 transition-all duration-300 ${project.color} ${project.bgColor} hover:shadow-lg`}
          >
            {/* Header carte */}
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                {project.semester}
              </span>
              <div className="flex gap-2">
                {project.icons.map((Icon, i) => (
                  <Icon key={i} className="text-gray-400" size={18} />
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
                  className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Résumé parcours académique */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 p-6 bg-gray-900/30 rounded-xl border border-gray-800"
      >
        <h3 className="text-xl font-semibold text-white mb-6 text-center">
          Academic Journey Summary
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-orange-400 font-semibold mb-2 text-lg">L1 - First Year</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Static Website (HTML/CSS)</li>
              <li>• E-commerce with PrestaShop</li>
              <li>• Web Development Fundamentals</li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold mb-2 text-lg">L2 - Second Year</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• SMS Management System (PHP/Oracle)</li>
              <li>• Client Management (Java EE/Tomcat)</li>
              <li>• Adobe Suite Training</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-2 text-lg">L3 - Third Year</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• OCR + AI Application (Spring Boot/React)</li>
              <li>• Visitor Management System</li>
              <li>• Big Data with Kafka & MongoDB</li>
              <li>• UI/UX Certification (Figma)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
