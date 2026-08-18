/**
 * Centralized business configuration for ArcticAir Pro Services.
 *
 * IMPORTANT — DEMO CONTENT:
 * All contact details, addresses, hours and social links below are
 * FICTIONAL placeholder data created for portfolio/demo purposes only.
 * They do not correspond to a real company. Replace every value in this
 * file with real business information before using this template for an
 * actual client or production deployment.
 *
 * This file is imported across the site (header, footer, CTAs, structured
 * data, contact page, etc.) so contact information only ever needs to be
 * updated in ONE place.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: "facebook" | "instagram" | "youtube" | "linkedin" | "x";
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export const business = {
  name: "ArcticAir Pro Services",
  legalName: "ArcticAir Pro Services (Demo)",
  shortName: "ArcticAir Pro",
  tagline: "Cooler Spaces. Smarter Comfort.",
  secondaryTagline: "Fast AC Service. Reliable Comfort.",
  description:
    "ArcticAir Pro Services is a fictional demo HVAC/AC company providing residential and commercial air-conditioning installation, repair, maintenance and emergency service.",
  foundedYear: 2016,

  // Fictional demo contact details — do not treat as real.
  phone: "+91 90000 78901",
  phoneDisplay: "+91 90000 78901",
  phoneHref: "tel:+919000078901",
  whatsapp: "+91 90000 78901",
  whatsappHref: "https://wa.me/919000078901",
  email: "hello@arcticairpro.example",
  emailHref: "mailto:hello@arcticairpro.example",

  address: {
    street: "52 Coastal Highway",
    locality: "Coastal City",
    region: "Coastal State",
    postalCode: "400001",
    country: "IN",
    full: "52 Coastal Highway, Coastal City, 400001",
  },

  geo: {
    latitude: 19.076,
    longitude: 72.8777,
  },

  hours: [
    { days: "Monday – Saturday", hours: "8:00 AM – 9:00 PM" },
    { days: "Sunday", hours: "9:00 AM – 6:00 PM" },
    { days: "Emergency Service", hours: "24/7" },
  ] satisfies BusinessHours[],

  emergencyAvailable: true,

  socialLinks: [
    { label: "Facebook", url: "https://facebook.com/arcticairpro.demo", icon: "facebook" },
    { label: "Instagram", url: "https://instagram.com/arcticairpro.demo", icon: "instagram" },
    { label: "LinkedIn", url: "https://linkedin.com/company/arcticairpro-demo", icon: "linkedin" },
    { label: "YouTube", url: "https://youtube.com/@arcticairpro-demo", icon: "youtube" },
  ] satisfies SocialLink[],

  serviceAreas: [
    "Coastal City",
    "North District",
    "Central Market",
    "Harbor Road",
    "West Avenue",
    "Tech Park",
    "Industrial Estate",
  ],

  trustBadges: [
    "24/7 Emergency Support",
    "Certified Technicians",
    "Same-Day Service",
    "Transparent Pricing",
  ],

  stats: {
    yearsExperience: "10+",
    servicesCompleted: "5000+",
    customerRating: "4.9/5",
    serviceAvailability: "Same-Day",
  },
} as const;

export type Business = typeof business;

/** SEO / metadata defaults shared across pages. */
export const siteMeta = {
  siteName: "ArcticAir Pro Services",
  siteUrl: "https://www.arcticairpro.example",
  defaultTitle: "ArcticAir Pro Services | Cooler Spaces. Smarter Comfort.",
  defaultDescription:
    "ArcticAir Pro Services provides professional AC installation, repair, maintenance and emergency HVAC service for homes and businesses. Certified technicians, transparent pricing, same-day availability. (Demo portfolio site — fictional business.)",
  twitterHandle: "@arcticairpro",
  locale: "en_IN",
  themeColor: "#0a1526",
} as const;
