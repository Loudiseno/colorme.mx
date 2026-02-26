'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloDistorsionado() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">El duelo distorsionado: cuando el dolor se transforma en algo más</h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo-distorsionado.webp" alt="Duelo distorsionado, duelo complicado, duelo no procesado, duelo enmascarado, somatización duelo." width={1200} height={675} priority className="w-full h-auto" />
        </div>
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">Lo que pasa cuando el duelo no puede seguir su curso natural.</p>

          <p>El duelo tiene su propio ritmo. Su propio camino. Pero a veces ese camino se tuerce.</p>

          <p>No porque la persona que llora haya hecho algo mal. Sino porque las circunstancias, el entorno o la historia de vida no permitieron que el dolor encontrara su salida natural.</p>

          <p>A eso le llamamos duelo distorsionado: cuando el proceso de duelo se desvía de su curso y adopta formas que no reconocemos fácilmente como duelo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué se distorsiona el duelo</h2>

          <p>El duelo puede distorsionarse por muchas razones. No hay una causa única ni una fórmula que explique cuándo esto ocurre. Pero hay factores que aumentan la probabilidad.</p>

          <ul>
            <li><strong>Una pérdida que no fue reconocida socialmente.</strong> Cuando los demás no validan el duelo, la persona no tiene permiso para vivirlo abiertamente. El dolor se interioriza y busca otras salidas.</li>
            <li><strong>Múltiples pérdidas en poco tiempo.</strong> Cuando el sistema nervioso enfrenta demasiado sin tiempo para recuperarse, el duelo puede acumularse y saturarse.</li>
            <li><strong>Pérdidas traumáticas o violentas.</strong> La manera en que ocurrió la muerte puede complicar el proceso de duelo significativamente.</li>
            <li><strong>Aprendizaje de no sentir.</strong> Si desde la infancia aprendiste que mostrar dolor era peligroso o inadecuado, el duelo no encontrará canales de expresión saludables.</li>
            <li><strong>Falta de red de apoyo.</strong> Duelo sin acompañamiento puede quedar sin procesar.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las formas que puede adoptar el duelo distorsionado</h2>

          <p>El duelo distorsionado no tiene una sola cara. Puede aparecer de maneras que no identificamos inmediatamente como relacionadas con una pérdida.</p>

          <ul>
            <li><strong>Duelo crónico.</strong> El duelo que no avanza. La persona permanece en el dolor agudo durante años, sin poder integrar la pérdida ni retomar su vida.</li>
            <li><strong>Duelo retardado.</strong> La persona no siente casi nada en el momento de la pérdida, pero meses o años después el dolor aparece de golpe, muchas veces detonado por algo aparentemente menor.</li>
            <li><strong>Duelo enmascarado.</strong> El dolor se expresa a través de síntomas que no reconocemos como duelo: enfermedades físicas inexplicables, cambios de conducta, depresión que no conectamos con la pérdida.</li>
            <li><strong>Duelo exagerado.</strong> Las emociones se intensifican hasta un punto que interfiere completamente con la capacidad de funcionar, muchas veces con ansiedad severa o episodios disociativos.</li>
            <li><strong>Duelo abreviado.</strong> El proceso parece terminar demasiado rápido, no porque la persona haya sanado, sino porque el dolor fue suprimido.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La somatización: cuando el cuerpo carga lo que la mente no puede</h2>

          <p>Una de las expresiones más comunes del duelo distorsionado es la somatización. El cuerpo habla lo que las palabras no pueden decir.</p>

          <p>Dolores de cabeza crónicos sin causa orgánica. Problemas digestivos persistentes. Tensión muscular que no cede. Fatiga que no mejora con descanso. Enfermedades que aparecen repetidamente.</p>

          <p>El cuerpo no está mintiendo. Está traduciendo el dolor emocional a un lenguaje físico porque no encontró otro canal.</p>

          <p>Cuando los médicos no encuentran una causa física para estos síntomas, a veces vale la pena preguntarse: ¿hay una pérdida que no ha sido procesada?</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Reconocer el duelo debajo</h2>

          <p>El primer paso para trabajar un duelo distorsionado es identificarlo. Reconocer que debajo de la ansiedad, debajo de la ira crónica, debajo de la depresión inexplicable, hay una pérdida que no ha sido llorada.</p>

          <p>Algunas señales de que podría haber un duelo no procesado debajo de la superficie.</p>

          <ul>
            <li>Reacciones emocionales desproporcionadas ante pérdidas menores.</li>
            <li>Incapacidad para hablar de cierta persona o evento sin un impacto emocional intenso.</li>
            <li>Evitar todo lo que recuerde a la pérdida o hacer lo contrario, idealizarla en exceso.</li>
            <li>Síntomas físicos crónicos que los médicos no logran explicar.</li>
            <li>Sensación de que la vida se detuvo en algún punto específico.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo puede trabajarse aunque hayan pasado años</h2>

          <p>Una de las cosas que más me importa decirte es esta: no importa cuánto tiempo haya pasado.</p>

          <p>El duelo no tiene fecha de vencimiento. Puedes tener 40 años y estar procesando la muerte de tu padre que ocurrió cuando tenías 10. Puedes llevar una década sin nombrar una pérdida y aun así empezar a trabajarla hoy.</p>

          <p>El dolor que no fue atendido en su momento sigue ahí, esperando. Y cuando encuentra el espacio adecuado, puede comenzar a moverse.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El acompañamiento terapéutico en el duelo distorsionado</h2>

          <p>El duelo distorsionado generalmente necesita acompañamiento especializado. No porque seas demasiado frágil, sino porque este tipo de proceso requiere un espacio sostenido y seguro.</p>

          <p>En ese espacio se puede hacer lo que no fue posible antes: nombrar la pérdida, sentir lo que no se sintió, encontrar palabras para lo que quedó sin decir, y comenzar a integrar lo que pasó de una manera que permita seguir viviendo.</p>

          <p>No tienes que seguir cargando esto solo. Hay formas de empezar a soltar.</p>

          <p className="italic text-black/60 mt-8">El duelo que no se llora no desaparece. Solo cambia de forma. Pero siempre puede encontrar su camino hacia afuera.</p>
        </div>
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si crees que tu duelo pudo haberse distorsionado, estoy aquí para acompañarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
