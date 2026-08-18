export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
  location: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ritika Sharma",
    service: "AC Installation",
    rating: 5,
    review:
      "The team surveyed our apartment properly before recommending unit capacity — no upselling, just honest advice. Installation was clean and the technician explained everything.",
    location: "Coastal City",
  },
  {
    id: "t2",
    name: "Arjun Mehta",
    service: "Emergency AC Repair",
    rating: 5,
    review:
      "Our office AC failed on the hottest day of the month. Called the emergency line and a technician was on-site within the hour. Fixed and cooling again before our afternoon meetings.",
    location: "Tech Park",
  },
  {
    id: "t3",
    name: "Fatima Khan",
    service: "AC Deep Cleaning",
    rating: 5,
    review:
      "Genuinely didn't realize how much dust had built up until I saw the before/after. The musty smell is completely gone and the room cools noticeably faster now.",
    location: "North District",
  },
  {
    id: "t4",
    name: "Karan Verma",
    service: "Preventive Maintenance",
    rating: 4,
    review:
      "Signed up for their maintenance visits after a bad experience with a previous provider. Punctual, transparent about what was checked, and my bills have gone down slightly.",
    location: "Central Market",
  },
  {
    id: "t5",
    name: "Priya Nair",
    service: "Gas Refill",
    rating: 5,
    review:
      "They found and sealed a small leak before recharging instead of just topping up gas like the last company did. Actually fixed the root problem this time.",
    location: "West Avenue",
  },
  {
    id: "t6",
    name: "Suresh Iyer",
    service: "Commercial HVAC",
    rating: 5,
    review:
      "We run a restaurant kitchen and cannot afford cooling downtime. Their commercial maintenance contract has meant zero unplanned outages this year.",
    location: "Harbor Road",
  },
];
