export const siteUrl = "https://www.1fonie.fr";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "1FONIE Pro",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`
  };
}

export function serviceSchema({ name, description, areaServed }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed,
    provider: {
      "@type": "Organization",
      name: "1FONIE Pro",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`
    }
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
}
