import { siteConfig } from '@/lib/seo'

// Aviso de derechos de autor sobre las imágenes del sitio.
// Base legal: Ley Federal del Derecho de Autor (México), artículos 21 y 27.
export default function ImageCopyright({ en = false }: { en?: boolean }) {
  const year = new Date().getFullYear()

  return (
    <section className="py-6 md:py-8 bg-white border-t border-black/5">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs text-black/40 leading-relaxed">
          <span className="text-black/50">D.R. &copy; {year} Lourdes P&eacute;rez.</span>{' '}
          {en ? (
            <>
              All images on this site are protected by copyright. Their reproduction, whether total
              or partial, any editing, and any personal or commercial use &mdash; in digital,
              printed, or any other medium &mdash; is prohibited without written permission.{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline underline-offset-2 hover:text-black/70 transition-colors"
              >
                {siteConfig.email}
              </a>
            </>
          ) : (
            <>
              Todas las im&aacute;genes de este sitio est&aacute;n protegidas por derecho de autor.
              Queda prohibida su reproducci&oacute;n, total o parcial, su edici&oacute;n y cualquier
              uso personal o comercial, en medios digitales, impresos o de cualquier otra
              naturaleza, sin autorizaci&oacute;n por escrito.{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline underline-offset-2 hover:text-black/70 transition-colors"
              >
                {siteConfig.email}
              </a>
            </>
          )}
        </p>
      </div>
    </section>
  )
}
