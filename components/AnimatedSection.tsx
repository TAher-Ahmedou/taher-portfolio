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
  tag?: keyof JSX.IntrinsicElements; // div, section, article...
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
  // ✅ Typage TS-safe pour n’importe quel tag HTML
  const MotionTag = motion[tag as keyof JSX.IntrinsicElements] as unknown as React.ComponentType<any>;

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
      {...motionProps} // Permet de passer whileHover, onClick, etc.
    >
      {children}
    </MotionTag>
  );
}
