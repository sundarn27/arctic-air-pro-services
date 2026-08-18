import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { services, type Service } from "../../data/services";

interface ProblemOption {
  id: string;
  label: string;
  icon: string;
  primarySlug: string;
  secondarySlug?: string;
  note: string;
}

const problems: ProblemOption[] = [
  { id: "not-cooling", label: "AC not cooling", icon: "❄️", primarySlug: "ac-repair", secondarySlug: "ac-gas-refill", note: "Often a refrigerant or component fault." },
  { id: "leaking", label: "Water leaking", icon: "💧", primarySlug: "ac-repair", secondarySlug: "ac-maintenance", note: "Usually a blocked drain line or filter." },
  { id: "noise", label: "Strange noise", icon: "🔊", primarySlug: "ac-repair", note: "Loose or worn mechanical components." },
  { id: "smell", label: "Bad smell", icon: "🌫️", primarySlug: "ac-cleaning", secondarySlug: "duct-cleaning", note: "Microbial build-up on coils or ducts." },
  { id: "bill", label: "High electricity bill", icon: "⚡", primarySlug: "ac-maintenance", note: "Reduced efficiency from lack of servicing." },
  { id: "not-starting", label: "AC not starting", icon: "🔌", primarySlug: "emergency-ac-service", secondarySlug: "ac-repair", note: "Could be electrical — often urgent." },
  { id: "weak-airflow", label: "Weak airflow", icon: "🌬️", primarySlug: "ac-cleaning", secondarySlug: "duct-cleaning", note: "Dirty filters/coils or duct restriction." },
];

function findService(slug?: string): Service | undefined {
  return slug ? services.find((s) => s.slug === slug) : undefined;
}

export default function ServiceFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const selected = useMemo(() => problems.find((p) => p.id === selectedId) ?? null, [selectedId]);
  const primaryService = findService(selected?.primarySlug);
  const secondaryService = findService(selected?.secondarySlug);

  const transitionDuration = prefersReducedMotion ? 0 : 0.4;

  return (
    <div
      className="card-surface overflow-hidden p-6 sm:p-8"
      data-reveal
    >
      <div className="flex flex-col gap-1">
        <span className="eyebrow w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          Interactive Service Finder
        </span>
        <h3 className="mt-3 text-xl font-semibold text-navy-900 sm:text-2xl">What's the problem with your AC?</h3>
        <p className="mt-1 text-sm text-mist-600">Select the closest match — we'll suggest the right service.</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="AC problem symptoms">
        {problems.map((p) => {
          const isActive = selectedId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedId(p.id)}
              aria-pressed={isActive}
              className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-4 text-center text-xs font-medium transition-colors duration-200 sm:text-sm ${
                isActive
                  ? "border-navy-900 bg-navy-950 text-white"
                  : "border-mist-200 bg-mist-50 text-navy-700 hover:border-ice-300 hover:bg-white"
              }`}
            >
              <span className="text-xl" aria-hidden="true">{p.icon}</span>
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {selected && primaryService && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{ duration: transitionDuration, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 rounded-xl border border-ice-200 bg-ice-50 p-5 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-ice-600">Suggested Service</p>
            <p className="mt-1 text-sm text-navy-700">{selected.note}</p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={`/services/${primaryService.slug}`}
                className="flex flex-1 items-center justify-between rounded-lg bg-navy-950 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
              >
                <span>{primaryService.title}</span>
                <span aria-hidden="true">→</span>
              </a>
              {secondaryService && (
                <a
                  href={`/services/${secondaryService.slug}`}
                  className="flex flex-1 items-center justify-between rounded-lg border border-navy-900/15 bg-white px-4 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-mist-50"
                >
                  <span>{secondaryService.title}</span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
            <a
              href="/book-service"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ice-600 hover:text-ice-700"
            >
              Book this service now <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
