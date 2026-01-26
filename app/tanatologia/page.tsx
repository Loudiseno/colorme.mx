import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Check } from 'lucide-react'
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

const typesOfLoss = [
  {
    icon: '/Frame-21-2.png',
    title: 'Relacionales',
    description: 'Muerte, separación, rupturas, distanciamiento afectivo, rechazo familiar. También pérdidas gestacionales, de mascotas o relaciones no validadas socialmente (aborto, amantes, relaciones ocultas).',
  },
  {
    icon: '/Frame-23-1.png',
    title: 'Intrapersonales',
    description: 'Crisis de identidad, cambios de carrera, envejecimiento, cambios de rol, pérdida de sueños, sentimientos de fracaso, pérdida de sentido o propósito de vida.',
  },
  {
    icon: '/Frame-29.png',
    title: 'Materiales',
    description: 'Desempleo, estabilidad económica, patrimonio, hogar, estatus social, independencia.',
  },
  {
    icon: '/Frame-22.png',
    title: 'Salud',
    description: 'Diagnósticos crónicos, discapacidad adquirida, infertilidad, cambios físicos irreversibles, pérdida de autonomía, deterioro cognitivo.',
  },
  {
    icon: '/Frame-30.png',
    title: 'Evolutivas',
    description: 'Jubilación, nido vacío, divorcio, migración, cambios de ciudad, etapas vitales, transiciones forzadas o inesperadas.',
  },
  {
    icon: '/Frame-28.png',
    title: 'Ambiguas',
    description: 'Desapariciones, relaciones no resueltas, demencias, distanciamiento emocional, pérdidas no reconocidas, duelos sin cuerpo o sin ritual.',
  },
]

const process = [
  {
    title: '1. Escucha activa',
    description: 'Te brindo un espacio donde puedas hablar, llorar, guardar silencio o expresar lo que necesites, sin juicio.',
  },
  {
    title: '2. Acompañamiento emocional',
    description: 'Validamos cada emoción que aparezca: tristeza, enojo, culpa, miedo, alivio. Todo es válido.',
  },
  {
    title: '3. Resignificación',
    description: 'Trabajamos juntos/as para encontrar formas de integrar la pérdida en tu historia sin que defina toda tu identidad.',
  },
  {
    title: '4. Herramientas',
    description: 'Te acompaño a desarrollar recursos personales que te ayuden a cuidarte, regularte y sostenerte en este proceso.',
  },
]

const sessionTypes = [
  { icon: '/columpio.png', title: 'Sesiones individuales', description: 'Adaptadas a tu ritmo, tu historia y tu necesidad actual.' },
  { icon: '/corazon.png', title: 'Talleres grupales', description: 'Espacios de contención compartida para nombrar, soltar y reconstruir desde la escucha colectiva.' },
  { icon: '/adolecente hombre.png', title: 'Colectivos o empresas', description: 'Acompañamiento en procesos organizacionales con pérdidas, cierres, despidos o transiciones internas.' },
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
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h1 className="text-5xl md:text-6xl text-black relative z-10">
                  Tanatología
                </h1>
              </div>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  Acompañamiento emocional en procesos de pérdida, duelo y final de vida.
                </p>
                <p>
                  Te acompaño a nombrar y procesar emociones como tristeza, enojo, culpa o vacío, honrando tu historia y tu ritmo.
                </p>
                <p>
                  Este espacio te ofrece un lugar donde puedas expresar, resignificar y encontrar formas de vivir con lo que ha pasado.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/columpio.png"
                alt="Tanatología - Acompañamiento en duelo"
                width={400}
                height={400}
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <a
            href="https://wa.me/529992472678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Quiero saber más
          </a>
        </div>
      </section>

      {/* Sanar tras una pérdida */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8 text-center">
            Sanar tras una pérdida
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-2xl md:text-3xl text-black leading-relaxed">
              <span className="inline-block relative">
                «El duelo no solo es despedir, es soltar, transformar y seguir adelante con amor.» Lou
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#B2F7EF]"></span>
              </span>
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg text-black/70 leading-relaxed">
              <p>
                El duelo no se supera, se aprende a vivir con él. Es un proceso único, individual y no lineal que abarca toda forma de pérdida significativa.
              </p>
              <p>
                No existe una forma correcta de transitarlo ni un tiempo establecido. Cada persona lo vive a su ritmo, y ese ritmo debe respetarse.
              </p>
              <p>
                El acompañamiento tanatológico no busca acelerar el proceso ni evitar el dolor, sino sostener un espacio donde puedas habitarlo, comprenderlo y darle un lugar en tu historia sin que te paralice.
              </p>
            </div>
            <div>
              <Image
                src="/2-2.jpg"
                alt="Sanar tras una pérdida"
                width={600}
                height={450}
                className="w-full h-auto rounded-3xl grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Loss */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Tipos de pérdidas que acompaño
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              El duelo no solo surge ante la muerte. Hay muchos tipos de pérdidas que merecen ser nombradas y acompañadas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {typesOfLoss.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2">{item.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How can tanatología help */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            ¿Cómo te puede ayudar la Tanatología?
          </h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Sentir que el dolor es demasiado y necesitas un espacio seguro donde procesarlo.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Cuando sientes que no puedes hablar de tu pérdida con las personas cercanas por miedo al juicio o por no sentirte comprendido/a.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Si tu duelo interfiere con tu vida diaria: trabajo, relaciones, salud mental o física.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Cuando han pasado meses (o años) y la pérdida sigue sintiéndose reciente o no procesada.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Si sientes culpa, enojo, confusión o emociones que no sabes cómo manejar.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Necesitas herramientas para avanzar sin sentir que estás traicionando o dejando atrás a quien perdiste.</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
            >
              Agenda tu sesión
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            ¿Cómo es el proceso de acompañamiento?
          </h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
                <h3 className="text-xl text-black mb-2">{item.title}</h3>
                <p className="text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">
            Tipos de sesiones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={type.icon}
                    alt={type.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl text-black mb-2">{type.title}</h3>
                <p className="text-black/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined approach */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-6">
            Tanatología y arteterapia: un enfoque integrador
          </h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
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
            <Link
              href="/arteterapia"
              className="text-black hover:text-black/70 transition-colors font-medium inline-flex items-center gap-2"
            >
              Conoce más sobre arteterapia
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            No tienes que atravesar esto solo/a
          </h2>
          <p className="text-black/70 mb-8">
            El primer paso es el más difícil. Agenda una primera consulta gratuita
            y conversemos sobre cómo puedo acompañarte.
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
