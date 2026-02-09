"use client";

import { motion } from "framer-motion";
import { FaJava, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaDatabase, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiSpringboot, SiCodeigniter, SiNextdotjs, SiTailwindcss, SiApachekafka, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

const skills = {
  backend: [
    { name: "Java", icon: FaJava, color: "text-blue-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "PHP", icon: FaPhp, color: "text-purple-500" },
    { name: "CodeIgniter", icon: SiCodeigniter, color: "text-red-400" },
  ],
  frontend: [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  ],
  tools: [
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Kafka", icon: SiApachekafka, color: "text-yellow-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "Linux", icon: FaLinux, color: "text-gray-300" },
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="glass-effect p-6 border border-gray-800 hover:scale-105 transition-transform shadow-md"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              {category === "backend" && <FaDatabase className="text-blue-500" />}
              {category === "frontend" && <FaReact className="text-cyan-400" />}
              {category === "tools" && <FaDocker className="text-blue-400" />}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-2 gap-3"
            >
              {skillList.map((skill) => (
                <motion.li
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:shadow-lg transition-colors cursor-default"
                  title={skill.name}
                >
                  <skill.icon className={`${skill.color} text-2xl`} />
                  <span className="font-medium">{skill.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
