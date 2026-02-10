"use client";

import { motion, Variants, MotionProps } from "framer-motion";
import React from "react";

/**
 * AnimatedSection
 * ----------------
 * Wrapper générique pour animer une section lors de son apparition à l'écran.
 * Compatible TypeScript, mobile, WebView (LinkedIn, GitHub, Facebook).
 */
interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;

  /** Animation timing */
  delay?: number;
  duration?: number;

  /** Animation behavior */
  yOffset?: number;
  scale?: boolean;
  staggerChildren?: number;

  /** Section behavior */
  id?: string;
  tag?: "section" | "div" | "article" | "main";
  triggerOnce?: boolean;
  viewportAmount?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  scale = false,
  staggerChildren,
  id,
  tag = "section",
  triggerOnce = true,
  viewportAmount = 0.2,
  ...motionProps
}: AnimatedSectionProps) {
  /**
   * Sélection sécurisée du composant motion
   * (évite motion[tag] → erreur TypeScript)
   */
  const MotionTag =
    tag === "div"
      ? motion.div
      : tag === "article"
      ? motion.article
      : tag === "main"
      ? motion.main
      : motion.section;

  /**
   * Variants Framer Motion
   */
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      scale: scale ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        staggerChildren,
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: viewportAmount }}
      variants={variants}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}
