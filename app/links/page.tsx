import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lou — Tanatóloga y facilitadora de arte como terapia | ColorMe',
  description: 'Acompañamiento emocional con tanatología y arte como terapia. Sesión de orientación gratuita.',
  robots: { index: false, follow: false },
}

const links = [
  {
    label: 'Agenda tu primera sesión gratuita',
    description: 'Sesión de orientación sin costo',
    href: siteConfig.calendly,
    external: true,
    primary: true,
  },
  {
    label: 'Conóceme — quién soy',
    description: 'Mi historia, formación y enfoque',
    href: `${siteConfig.url}/sobre-mi-lou-arteterapeuta-tanatologa`,
    external: true,
    primary: false,
  },
  {
    label: 'Arte como terapia — qué es y cómo funciona',
    description: 'Cómo el arte sana lo que las palabras no alcanzan',
    href: `${siteConfig.url}/arteterapia-mexico`,
    external: true,
    primary: false,
  },
  {
    label: 'Tanatología y acompañamiento al duelo',
    description: 'Acompañamiento en pérdidas y cambios',
    href: `${siteConfig.url}/tanatologia-acompanamiento-duelo`,
    external: true,
    primary: false,
  },
  {
    label: 'Blog — artículos sobre duelo y emociones',
    description: '69 artículos para entender lo que sientes',
    href: `${siteConfig.url}/blog`,
    external: true,
    primary: false,
  },
  {
    label: 'Mi libro: Indeleble',
    description: 'Una historia real de pérdida y resiliencia',
    href: siteConfig.book.amazonEs,
    external: true,
    primary: false,
  },
  {
    label: 'Escríbeme a WhatsApp',
    description: 'Respondo personalmente',
    href: 'https://wa.me/529992472678',
    external: true,
    primary: false,
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] pt-10 pb-16 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#B2F7EF]">
            <Image
              src="/lou-arteterapeuta-tanatologa-mexico.jpg"
              alt="Lou — Tanatóloga y facilitadora de arte como terapia"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-xl font-semibold text-[#1C1C28] mb-1">Lou</h1>
          <p className="text-sm text-[#1C1C28]/60 max-w-xs">
            Tanatóloga · Facilitadora de arte como terapia · Acompaño duelos y procesos emocionales desde el arte
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`
                block w-full rounded-2xl px-5 py-4 text-center transition-all duration-200
                ${link.primary
                  ? 'bg-[#0D9488] text-white hover:bg-[#0D9488]/90 shadow-md'
                  : 'bg-white text-[#1C1C28] hover:bg-[#B2F7EF]/20 border border-[#1C1C28]/10'
                }
              `}
            >
              <span className="block font-medium text-sm">{link.label}</span>
              {link.description && (
                <span className={`block text-xs mt-0.5 ${link.primary ? 'text-white/80' : 'text-[#1C1C28]/50'}`}>
                  {link.description}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <Link href={siteConfig.url} className="text-xs text-[#1C1C28]/40 hover:text-[#0D9488] transition-colors">
            colorme.mx
          </Link>
        </div>
      </div>
    </main>
  )
}
