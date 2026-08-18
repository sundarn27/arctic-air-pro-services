/**
 * Fictional demo pricing tiers for the /pricing page.
 * All prices are "starting from" figures — final pricing depends on
 * inspection and actual service requirements.
 */

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic-service",
    name: "Basic AC Service",
    price: "₹499",
    priceNote: "starting from",
    description: "Routine check-up and clean to keep a healthy system running smoothly.",
    features: [
      "Filter cleaning & inspection",
      "Drainage check",
      "Basic coil cleaning",
      "Performance test",
      "Digital service report",
    ],
    ctaLabel: "Book Basic Service",
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    price: "₹899",
    priceNote: "starting from",
    description: "Jet-wash deep clean for coils and filters — ideal every 6–12 months.",
    features: [
      "Everything in Basic Service",
      "Jet-wash coil cleaning",
      "Blower deep clean",
      "Drain line flush",
      "Odor treatment",
    ],
    highlighted: true,
    ctaLabel: "Book Deep Cleaning",
  },
  {
    id: "gas-refill",
    name: "Gas Refill",
    price: "₹1,499",
    priceNote: "starting from",
    description: "Leak check and precise refrigerant recharge to restore full cooling.",
    features: [
      "Electronic leak detection",
      "Vacuum & recharge to spec",
      "Pressure verification",
      "Cooling performance test",
    ],
    ctaLabel: "Book Gas Refill",
  },
  {
    id: "repair",
    name: "AC Repair",
    price: "₹799",
    priceNote: "starting from",
    description: "Diagnosis and repair for any fault, brand or model — upfront pricing.",
    features: [
      "Full diagnostic check",
      "Itemized quote before repair",
      "Quality-matched parts",
      "30-day workmanship guarantee",
    ],
    ctaLabel: "Book Repair",
  },
  {
    id: "installation",
    name: "AC Installation",
    price: "₹2,499",
    priceNote: "starting from",
    description: "Full-cycle installation for split, window, cassette or ducted systems.",
    features: [
      "Site survey & load sizing",
      "Manufacturer-aligned mounting",
      "Pressure-tested piping",
      "Post-install performance report",
    ],
    ctaLabel: "Book Installation",
  },
  {
    id: "commercial",
    name: "Commercial HVAC",
    price: "₹3,499",
    priceNote: "starting from",
    description: "Scoped service and maintenance contracts for offices, retail and industrial sites.",
    features: [
      "Site assessment",
      "Custom maintenance schedule",
      "Priority response SLA",
      "Multi-unit / VRF support",
    ],
    ctaLabel: "Request Commercial Quote",
  },
];

export const pricingNotes = [
  "All prices shown are starting from (demo) figures — final pricing depends on on-site inspection and actual service requirements.",
  "Emergency service pricing may vary based on time of day and urgency.",
  "This is a portfolio demo site. Prices are fictional and not a real quotation.",
];
