import Link from 'next/link'
import { Instagram, Facebook, BookOpen, Mail, ArrowUp } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

const navigation = [
  { name: 'Arteterapia', href: '/arteterapia' },
  { name: 'Tanatología', href: '/tanatologia' },
  { name: 'Sobre mí', href: '/#sobremi' },
  { name: 'Mi libro', href: '/#indeleble' },
]

const socials = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'Amazon', href: siteConfig.book.amazonEs, icon: BookOpen },
]

export default function Footer() {
  return (
    <footer className="bg-sand/50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-3xl text-ink">
              Color Me
            </Link>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
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
                    className="text-charcoal/70 hover:text-terracotta transition-colors text-sm"
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
              className="flex items-center gap-2 text-charcoal/70 hover:text-terracotta transition-colors text-sm"
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
                  className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-cream transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-clay/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal/50 text-xs">
            © {new Date().getFullYear()} Color Me. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="text-charcoal/50 hover:text-terracotta transition-colors text-xs"
            >
              Política de privacidad
            </Link>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-clay/30 flex items-center justify-center text-charcoal/50 hover:border-terracotta hover:text-terracotta transition-all duration-300"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
