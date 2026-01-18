// Site-wide SEO configuration
export const siteConfig = {
  name: 'Color Me',
  description: 'Acompañamiento para sanar el duelo y transformar tus emociones a través de la arteterapia y la tanatología. Sesiones individuales, grupales y talleres en México.',
  url: 'https://colorme.mx',
  author: 'Lourdes',
  locale: 'es_MX',
  email: 'hola@colorme.mx',
  phone: '', // Add when available
  address: {
    // Add physical address when available for local SEO
    city: 'México',
    country: 'MX',
  },
  social: {
    instagram: 'https://www.instagram.com/color.me.lab',
    facebook: 'https://www.facebook.com/profile.php?id=61577247024225',
  },
  book: {
    title: 'Indeleble',
    amazonEs: 'https://www.amazon.com.mx/dp/B0F2MYQHHZ',
    amazonEn: 'https://www.amazon.com/dp/B0F4KNJZ6B',
  },
  calendly: 'https://calendly.com/lou-diseno/primera-consulta-color-me',
}

// Generate LocalBusiness/ProfessionalService structured data
export function generateBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    serviceType: ['Arteterapia', 'Tanatología', 'Terapia de duelo', 'Acompañamiento emocional'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Color Me',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Arteterapia',
            description: 'Acompañamiento emocional a través del arte para expresar, comprender y transformar emociones.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tanatología',
            description: 'Acompañamiento en procesos de pérdida, cambio y duelo desde un enfoque humano y compasivo.',
          },
        },
      ],
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  }
}

// Generate Person structured data for Lou
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: 'Lourdes',
    jobTitle: ['Tanatóloga', 'Arteterapeuta', 'Diseñadora', 'Fotógrafa'],
    description: 'Diseñadora, artista, fotógrafa y tanatóloga. Acompaño a personas en procesos de duelo, cambio o cierre, creando espacios seguros para habitar lo que sienten.',
    url: siteConfig.url,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }
}

// Generate Book structured data for Indeleble
export function generateBookSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${siteConfig.url}/#book`,
    name: 'Indeleble',
    description: 'Un testimonio real de transformación y resiliencia. Una historia sobre la vida, la resiliencia y la belleza que persiste en el caos cuando el cáncer llega sin avisar.',
    author: {
      '@type': 'Person',
      name: 'Lourdes',
    },
    inLanguage: ['es', 'en'],
    bookFormat: 'EBook',
    genre: ['Autobiografía', 'Superación personal', 'Salud'],
    offers: [
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: siteConfig.book.amazonEs,
        priceCurrency: 'MXN',
        seller: {
          '@type': 'Organization',
          name: 'Amazon México',
        },
      },
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: siteConfig.book.amazonEn,
        priceCurrency: 'USD',
        seller: {
          '@type': 'Organization',
          name: 'Amazon',
        },
      },
    ],
  }
}

// Generate FAQPage structured data
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Service structured data
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceType: 'Online y Presencial',
    },
  }
}

// Generate WebPage structured data
export function generateWebPageSchema(page: {
  title: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: 'es-MX',
  }
}

// Generate BreadcrumbList structured data
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
