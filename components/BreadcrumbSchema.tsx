'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/seo'

const slugToTitle: Record<string, string> = {
  'duelo-perdida': 'Qué es el duelo',
  'cuanto-dura-el-duelo': '¿Cuánto dura el duelo?',
  'duelo-complicado': 'Duelo complicado',
  'duelo-anticipado': 'Duelo anticipado',
  'duelo-perinatal': 'Duelo perinatal',
  'duelo-por-mascota': 'Duelo por mascota',
  'muerte-mama': 'La muerte de tu mamá',
  'sindrome-cuidador': 'Síndrome del cuidador',
  'que-es-un-tanatologo': '¿Qué es un tanatólogo?',
  'aniversario-de-muerte': 'Aniversario de una muerte',
  'cumpleanos-persona-fallecida': 'El cumpleaños de quien ya no está',
  'duelo-sucio-alivio': 'El duelo sucio',
  'aniversarios-dificiles': 'Aniversarios difíciles',
  'como-superar-la-perdida-de-un-ser-querido': 'Cómo superar la pérdida',
  'duelo-del-cuidador': 'El duelo del cuidador',
  'duelo-por-divorcio': 'Duelo por divorcio',
  'duelo-por-enfermedad-o-diagnostico': 'Duelo por enfermedad',
  'duelo-y-redes-sociales': 'Duelo y redes sociales',
  'explicar-muerte-nino': 'Cómo explicar la muerte a un niño',
  'hablar-de-la-muerte': 'Hablar de la muerte',
  'menopausia-y-duelo': 'Menopausia y duelo',
  'navidad-en-duelo': 'Navidad en duelo',
  'que-decir-duelo': 'Qué decir a alguien en duelo',
  'rituales-despedida': 'Rituales de despedida',
  'como-acompanar-cancer-terminal': 'Cómo acompañar en cáncer terminal',
  'como-hablar-con-hijos-sobre-cancer': 'Cómo hablar con hijos sobre el cáncer',
  'duelo-amistad-perdida': 'Duelo por pérdida de amistad',
  'duelo-migratorio': 'Duelo migratorio',
  'duelo-por-tu-cuerpo': 'Duelo por tu cuerpo',
  'hermanos-de-ninos-enfermos': 'Hermanos de niños enfermos',
  'miedo-a-cumplir-anos': 'Miedo a cumplir años',
  'siete-etapas-del-duelo': 'Las 7 etapas del duelo',
  'duelo-perdida-trabajo': 'Duelo por pérdida de trabajo',
  'duelo-por-ser-mama': 'Duelo por ser mamá',
  'perder-la-fe': 'Perder la fe',
  'por-que-no-puedo-llorar': 'Por qué no puedo llorar',
  'duelo-y-culpa': 'Duelo y culpa',
  'tristeza-como-maestra': 'La tristeza como maestra',
  'verguenza-duelo': 'Vergüenza en el duelo',
  'que-es-la-arteterapia-beneficios': '¿Qué es la arteterapia?',
  'arteterapia-cancer': 'Arteterapia y cáncer',
  'ejercicios-arteterapia': 'Ejercicios de arteterapia',
  'beneficios-arte': 'Beneficios del arte',
  'mandalas-terapeuticos': 'Mandalas terapéuticos',
  'arte-trauma': 'Arte y trauma',
  'arteterapia-para-ninos': 'Arteterapia para niños',
  'arteterapia-para-la-ansiedad': 'Arteterapia para la ansiedad',
  'diferencia-psicologia-arteterapia': 'Diferencia psicología y arteterapia',
  'arteterapia-y-autismo': 'Arteterapia y autismo',
  'diferencia-arteterapia-clase-de-arte': 'Arteterapia vs clase de arte',
  'mexico-dia-de-muertos-rituales-tradiciones': 'México: Día de Muertos',
  'india-rituales-colores-bandera-espiritualidad-duelo': 'India: rituales y duelo',
  'bali-ritual-ngaben-colores-del-alma': 'Bali: ritual Ngaben',
  'malasia-rituales-colores-bandera-tradiciones-duelo': 'Malasia: rituales de duelo',
  'tailandia-rituales-colores-bandera-duelo-tradiciones': 'Tailandia: rituales de duelo',
  'vietnam-rituales-colores-bandera-duelo-ancestros': 'Vietnam: culto a los ancestros',
  'grecia-rituales-colores-bandera-duelo-islas-meteora': 'Grecia: rituales de duelo',
  'cuba-rituales-colores-bandera-duelo-tradiciones': 'Cuba: rituales de duelo',
  'turquia-rituales-colores-bandera-duelo-tradiciones': 'Turquía: rituales de duelo',
  'italia-rituales-colores-bandera-duelo-tradiciones': 'Italia: rituales de duelo',
  'mehndi-india-significado-henna-ritual-espiritual': 'Mehndi: henna ritual',
  'melukat-ceremonia-purificacion-bali-agua-sagrada': 'Melukat: purificación en Bali',
}

export default function BreadcrumbSchema() {
  const pathname = usePathname()
  const parts = pathname.split('/').filter(Boolean)

  const items: { name: string; item: string }[] = [
    { name: 'Inicio', item: siteConfig.url },
  ]

  if (parts[0] === 'blog') {
    items.push({ name: 'Blog', item: `${siteConfig.url}/blog` })

    if (parts[1]) {
      const title = slugToTitle[parts[1]] ?? parts[1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      items.push({ name: title, item: `${siteConfig.url}${pathname}` })
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.item,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
