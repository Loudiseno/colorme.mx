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
    description: 'Pérdida de vínculos significativos: muerte de un ser querido, muerte de una mascota, ruptura de pareja, divorcio o distanciamiento familiar.',
  },
  {
    icon: '/Frame-23-1.png',
    title: 'Intrapersonales',
    description: 'Pérdida de identidad, sentido o propósito: crisis existencial, cambio de carrera o rol, sensación de fracaso, pérdida de proyectos o sueños.',
  },
  {
    icon: '/Frame-29.png',
    title: 'Materiales',
    description: 'Pérdida de bienes o estabilidad: dificultades económicas, pérdida de empleo, pérdida del hogar u objetos con valor emocional.',
  },
  {
    icon: '/Frame-22.png',
    title: 'Salud',
    description: 'Cambios físicos, mentales o emocionales: diagnóstico médico, enfermedad crónica, discapacidad, infertilidad, pérdidas gestacionales o perinatales o deterioro cognitivo.',
  },
  {
    icon: '/Frame-30.png',
    title: 'Evolutivas',
    description: 'Transiciones propias del ciclo de vida: envejecimiento, jubilación, nido vacío, cierre de etapas, mudanzas significativas o cambio de país.',
  },
  {
    icon: '/Frame-28.png',
    title: 'Ambiguas',
    description: 'Pérdidas sin cierre claro o con reconocimiento social limitado: desapariciones, duelo migratorio, aborto, relaciones no visibles.',
  },
]

const process = [
  {
    title: 'Escucha activa',
    description: 'Te ofrezco un espacio seguro y de contención donde puedes expresar libremente lo que sientes, sin juicios ni presiones externas.',
  },
  {
    title: 'Acompañamiento emocional',
    description: 'Te acompaño a transitar las diferentes emociones que surgen en tu proceso: tristeza, enojo, culpa, miedo o confusión.',
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

const sessionTypes = [
  { icon: '/columpio.png', title: 'Terapia individual', description: 'Sesiones personalizadas a tu ritmo y necesidades, con apoyo emocional cercano.' },
  { icon: '/corazon.png', title: 'Sesión grupal', description: 'Encuentros seguros para crear, compartir y sanar desde lo colectivo, trabajando temas de interés común.' },
  { icon: '/adolecente hombre.png', title: 'Talleres para organizaciones', description: 'Programas de bienestar emocional diseñados a medida según los objetivos del grupo.' },
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
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h1 className="text-5xl md:text-6xl text-black relative z-10">
                  Tanatología
                </h1>
              </div>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed mb-6">
                <p>
                  Acompañamiento emocional en procesos de pérdida, duelo y final de vida.
                </p>
                <p>
                  Un espacio seguro para expresar el dolor, dar lugar a las emociones y resignificar lo vivido.
                </p>
                <p>
                  Más allá de la muerte física, también acompaña duelos visibles e invisibles: vínculos que terminan, diagnósticos, la pérdida de una mascota, un empleo o una etapa de vida.
                </p>
              </div>
              <div>
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

      {/* Quote Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl text-black leading-relaxed">
            «El duelo no solo es despedir, es soltar, transformar y seguir adelante con amor.» Lou
          </p>
        </div>
      </section>

      {/* Sanar tras una pérdida */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8 text-center">
            Sanar tras una pérdida
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg text-black/70 leading-relaxed">
              <p>
                El duelo es una respuesta natural ante la pérdida. Es un proceso emocional, físico y psicológico que nos permite afrontar, procesar y adaptarnos a una nueva realidad.
              </p>
              <p>
                No sigue un camino lineal ni tiene un tiempo definido: cada persona lo vive de manera única. Puede estar acompañado de muchas emociones como tristeza, enojo, confusión, culpa o incluso alivio —todas válidas.
              </p>
              <p>
                Reconocer lo que sentimos es el primer paso para transformar el dolor en sanación y bienestar emocional.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/2-2.jpg"
                alt="Sanar tras una pérdida"
                width={600}
                height={450}
                className="w-full h-auto rounded-3xl"
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
              El duelo no surge únicamente ante la muerte. Existen múltiples formas de pérdida que impactan la vida emocional y que merecen ser reconocidas y acompañadas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {typesOfLoss.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl text-black mb-2 font-semibold">{item.title}</h3>
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
              <span className="text-black/80">Proporciona un espacio seguro y de contención donde puedes expresar lo que sientes, sin juicios y respetando tus propios tiempos.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Canaliza emociones complejas o bloqueadas, facilitando una gestión emocional saludable.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Favorece la reflexión profunda y el autoconocimiento en momentos de crisis o transición.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Valida tus emociones, ayudándote a entender y normalizar incluso los sentimientos más contradictorios.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Resignifica lo vivido para acompañarte en un proceso de reconstrucción personal basado en la aceptación y la honestidad.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Honra lo perdido, permitiéndote integrar la ausencia en tu historia de vida sin quedar atrapado en el dolor.</span>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            ¿Cómo es el proceso de acompañamiento?
          </h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
                <h3 className="text-xl md:text-2xl text-black mb-2 font-semibold">{item.title}</h3>
                <p className="text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">
            Tipos de sesiones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={type.icon}
                    alt={type.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">{type.title}</h3>
                <p className="text-black/70 leading-relaxed">{type.description}</p>
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
