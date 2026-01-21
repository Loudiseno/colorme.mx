import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, BookOpen, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import ScrollToTop from './ScrollToTop'

const navigation = [
  { name: 'Arteterapia', href: '/arteterapia' },
  { name: 'Tanatología', href: '/tanatologia' },
  { name: 'Sobre mí', href: '/sobre-mi' },
  { name: 'Mi libro', href: '/#indeleble' },
]

const socials = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'Amazon', href: siteConfig.book.amazonEs, icon: BookOpen },
]

export default function Footer() {
  return (
    <footer className="bg-[#B2F7EF] pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-ink blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-ink blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/COLORME_logo-19-768x141.png"
                alt="Color Me"
                width={140}
                height={26}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-ink/80 text-sm leading-relaxed">
              Acompañamiento para sanar el duelo y transformar tus emociones
              a través de la arteterapia y la tanatología.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xl text-ink mb-4">Acerca de</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-ink/80 hover:text-ink transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-ink mb-4">Contacto</h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-ink/80 hover:text-ink transition-colors text-sm"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-4 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink/80 hover:bg-ink hover:border-ink hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink/70 text-xs">
            © {new Date().getFullYear()} Color Me. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="text-ink/70 hover:text-ink transition-colors text-xs"
            >
              Política de privacidad
            </Link>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
