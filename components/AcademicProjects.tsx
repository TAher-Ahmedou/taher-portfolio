"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaDoorOpen,
  FaUsers,
  FaDatabase,
  FaShoppingCart,
  FaCloud,
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
   Liste des projets
======================= */
const projects = [
  {
    title: "OCR + AI Application",
    description:
      "Advanced OCR-based application to extract and analyze text from documents using AI and Elasticsearch for intelligent data processing.",
    semester: "L3 - Semester 5",
    technologies: ["Spring Boot", "React", "OCR", "AI", "Elasticsearch", "Kafka"],
    icons: [SiSpringboot, FaRobot, SiElasticsearch, SiApachekafka],
    color: "border-pink-500",
    bgColor: "bg-gradient-to-br from-pink-900/30 to-pink-800/20",
  },
  {
    title: "Visitor Management System",
    description:
      "Visitor management system with OCR recognition, Spring Boot backend, React interface, and mobile integration for seamless access control.",
    semester: "L3 - Semester 6",
    technologies: ["Spring Boot", "React", "OCR", "Mobile"],
    icons: [SiSpringboot, FaDoorOpen, FaUsers],
    color: "border-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-900/30 to-yellow-800/20",
  },
  {
    title: "Spring Boot & Angular Cloud Project",
    description:
      "Full-stack project with Spring Boot and Angular, deployed on AWS Academy cloud services for secure and scalable data management.",
    semester: "L3 - Semester 6",
    technologies: ["Spring Boot", "Angular", "AWS Academy", "Cloud"],
    icons: [SiSpringboot, SiAngular, SiAmazonaws, FaCloud],
    color: "border-cyan-500",
    bgColor: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20",
  },
  {
    title: "Big Data Exercises",
    description:
      "Hands-on exercises with Apache Kafka and MongoDB, focusing on real-time streaming, NoSQL databases, and big data processing.",
    semester: "L3 - Semester 5",
    technologies: ["Kafka", "MongoDB", "NoSQL", "Big Data"],
    icons: [SiApachekafka, SiMongodb, FaDatabase],
    color: "border-blue-500",
    bgColor: "bg-gradient-to-br from-blue-900/30 to-blue-800/20",
  },
  {
    title: "Stock Management Application (Internship – IPN)",
    description:
      "Internship project at IPN: Stock management system handling products, entries, exits, and reports for efficient inventory control.",
    semester: "L2 - Internship",
    technologies: ["Application Design", "Database", "Stock Management"],
    icons: [FaDatabase],
    color: "border-emerald-500",
    bgColor: "bg-gradient-to-br from-emerald-900/30 to-emerald-800/20",
  },
  {
    title: "SMS Management System",
    description:
      "SMS service management application built with PHP CodeIgniter and Oracle database for automated messaging.",
    semester: "L2 - Semesters 3-4",
    technologies: ["PHP", "CodeIgniter", "Oracle"],
    icons: [SiCodeigniter, SiOracle],
    color: "border-purple-500",
    bgColor: "bg-gradient-to-br from-purple-900/30 to-purple-800/20",
  },
  {
    title: "Client Management Application",
    description:
      "Java EE client management system deployed on Apache Tomcat server, handling client records and reporting.",
    semester: "L2 - Semester 4",
    technologies: ["Java EE", "Apache Tomcat"],
    icons: [SiApachetomcat, FaUsers],
    color: "border-green-500",
    bgColor: "bg-gradient-to-br from-green-900/30 to-green-800/20",
  },
  {
    title: "E-commerce Boutique",
    description:
      "Online store built with PrestaShop, implementing product catalog, order management, and basic e-commerce functionality.",
    semester: "L1 - Semester 2",
    technologies: ["PrestaShop", "E-commerce"],
    icons: [SiPrestashop, FaShoppingCart],
    color: "border-orange-500",
    bgColor: "bg-gradient-to-br from-orange-900/30 to-orange-800/20",
  },
  {
    title: "Static Website",
    description:
      "First year project: Static website built with HTML and CSS, demonstrating web fundamentals and layout skills.",
    semester: "L1 - Semester 1",
    technologies: ["HTML", "CSS"],
    icons: [],
    color: "border-gray-500",
    bgColor: "bg-gradient-to-br from-gray-800/20 to-gray-700/10",
  },
];

/* =======================
   Couleurs par année
======================= */
const yearColors: Record<string, string> = {
  L1: "bg-orange-500",
  L2: "bg-green-500",
  L3: "bg-blue-500",
};
export default function AcademicProjects() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filtrer les projets par année
  const filteredProjects = selectedYear
    ? projects.filter((p) => p.semester.startsWith(selectedYear))
    : projects;

  // Scroll automatique si hash dans l'URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#academic-projects" && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  return (
    <div ref={sectionRef} id="academic-projects">
      <AnimatedSection className="max-w-6xl mx-auto px-6 py-20" yOffset={50}>
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 text-white text-center tracking-tight"
        >
          Academic Projects
        </motion.h2>

        <p className="text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Projects developed throughout my Licence degree, showcasing web, backend, cloud, and big data expertise.
        </p>

        {/* Filtre années */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(yearColors).map(([year, color]) => (
            <button
              key={year}
              onClick={() => setSelectedYear(selectedYear === year ? null : year)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedYear === year
                  ? `${color} text-white scale-110 shadow-lg`
                  : "bg-gray-800 text-gray-300 hover:scale-105 hover:bg-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Cartes projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              }}
              className={`border-l-4 rounded-xl p-6 ${project.color} ${project.bgColor} backdrop-blur-md`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-300 font-medium">{project.semester}</span>
                <div className="flex gap-2">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} size={20} className="text-gray-300 hover:text-white transition-colors" />
                  ))}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-800/60 rounded-full text-gray-200 font-medium hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
