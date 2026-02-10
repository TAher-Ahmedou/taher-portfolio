"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaShoppingCart,
  FaUsers,
  FaCloud,
  FaLock,
  FaKey,
  FaServer,
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
  SiAngular,
  SiAmazonaws,
} from "react-icons/si";

/* =======================
   Academic & Master Projects
======================= */
const projects = [
  // =======================
  // MASTER (M1)
  // =======================
  {
    title: "Public Key Infrastructure (PKI) with Easy-RSA",
    description:
      "Design and implementation of a Public Key Infrastructure (PKI) using Easy-RSA. The project covers certificate authority (CA) setup, key generation, certificate signing, revocation management (CRL), and secure authentication principles.",
    semester: "M1 - Ongoing",
    technologies: ["PKI", "Easy-RSA", "OpenSSL", "Cyber Security"],
    icons: [FaLock, FaKey, FaServer],
    color: "border-red-500",
    bgColor: "bg-gradient-to-br from-red-900/30 to-red-800/20",
  },

  // =======================
  // L3
  // =======================
  {
    title: "OCR + AI Application",
    description:
      "Advanced OCR-based application to extract and analyze text from documents using AI and Elasticsearch for intelligent data processing.",
    semester: "L3 - Semester 5",
    technologies: ["Spring Boot", "React", "OCR", "AI", "Elasticsearch", "Kafka"],
    icons: [SiSpringboot, SiElasticsearch, SiApachekafka],
    color: "border-pink-500",
    bgColor: "bg-gradient-to-br from-pink-900/30 to-pink-800/20",
  },
  {
    title: "Visitor Management System",
    description:
      "Visitor management system with OCR recognition, Spring Boot backend, React interface, and mobile integration.",
    semester: "L3 - Semester 6",
    technologies: ["Spring Boot", "React", "OCR"],
    icons: [SiSpringboot, FaUsers],
    color: "border-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-900/30 to-yellow-800/20",
  },
  {
    title: "Spring Boot & Angular Cloud Project",
    description:
      "Full-stack project with Spring Boot and Angular, deployed on AWS Academy cloud services.",
    semester: "L3 - Semester 6",
    technologies: ["Spring Boot", "Angular", "AWS Academy"],
    icons: [SiSpringboot, SiAngular, SiAmazonaws, FaCloud],
    color: "border-cyan-500",
    bgColor: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20",
  },
  {
    title: "Big Data Exercises",
    description:
      "Hands-on exercises using Apache Kafka and MongoDB for real-time data streaming and NoSQL data management.",
    semester: "L3 - Semester 5",
    technologies: ["Kafka", "MongoDB", "Big Data"],
    icons: [SiApachekafka, SiMongodb, FaDatabase],
    color: "border-blue-500",
    bgColor: "bg-gradient-to-br from-blue-900/30 to-blue-800/20",
  },

  // =======================
  // L2
  // =======================
  {
    title: "Stock Management Application (Internship – IPN)",
    description:
      "Internship project focused on inventory management, product tracking, and reporting.",
    semester: "L2 - Internship",
    technologies: ["Database", "Stock Management"],
    icons: [FaDatabase],
    color: "border-emerald-500",
    bgColor: "bg-gradient-to-br from-emerald-900/30 to-emerald-800/20",
  },
  {
    title: "SMS Management System",
    description:
      "SMS service management application built with PHP CodeIgniter and Oracle database.",
    semester: "L2 - Semesters 3-4",
    technologies: ["PHP", "CodeIgniter", "Oracle"],
    icons: [SiCodeigniter, SiOracle],
    color: "border-purple-500",
    bgColor: "bg-gradient-to-br from-purple-900/30 to-purple-800/20",
  },
  {
    title: "Client Management Application",
    description:
      "Java EE application deployed on Apache Tomcat for managing client data.",
    semester: "L2 - Semester 4",
    technologies: ["Java EE", "Apache Tomcat"],
    icons: [SiApachetomcat, FaUsers],
    color: "border-green-500",
    bgColor: "bg-gradient-to-br from-green-900/30 to-green-800/20",
  },

  // =======================
  // L1
  // =======================
  {
    title: "E-commerce Boutique",
    description:
      "Online store developed with PrestaShop including product and order management.",
    semester: "L1 - Semester 2",
    technologies: ["PrestaShop", "E-commerce"],
    icons: [SiPrestashop, FaShoppingCart],
    color: "border-orange-500",
    bgColor: "bg-gradient-to-br from-orange-900/30 to-orange-800/20",
  },
  {
    title: "Static Website",
    description:
      "Static website developed using HTML and CSS to learn web fundamentals.",
    semester: "L1 - Semester 1",
    technologies: ["HTML", "CSS"],
    icons: [],
    color: "border-gray-500",
    bgColor: "bg-gradient-to-br from-gray-800/20 to-gray-700/10",
  },
];

/* =======================
   Colors by academic level
======================= */
const yearColors: Record<string, string> = {
  M1: "bg-red-500",
  L3: "bg-blue-500",
  L2: "bg-green-500",
  L1: "bg-orange-500",
};

export default function AcademicProjects() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const filteredProjects = selectedYear
    ? projects.filter((p) => p.semester.startsWith(selectedYear))
    : projects;

  return (
    <section id="academic-projects" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-6 text-white text-center"
      >
        Academic & Master Projects
      </motion.h2>

      <p className="text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        Academic and practical projects developed during my Licence and ongoing Master (M1) in Cyber Security.
      </p>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.entries(yearColors).map(([year, color]) => (
          <button
            key={year}
            onClick={() => setSelectedYear(selectedYear === year ? null : year)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedYear === year
                ? `${color} text-white scale-110`
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`border-l-4 rounded-xl p-6 ${project.color} ${project.bgColor}`}
          >
            <span className="text-xs text-gray-300">{project.semester}</span>
            <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
