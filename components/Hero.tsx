"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const techs = ["Spring Boot", "React", "Docker", "MongoDB", "Kafka", "OCR", "AI", "Cyber Security"];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative"
    >
      <div className="max-w-3xl mx-auto">

        {/* Nom */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Taher Ahmedou
          </span>
        </motion.h1>

        {/* Titre */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-2"
        >
          Backend & Full-Stack Developer
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-300 mb-6"
        >
          Master Student in Cyber Security — SupNum Institute, Mauritania
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
        >
          Specializing in secure backend systems, OCR-powered applications, and scalable solutions with Spring Boot, React, and modern cloud technologies.
        </motion.p>

        {/* Technologies */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 mb-10"
        >
          {techs.map((tech, index) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-300 border border-gray-700 cursor-default text-sm sm:text-base"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Boutons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://github.com/TAher-Ahmedou"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all flex items-center gap-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaGithub /> GitHub
          </a>
          
          <a
            href="https://linkedin.com/in/taher-ahmedou-39ba642bb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all flex items-center gap-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <FaLinkedin /> LinkedIn
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll down hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown size={20} />
      </motion.div>
    </motion.section>
  );
}
