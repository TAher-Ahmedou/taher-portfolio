"use client";

import { motion, Variants, MotionProps } from "framer-motion";
import React from "react";

interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  id?: string;
  tag?: "section" | "div" | "article" | "main"; // limiter aux tags HTML sûrs
  triggerOnce?: boolean;
  viewportAmount?: number;
  staggerChildren?: number;
  scale?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  id,
  tag = "section",
  triggerOnce = true,
  viewportAmount = 0.2,
  staggerChildren,
  scale = false,
  ...motionProps
}: AnimatedSectionProps) {
  // ✅ On ne fait plus motion[tag], TS-friendly
  const MotionTag =
    tag === "div"
      ? motion.div
      : tag === "article"
      ? motion.article
      : tag === "main"
      ? motion.main
      : motion.section; // default section

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset, scale: scale ? 0.95 : 1 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { staggerChildren } },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: viewportAmount }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}
