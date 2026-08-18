import { useId, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

/**
 * Draggable before/after comparison slider.
 *
 * Accessibility & input support are unified through a single native
 * <input type="range">, which natively supports:
 *  - mouse drag
 *  - touch drag
 *  - keyboard (arrow keys / Home / End) as the accessible alternative
 * Motion's useSpring/useTransform smooth the visual clip transition.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before servicing",
  afterAlt = "After servicing",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const id = useId();
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(50);
  const spring = useSpring(motionValue, {
    stiffness: prefersReducedMotion ? 1000 : 300,
    damping: 35,
  });
  const clipPath = useTransform(spring, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(spring, (v) => `${v}%`);

  function handleChange(next: number) {
    setValue(next);
    motionValue.set(next);
  }

  return (
    <div className="w-full" data-reveal>
      <div
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-mist-200 bg-navy-900 shadow-xl sm:aspect-[16/9]"
        aria-hidden="false"
      >
        {/* After image (full, base layer) */}
        <img src={afterSrc} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />

        {/* Before image (clipped by slider position) */}
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <img src={beforeSrc} alt={beforeAlt} className="h-full w-full object-cover" draggable={false} />
        </motion.div>

        {/* Divider handle (visual only — the real control is the range input below) */}
        <motion.div
          className="pointer-events-none absolute top-0 h-full w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: handleLeft }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M8 5 3 12l5 7M16 5l5 7-5 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent-500/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-navy-950">
          {afterLabel}
        </span>

        <label htmlFor={id} className="sr-only">
          Drag to compare before and after — {value}% before shown
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="before-after-range absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent"
          aria-valuetext={`${value}% before, ${100 - value}% after`}
        />
      </div>

      <p className="mt-3 text-center text-xs text-mist-500">
        Drag, tap, or use arrow keys to compare before and after results.
      </p>

      <style>{`
        .before-after-range {
          -webkit-appearance: none;
        }
        .before-after-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 100%;
          height: 100%;
          background: transparent;
          cursor: ew-resize;
        }
        .before-after-range::-moz-range-thumb {
          width: 2px;
          height: 100%;
          background: transparent;
          border: none;
          cursor: ew-resize;
        }
        .before-after-range::-moz-range-track {
          background: transparent;
        }
        .before-after-range:focus-visible {
          outline: 3px solid var(--color-accent-500, #14d4f4);
          outline-offset: -3px;
        }
      `}</style>
    </div>
  );
}
