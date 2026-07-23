import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

// Precios (actualizar aquí cuando cambien)
const PRECIO_PAQUETE_DUELO_CONSULTA = 950

// Paquete 1: Indeleble + El arte de habitar tu duelo (pago por Payhip)
const PAQUETE_LIBRO_DIARIO_PAYHIP = 'https://payhip.com/b/br6z2'

// Paquete 2: El arte de habitar tu duelo + 1 consulta individual (por WhatsApp)
const whatsappPaqueteConsulta = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Hola Lou, quiero reservar el paquete de "El arte de habitar tu duelo" + 1 consulta individual ($950). ¿Me compartes los detalles?'
)}`

const encontrarasDiario = [
  'Más de 50 ejercicios paso a paso, sin necesidad de saber dibujar.',
  'Reflexiones guiadas para escribir y explorar lo que sientes.',
  'Un check-in emocional de 30 días y micro-rituales diarios.',
  'Prácticas de respiración y calma para los días más difíciles.',
  'Tu propio kit personal de crisis y un calendario de fechas difíciles.',
]

const galeriaDiario = [
  { src: '/diario-antes-de-comenzar.webp', alt: 'El arte de habitar tu duelo — antes de comenzar' },
  { src: '/diario-frase.webp', alt: 'El arte de habitar tu duelo — frase' },
  { src: '/diario-lo-que-encontraras.webp', alt: 'El arte de habitar tu duelo — lo que encontrarás' },
  { src: '/el-arte-de-habitar-tablet.webp', alt: 'El arte de habitar tu duelo en tablet' },
]

export default function TiendaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Productos</h1>
          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
            Recursos creados desde la tanatología y la arteterapia para acompañarte
            en tu proceso, a tu ritmo y desde donde estés.
          </p>
        </div>
      </section>

      {/* Diario: El arte de habitar tu duelo */}
      <section className="py-10 md:py-12 bg-[#B2F7EF]/5" id="diario">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF]">
            {/* Imágenes (fondo blanco) */}
            <div className="bg-white p-6 md:p-8 flex flex-col justify-center gap-4">
              <div className="max-w-[280px] w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/el-arte-de-habitar-tu-duelo-portada.webp"
                  alt="El arte de habitar tu duelo - Diario terapéutico de duelo por Lou Pérez"
                  width={900}
                  height={1165}
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {galeriaDiario.map((img) => (
                  <div key={img.src} className="rounded-xl overflow-hidden border border-[#B2F7EF]/40">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={700}
                      height={906}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Texto (fondo cyan) */}
            <div className="bg-[#B2F7EF]/20 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-black mb-1">
                  <strong>El arte de habitar tu duelo</strong>
                </h2>
                <p className="text-sm text-black/60 mb-5">
                  Diario guiado de duelo y transformación
                </p>

                <div className="space-y-3 text-sm text-black/80 leading-snug">
                  <p className="font-semibold text-black">El duelo no se supera. Se habita.</p>
                  <p>
                    Te dijeron que fueras fuerte. Que el tiempo lo cura todo. Que ya deberías
                    estar mejor. Pero nadie te dio un espacio para vivir lo que llevas dentro.
                    Este diario quiere ser ese lugar.
                  </p>
                  <p>
                    Creado por Lou Pérez, una especialista certificada en tanatología, cuya
                    formación integra técnicas de arteterapia y otros enfoques aprendidos en
                    México, Bali, Tailandia, Malasia e India, este diario te guía en cuatro
                    momentos: reconocer lo que perdiste, dar espacio a tus emociones, reorganizar
                    tu vida e integrar lo vivido como parte de tu historia.
                  </p>
                  <p className="font-semibold text-black">Dentro encontrarás:</p>
                  <ul className="space-y-1.5">
                    {encontrarasDiario.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-black mt-0.5">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Creado para acompañar distintos tipos de pérdida: un ser querido, una relación,
                    la salud, una mascota, un país, la vida que imaginabas...
                  </p>
                  <p>
                    No existe una forma correcta de atravesar un duelo. Cada proceso es único.
                    Pero no tienes que hacerlo en soledad.
                  </p>
                </div>

                <a
                  href={siteConfig.diario.payhip}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md mt-6"
                >
                  Comprar el diario — descarga inmediata
                </a>

                <p className="text-xs text-black/40 mt-6 leading-snug">
                  ⚠️ Este material es un recurso de acompañamiento y no sustituye atención
                  psicológica, psiquiátrica ni médica profesional.
                  <br />© Lou Pérez · ColorMe. Uso personal. Prohibida su distribución o reventa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="py-10 md:py-12 bg-white" id="paquetes">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">Paquetes</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Paquete 1: Libro + Diario */}
            <div className="rounded-3xl border-2 border-[#B2F7EF] bg-[#B2F7EF]/10 p-8 md:p-10 flex flex-col text-center">
              <div className="inline-flex self-center items-center gap-2 bg-[#B2F7EF] text-black px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
                <Sparkles size={14} />
                PAQUETE 1
              </div>
              <div className="rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src="/bundle-indeleble-diario.webp"
                  alt="Paquete: Indeleble + El arte de habitar tu duelo"
                  width={1000}
                  height={563}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-2 leading-snug">
                Indeleble + El arte de habitar tu duelo
              </h3>
              <p className="text-base text-black font-bold mb-4">Sobrevivir y habitar.</p>
              <p className="text-black/70 leading-snug mb-8 flex-1">
                Un testimonio real de un diagnóstico de cáncer ilustrado en acuarelas
                y un diario con ejercicios y herramientas para acompañar cualquier duelo.
              </p>
              <a
                href={PAQUETE_LIBRO_DIARIO_PAYHIP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md self-center"
              >
                Quiero el paquete
              </a>
            </div>

            {/* Paquete 2: Diario + 1 consulta */}
            <div className="rounded-3xl border-2 border-[#B2F7EF] bg-[#B2F7EF]/10 p-8 md:p-10 flex flex-col text-center">
              <div className="inline-flex self-center items-center gap-2 bg-[#B2F7EF] text-black px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
                <Sparkles size={14} />
                PAQUETE 2
              </div>
              <div className="max-w-[240px] mx-auto rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src="/el-arte-de-habitar-mockup.webp"
                  alt="El arte de habitar tu duelo"
                  width={900}
                  height={1273}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-2 leading-snug">
                El arte de habitar tu duelo + 1 consulta individual
              </h3>
              <p className="text-base text-black font-bold mb-4">${PRECIO_PAQUETE_DUELO_CONSULTA} MXN</p>
              <p className="text-black/70 leading-snug mb-8 flex-1">
                El diario te acompaña todos los días, más una consulta individual en línea:
                50 minutos de acompañamiento tanatológico individual.
              </p>
              <a
                href={whatsappPaqueteConsulta}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md self-center"
              >
                Reserva tu sesión
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Indeleble */}
      <section className="py-10 md:py-12 bg-[#B2F7EF]/5" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF] bg-white">
            <div className="bg-white p-8 md:p-12 flex items-center justify-center">
              <div className="max-w-sm mx-auto">
                <Image
                  src="/libro-indeleble-cancer-resiliencia.webp"
                  alt="Indeleble - Libro sobre resiliencia y superación del cáncer por Lou"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-[#B2F7EF]/10 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-black mb-2"><strong>Indeleble</strong></h2>
                <p className="text-base text-black font-bold mb-6 leading-snug">
                  Una historia real de resiliencia y superación ante el cáncer, con ilustraciones en acuarela
                </p>
                <div className="space-y-4 leading-snug mb-6 text-black/70">
                  <p>
                    Crees que eres invencible, hasta que un diagnóstico lo cambia todo.
                    Un testimonio sobre la vida, la transformación personal y la belleza
                    que persiste en el caos después de un diagnóstico.
                  </p>
                  <p className="text-black font-semibold">
                    Disponible en Kindle y PDF descargable, en español y en inglés.
                  </p>
                </div>
                <p className="text-xs text-black/50 uppercase tracking-wider mb-2">Kindle</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <a
                    href={siteConfig.book.amazonEs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                  >
                    Español
                  </a>
                  <a
                    href={siteConfig.book.amazonEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                  >
                    Buy in English
                  </a>
                </div>
                <p className="text-xs text-black/50 uppercase tracking-wider mb-2">PDF descargable</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.book.pdfEs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                  >
                    PDF en español
                  </a>
                  <a
                    href={siteConfig.book.pdfEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                  >
                    PDF in English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nota final / puente a consulta gratuita */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-black/70 mb-8 leading-relaxed">
            Agenda una primera sesión de orientación sin costo y juntos vemos qué
            recurso o acompañamiento es el mejor para tu momento.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Agenda tu primera sesión gratuita
          </a>
        </div>
      </section>
    </>
  )
}
