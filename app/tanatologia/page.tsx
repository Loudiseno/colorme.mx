import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowLeft, Check, Calendar } from 'lucide-react'
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Tanatología en México - Acompañamiento en Duelo y Pérdida',
  description:
    'Acompañamiento tanatológico profesional para procesos de duelo, pérdida y cambio. Terapia de duelo presencial y online en México. Enfoque humano y compasivo para resignificar lo vivido.',
  keywords: [
    'tanatología',
    'tanatología México',
    'terapia de duelo',
    'acompañamiento en duelo',
    'superar pérdida',
    'duelo por muerte',
    'tanatólogo México',
    'duelo online',
    'resignificar pérdida',
    'procesar duelo',
    'acompañamiento tanatológico',
  ],
  alternates: {
    canonical: '/tanatologia',
  },
  openGraph: {
    title: 'Tanatología en México - Acompañamiento en Duelo',
    description:
      'Acompañamiento profesional y compasivo para procesos de duelo y pérdida. Sesiones presenciales y online.',
    url: `${siteConfig.url}/tanatologia`,
  },
}

const situations = [
  'Muerte de un ser querido (familiar, amigo, mascota)',
  'Diagnóstico de enfermedad terminal (propia o de un ser querido)',
  'Pérdidas no relacionadas con la muerte: divorcio, separación, pérdida de empleo',
  'Duelo anticipado ante enfermedades crónicas o degenerativas',
  'Pérdidas gestacionales o perinatales',
  'Cambios de vida significativos: migración, jubilación, nido vacío',
  'Duelos no resueltos del pasado',
]

const process = [
  {
    title: 'Escucha activa',
    description: 'Te ofrezco un espacio seguro donde puedas expresar libremente lo que sientes, sin juicios ni presiones.',
  },
  {
    title: 'Acompañamiento emocional',
    description: 'Te acompaño a transitar las diferentes emociones que surgen: tristeza, enojo, culpa, miedo, confusión.',
  },
  {
    title: 'Resignificación',
    description: 'Juntos/as trabajamos para encontrar nuevos significados y formas de integrar la pérdida en tu historia.',
  },
  {
    title: 'Herramientas',
    description: 'Te brindo recursos prácticos para afrontar el día a día y cuidar de ti mismo/a durante el proceso.',
  },
]

export default function TanatologiaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Tanatología',
    description:
      'Acompañamiento profesional para procesos de pérdida, cambio y duelo, ayudando a resignificar lo vivido desde un enfoque humano y compasivo.',
    url: `${siteConfig.url}/tanatologia`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Tanatología', url: `${siteConfig.url}/tanatologia` },
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-mist/20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal/60 hover:text-terracotta transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink mb-6">
            Tanatología
          </h1>
          <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl">
            Acompañamiento en procesos de pérdida, cambio y duelo. Te ayudo a 
            resignificar lo vivido para seguir adelante con sentido, desde un 
            enfoque humano y compasivo.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            ¿Qué es la tanatología?
          </h2>
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              La tanatología es una disciplina que se enfoca en acompañar a las personas 
              en sus procesos de pérdida, duelo y muerte. Aunque su nombre proviene del 
              griego <em>thanatos</em> (muerte), la tanatología es en realidad una 
              disciplina sobre la <strong>vida</strong>: sobre cómo seguir viviendo 
              después de una pérdida significativa.
            </p>
            <p>
              Como tanatóloga, mi trabajo es ofrecerte un espacio seguro donde puedas 
              expresar tu dolor, procesar tus emociones y encontrar formas de integrar 
              la pérdida en tu historia de vida. No se trata de "superar" el duelo 
              como si fuera algo que hay que dejar atrás, sino de aprender a vivir 
              con él de una manera que te permita seguir adelante.
            </p>
            <p>
              El duelo no tiene un tiempo definido ni un camino único. Cada persona 
              lo vive de manera diferente, y mi rol es acompañarte en tu proceso 
              particular, respetando tu ritmo y tus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="section bg-sand/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
            ¿Cuándo buscar acompañamiento tanatológico?
          </h2>
          <p className="text-charcoal/70 mb-6">
            El acompañamiento tanatológico puede ayudarte en diversas situaciones de pérdida:
          </p>
          <div className="space-y-3">
            {situations.map((situation, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="text-terracotta flex-shrink-0 mt-1" size={20} />
                <span className="text-charcoal/80">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
            ¿Cómo es el proceso de acompañamiento?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-mist/20 rounded-2xl p-6">
                <h3 className="font-display text-xl text-ink mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined approach */}
      <section className="section bg-mist/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            Tanatología y arteterapia: un enfoque integrador
          </h2>
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              En muchos casos, combino la tanatología con la arteterapia para ofrecer 
              un acompañamiento más completo. El arte puede ser una herramienta poderosa 
              para expresar emociones que a veces son difíciles de poner en palabras.
            </p>
            <p>
              Esta combinación no es obligatoria: algunas personas prefieren trabajar 
              solo desde la palabra, otras encuentran en el arte un canal de expresión 
              más natural. Juntos/as decidimos qué enfoque se adapta mejor a tu proceso.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/arteterapia" className="text-terracotta hover:text-clay transition-colors">
              Conoce más sobre arteterapia →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            No tienes que atravesar esto solo/a
          </h2>
          <p className="text-charcoal/70 mb-8">
            El primer paso es el más difícil. Agenda una primera consulta gratuita 
            y conversemos sobre cómo puedo acompañarte.
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
