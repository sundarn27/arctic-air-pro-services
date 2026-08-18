import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Slim scroll-linked progress bar fixed to the top of the viewport.
 * Demonstrates: useScroll + useSpring + useReducedMotion.
 */
export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 280,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-ice-400 via-accent-500 to-ice-300"
      style={{ scaleX: prefersReducedMotion ? 0 : scaleX }}
      aria-hidden="true"
    />
  );
}
