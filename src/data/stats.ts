export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  isDecimal?: boolean;
}

/**
 * Fictional demo statistics used for the animated Stats section.
 * Clearly presented as illustrative portfolio content, not verified figures.
 */
export const stats: StatItem[] = [
  { id: "years", value: 10, suffix: "+", label: "Years Experience" },
  { id: "services", value: 5000, suffix: "+", label: "Services Completed" },
  { id: "rating", value: 4.9, suffix: "/5", label: "Customer Rating", isDecimal: true },
  { id: "availability", value: 0, suffix: "", prefix: "Same-Day", label: "Service Availability" },
];
