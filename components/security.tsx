"use client";

import { motion } from "framer-motion";
import {
  FaBug,
  FaNetworkWired,
  FaTerminal,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiHackthebox,
  SiTryhackme,
  SiLinux,
  SiGit,
  SiSpringsecurity,
} from "react-icons/si";

type Tool = {
  name: string;
  icon: React.ElementType;
};

type SecurityItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  tools: Tool[];
};

const securityItems: SecurityItem[] = [
  {
    title: "CTF Platforms",
    description:
      "Hands-on practice through realistic offensive security challenges and labs.",
    icon: FaBug,
    tools: [
      { name: "Hack The Box", icon: SiHackthebox },
      { name: "TryHackMe", icon: SiTryhackme },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Recon & Scanning",
    description:
      "Active and passive reconnaissance to discover attack surfaces and exposed services.",
    icon: FaNetworkWired,
    tools: [
      { name: "nmap", icon: FaNetworkWired },
      { name: "gobuster", icon: FaNetworkWired },
      { name: "ffuf", icon: FaNetworkWired },
      { name: "whatweb", icon: FaNetworkWired },
    ],
  },
  {
    title: "Password Attacks",
    description:
      "Password auditing and hash analysis using offline and online techniques.",
    icon: FaTerminal,
    tools: [
      { name: "john", icon: FaTerminal },
      { name: "hashcat", icon: FaTerminal },
      { name: "rockyou", icon: FaTerminal },
    ],
  },
  {
    title: "Defensive Security",
    description:
      "Secure application design, threat modeling, and API protection best practices.",
    icon: FaShieldAlt,
    tools: [
      { name: "TLS", icon: FaShieldAlt },
      { name: "OWASP Top 10", icon: FaShieldAlt },
      { name: "JWT", icon: FaShieldAlt },
      { name: "Spring Security", icon: SiSpringsecurity },
    ],
  },
];

export default function Security() {
  return (
    <section className="section">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Security & CTF
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="section-subtitle"
      >
        Practical experience in offensive and defensive cybersecurity through
        CTFs, labs, and real-world security tools.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {securityItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="card glass-effect border-cyan-500/20"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-4">
              <item.icon size={24} className="text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-5">
              {item.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-3">
              {item.tools.map((tool) => (
                <span
                  key={tool.name}
                  className="flex items-center gap-2 px-3 py-1 text-sm
                             bg-gray-800/70 rounded-full border border-gray-700
                             text-gray-300 hover:border-cyan-400 transition"
                >
                  <tool.icon size={14} className="text-cyan-400" />
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
