import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft, Check, Calendar } from 'lucide-react'
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arteterapia en México - Terapia a través del Arte',
  description:
    'Acompañamiento emocional a través del arte para explorar y procesar emociones. Sesiones de arteterapia individuales y grupales, presenciales y online en México.',
  keywords: [
    'arteterapia',
    'arte terapia México',
    'terapia con arte',
    'arteterapia online',
    'arteterapia presencial',
    'expresión artística terapéutica',
    'terapia creativa',
    'arteterapia para duelo',
    'arteterapia para ansiedad',
  ],
  alternates: {
    canonical: '/arteterapia',
  },
  openGraph: {
    title: 'Arteterapia en México - Exploración a través del Arte',
    description:
      'Explora y procesa emociones a través del arte. Sesiones de arteterapia individuales y grupales.',
    url: `${siteConfig.url}/arteterapia`,
  },
}

const benefits = [
  'Expresar emociones difíciles de verbalizar.',
  'Procesar traumas y vivencias dolorosas de forma no invasiva.',
  'Explorar tu mundo interior en un espacio seguro.',
  'Potenciar el autoconocimiento y la introspección.',
  'Desarrollar herramientas de autocuidado y regulación emocional.',
  'Transformar el dolor en sanación y crecimiento personal.',
  'Reducción del estrés y la ansiedad (disminuye los niveles de cortisol).',
  'Mejora de la concentración y la memoria.',
  'Mayor conexión mente-cuerpo.',
  'Fortalecimiento de la autoestima y confianza personal.',
  'Flexibilidad mental y apertura a nuevas perspectivas.',
]

const helpsWith = [
  {
    icon: '/Frame-21.png',
    title: 'Duelo',
    description: 'Creamos un espacio seguro para procesar la ausencia, expresar el dolor y transitar las emociones de la pérdida.'
  },
  {
    icon: '/Frame-23-1.png',
    title: 'Autoconocimiento',
    description: 'Exploramos tus emociones, patrones y creencias para reconectar contigo mismo y fortalecer tu bienestar interior.'
  },
  {
    icon: '/Frame-20-1.png',
    title: 'Cambios y transiciones de vida',
    description: 'Separaciones, mudanzas o nuevos comienzos. Te acompaño a adaptarte al cambio y encontrar nuevas formas de avanzar.'
  },
  {
    icon: '/Frame-24-1.png',
    title: 'Enfermedades y diagnósticos',
    description: 'Canalizamos el impacto de la noticia en un entorno de contención para gestionar las emociones que afectan tu salud mental.'
  },
  {
    icon: '/Frame-22.png',
    title: 'Ansiedad y estrés',
    description: 'Liberamos la tensión acumulada y recuperamos la calma a través de la reconexión creativa y la regulación emocional.'
  },
  {
    icon: '/Frame-29.png',
    title: 'Autoestima',
    description: 'Un proceso para volver a ti: recupera tu centro, reconoce tu valor intrínseco y reconecta con la confianza necesaria para habitar tu propia vida.'
  },
]

export default function ArteterapiaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Arteterapia',
    description:
      'Acompañamiento emocional a través del arte para expresar, comprender y transformar emociones. Sesiones individuales y grupales.',
    url: `${siteConfig.url}/arteterapia`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Arteterapia', url: `${siteConfig.url}/arteterapia` },
  ])

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Volver al inicio
              </Link>
              <h1 className="text-5xl md:text-6xl text-black mb-6">
                Arteterapia
              </h1>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  Acompañamiento emocional que utiliza el proceso creativo para explorar, expresar y transformar aquello que las palabras no alcanzan a decir.
                </p>
                <p>
                  A través del color, las texturas y el movimiento, personas de todas las edades encuentran un espacio seguro para liberar tensiones, procesar sus emociones y conectar con su interior.
                </p>
                <p>
                  No se busca un resultado estético ni experiencia previa; el valor reside en la libertad de crear y en el bienestar que surge durante el proceso.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/COLORME_logo-12-scaled.jpg"
                alt="Arteterapia - Exploración a través del arte"
                width={400}
                height={400}
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl text-black leading-relaxed">
            Explorar lo que sentimos, desde lo que creamos.
          </p>
        </div>
      </section>


      {/* Benefits */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-black mb-8">
                Beneficios de la arteterapia
              </h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-black" size={14} />
                    </div>
                    <span className="text-black/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/AdobeStock_210373409-1024x683.jpeg"
                alt="Arteterapia - Expresión a través del arte"
                width={600}
                height={400}
                className="rounded-3xl grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What it helps with */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              ¿En qué puede ayudarte?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {helpsWith.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            ¿Cómo funcionan las sesiones?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">1. Consulta gratuita</h3>
              <p className="text-black/70">
                Conversación de 30 minutos para conocernos, escuchar tus motivos y objetivos; exploraremos juntos si la arteterapia es el camino adecuado para ti.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">2. Plan personalizado</h3>
              <p className="text-black/70">
                Diseño las sesiones a medida, enfocándome exclusivamente en tus necesidades y en lo que buscamos trabajar.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">3. Sesiones de creación</h3>
              <p className="text-black/70">
                Espacio seguro para expresarte, liberar emociones y encontrar nuevas perspectivas a través del proceso artístico.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* CTA */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            ¿Listo/a para comenzar?
          </h2>
          <p className="text-black/70 mb-8">
            Agenda tu primera consulta gratuita y descubre cómo el arte puede
            ayudarte en tu proceso.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Agenda tu sesión gratuita
          </a>
        </div>
      </section>
    </>
  )
}
