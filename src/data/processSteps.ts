export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Book Service", description: "Choose a service and preferred time online, by phone, or over WhatsApp." },
  { number: "02", title: "Technician Arrives", description: "A certified technician arrives in the confirmed window, fully equipped." },
  { number: "03", title: "Diagnose", description: "We inspect the system and identify the exact issue or requirement." },
  { number: "04", title: "Approval", description: "You receive a transparent quote and approve before any work proceeds." },
  { number: "05", title: "Complete Work", description: "The technician carries out installation, repair or servicing to spec." },
  { number: "06", title: "Quality Check", description: "We verify performance and safety before closing out the job." },
];
