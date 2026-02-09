"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const buttons = [
    {
      label: "Email",
      href: "mailto:taher45ahmedou@gmail.com",
      icon: FaEnvelope,
      style: "from-blue-600 to-cyan-500 text-white",
      bgHover: "bg-gradient-to-r from-blue-600 to-cyan-500",
    },
    {
      label: "GitHub",
      href: "https://github.com/TAher-Ahmedou",
      icon: FaGithub,
      style: "text-gray-300",
      bgHover: "bg-gray-800",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/taher-ahmedou-39ba642bb",
      icon: FaLinkedin,
      style: "text-gray-300",
      bgHover: "bg-blue-700",
    },
  ];

  return (
    <AnimatedSection className="max-w-4xl mx-auto px-6 py-24 text-center" yOffset={50}>
      
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      {/* Texte */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-400 mb-12 text-lg md:text-xl"
      >
        Interested in <span className="text-cyan-400 font-semibold">collaborating</span> 
        or have a <span className="text-purple-400 font-semibold">question</span>?  
        Feel free to reach out. I’m always open to discussing new <span className="text-blue-400 font-semibold">projects</span> or ideas.
      </motion.p>

      {/* Boutons */}
      <motion.div
        className="flex justify-center gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {buttons.map((btn) => (
          <motion.a
            key={btn.label}
            href={btn.href}
            target={btn.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-gray-700 transition-all duration-300
                        ${btn.bgHover ? "bg-gray-900 hover:" + btn.bgHover : "hover:bg-gray-800"} 
                        ${btn.style}`}
            aria-label={btn.label}
          >
            <btn.icon size={18} />
            {btn.label}
          </motion.a>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
