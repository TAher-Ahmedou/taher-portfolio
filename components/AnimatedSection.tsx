"use client";

import { motion, Variants, MotionProps } from "framer-motion";

interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  id?: string;
  tag?: keyof JSX.IntrinsicElements;
  triggerOnce?: boolean;       // déclenche l'animation qu'une seule fois
  viewportAmount?: number;     // % de la section visible pour déclencher
  staggerChildren?: number;    // optionnel pour animer les enfants
  scale?: boolean;             // si on veut scale + fade
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
  const MotionTag = motion[tag];

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
