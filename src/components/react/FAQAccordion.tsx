import { useState, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

/**
 * Accessible animated FAQ accordion.
 * Demonstrates: AnimatePresence + layout animation + useReducedMotion.
 * Accessibility: uses native button + aria-expanded/aria-controls, and each
 * panel is reachable via keyboard without relying on animation to convey state.
 */
export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="divide-y divide-mist-200 rounded-xl border border-mist-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-faq-btn-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <motion.div key={item.question} layout={!prefersReducedMotion} className="overflow-hidden">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-navy-900 transition-colors hover:bg-mist-50 focus-visible:relative focus-visible:z-10 sm:px-6 sm:text-base"
              >
                <span>{item.question}</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-mist-100 text-navy-700"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-mist-600 sm:px-6">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
