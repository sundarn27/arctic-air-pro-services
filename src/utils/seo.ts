import { business, siteMeta } from "@config/business";
import type { Service } from "@data/services";

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

/** Builds JSON-LD for the LocalBusiness (HVACBusiness) entity. Reused across pages. */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteMeta.siteUrl}/#business`,
    name: business.name,
    description: siteMeta.defaultDescription,
    url: siteMeta.siteUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: business.hours
      .filter((h) => h.days !== "Emergency Service")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.hours.split("–")[0]?.trim(),
        closes: h.hours.split("–")[1]?.trim(),
      })),
    sameAs: business.socialLinks.map((s) => s.url),
  };
}

/** Builds JSON-LD Service schema for an individual service page. */
export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "HVACBusiness",
      name: business.name,
      telephone: business.phone,
      url: siteMeta.siteUrl,
    },
    areaServed: business.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: service.startingPrice,
      description: `Starting from ${service.priceLabel} — final pricing depends on inspection and actual service requirements.`,
    },
  };
}

/** Builds JSON-LD FAQPage schema from an array of Q&A pairs. */
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Builds JSON-LD BreadcrumbList schema. */
export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
