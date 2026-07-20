import Image from 'next/image'
import { Check, Download, Heart, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

// Precios (actualizar aquí cuando cambien)
const PRECIO_CONSULTA = 800

const whatsappBundle = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Hola Lou, me interesa el paquete del diario de duelo + 2 consultas individuales. ¿Me compartes los detalles?'
)}`

const contenidoDiario = [
  'Un recorrido en 4 momentos: reconocer, sentir, reorganizar e integrar',
  'Más de 50 ejercicios de arte, escritura y reflexión, paso a paso',
  'Reflexiones guiadas para escribir',
  'Check-in emocional de 30 días y micro-rituales',
  'Prácticas de respiración y calma para los días más difíciles',
  'Tu propio kit personal de crisis y un calendario de fechas difíciles',
]

export default function TiendaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Tienda</h1>
          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
            Recursos creados desde la tanatología y la arteterapia para acompañarte
            en tu proceso, a tu ritmo y desde donde estés.
          </p>
        </div>
      </section>

      {/* Diario de Duelo */}
      <section className="py-10 md:py-12 bg-[#B2F7EF]/5" id="diario">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF] bg-white">
            {/* Portada tipográfica */}
            <div className="bg-[#B2F7EF]/20 p-8 md:p-12 flex items-center justify-center">
              <div className="max-w-sm w-full aspect-[3/4] rounded-2xl bg-white border border-[#B2F7EF] shadow-lg flex flex-col items-center justify-center text-center p-8">
                <Heart className="text-black mb-6" size={32} strokeWidth={1.5} />
                <p className="text-2xl md:text-3xl text-black leading-snug mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
                  El duelo no se supera.
                  <br />
                  Se habita.
                </p>
                <p className="text-sm text-black/50 tracking-widest uppercase">
                  Diario de duelo
                </p>
                <p className="text-xs text-black/40 mt-6">
                  189 páginas · PDF descargable
                </p>
              </div>
            </div>

            {/* Descripción */}
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-black mb-4">
                  Diario de duelo: <strong>sentir, escribir, crear</strong>
                </h2>
                <div className="space-y-4 text-black/70 leading-relaxed mb-6">
                  <p>
                    Te dijeron que fueras fuerte, que el tiempo lo cura todo, que ya
                    deberías estar mejor. Pero nadie te dio un espacio para sentir lo
                    que estás sintiendo. <strong className="text-black">Este diario es ese espacio.</strong>
                  </p>
                  <p>
                    Un diario para sentir, escribir, crear y acompañarte en tu proceso,
                    creado desde la tanatología y la arteterapia. No necesitas saber
                    dibujar ni tener las palabras correctas: las líneas, las formas y
                    el color hablan por ti.
                  </p>
                </div>

                <p className="text-black font-semibold mb-3">Lo que encontrarás dentro (189 páginas):</p>
                <ul className="space-y-2 mb-6">
                  {contenidoDiario.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-black/70 text-sm leading-relaxed">
                      <Check size={16} className="text-[#B2F7EF] mt-1 flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-black/70 text-sm leading-relaxed mb-6">
                  Para todo tipo de pérdida: un ser querido, una relación, la salud,
                  un país, la vida que imaginabas.
                </p>

                <div className="bg-[#B2F7EF]/10 border border-[#B2F7EF] rounded-xl p-4 mb-6">
                  <p className="text-sm text-black/70 leading-relaxed flex items-start gap-2">
                    <Download size={16} className="text-black mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-black">PDF de descarga inmediata</strong>, tamaño carta.
                      Imprímelo o úsalo en tu tablet (GoodNotes, Notability).
                    </span>
                  </p>
                </div>

                <a
                  href={siteConfig.diario.payhip}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md"
                >
                  Comprar el diario — descarga inmediata
                </a>

                <p className="text-xs text-black/40 mt-6 leading-relaxed">
                  ⚠️ Este material es un recurso de acompañamiento y no sustituye
                  atención psicológica, psiquiátrica ni médica profesional.
                  <br />© Lou Pérez · ColorMe. Uso personal. Prohibida su distribución o reventa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle: Diario + 2 consultas */}
      <section className="py-10 md:py-12 bg-white" id="paquete">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border-2 border-[#B2F7EF] bg-[#B2F7EF]/10 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-[#B2F7EF] text-black px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
              <Sparkles size={14} />
              PAQUETE DE ACOMPAÑAMIENTO
            </div>
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Diario + 2 consultas individuales
            </h2>
            <p className="text-black/70 leading-relaxed max-w-2xl mx-auto mb-8">
              El diario te acompaña todos los días; las consultas te dan un espacio
              vivo para procesar lo que va surgiendo. Dos sesiones individuales
              conmigo, en línea, para trabajar tu proceso con el apoyo del diario.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-left">
              <div className="bg-white rounded-xl border border-[#B2F7EF] p-4">
                <p className="text-black font-semibold text-sm mb-1">Diario de duelo</p>
                <p className="text-black/60 text-xs leading-relaxed">PDF de 189 páginas, descarga inmediata</p>
              </div>
              <div className="bg-white rounded-xl border border-[#B2F7EF] p-4">
                <p className="text-black font-semibold text-sm mb-1">Consulta individual 1</p>
                <p className="text-black/60 text-xs leading-relaxed">Sesión en línea (valor ${PRECIO_CONSULTA} MXN)</p>
              </div>
              <div className="bg-white rounded-xl border border-[#B2F7EF] p-4">
                <p className="text-black font-semibold text-sm mb-1">Consulta individual 2</p>
                <p className="text-black/60 text-xs leading-relaxed">Sesión en línea (valor ${PRECIO_CONSULTA} MXN)</p>
              </div>
            </div>

            <a
              href={whatsappBundle}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md"
            >
              Quiero el paquete — escríbeme por WhatsApp
            </a>
            <p className="text-xs text-black/50 mt-4">
              Te respondo personalmente para coordinar el pago y agendar tus sesiones.
            </p>
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
                <p className="text-base text-black font-bold mb-6">
                  Una historia real de resiliencia y superación ante el cáncer
                </p>
                <div className="space-y-4 leading-relaxed mb-6 text-black/70">
                  <p>
                    Crees que eres invencible, hasta que un diagnóstico lo cambia todo.
                    Una historia honesta sobre la vida, la transformación personal y la
                    belleza que persiste en el caos.
                  </p>
                  <p>
                    Disponible en formato Kindle, en español y en inglés.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.book.amazonEs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                  >
                    Comprar en español (Kindle)
                  </a>
                  <a
                    href={siteConfig.book.amazonEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                  >
                    Buy in English (Kindle)
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
