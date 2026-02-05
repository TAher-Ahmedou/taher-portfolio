"use client";

import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaBrain, FaGlobeAfrica } from "react-icons/fa";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 leading-relaxed mb-4">
            I m <span className="text-white font-semibold">Taher Ahmedou</span>, 
            a Mauritanian Backend & Full-Stack Developer and Master s student 
            in Cyber Security at SupNum Institute.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            My journey in computer science began with web development fundamentals 
            and evolved into building complex backend systems with Spring Boot, 
            OCR-powered applications, and secure software solutions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I m passionate about the intersection of AI, OCR technology, 
            and cybersecurity. I enjoy solving complex problems with elegant 
            code solutions and building reliable, scalable systems.
          </p>

          {/* Languages */}
          <div className="mt-8">
            <h3 className="text-white font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg">
                <span className="text-lg">🇸🇦</span>
                <span className="text-gray-300">Arabic (Native)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg">
                <span className="text-lg">🇫🇷</span>
                <span className="text-gray-300">French (C1)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg">
                <span className="text-lg">🇬🇧</span>
                <span className="text-gray-300">English (B1)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <FaCode className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Full-Stack Development</h3>
              <p className="text-gray-400 text-sm">
                Building complete applications from backend APIs to frontend interfaces
                using modern technologies like Spring Boot and React.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl">
            <div className="p-3 bg-green-600/20 rounded-lg">
              <FaShieldAlt className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Cyber Security Focus</h3>
              <p className="text-gray-400 text-sm">
                Currently specializing in secure software design, API security, 
                and cyber security principles as part of my Master s degree.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl">
            <div className="p-3 bg-purple-600/20 rounded-lg">
              <FaBrain className="text-purple-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">AI & OCR Integration</h3>
              <p className="text-gray-400 text-sm">
                Passionate about integrating OCR technology with AI for intelligent
                text processing, summarization, and semantic analysis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl">
            <div className="p-3 bg-yellow-600/20 rounded-lg">
              <FaGlobeAfrica className="text-yellow-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Mauritanian Developer</h3>
              <p className="text-gray-400 text-sm">
                Contributing to the growing tech ecosystem in Mauritania through
                academic projects and continuous learning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}