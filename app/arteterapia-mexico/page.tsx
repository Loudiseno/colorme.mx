import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft, Check, Calendar } from 'lucide-react'
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arte como terapia en México - Terapia a través del Arte',
  description:
    'Acompañamiento emocional a través del arte para explorar y procesar emociones. Sesiones de arte como terapia individuales y grupales, presenciales y online en México.',
  keywords: [
    'arte como terapia',
    'arte terapia México',
    'terapia con arte',
    'arte como terapia online',
    'arte como terapia presencial',
    'expresión artística terapéutica',
    'terapia creativa',
    'arte como terapia para duelo',
    'arte como terapia para ansiedad',
  ],
  alternates: {
    canonical: '/arteterapia-mexico',
  },
  openGraph: {
    title: 'Arte como terapia en México - Exploración a través del Arte',
    description:
      'Explora y procesa emociones a través del arte. Sesiones de arte como terapia individuales y grupales.',
    url: `${siteConfig.url}/arteterapia-mexico`,
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
    icon: '/icono-colorme-corazon.webp',
    title: 'Duelo',
    description: 'Aceptar la pérdida, resignificar la ausencia y expresar las emociones que surgen, en un espacio seguro.'
  },
  {
    icon: '/icono-colorme-estrella.webp',
    title: 'Autoconocimiento',
    description: 'Explorar emociones, patrones y creencias para comprender lo que sientes y profundizar en tu propia experiencia.'
  },
  {
    icon: '/icono-colorme-arcoiris.webp',
    title: 'Cambios y transiciones',
    description: 'Acompañar los procesos que transforman tu vida y explorar nuevas perspectivas frente a lo que estás viviendo.'
  },
  {
    icon: '/icono-colorme-nube-de-lluvia.webp',
    title: 'Enfermedades y diagnósticos',
    description: 'Acompañar el impacto del diagnóstico, el proceso de enfermedad y la vida que se reconstruye a partir de esta experiencia.'
  },
  {
    icon: '/icono-colorme-rayo.webp',
    title: 'Ansiedad y estrés',
    description: 'Expresar y liberar la tensión acumulada para favorecer la calma y el bienestar.'
  },
  {
    icon: '/icono-colorme-esfera.webp',
    title: 'Autoestima',
    description: 'Reconocer tu valor, fortalecer la confianza en ti y trabajar desde una mirada amable hacia quien eres y tu historia.'
  },
]

export default function ArteterapiaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Arte como terapia',
    description:
      'Acompañamiento emocional a través del arte para expresar, comprender y transformar emociones. Sesiones individuales y grupales.',
    url: `${siteConfig.url}/arteterapia-mexico`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Arte como terapia', url: `${siteConfig.url}/arteterapia-mexico` },
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
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h1 className="text-4xl md:text-5xl text-black relative z-10">
                  Arte como terapia
                </h1>
              </div>
              <p className="text-lg text-black leading-relaxed mb-4">
                <strong>Expresa y transforma tus emociones a través del arte</strong>
              </p>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  Acompañamiento emocional que utiliza el proceso creativo para explorar, expresar y transformar aquello que las palabras no alcanzan.
                </p>
                <p>
                  A través del color, las texturas y el movimiento, se crea un espacio seguro para liberar tensiones, procesar emociones y conectar con tu interior.
                </p>
                <p>
                  No se requiere experiencia artística ni se busca un resultado estético; el valor está en la libertad de crear y lo que surge del proceso.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://wa.me/529992472678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
                >
                  Quiero saber más
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/arteterapia-sesion-creativa.webp"
                alt="Sesión de arte como terapia - expresión creativa"
                width={400}
                height={400}
                priority
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-lg md:text-xl text-black/70 italic leading-relaxed font-light">
            «Explorar lo que sentimos, desde lo que creamos.»
          </blockquote>
        </div>
      </section>

      {/* What it helps with */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              ¿En qué situaciones puede ayudarte el arte como terapia?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {helpsWith.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-28 h-28 mx-auto mb-4 relative">
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
          <p className="max-w-3xl mx-auto mt-8 text-sm text-black/50 leading-relaxed text-center">
            Este acompañamiento no constituye un tratamiento médico ni una intervención clínica, no realiza diagnósticos y no sustituye la atención psicológica o psiquiátrica.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8 text-center">
            Beneficios del arte como terapia
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
      </section>

      {/* Testimonios Gallery */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
              <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
              <h2 className="text-3xl md:text-4xl text-black relative z-10">Testimonios</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/anagaby-final.jpeg"
                  alt="Testimonio de Ana Gaby"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/60">Ana Gaby, 11 años</p>
            </div>
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/celeste-final.jpeg"
                  alt="Testimonio de Celeste"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/60">Celeste, 8 años</p>
            </div>
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/mari-final.jpeg"
                  alt="Testimonio de Mari"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/60">Mari, 9 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            ¿Qué sucede durante una sesión de Arte como terapia?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">1. Llamada inicial</h3>
              <p className="text-black/70">
                Conversación en línea gratuita de 30 minutos para conocernos, escucharte y comprender tu momento y explorar si el arte como terapia es el camino adecuado para tu proceso.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">2. Plan de acompañamiento personalizado</h3>
              <p className="text-black/70">
                Diseño de un plan de acompañamiento basado en tu momento de vida, objetivos personales y necesidades específicas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">3. Sesiones personalizadas</h3>
              <p className="text-black/70">
                Espacios de 50 minutos creados para ti, donde mediante dinámicas de arte como terapia podrás expresar, explorar y trabajar tu proceso de manera acompañada.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* CTA */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
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
