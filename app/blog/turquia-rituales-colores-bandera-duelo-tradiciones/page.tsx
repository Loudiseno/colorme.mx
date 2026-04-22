'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function TurquiaRitualesPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">RITUALES Y COLORES DEL MUNDO</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Turquía, la tierra donde oriente y occidente rezan juntos: rituales, colores sagrados y la sabiduría del adiós
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/turquia.jpeg"
            alt="Turquía - Rituales y espiritualidad turca"
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Turquía sentí cómo dos mundos se abrazan sin pedirse permiso. Oriente y occidente se encuentran en el mismo estrecho, en la misma taza de té, en la misma mirada. Estambul parte su cuerpo entre dos continentes y sin embargo respira como una sola ciudad. Esa dualidad me enseñó que no hace falta elegir entre lo antiguo y lo moderno, entre lo místico y lo cotidiano. Todo puede convivir cuando el corazón tiene espacio.
          </p>

          <p>
            Lo primero que se siente al caminar por este país es el llamado a la oración. Cinco veces al día, la voz del muecín se eleva desde los minaretes y envuelve las calles, los bazares, los puertos y los jardines secretos. No importa si crees o no. Ese sonido te detiene. Te recuerda que hay algo más grande susurrando entre el ruido del mundo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La espiritualidad que se bebe en una taza</h2>

          <p>
            En Turquía la hospitalidad es un acto sagrado. Ofrecer té no es cortesía, es una declaración de amor. El çay, ese té negro servido en pequeños vasos de cristal con forma de tulipán, se comparte en todas partes. En las tiendas, en las casas, en los muelles, entre desconocidos que se miran a los ojos antes de pronunciar una sola palabra. Aceptar una taza es aceptar una conexión. Rechazarla es cerrar una puerta invisible.
          </p>

          <p>
            En las calles cuelga el nazar boncuk, ese amuleto azul con forma de ojo que protege contra la envidia y las energías dañinas. Está en las puertas de los hogares, en los espejos de los taxis, en las cunas de los recién nacidos, en las pulseras de las abuelas. El azul profundo de ese ojo es una oración silenciosa que pide protección sin necesidad de palabras.
          </p>

          <p>
            Y en Konya, la ciudad donde vivió el poeta Rumi, giran los derviches. Su danza no es un espectáculo. Es una meditación en movimiento. Giran con los ojos cerrados, una mano apuntando al cielo y la otra a la tierra, conectando lo divino con lo humano en cada vuelta. Ese giro les enseñó al mundo que la entrega también puede ser hermosa.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma turca de despedirse</h2>

          <p>
            Cuando alguien parte en Turquía, la comunidad entera se moviliza. El cuerpo se lava con agua y jabón perfumado en un ritual llamado gasil. Se envuelve en una tela blanca de algodón, sin adornos ni distinciones, porque ante la muerte todos regresan iguales. La oración fúnebre, el salat al-janazah, se realiza en comunidad, generalmente frente a la mezquita, con toda la congregación de pie pidiendo perdón y misericordia para el alma del difunto.
          </p>

          <p>
            El entierro ocurre el mismo día o al siguiente. La tierra recibe al cuerpo mirando hacia La Meca. Durante los tres días siguientes, la familia abre su hogar para recibir visitas de condolencia. Se prepara comida para todos los que llegan, porque en la tradición turca nadie debe cocinar mientras carga un dolor tan grande. Los vecinos, los amigos y hasta los conocidos lejanos traen platos preparados. El duelo no se vive a puerta cerrada. Se comparte como se comparte el pan.
          </p>

          <p>
            A los cuarenta días se realiza una oración especial y se ofrece comida a los pobres en nombre del difunto. A los cincuenta y dos días, otra más. Cada gesto de generosidad se convierte en un regalo espiritual que acompaña al alma en su tránsito.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Turquía</h2>

          <p>
            La bandera turca lleva dos símbolos poderosos sobre un fondo rojo intenso: una luna creciente y una estrella blanca. El rojo representa la sangre de quienes dieron su vida por esta tierra, el valor del pueblo y la fuerza de una nación que ha sobrevivido a imperios y renacido de sus propias cenizas. La luna y la estrella blancas simbolizan la luz del islam, la guía espiritual y la paz que busca el alma turca en medio de su historia turbulenta.
          </p>

          <p>
            Más allá de la bandera, los colores turcos viven en todas partes. El azul de los mosaicos de las mezquitas, especialmente en la famosa Mezquita Azul de Estambul, representa lo divino y lo infinito. El turquesa de los amuletos nazar evoca protección y claridad espiritual. El dorado de los interiores otomanos habla de la luz interior que toda alma guarda. El blanco de la mortaja funeraria iguala a todos los seres humanos ante el misterio final.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Turquía enseña sobre el duelo</h2>

          <p>
            Aprendí que el dolor compartido pesa menos. Que abrir la puerta de tu casa cuando más te duele el alma es un acto de valentía disfrazado de hospitalidad.
          </p>

          <p>
            Aprendí también que la generosidad con los demás puede sanar lo que las palabras no alcanzan. Ofrecer comida a quien tiene hambre en nombre de quien se fue es una de las formas más antiguas de transformar la ausencia en algo que sigue alimentando al mundo.
          </p>

          <p>
            Turquía me enseñó que el duelo no necesita soledad para ser profundo. Necesita mesa abierta, té caliente, manos que llegan sin avisar y una comunidad que dice con su presencia: no tienes que cargar esto solo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompañamiento desde una mirada cálida, cercana y respetuosa de tu propio ritmo, estoy aquí para ti.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
