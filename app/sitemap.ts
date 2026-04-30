import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // All blog articles
  const blogArticles = [
    'duelo-perdida',
    'cuanto-dura-el-duelo',
    'duelo-complicado',
    'duelo-anticipado',
    'duelo-perinatal',
    'duelo-por-mascota',
    'muerte-mama',
    'sindrome-cuidador',
    'que-es-un-tanatologo',
    'aniversario-de-muerte',
    'cumpleanos-persona-fallecida',
    'duelo-sucio-alivio',
    'aniversarios-dificiles',
    'como-superar-la-perdida-de-un-ser-querido',
    'duelo-del-cuidador',
    'duelo-por-divorcio',
    'duelo-por-enfermedad-o-diagnostico',
    'duelo-y-redes-sociales',
    'explicar-muerte-nino',
    'hablar-de-la-muerte',
    'menopausia-y-duelo',
    'navidad-en-duelo',
    'que-decir-duelo',
    'rituales-despedida',
    'superar-perdida-ser-querido',
    'que-es-la-arteterapia-beneficios',
    'arteterapia-cancer',
    'ejercicios-arteterapia',
    'beneficios-arte',
    'mandalas-terapeuticos',
    'arte-trauma',
    'arteterapia-para-ninos',
    'arteterapia-para-la-ansiedad',
    'diferencia-psicologia-arteterapia',
    'arteterapia-y-autismo',
    'diferencia-arteterapia-clase-de-arte',
    'tristeza-como-maestra',
    'verguenza-duelo',
    'por-que-no-puedo-llorar',
    'duelo-y-culpa',
    'perder-la-fe',
    'mexico-dia-de-muertos-rituales-tradiciones',
    'india-rituales-colores-bandera-espiritualidad-duelo',
    'bali-ritual-ngaben-colores-del-alma',
    'malasia-rituales-colores-bandera-tradiciones-duelo',
    'tailandia-rituales-colores-bandera-duelo-tradiciones',
    'vietnam-rituales-colores-bandera-duelo-ancestros',
    'grecia-rituales-colores-bandera-duelo-islas-meteora',
    'cuba-rituales-colores-bandera-duelo-tradiciones',
    'turquia-rituales-colores-bandera-duelo-tradiciones',
    'italia-rituales-colores-bandera-duelo-tradiciones',
    'mehndi-india-significado-henna-ritual-espiritual',
    'melukat-ceremonia-purificacion-bali-agua-sagrada',
    'como-acompanar-cancer-terminal',
    'como-hablar-con-hijos-sobre-cancer',
    'duelo-amistad-perdida',
    'duelo-migratorio',
    'duelo-por-tu-cuerpo',
    'hermanos-de-ninos-enfermos',
    'miedo-a-cumplir-anos',
    'siete-etapas-del-duelo',
  ]

  // Core pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/arteterapia-mexico`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tanatologia-acompanamiento-duelo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-mi-lou-arteterapeuta-tanatologa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/preguntas-frecuentes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hoja-de-trabajo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Blog article routes
  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...coreRoutes, ...blogRoutes]
}
