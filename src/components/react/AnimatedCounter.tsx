import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useReducedMotion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isDecimal?: boolean;
}

/**
 * Count-up statistic used in the homepage Stats section.
 * Demonstrates: useInView + useSpring + useReducedMotion.
 */
export default function AnimatedCounter({ value, suffix = "", prefix, isDecimal = false }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");

  const spring = useSpring(0, {
    stiffness: prefersReducedMotion ? 1000 : 60,
    damping: prefersReducedMotion ? 100 : 18,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(isDecimal ? latest.toFixed(1) : Math.round(latest).toLocaleString("en-IN"));
    });
    return unsubscribe;
  }, [spring, isDecimal]);

  // "Same-Day" style stats have a prefix and no numeric animation.
  if (prefix) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {prefix}
      </motion.span>
    );
  }

  return (
    <span ref={ref} aria-live="polite">
      {display}
      {suffix}
    </span>
  );
}
