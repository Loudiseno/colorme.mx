import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, BookOpen, Mail, Youtube } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import ScrollToTop from './ScrollToTop'

// Custom TikTok icon (not available in lucide)
const TikTokIcon = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

// Custom WhatsApp icon
const WhatsAppIcon = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

const navigation = [
  { name: 'Arteterapia', href: '/arteterapia' },
  { name: 'Tanatología', href: '/tanatologia' },
  { name: 'Sobre mí', href: '/sobre-mi' },
  { name: 'Mi libro', href: '/#indeleble' },
  { name: 'Política de privacidad', href: '/politica-de-privacidad' },
]

const socials = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'TikTok', href: 'https://www.tiktok.com/@colorme_lab', icon: TikTokIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCrrqPOjutqfK3G_t0f2lbjA', icon: Youtube },
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
