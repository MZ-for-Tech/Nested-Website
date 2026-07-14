// JSON-LD Structured Data for SEO + AEO (Answer Engine Optimization)
// This feeds AI-powered answers from ChatGPT, Perplexity, Google SGE, Bing Copilot, etc.

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nestedunited.com/#organization",
    name: "Nested United",
    alternateName: "Nested United Company",
    url: "https://nestedunited.com",
    logo: {
      "@type": "ImageObject",
      url: "https://nestedunited.com/ASSETS/logos/nestedunited.svg",
      width: 360,
      height: 150,
    },
    description:
      "Nested United is a unified ecosystem of specialized brands delivering smart project operations, hospitality management, technology solutions, marketing services, and sustainable business growth across Saudi Arabia.",
    foundingDate: "2023",
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966-54-979-9468",
        contactType: "customer service",
        email: "NestedUnited@Gmail.com",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/nestedunited",
      "https://www.linkedin.com/company/nested-united/",
      "https://www.tiktok.com/@nested.united",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nested United Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "JoyNest — Events & Hospitality Management",
            description:
              "Professional events planning, hospitality management, and celebration services.",
            provider: { "@id": "https://nestedunited.com/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TechNest — Technology Solutions",
            description:
              "Systems, technologies, and digital solutions for modern businesses.",
            provider: { "@id": "https://nestedunited.com/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "OpNest — Real Estate Operations",
            description:
              "Real estate operations and property management solutions for residential, commercial, and hospitality assets.",
            provider: { "@id": "https://nestedunited.com/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PrintNest — Branding & Marketing",
            description:
              "Creative branding, printing, and marketing services.",
            provider: { "@id": "https://nestedunited.com/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TheNest — Boutique Hospitality",
            description:
              "Signature boutique hospitality experiences and accommodation.",
            provider: { "@id": "https://nestedunited.com/#organization" },
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nestedunited.com/#website",
    url: "https://nestedunited.com",
    name: "Nested United",
    description: "From Operations to Growth.",
    publisher: { "@id": "https://nestedunited.com/#organization" },
    inLanguage: "en-US",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://nestedunited.com/#localbusiness",
    name: "Nested United",
    image: "https://nestedunited.com/ASSETS/logos/nestedunited.svg",
    telephone: "+966-54-979-9468",
    email: "NestedUnited@Gmail.com",
    url: "https://nestedunited.com",
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: "Saudi Arabia",
    serviceType: [
      "Business Operations",
      "Hospitality Management",
      "Real Estate Operations",
      "Technology Solutions",
      "Marketing and Branding",
      "Events Management",
    ],
    knowsAbout: [
      "Smart project operations",
      "Hospitality management",
      "Technology solutions",
      "Real estate management",
      "Brand marketing",
      "Business growth consulting",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
