// JSON-LD Structured Data for SEO + AEO (Answer Engine Optimization)
// Optimized for Google, ChatGPT, Perplexity, Google SGE, Bing Copilot — Saudi Market

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nestedunited.com/#organization",
    name: "Nested United",
    alternateName: ["Nested United Company", "نيستد يونايتد", "نيستد يونايتد للخدمات"],
    url: "https://nestedunited.com",
    logo: {
      "@type": "ImageObject",
      url: "https://nestedunited.com/ASSETS/logos/logo.svg",
      width: 360,
      height: 150,
    },
    description:
      "Nested United is a Saudi-based integrated business ecosystem offering technology services, project management, real estate operations, graphic design, printing, digital marketing, event planning, and e-commerce solutions in Jeddah and across Saudi Arabia. نيستد يونايتد شركة سعودية متكاملة تقدم خدمات تقنية، إدارة مشاريع، تشغيل عقارات، تصميم جرافيك، طباعة، تسويق رقمي، تنظيم فعاليات وحفلات في جدة والمملكة العربية السعودية.",
    foundingDate: "2023",
    foundingLocation: {
      "@type": "Place",
      name: "Jeddah, Saudi Arabia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jeddah",
        addressRegion: "Makkah",
        addressCountry: "SA",
      },
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "City",
        name: "Jeddah",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966-54-979-9468",
        contactType: "customer service",
        email: "NestedUnited@Gmail.com",
        availableLanguage: ["Arabic", "English"],
        areaServed: "SA",
      },
    ],
    sameAs: [
      "https://www.instagram.com/nestedunited",
      "https://www.linkedin.com/company/nested-united/",
      "https://www.tiktok.com/@nested.united",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nested United Services | خدمات نيستد يونايتد",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "JoyNest — تنظيم الفعاليات والحفلات وإدارة الضيافة في جدة",
            description:
              "خدمات تنظيم حفلات، مؤتمرات، معارض، وإدارة الفعاليات في جدة والمملكة العربية السعودية. Professional events planning, conference and exhibition organizing, and hospitality management in Jeddah, Saudi Arabia.",
            provider: { "@id": "https://nestedunited.com/#organization" },
            areaServed: "Jeddah, Saudi Arabia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TechNest — خدمات تقنية، إنشاء مواقع، متاجر إلكترونية في جدة",
            description:
              "إنشاء مواقع إلكترونية، تطوير متاجر إلكترونية، إدارة مواقع، وحلول تقنية للأعمال في جدة والسعودية. Website development, e-commerce stores, IT solutions, and technology services for businesses in Jeddah, Saudi Arabia.",
            provider: { "@id": "https://nestedunited.com/#organization" },
            areaServed: "Jeddah, Saudi Arabia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "OpNest — تأجير عقارات يومي وشهري، Airbnb، جاذر إن في جدة",
            description:
              "إدارة وتشغيل العقارات، تأجير يومي وشهري، إدارة وحدات Airbnb وجاذر إن في جدة. Real estate operations, daily and monthly rental management, Airbnb and Gathern property management in Jeddah, Saudi Arabia.",
            provider: { "@id": "https://nestedunited.com/#organization" },
            areaServed: "Jeddah, Saudi Arabia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PrintNest — تصميم جرافيك، طباعة، تسويق رقمي، حملات إعلانية في جدة",
            description:
              "تصميم لوقو، جرافيك، طباعة، تسويق رقمي، وإدارة حملات إعلانية في جدة والسعودية. Logo design, graphic design, printing services, digital marketing, and advertising campaigns in Jeddah, Saudi Arabia.",
            provider: { "@id": "https://nestedunited.com/#organization" },
            areaServed: "Jeddah, Saudi Arabia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TheNest — ضيافة بوتيك وإقامة متميزة في جدة",
            description:
              "تجارب ضيافة بوتيك وإقامة متميزة في جدة. Boutique hospitality experiences and premium accommodation in Jeddah, Saudi Arabia.",
            provider: { "@id": "https://nestedunited.com/#organization" },
            areaServed: "Jeddah, Saudi Arabia",
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
    description:
      "Nested United — شركة سعودية متكاملة في جدة. خدمات تقنية، إدارة مشاريع، عقارات، تسويق، فعاليات. From Operations to Growth.",
    publisher: { "@id": "https://nestedunited.com/#organization" },
    inLanguage: ["ar-SA", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://nestedunited.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://nestedunited.com/#localbusiness",
    name: "Nested United",
    alternateName: "نيستد يونايتد",
    image: "https://nestedunited.com/ASSETS/logos/logo.svg",
    telephone: "+966549799468",
    email: "NestedUnited@Gmail.com",
    url: "https://nestedunited.com",
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Region",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.5433",
      longitude: "39.1728",
    },
    areaServed: [
      "Jeddah",
      "Riyadh",
      "Saudi Arabia",
      "جدة",
      "الرياض",
      "المملكة العربية السعودية",
    ],
    serviceType: [
      "خدمات تقنية",
      "إدارة مشاريع",
      "تشغيل مشاريع",
      "إنشاء موقع إلكتروني",
      "إدارة مواقع إلكترونية",
      "إنشاء متجر إلكتروني",
      "تأجير عقارات",
      "تأجير يومي",
      "تأجير شهري",
      "إدارة Airbnb",
      "إدارة جاذر إن",
      "تسويق رقمي",
      "حملات إعلانية",
      "تصميم جرافيك",
      "تصميم لوقو",
      "طباعة",
      "تنظيم حفلات",
      "تنظيم مؤتمرات",
      "تنظيم معارض",
      "Technology Services",
      "Project Management",
      "Real Estate Operations",
      "Website Development",
      "E-commerce",
      "Digital Marketing",
      "Graphic Design",
      "Printing",
      "Event Planning",
    ],
    knowsAbout: [
      "إدارة المشاريع في السعودية",
      "تشغيل العقارات في جدة",
      "التسويق الرقمي في السعودية",
      "تنظيم الفعاليات في جدة",
      "الخدمات التقنية في السعودية",
      "تأجير العقارات اليومي والشهري",
      "إدارة وحدات Airbnb و جاذر إن",
      "تصميم الهوية التجارية",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  // FAQ Schema for AEO — helps appear in Google's "People Also Ask" & AI answers
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ما هي خدمات Nested United في جدة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nested United تقدم في جدة: خدمات تقنية وإنشاء مواقع ومتاجر إلكترونية، إدارة وتأجير عقارات يومي وشهري وإدارة Airbnb وجاذر إن، تصميم جرافيك وطباعة وتسويق رقمي وحملات إعلانية، تنظيم حفلات ومؤتمرات ومعارض في جدة والمملكة العربية السعودية.",
        },
      },
      {
        "@type": "Question",
        name: "هل Nested United تدير وحدات Airbnb وجاذر إن في جدة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، من خلال علامة OpNest، تقدم Nested United خدمة إدارة وتشغيل الوحدات السكنية على منصات Airbnb وجاذر إن في جدة، بما يشمل التأجير اليومي والشهري وإدارة الحجوزات.",
        },
      },
      {
        "@type": "Question",
        name: "هل Nested United تنظم حفلات وفعاليات في جدة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، من خلال علامة JoyNest، تقدم Nested United خدمات تنظيم الحفلات والمؤتمرات والمعارض وإدارة الفعاليات بالكامل في جدة والمملكة العربية السعودية.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Nested United in Jeddah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Nested United by phone at +966 54 979 9468, by email at NestedUnited@Gmail.com, or through their social media on Instagram @nestedunited, LinkedIn, and TikTok @nested.united.",
        },
      },
      {
        "@type": "Question",
        name: "What is Nested United?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nested United is a Saudi-based integrated business ecosystem headquartered in Jeddah. It comprises five specialized brands: JoyNest (events & hospitality), TechNest (technology & websites), OpNest (real estate & rentals), PrintNest (design, printing & marketing), and TheNest (boutique hospitality). The company serves clients across Saudi Arabia with end-to-end business solutions.",
        },
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
