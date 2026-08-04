'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navEs = [
  { name: 'Arteterapia', href: '/arteterapia-mexico' },
  { name: 'Tanatología', href: '/tanatologia-acompanamiento-duelo' },
  { name: 'Sobre mí', href: '/sobre-mi-lou-arteterapeuta-tanatologa' },
  { name: 'Obra', href: '/obra' },
  { name: 'Productos', href: '/tienda' },
  { name: 'Creatividad', href: '/hoja-de-trabajo' },
  { name: 'Blog', href: '/blog' },
]

const navEn = [
  { name: 'Art as Therapy', href: '/en/art-as-therapy' },
  { name: 'Grief Counseling', href: '/en/grief-counseling' },
  { name: 'About', href: '/en/about' },
  { name: 'Artwork', href: '/en/obra' },
  { name: 'Shop', href: '/en/shop' },
  { name: 'Blog', href: '/en/blog' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isEn = pathname?.startsWith('/en') ?? false

  const navigation = isEn ? navEn : navEs
  const homeHref = isEn ? '/en' : '/'
  const langHref = isEn ? '/' : '/en'
  const langFlag = isEn ? '🇲🇽' : '🇺🇸'
  const langLabel = isEn ? 'ES' : 'EN'
  const langAria = isEn ? 'Ver en español' : 'View in English'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const LangToggle = ({ className = '' }: { className?: string }) => (
    <Link
      href={langHref}
      aria-label={langAria}
      className={`inline-flex items-center gap-1.5 rounded-full border border-black/15 px-3 py-1 text-black/80 hover:bg-[#B2F7EF]/30 hover:text-black transition-all ${className}`}
    >
      <span className="text-base leading-none">{langFlag}</span>
      <span className="text-xs font-medium">{langLabel}</span>
    </Link>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href={homeHref} className="hover:opacity-80 transition-opacity">
          <Image
            src="/COLORME_logo-19-768x141.webp"
            alt="ColorMe"
            width={150}
            height={28}
            priority
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <LangToggle className="ml-1" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black p-2 hover:text-black/70 transition-colors"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 md:hidden transition-all duration-500 bg-white ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl text-black hover:text-black/70 transition-all duration-300 ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {item.name}
              </Link>
            ))}
            <LangToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
