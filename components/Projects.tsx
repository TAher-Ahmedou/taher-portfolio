"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  FaLock,
  FaRobot,
  FaServer,
  FaUsers,
  FaDocker,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiReact,
  SiNginx,
  SiLinux,
  SiApachekafka,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    title: "PKI Infrastructure & HTTPS Migration",
    description:
      "Designed and deployed a full Public Key Infrastructure using Easy-RSA. Migrated web applications from HTTP to HTTPS with CA-issued certificates, server/client certificates, and security hardening.",
    technologies: ["PKI", "Easy-RSA", "HTTPS", "OpenSSL", "Linux", "Security"],
    icons: [FaLock, FaServer, SiLinux],
    color: "border-red-500",
    bgColor: "bg-gradient-to-br from-red-900/30 to-red-800/20",
  },
  {
    title: "OCR + AI Document Analysis System",
    description:
      "Backend system combining OCR and AI for document analysis, structured data extraction, and microservices architecture with REST APIs.",
    technologies: ["Spring Boot", "OCR", "AI", "Kafka", "MongoDB"],
    icons: [SiSpringboot, FaRobot, SiApachekafka, SiMongodb],
    color: "border-pink-500",
    bgColor: "bg-gradient-to-br from-pink-900/30 to-pink-800/20",
  },
  {
    title: "Visitor Management Platform",
    description:
      "Full-stack visitor management system with image capture, OCR-based ID recognition, automatic visitor creation, and visit tracking.",
    technologies: ["Spring Boot", "React", "OCR", "REST API"],
    icons: [FaUsers, SiSpringboot, SiReact],
    color: "border-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-900/30 to-yellow-800/20",
  },
  {
    title: "Dockerized Full-Stack Deployment",
    description:
      "Containerized deployment of a full-stack application using Docker with Nginx reverse proxy. Ensures scalability, isolation, and smooth DevOps workflow.",
    technologies: ["Docker", "Linux", "Nginx", "DevOps"],
    icons: [FaDocker, SiNginx, SiLinux],
    color: "border-blue-500",
    bgColor: "bg-gradient-to-br from-blue-900/30 to-blue-800/20",
  },
];

export default function Projects() {
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-6 py-20" yOffset={50}>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold mb-6 text-white text-center tracking-tight"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-12 text-center max-w-3xl mx-auto"
      >
        Personal and technical projects focusing on backend development, security,
        system design, and modern web technologies, showcased with cloud and
        containerized environments.
      </motion.p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
            className={`border-l-4 rounded-xl p-6 ${project.color} ${project.bgColor} backdrop-blur-md transition-all duration-300`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-300 font-medium">{project.title}</span>
              <div className="flex gap-2">
                {project.icons.map((Icon, i) => (
                  <Icon
                    key={i}
                    size={22}
                    className="text-gray-300 hover:text-white transition-colors"
                  />
                ))}
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800/60 border border-gray-700 text-gray-200 font-medium hover:bg-indigo-500 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
