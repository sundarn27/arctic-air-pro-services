export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "commercial" | "residential" | "hospitality";
  problem: string;
  solution: string;
  services: string[];
  gallery: { src: string; alt: string }[];
  result: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    slug: "office-ac-efficiency-upgrade",
    title: "Office AC Efficiency Upgrade",
    client: "Mid-size tech office, Tech Park (fictional demo client)",
    category: "commercial",
    problem:
      "A 40-desk office floor was running at inconsistent temperatures with rising electricity costs and multiple units nearing end-of-life.",
    solution:
      "Conducted a full site assessment, right-sized replacement units per zone, and set up a quarterly maintenance contract with priority response.",
    services: ["Commercial HVAC", "AC Installation", "Preventive Maintenance"],
    gallery: [
      { src: "/images/case-office-1.svg", alt: "Commercial outdoor HVAC units mounted on a rooftop (illustrative demo graphic)" },
      { src: "/images/case-office-2.svg", alt: "Office interior with ceiling cassette AC unit (illustrative demo graphic)" },
    ],
    result:
      "Fictional demo result: reported ~22% reduction in cooling-related electricity cost and zero unplanned downtime across the following two quarters.",
    metrics: [
      { label: "Reported Efficiency Gain", value: "~22%" },
      { label: "Zones Upgraded", value: "6" },
      { label: "Unplanned Downtime Since", value: "0 incidents" },
    ],
  },
  {
    id: "cs2",
    slug: "residential-cooling-restoration",
    title: "Residential Cooling Restoration",
    client: "Family home, North District (fictional demo client)",
    category: "residential",
    problem:
      "A 3-bedroom home had two split units barely cooling despite running continuously, with visibly high electricity bills.",
    solution:
      "Diagnosed refrigerant leaks on both units, repaired and recharged to spec, then performed a full deep clean of coils and filters.",
    services: ["AC Repair", "Gas Refill", "AC Deep Cleaning"],
    gallery: [
      { src: "/images/case-residential-1.svg", alt: "Split AC indoor unit in a living room (illustrative demo graphic)" },
      { src: "/images/case-residential-2.svg", alt: "Technician performing coil cleaning (illustrative demo graphic)" },
    ],
    result:
      "Fictional demo result: cooling restored to full capacity within a single visit; household reported noticeably lower energy usage the following month.",
    metrics: [
      { label: "Units Restored", value: "2" },
      { label: "Visit Duration", value: "Same day" },
      { label: "Reported Bill Change", value: "Lower" },
    ],
  },
  {
    id: "cs3",
    slug: "restaurant-hvac-maintenance",
    title: "Restaurant HVAC Maintenance",
    client: "Independent restaurant, Harbor Road (fictional demo client)",
    category: "hospitality",
    problem:
      "A busy kitchen environment was causing accelerated dust and grease build-up in HVAC units, with a prior AC failure during dinner service.",
    solution:
      "Set up a monthly commercial maintenance contract with dedicated filter and coil cleaning cycles suited to kitchen-heavy environments.",
    services: ["Commercial HVAC", "AC Deep Cleaning", "Preventive Maintenance"],
    gallery: [
      { src: "/images/case-restaurant-1.svg", alt: "Ceiling-mounted commercial AC unit in a restaurant dining area (illustrative demo graphic)" },
      { src: "/images/case-restaurant-2.svg", alt: "Technician inspecting a commercial HVAC filter (illustrative demo graphic)" },
    ],
    result:
      "Fictional demo result: no service interruptions during peak dining hours since the maintenance contract began.",
    metrics: [
      { label: "Contract Type", value: "Monthly" },
      { label: "Peak-Hour Incidents", value: "0 since start" },
      { label: "Units Covered", value: "4" },
    ],
  },
];
