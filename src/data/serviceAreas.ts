export interface ServiceAreaZone {
  id: string;
  name: string;
  description: string;
  responseTime: string;
  type: "residential" | "commercial" | "mixed";
}

/**
 * Fictional demo coverage zones for the /service-areas page.
 * Coordinates are relative percentage positions on the illustrative
 * coverage map graphic (not a real geographic map).
 */
export const serviceAreas: (ServiceAreaZone & { x: number; y: number })[] = [
  { id: "coastal-city", name: "Coastal City", description: "Our home base — fastest average response time.", responseTime: "30–45 min", type: "mixed", x: 50, y: 55 },
  { id: "north-district", name: "North District", description: "Residential neighborhoods with dense split-unit coverage.", responseTime: "45–60 min", type: "residential", x: 42, y: 22 },
  { id: "central-market", name: "Central Market", description: "High-density mixed residential and retail zone.", responseTime: "30–50 min", type: "mixed", x: 55, y: 40 },
  { id: "harbor-road", name: "Harbor Road", description: "Restaurants, hospitality and waterfront commercial sites.", responseTime: "40–60 min", type: "commercial", x: 68, y: 62 },
  { id: "west-avenue", name: "West Avenue", description: "Established residential district with older ducted systems.", responseTime: "50–70 min", type: "residential", x: 22, y: 48 },
  { id: "tech-park", name: "Tech Park", description: "Office campuses with commercial maintenance contracts.", responseTime: "35–55 min", type: "commercial", x: 78, y: 30 },
  { id: "industrial-estate", name: "Industrial Estate", description: "Warehouses and light-industrial commercial HVAC.", responseTime: "60–90 min", type: "commercial", x: 30, y: 78 },
];
