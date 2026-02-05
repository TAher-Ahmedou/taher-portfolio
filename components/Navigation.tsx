"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaGraduationCap, FaProjectDiagram, FaCode, FaEnvelope } from "react-icons/fa";

const navItems = [
  { label: "Home", icon: FaHome, href: "#home" },
  { label: "About", icon: FaUser, href: "#about" },
  { label: "Education", icon: FaGraduationCap, href: "#education" },
  { label: "Projects", icon: FaProjectDiagram, href: "#projects" },
  { label: "Skills", icon: FaCode, href: "#skills" },
  { label: "Contact", icon: FaEnvelope, href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      aria-label="Main Navigation"
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-xl px-4 py-3 rounded-full border border-gray-800 shadow-lg">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);

          return (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon size={18} />
              <span className="hidden md:inline text-sm font-medium">{item.label}</span>
              {/* Animated active indicator */}
              {isActive && (
                <AnimatePresence>
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-blue-600/30 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
}
