import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowLeft, Check, Calendar } from 'lucide-react'
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arteterapia en México - Terapia a través del Arte',
  description:
    'Acompañamiento emocional a través del arte para expresar, comprender y transformar emociones. Sesiones de arteterapia individuales y grupales, presenciales y online en México. No necesitas experiencia artística.',
  keywords: [
    'arteterapia',
    'arte terapia México',
    'terapia con arte',
    'arteterapia online',
    'arteterapia presencial',
    'expresión artística terapéutica',
    'sanación a través del arte',
    'terapia creativa',
    'arteterapia para duelo',
    'arteterapia para ansiedad',
  ],
  alternates: {
    canonical: '/arteterapia',
  },
  openGraph: {
    title: 'Arteterapia en México - Sanación a través del Arte',
    description:
      'Descubre el poder sanador del arte. Sesiones de arteterapia para expresar y transformar emociones. No necesitas saber dibujar.',
    url: `${siteConfig.url}/arteterapia`,
  },
}

const benefits = [
  'Expresar emociones que no puedes poner en palabras',
  'Procesar experiencias difíciles de manera no invasiva',
  'Conectar con tu mundo interior de forma segura',
  'Descubrir nuevas formas de entenderte',
  'Desarrollar herramientas para el autocuidado',
  'Transformar el dolor en creación',
]

const forWhom = [
  'Personas atravesando procesos de duelo',
  'Quienes buscan autoconocimiento y crecimiento personal',
  'Personas con ansiedad, estrés o dificultades emocionales',
  'Quienes tienen dificultad para expresar sus emociones verbalmente',
  'Personas en procesos de cambio o transición',
  'Cualquiera que quiera explorar el arte como herramienta de sanación',
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-blush/20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal/60 hover:text-terracotta transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink mb-6">
            Arteterapia
          </h1>
          <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl">
            Acompañamiento emocional a través del arte para expresar, comprender 
            y transformar emociones. No necesitas saber dibujar ni tener experiencia artística.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            ¿Qué es la arteterapia?
          </h2>
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              La arteterapia es una forma de acompañamiento terapéutico que utiliza 
              el proceso creativo como herramienta para la expresión emocional y el 
              autoconocimiento. A través del dibujo, la pintura, el collage, el modelado 
              y otras técnicas artísticas, puedes explorar y comunicar lo que a veces 
              es difícil expresar con palabras.
            </p>
            <p>
              En las sesiones de arteterapia, <strong>no importa el resultado estético</strong>. 
              No se trata de crear algo "bonito" o de tener habilidades artísticas. 
              El foco está en el proceso: en lo que surge mientras creas, en las emociones 
              que emergen, en los descubrimientos que haces sobre ti mismo/a.
            </p>
            <p>
              Como arteterapeuta, te acompaño en este proceso de exploración, creando 
              un espacio seguro donde puedas expresarte libremente y trabajar con lo 
              que aparece, sin juicios ni expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-sand/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
            Beneficios de la arteterapia
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="text-terracotta flex-shrink-0 mt-1" size={20} />
                <span className="text-charcoal/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
            ¿Para quién es la arteterapia?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {forWhom.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                <span className="text-charcoal/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-blush/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
            ¿Cómo funcionan las sesiones?
          </h2>
          <div className="space-y-6">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-display text-xl text-ink mb-2">Primera consulta gratuita</h3>
              <p className="text-charcoal/70">
                Comenzamos con una breve conversación de 15 minutos donde me cuentas 
                qué te trae aquí y juntos/as exploramos si la arteterapia es el camino 
                adecuado para ti.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-display text-xl text-ink mb-2">Sesiones individuales</h3>
              <p className="text-charcoal/70">
                Sesiones de 50 minutos donde trabajamos a tu ritmo, usando diferentes 
                materiales y técnicas según lo que necesites explorar. Disponibles 
                presenciales u online.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-display text-xl text-ink mb-2">Talleres grupales</h3>
              <p className="text-charcoal/70">
                Encuentros seguros para crear en comunidad, compartir experiencias 
                y sanar desde lo colectivo. La duración varía según el objetivo del taller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            ¿Listo/a para comenzar?
          </h2>
          <p className="text-charcoal/70 mb-8">
            Agenda tu primera consulta gratuita y descubre cómo el arte puede 
            ayudarte en tu proceso.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Calendar size={18} />
            Agenda tu sesión gratuita
          </a>
        </div>
      </section>
    </>
  )
}
