/**
 * Typed service catalogue for ArcticAir Pro Services.
 *
 * This single source of truth drives:
 *  - the services index page
 *  - the reusable dynamic route: src/pages/services/[slug].astro
 *  - the homepage "Services" section
 *  - the Service Finder and Service Estimator React islands
 *
 * All pricing/duration values are fictional demo content.
 */

export type ServiceCategory = "installation" | "repair" | "maintenance" | "cleaning" | "commercial" | "emergency";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
  /** Name of an inline SVG icon rendered by <Icon /> */
  icon: string;
  /** Path relative to src/assets or public/images used for hero/card imagery */
  image: string;
  startingPrice: number;
  priceLabel: string;
  duration: string;
  featured: boolean;
  emergencyAvailable: boolean;
  residential: boolean;
  commercial: boolean;
  problems: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    id: "svc-installation",
    slug: "ac-installation",
    title: "AC Installation",
    shortDescription: "Precision-fit installation for split, window, cassette and ducted systems.",
    fullDescription:
      "Our certified technicians handle full-cycle AC installation — from load calculation and unit selection guidance through mounting, refrigerant charging, electrical hookup and commissioning. Every installation is pressure-tested and performance-verified before we hand over the keys to cooler air.",
    category: "installation",
    icon: "install",
    image: "/images/service-installation.svg",
    startingPrice: 2499,
    priceLabel: "₹2,499+",
    duration: "3–5 hours",
    featured: true,
    emergencyAvailable: false,
    residential: true,
    commercial: true,
    problems: [
      "Moving into a new home or office without cooling",
      "Replacing an outdated, inefficient unit",
      "Uncertain which AC type or capacity fits the space",
    ],
    benefits: [
      "Correct load-sizing prevents over/under-cooling",
      "Manufacturer-aligned installation protects your warranty",
      "Clean copper piping and cable dressing for a tidy finish",
      "Post-install performance and leak-check report",
    ],
    process: [
      { title: "Site Survey", description: "We assess room size, insulation and layout to recommend the right unit capacity." },
      { title: "Mounting", description: "Indoor and outdoor units are mounted to manufacturer torque and clearance specs." },
      { title: "Piping & Charging", description: "Refrigerant lines are laid, pressure-tested, vacuumed and precisely charged." },
      { title: "Commissioning", description: "We verify airflow, cooling delta and electrical safety before sign-off." },
    ],
    faqs: [
      { question: "How long does AC installation take?", answer: "Most residential split-unit installations take 3–5 hours; ducted and commercial systems can take a full day or more depending on complexity." },
      { question: "Do you install all AC types?", answer: "Yes — split, window, cassette, ducted and commercial VRF systems." },
      { question: "Is old unit removal included?", answer: "Removal and eco-conscious disposal of an old unit can be added to any installation booking." },
    ],
  },
  {
    id: "svc-repair",
    slug: "ac-repair",
    title: "AC Repair",
    shortDescription: "Fast, accurate diagnosis and repair for any AC brand or model.",
    fullDescription:
      "From a unit that won't start to strange noises and weak airflow, our technicians diagnose the root cause — not just the symptom — and repair it right the first time, with transparent, upfront pricing before any work begins.",
    category: "repair",
    icon: "repair",
    image: "/images/service-repair.svg",
    startingPrice: 799,
    priceLabel: "₹799+",
    duration: "45–90 minutes",
    featured: true,
    emergencyAvailable: true,
    residential: true,
    commercial: true,
    problems: [
      "AC not cooling or blowing warm air",
      "Unit not starting or tripping the breaker",
      "Unusual rattling, buzzing or grinding noises",
      "Weak or inconsistent airflow",
    ],
    benefits: [
      "Root-cause diagnostics, not guesswork",
      "Upfront pricing before repairs begin",
      "Genuine or manufacturer-equivalent parts",
      "30-day workmanship guarantee on repairs",
    ],
    process: [
      { title: "Diagnosis", description: "A full system check identifies the exact fault — electrical, mechanical or refrigerant-related." },
      { title: "Quote & Approval", description: "You approve a clear, itemized quote before any repair work starts." },
      { title: "Repair", description: "Faulty components are repaired or replaced using quality-matched parts." },
      { title: "Quality Check", description: "We re-test cooling performance and safety before closing the job." },
    ],
    faqs: [
      { question: "Do you provide emergency service?", answer: "Yes, emergency AC repair is available with priority dispatch — see our Emergency Service section for response windows." },
      { question: "Why is my AC leaking water?", answer: "This is usually a blocked condensate drain, a dirty air filter, or low refrigerant causing the coil to freeze and then drip as it thaws. Our technicians pinpoint the exact cause on-site." },
      { question: "Will I get a quote before repair?", answer: "Always. We diagnose first, quote clearly, and only proceed once you approve." },
    ],
  },
  {
    id: "svc-maintenance",
    slug: "ac-maintenance",
    title: "AC Servicing & Preventive Maintenance",
    shortDescription: "Scheduled tune-ups that keep your system efficient and breakdown-free.",
    fullDescription:
      "Preventive maintenance is the single most effective way to avoid costly mid-season breakdowns. Our multi-point service checks filters, coils, drainage, refrigerant pressure and electrical connections to keep your system running at peak efficiency.",
    category: "maintenance",
    icon: "maintenance",
    image: "/images/service-maintenance.svg",
    startingPrice: 499,
    priceLabel: "₹499+",
    duration: "40–60 minutes",
    featured: true,
    emergencyAvailable: false,
    residential: true,
    commercial: true,
    problems: [
      "Rising electricity bills from a system working harder than it should",
      "No service history and unsure of AC health",
      "Preparing the unit for peak summer load",
    ],
    benefits: [
      "Lower electricity bills through improved efficiency",
      "Extends the operating life of your equipment",
      "Reduces risk of mid-season breakdowns",
      "Keeps manufacturer warranty conditions satisfied",
    ],
    process: [
      { title: "Multi-Point Inspection", description: "Filters, coils, drainage, thermostat and electrical connections are checked." },
      { title: "Cleaning & Adjustment", description: "Key components are cleaned and calibrated for optimal performance." },
      { title: "Performance Test", description: "We measure cooling output and airflow against expected benchmarks." },
      { title: "Service Report", description: "You receive a clear summary with any recommendations." },
    ],
    faqs: [
      { question: "How often should AC servicing be done?", answer: "We recommend servicing every 3–4 months for regular use, and at minimum twice a year — before and during peak season." },
      { question: "How much does AC servicing cost?", answer: "Basic servicing starts from ₹499. Final pricing depends on unit type, condition and any additional work required." },
      { question: "Is maintenance different from deep cleaning?", answer: "Yes — routine maintenance is a lighter check-and-clean, while deep cleaning includes coil jet-washing and full filter treatment." },
    ],
  },
  {
    id: "svc-cleaning",
    slug: "ac-cleaning",
    title: "AC Deep Cleaning",
    shortDescription: "Jet-wash deep cleaning for coils, filters and drainage to restore airflow.",
    fullDescription:
      "Dust and microbial build-up on coils and filters silently reduce cooling performance and air quality. Our deep-cleaning service uses jet-wash equipment on indoor and outdoor coils to fully restore airflow and cooling efficiency.",
    category: "cleaning",
    icon: "cleaning",
    image: "/images/service-cleaning.svg",
    startingPrice: 899,
    priceLabel: "₹899+",
    duration: "60–90 minutes",
    featured: true,
    emergencyAvailable: false,
    residential: true,
    commercial: true,
    problems: [
      "Musty or unpleasant smell when the AC runs",
      "Visible dust build-up on vents or filters",
      "Reduced airflow despite the unit running normally",
    ],
    benefits: [
      "Improves indoor air quality",
      "Restores full airflow and cooling capacity",
      "Removes odor-causing microbial build-up",
      "Protects coil lifespan",
    ],
    process: [
      { title: "Protective Setup", description: "Indoor unit and surrounding area are covered to contain water and debris." },
      { title: "Jet-Wash Cleaning", description: "Coils and blower are deep-cleaned using specialized jet-wash equipment." },
      { title: "Filter Treatment", description: "Filters are washed or replaced depending on condition." },
      { title: "Drain Flush", description: "The condensate drain line is flushed to prevent future leaks." },
    ],
    faqs: [
      { question: "How often should I get deep cleaning?", answer: "Every 6–12 months for most homes, more frequently in high-dust environments." },
      { question: "Does cleaning fix a bad smell?", answer: "In most cases yes — odor is usually caused by microbial build-up that deep cleaning removes." },
      { question: "Is deep cleaning messy?", answer: "No — our technicians use protective sheeting and controlled water capture to keep your space clean." },
    ],
  },
  {
    id: "svc-gas-refill",
    slug: "ac-gas-refill",
    title: "Gas Refill",
    shortDescription: "Leak detection and precise refrigerant recharge to restore full cooling.",
    fullDescription:
      "Low refrigerant is one of the most common causes of poor cooling. We detect leaks, repair them where possible, and recharge your system to exact manufacturer specification using calibrated equipment.",
    category: "repair",
    icon: "gas",
    image: "/images/service-gas-refill.svg",
    startingPrice: 1499,
    priceLabel: "₹1,499+",
    duration: "45–75 minutes",
    featured: false,
    emergencyAvailable: true,
    residential: true,
    commercial: true,
    problems: [
      "AC runs but doesn't cool effectively",
      "Ice forming on the indoor unit or pipes",
      "Hissing sound near refrigerant lines",
    ],
    benefits: [
      "Precise recharge to manufacturer specification",
      "Leak detection prevents repeat top-ups",
      "Restores full cooling capacity",
    ],
    process: [
      { title: "Leak Detection", description: "Electronic leak detection identifies the source of refrigerant loss." },
      { title: "Repair (if needed)", description: "Any leak points are sealed or repaired before recharging." },
      { title: "Vacuum & Charge", description: "The system is vacuumed and charged to exact spec by weight." },
      { title: "Pressure Verification", description: "Pressures are verified against manufacturer targets." },
    ],
    faqs: [
      { question: "How do I know if my AC needs gas refill?", answer: "Warning signs include weak cooling, ice buildup on the indoor unit, and a hissing sound near the pipework. A technician can confirm with a pressure check." },
      { question: "Is gas refill a permanent fix?", answer: "If there's an active leak, a refill alone is temporary — we recommend leak detection and repair alongside recharging." },
    ],
  },
  {
    id: "svc-duct-cleaning",
    slug: "duct-cleaning",
    title: "Duct Cleaning",
    shortDescription: "Full duct inspection and cleaning for ducted and commercial systems.",
    fullDescription:
      "Ductwork accumulates dust, allergens and debris over time, affecting both air quality and airflow efficiency. We inspect, clean and sanitize duct runs for ducted residential and commercial HVAC systems.",
    category: "cleaning",
    icon: "duct",
    image: "/images/service-duct.svg",
    startingPrice: 1999,
    priceLabel: "₹1,999+",
    duration: "2–4 hours",
    featured: false,
    emergencyAvailable: false,
    residential: true,
    commercial: true,
    problems: [
      "Uneven cooling between rooms or zones",
      "Dust accumulation near vents",
      "Musty smell through ducted vents",
    ],
    benefits: [
      "Improves airflow consistency across zones",
      "Reduces allergens circulating indoors",
      "Extends the life of ducted system components",
    ],
    process: [
      { title: "Duct Inspection", description: "Camera inspection maps dust build-up and identifies problem sections." },
      { title: "Vent Cleaning", description: "Supply and return vents are cleaned and sanitized." },
      { title: "Duct Cleaning", description: "Negative-pressure cleaning removes debris from duct runs." },
      { title: "Final Check", description: "Airflow is verified at each outlet after cleaning." },
    ],
    faqs: [
      { question: "How often should ducts be cleaned?", answer: "Every 2–3 years for most systems, or sooner in dusty environments." },
      { question: "Will this affect my AC performance?", answer: "Clean ducts typically improve airflow balance and reduce strain on the blower." },
    ],
  },
  {
    id: "svc-commercial",
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    shortDescription: "Scheduled service contracts and rapid response for offices, retail and industrial sites.",
    fullDescription:
      "Commercial HVAC systems demand minimal downtime and consistent comfort for staff and customers. We support offices, retail spaces, restaurants and industrial sites with scheduled maintenance contracts and rapid-response repair.",
    category: "commercial",
    icon: "commercial",
    image: "/images/service-commercial.svg",
    startingPrice: 3499,
    priceLabel: "₹3,499+",
    duration: "Scoped per site",
    featured: true,
    emergencyAvailable: true,
    residential: false,
    commercial: true,
    problems: [
      "Inconsistent cooling across a commercial floor plan",
      "No structured maintenance contract in place",
      "Downtime risk during business hours",
    ],
    benefits: [
      "Scheduled maintenance minimizes unplanned downtime",
      "Priority response for commercial contracts",
      "Single point of contact across multiple units or sites",
    ],
    process: [
      { title: "Site Assessment", description: "We evaluate system layout, capacity and current condition across the site." },
      { title: "Service Plan", description: "A tailored maintenance schedule and SLA is proposed for your business." },
      { title: "Ongoing Service", description: "Scheduled visits keep systems running efficiently year-round." },
      { title: "Rapid Response", description: "Priority dispatch is available for commercial contract holders." },
    ],
    faqs: [
      { question: "Do you offer maintenance contracts?", answer: "Yes, we offer scheduled commercial maintenance contracts tailored to your site and equipment count." },
      { question: "Can you service multi-unit commercial VRF systems?", answer: "Yes, our technicians are trained on multi-zone and VRF commercial systems." },
    ],
  },
  {
    id: "svc-emergency",
    slug: "emergency-ac-service",
    title: "Emergency AC Service",
    shortDescription: "Priority-dispatch emergency repair when your AC fails at the worst time.",
    fullDescription:
      "When your AC fails during peak heat or a critical business hour, our emergency service line connects you to the next available certified technician for priority dispatch.",
    category: "emergency",
    icon: "emergency",
    image: "/images/service-emergency.svg",
    startingPrice: 999,
    priceLabel: "₹999+",
    duration: "Priority dispatch",
    featured: false,
    emergencyAvailable: true,
    residential: true,
    commercial: true,
    problems: [
      "Complete AC failure during extreme heat",
      "Electrical fault causing tripped breakers",
      "Commercial cooling failure during business hours",
    ],
    benefits: [
      "24/7 emergency line",
      "Priority technician dispatch",
      "Transparent emergency pricing before work begins",
    ],
    process: [
      { title: "Emergency Call", description: "Call or WhatsApp our 24/7 line with your issue and location." },
      { title: "Priority Dispatch", description: "The nearest available certified technician is assigned to your job." },
      { title: "On-Site Diagnosis", description: "Rapid diagnosis identifies the safest, fastest path to restore cooling." },
      { title: "Emergency Repair", description: "Work proceeds once emergency pricing is confirmed with you." },
    ],
    faqs: [
      { question: "Is emergency pricing different?", answer: "Emergency service pricing may vary based on time of day and urgency, and is always confirmed with you before work begins." },
      { question: "How fast can you respond?", answer: "Response windows depend on your service area and technician availability at time of call — see Service Areas for coverage." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getRelatedServices(current: Service, count = 3): Service[] {
  return services
    .filter((s) => s.id !== current.id)
    .sort((a, b) => (a.category === current.category ? -1 : 0) - (b.category === current.category ? -1 : 0))
    .slice(0, count);
}
