import { siteConfig } from '@/lib/seo'

// Llamada al final de cada página de Obra: WhatsApp y correo directos.
export default function ObraCTA({ en = false }: { en?: boolean }) {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl text-black mb-3">
          {en ? 'Collaborations or acquiring a piece?' : '¿Colaboraciones o adquirir obra?'}
        </h2>
        <p className="text-black/70 mb-6">
          {en
            ? 'For exhibitions, commissions, press, or to acquire a piece, write to me.'
            : 'Para exposiciones, comisiones, prensa o adquirir una pieza, escríbeme.'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all"
          >
            {en ? 'Message me on WhatsApp' : 'Escríbeme por WhatsApp'}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium border border-black/10 hover:bg-[#B2F7EF]/20 transition-all"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  )
}
