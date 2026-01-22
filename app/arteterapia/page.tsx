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
  'Expresar emociones que no puedes poner en palabras',
  'Procesar experiencias difíciles de manera no invasiva',
  'Conectar con tu mundo interior de forma segura',
  'Descubrir nuevas formas de entenderte',
  'Desarrollar herramientas para el autocuidado',
  'Transformar el dolor en creación',
]

const audiences = [
  {
    title: 'Niños',
    description: 'El arte les permite expresar lo que aún no saben nombrar.',
    image: '/helado.png',
  },
  {
    title: 'Adolescentes',
    description: 'Un espacio seguro para explorar su identidad y emociones.',
    image: '/adolecente.png',
  },
  {
    title: 'Adultos',
    description: 'Reconectar con la creatividad y procesar experiencias de vida.',
    image: '/cafe.png',
  },
]

const helpsWith = [
  {
    icon: '/Frame-21.png',
    title: 'Duelo',
    description: 'Creamos un espacio seguro para procesar la ausencia y el dolor.'
  },
  {
    icon: '/Frame-23-1.png',
    title: 'Autoconocimiento',
    description: 'Exploramos tus emociones y patrones con compasión.'
  },
  {
    icon: '/Frame-20-1.png',
    title: 'Cambios de vida',
    description: 'Transiciones como separaciones, mudanzas, nuevos comienzos.'
  },
  {
    icon: '/Frame-24-1.png',
    title: 'Enfermedades',
    description: 'Canalizamos el miedo y acompañamos emocionalmente.'
  },
  {
    icon: '/Frame-22.png',
    title: 'Ansiedad y estrés',
    description: 'Liberamos la tensión a través de la reconexión creativa.'
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
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
          <p className="text-lg text-black/70 leading-relaxed max-w-2xl">
            Explora y procesa emociones a través del arte. No necesitas experiencia artística.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-6">
            ¿Qué es la arteterapia?
          </h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Acompañamiento terapéutico que utiliza el proceso creativo para explorar emociones. A través del dibujo, pintura, collage y otras técnicas, puedes comunicar lo que es difícil expresar con palabras.
            </p>
            <p>
              <strong className="text-black">No importa el resultado estético</strong>. El foco está en el proceso y en lo que descubres mientras creas.
            </p>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8 text-center">
            ¿Para quién es la arteterapia?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl text-black mb-2">{audience.title}</h3>
                <p className="text-black/70">{audience.description}</p>
              </div>
            ))}
          </div>
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
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What it helps with */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              ¿En qué puede ayudarte?
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              La arteterapia te acompaña en diferentes momentos y procesos de vida.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {helpsWith.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 relative">
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

      {/* How it works */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            ¿Cómo funcionan las sesiones?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">Primera consulta gratuita</h3>
              <p className="text-black/70">
                Comenzamos con una breve conversación de 15 minutos donde me cuentas
                qué te trae aquí y juntos/as exploramos si la arteterapia es el camino
                adecuado para ti.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">Sesiones individuales</h3>
              <p className="text-black/70">
                Sesiones de 50 minutos donde trabajamos a tu ritmo, usando diferentes
                materiales y técnicas según lo que necesites explorar. Disponibles
                presenciales u online.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">Talleres grupales</h3>
              <p className="text-black/70">
                Encuentros seguros para crear en comunidad, compartir experiencias
                y procesar desde lo colectivo. La duración varía según el objetivo del taller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worksheet CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#B2F7EF]/10 rounded-2xl p-8 md:p-12 border border-[#B2F7EF]">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl text-black mb-4">
                Empieza desde casa con tus ejercicios personalizados
              </h2>
              <p className="text-black/70 max-w-2xl mx-auto leading-relaxed">
                ¿No estás seguro/a si la arteterapia es para ti? Crea tus ejercicios personalizados
                que puedes hacer por tu cuenta. Es gratis y te ayudará
                a explorar el proceso creativo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/hoja-de-trabajo" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all">
                Crear mis ejercicios gratis
              </Link>
              <span className="text-sm text-gray-500">
                PDF descargable • Ejercicios personalizados
              </span>
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
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-flex items-center gap-2"
          >
            <Calendar size={18} />
            Agenda tu sesión gratuita
          </a>
        </div>
      </section>
    </>
  )
}
