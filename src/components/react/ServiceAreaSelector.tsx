import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { serviceAreas } from "../../data/serviceAreas";

/**
 * Interactive coverage-zone selector over an illustrative (non-geographic)
 * map graphic. Demonstrates: whileInView + layout animation + AnimatePresence.
 */
export default function ServiceAreaSelector() {
  const [activeId, setActiveId] = useState<string>(serviceAreas[0]?.id ?? "");
  const prefersReducedMotion = useReducedMotion();
  const active = serviceAreas.find((a) => a.id === activeId) ?? serviceAreas[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start" data-reveal>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-mist-200 bg-navy-950 sm:aspect-[16/10]">
        <div className="technical-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path
            d="M10 60 C 20 30, 40 20, 55 30 S 85 25, 90 50 S 70 85, 45 80 S 5 85, 10 60 Z"
            fill="rgba(20,212,244,0.06)"
            stroke="rgba(125,214,251,0.25)"
            strokeWidth="0.5"
          />
        </svg>

        {serviceAreas.map((area, i) => {
          const isActive = area.id === activeId;
          return (
            <motion.button
              key={area.id}
              type="button"
              onClick={() => setActiveId(area.id)}
              aria-pressed={isActive}
              aria-label={`Show details for ${area.name}`}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : i * 0.06 }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.15 }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center focus-visible:z-10"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isActive ? "border-accent-400 bg-accent-500" : "border-white/60 bg-navy-800"
                }`}
              >
                {isActive && !prefersReducedMotion && (
                  <motion.span
                    className="absolute h-4 w-4 rounded-full bg-accent-400"
                    animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
              </span>
              <span
                className={`ml-2 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.7rem] font-medium backdrop-blur transition-colors duration-300 ${
                  isActive ? "bg-white text-navy-900" : "bg-navy-900/70 text-ice-100/80"
                }`}
              >
                {area.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div>
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              layout={!prefersReducedMotion}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
              className="card-surface p-6 sm:p-7"
            >
              <span className="eyebrow w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {active.type === "mixed" ? "Residential & Commercial" : active.type === "residential" ? "Residential" : "Commercial"}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-navy-900">{active.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-600">{active.description}</p>
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-mist-50 px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-mist-500">Avg. Response</span>
                <span className="ml-auto text-sm font-bold text-navy-900">{active.responseTime}</span>
              </div>
              <a
                href="/book-service"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
              >
                Book Service in {active.name}
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap gap-2" role="listbox" aria-label="All service areas">
          {serviceAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              role="option"
              aria-selected={area.id === activeId}
              onClick={() => setActiveId(area.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                area.id === activeId
                  ? "border-navy-900 bg-navy-950 text-white"
                  : "border-mist-200 bg-white text-mist-600 hover:border-ice-300"
              }`}
            >
              {area.name}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-mist-400">
          Coverage map is an illustrative demo graphic, not a real geographic map.
        </p>
      </div>
    </div>
  );
}
