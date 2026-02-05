"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <AnimatedSection className="max-w-4xl mx-auto px-6 py-24 text-center" yOffset={50}>
      
      {/* Titre */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Contact Me
      </h2>

      {/* Texte */}
      <p className="text-gray-400 mb-10 text-lg md:text-xl">
        Interested in collaborating or have a question?  
        Feel free to reach out. I’m always open to discussing new projects or ideas.
      </p>

      {/* Boutons */}
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:taher45ahmedou@gmail.com"
          className="flex items-center gap-2 px-6 py-3 border border-blue-600 rounded-xl bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <FaEnvelope /> Email
        </a>

        <a
          href="https://github.com/TAher-Ahmedou"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl hover:border-white hover:text-white transition-all duration-300"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/taher-ahmedou-39ba642bb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl hover:border-white hover:text-white transition-all duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </AnimatedSection>
  );
}
