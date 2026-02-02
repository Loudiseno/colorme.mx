import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, BookOpen, Mail } from 'lucide-react'

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { siteConfig } from '@/lib/seo'
import ScrollToTop from './ScrollToTop'

const navigation = [
  { name: 'Arteterapia', href: '/arteterapia-mexico' },
  { name: 'Tanatología', href: '/tanatologia-acompanamiento-duelo' },
  { name: 'Sobre mí', href: '/sobre-mi-lou-arteterapeuta-tanatologa' },
  { name: 'Mi libro', href: '/#indeleble' },
  { name: 'Política de privacidad', href: '/politica-de-privacidad' },
]

const socials = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'WhatsApp', href: 'https://wa.me/529992472678', icon: WhatsAppIcon },
  { name: 'Amazon', href: siteConfig.book.amazonEs, icon: BookOpen },
]

export default function Footer() {
  return (
    <footer className="bg-[#B2F7EF] pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/COLORME_logo-19-768x141.png"
                alt="ColorMe"
                width={140}
                height={26}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-black/70 text-sm leading-relaxed">
              Acompañamiento emocional a través de arteterapia y tanatología.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-semibold text-black mb-3">Acerca de</h4>
            <ul className="space-y-1.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-black/70 hover:text-black transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-black mb-3">Contacto</h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-black/70 hover:text-black transition-colors text-sm"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 mt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:bg-black hover:border-black hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-4 flex justify-end">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} ColorMe
          </p>
        </div>
      </div>
    </footer>
  )
}
