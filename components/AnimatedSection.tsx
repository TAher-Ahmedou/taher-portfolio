"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  id?: string;
  tag?: "section" | "div" | "article"; // élément HTML flexible
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  id,
  tag = "section",
}: AnimatedSectionProps) {
  const MotionTag = motion[tag];

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Déclenche un peu avant la vue
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
