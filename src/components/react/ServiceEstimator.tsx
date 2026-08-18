import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type ACType = "Split" | "Window" | "Cassette" | "Ducted" | "Commercial";
type ServiceType = "Installation" | "Repair" | "Maintenance" | "Cleaning" | "Gas Refill";
type Condition = "New Installation" | "Existing Unit" | "Emergency";

const acTypes: ACType[] = ["Split", "Window", "Cassette", "Ducted", "Commercial"];
const serviceTypes: ServiceType[] = ["Installation", "Repair", "Maintenance", "Cleaning", "Gas Refill"];
const conditions: Condition[] = ["New Installation", "Existing Unit", "Emergency"];

const basePrice: Record<ServiceType, number> = {
  Installation: 2499,
  Repair: 799,
  Maintenance: 499,
  Cleaning: 899,
  "Gas Refill": 1499,
};

const typeMultiplier: Record<ACType, number> = {
  Window: 0.8,
  Split: 1,
  Cassette: 1.3,
  Ducted: 1.6,
  Commercial: 2.2,
};

const conditionMultiplier: Record<Condition, number> = {
  "New Installation": 1,
  "Existing Unit": 1,
  Emergency: 1.35,
};

function formatINR(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function SegmentedField<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-xs font-semibold uppercase tracking-wide text-mist-500">{label}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {options.map((option) => {
          const isActive = option === value;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "border-navy-900 bg-navy-950 text-white"
                  : "border-mist-200 bg-white text-navy-700 hover:border-ice-300"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/**
 * Interactive price-range estimator. Demonstrates: AnimatePresence + layout
 * transitions + useReducedMotion, driven purely by client-side state (demo
 * pricing logic only, not a real quotation engine).
 */
export default function ServiceEstimator() {
  const [acType, setAcType] = useState<ACType>("Split");
  const [service, setService] = useState<ServiceType>("Installation");
  const [condition, setCondition] = useState<Condition>("Existing Unit");
  const prefersReducedMotion = useReducedMotion();

  const { low, high } = useMemo(() => {
    const base = basePrice[service] * typeMultiplier[acType] * conditionMultiplier[condition];
    return { low: base, high: base * 1.45 };
  }, [acType, service, condition]);

  return (
    <div className="card-surface p-6 sm:p-8" data-reveal>
      <span className="eyebrow w-fit">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
        Interactive Service Estimator
      </span>
      <h3 className="mt-3 text-xl font-semibold text-navy-900 sm:text-2xl">Get an instant price estimate</h3>
      <p className="mt-1 text-sm text-mist-600">Answer three quick questions for a demo price range.</p>

      <div className="mt-6 space-y-6">
        <SegmentedField label="AC Type" options={acTypes} value={acType} onChange={setAcType} />
        <SegmentedField label="Service" options={serviceTypes} value={service} onChange={setService} />
        <SegmentedField label="Condition" options={conditions} value={condition} onChange={setCondition} />
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`${acType}-${service}-${condition}`}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 rounded-xl border border-ice-200 bg-gradient-to-br from-navy-950 to-navy-900 p-6 text-white sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-ice-200/70">Estimated Range</p>
          <p className="mt-2 font-mono text-3xl font-bold sm:text-4xl">
            {formatINR(low)} <span className="text-ice-200/60">–</span> {formatINR(high)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ice-100/70">
            Estimated demo price. Final pricing depends on inspection and actual service requirements.
          </p>
          <a
            href="/book-service"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-accent-400"
          >
            Book This Estimate <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
