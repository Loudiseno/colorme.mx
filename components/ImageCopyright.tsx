import { siteConfig } from '@/lib/seo'

// Aviso de derechos de autor sobre las imágenes del sitio.
// Basado en la Ley Federal del Derecho de Autor (México), artículos 21 y 27,
// y en el Convenio de Berna.
export default function ImageCopyright({ en = false }: { en?: boolean }) {
  const year = new Date().getFullYear()

  return (
    <section className="py-8 md:py-10 bg-white border-t border-black/5">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs text-black/40 leading-relaxed">
          <span className="text-black/50">
            D.R. &copy; {year} {siteConfig.author}. {en ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </span>{' '}
          {en ? (
            <>
              Every image on this site &mdash; photography, intervened photography, painting, and
              mixed-media work &mdash; is the original work of the author and is protected by
              Mexico&rsquo;s Federal Copyright Law (Ley Federal del Derecho de Autor, articles 21
              and 27) and by the international treaties on the matter, including the Berne
              Convention. Its reproduction, whether total or partial, is prohibited, as is its
              downloading, storage, distribution, public communication, making available online,
              editing, modification, transformation or use in derivative works, and any personal or
              commercial use, by any means or procedure, without the prior, express and written
              authorization of the author. Unauthorized use gives rise to the civil and criminal
              liabilities established by law. To request authorization or a usage license, write to{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2 hover:text-black/70 transition-colors">
                {siteConfig.email}
              </a>
              .
            </>
          ) : (
            <>
              Todas las im&aacute;genes de este sitio &mdash;fotograf&iacute;a, fotograf&iacute;a
              intervenida, pintura y obra en t&eacute;cnica mixta&mdash; son obra original de la
              autora y est&aacute;n protegidas por la Ley Federal del Derecho de Autor (art&iacute;culos
              21 y 27) y por los tratados internacionales en la materia, incluido el Convenio de
              Berna. Queda prohibida su reproducci&oacute;n, total o parcial, as&iacute; como su
              descarga, almacenamiento, distribuci&oacute;n, comunicaci&oacute;n p&uacute;blica,
              puesta a disposici&oacute;n en l&iacute;nea, edici&oacute;n, modificaci&oacute;n,
              transformaci&oacute;n u obra derivada, y cualquier uso personal o comercial, por
              cualquier medio o procedimiento, sin la autorizaci&oacute;n previa, expresa y por
              escrito de la autora. El uso no autorizado da lugar a las responsabilidades civiles y
              penales previstas en la ley. Para solicitar autorizaci&oacute;n o licencia de uso,
              escribe a{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2 hover:text-black/70 transition-colors">
                {siteConfig.email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </section>
  )
}
