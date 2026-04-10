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
    'que-es-arteterapia',
    'arteterapia-cancer',
    'ejercicios-arteterapia',
    'beneficios-arte',
    'mandalas-terapeuticos',
    'arte-trauma',
    'arteterapia-para-ninos',
    'arteterapia-para-la-ansiedad',
    'diferencia-psicologia-arteterapia',
    'tristeza-como-maestra',
    'verguenza-duelo',
    'por-que-no-puedo-llorar',
    'duelo-y-culpa',
    'perder-la-fe',
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
      url: `${baseUrl}/arteterapia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tanatologia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-mi`,
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
      url: `${baseUrl}/hoja-de-trabajo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacidad`,
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
