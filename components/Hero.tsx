"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const techs = [
    "Spring Boot",
    "React",
    "Docker",
    "MongoDB",
    "Kafka",
    "OCR",
    "AI",
    "Cyber Security",
    "AWS",
    "Angular"
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={container}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto z-10">

        {/* Nom */}
       <motion.h1
          variants={item}
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Taher Ahmedou
        </motion.h1>

        {/* Titre */}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-semibold text-white mb-2"
        >
          Backend & Full-Stack Developer
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Master Student in <span className="text-cyan-400 font-semibold">Cyber Security</span> — SupNum Institute, Mauritania
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
        >
          Specializing in <span className="text-cyan-400 font-semibold">secure backend systems</span>, 
          <span className="text-purple-400 font-semibold"> OCR & AI-powered applications</span>, and 
          <span className="text-blue-400 font-semibold"> scalable cloud solutions</span> using Spring Boot, React, Angular, Docker, Kafka, and AWS.
        </motion.p>

        {/* Technologies */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-12"
        >
          {techs.map((tech) => (
            <motion.span
              key={tech}
              variants={item}
              whileHover={{ scale: 1.12, y: -5, boxShadow: "0 0 15px rgba(59,130,246,0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 bg-gray-800/50 backdrop-blur-md rounded-lg text-gray-300 border border-gray-700 text-sm sm:text-base hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:shadow-lg transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Boutons */}
        <motion.div
          variants={container}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            variants={item}
            href="https://github.com/TAher-Ahmedou"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center gap-2 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaGithub /> GitHub
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.canva.com/design/DAGdWFSYNZ4/lNRNtCAngTXzqDBgv8eCyw/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center gap-2 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            My CV
          </motion.a>

          <motion.a
            variants={item}
            href="https://linkedin.com/in/taher-ahmedou-39ba642bb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl flex items-center gap-2 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <FaLinkedin /> LinkedIn
          </motion.a>

          <motion.a
            variants={item}
            href="#contact"
            className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-xl flex items-center gap-2 font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll down hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown size={28} className="text-gray-400 animate-bounce" />
      </motion.div>
    </motion.section>
  );
}
