"use client";

import { motion } from "framer-motion";
import { FaReact, FaJava, FaPhp, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { SiSpringboot, SiCodeigniter, SiElasticsearch, SiApachekafka } from "react-icons/si";

const projects = [
  {
    title: "OCR + AI Application",
    description:
      "Spring Boot & React application that extracts text from images, performs summarization and semantic analysis using OCR and AI.",
    technologies: ["Spring Boot", "React", "OCR", "Kafka", "Elasticsearch"],
    icons: [SiSpringboot, FaReact, SiApachekafka, SiElasticsearch],
    color: "border-pink-500 hover:border-pink-600",
    bgColor: "bg-pink-900/20",
  },
  {
    title: "Visitor Management System",
    description:
      "A system for managing visitors with web and mobile interfaces, including OCR-based visitor recognition.",
    technologies: ["Spring Boot", "React", "Mobile", "OCR"],
    icons: [SiSpringboot, FaReact, FaMobileAlt],
    color: "border-yellow-500 hover:border-yellow-600",
    bgColor: "bg-yellow-900/20",
  },
  {
    title: "SMS Management System",
    description:
      "PHP application developed with CodeIgniter for managing SMS services using Oracle database.",
    technologies: ["PHP", "CodeIgniter", "Oracle", "Git"],
    icons: [FaPhp, SiCodeigniter, FaDatabase],
    color: "border-purple-500 hover:border-purple-600",
    bgColor: "bg-purple-900/20",
  },
  {
    title: "Client Management Application",
    description:
      "Java EE application deployed on Apache Tomcat for managing clients.",
    technologies: ["Java EE", "Tomcat", "MVC"],
    icons: [FaJava],
    color: "border-green-500 hover:border-green-600",
    bgColor: "bg-green-900/20",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`border rounded-xl p-6 transition-all duration-300 ${project.color} ${project.bgColor} hover:shadow-lg`}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex gap-3 mt-2">
              {project.icons.map((Icon, i) => (
                <Icon key={i} size={20} className="text-gray-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
