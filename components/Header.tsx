'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigationEs = [
  { name: 'Arteterapia', href: '/arteterapia-mexico' },
  { name: 'Tanatología', href: '/tanatologia-acompanamiento-duelo' },
  { name: 'Sobre mí', href: '/sobre-mi-lou-arteterapeuta-tanatologa' },
  { name: 'Obra', href: '/obra' },
  { name: 'Productos', href: '/tienda' },
  { name: 'Exploraciones creativas', href: '/hoja-de-trabajo' },
  { name: 'Blog', href: '/blog' },
]

// En páginas /en/* el menú va en inglés y apunta a las versiones en inglés
// cuando existen.
const navigationEn = [
  { name: 'Art as Therapy', href: '/en/art-as-therapy' },
  { name: 'Grief Counseling', href: '/en/grief-counseling' },
  { name: 'About me', href: '/en/about' },
  { name: 'Artwork', href: '/en/obra' },
  { name: 'Books', href: '/en/shop' },
  { name: 'Blog', href: '/en/blog' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isEn = pathname?.startsWith('/en')
  const navigation = isEn ? navigationEn : navigationEs

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href={isEn ? '/en' : '/'} className="hover:opacity-80 transition-opacity">
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

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={isEn ? '/blog' : '/en/blog'}
            className="text-xs font-semibold border border-black/25 rounded-full px-3 py-1 text-black/70 hover:bg-black hover:text-white hover:border-black transition-colors"
            aria-label={isEn ? 'Blog en español' : 'English blog'}
          >
            {isEn ? 'ES' : 'EN'}
          </Link>
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
            <Link
              href={isEn ? '/blog' : '/en/blog'}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold text-[#0D9488] hover:text-[#0D9488]/70 transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${navigation.length * 100}ms` }}
            >
              {isEn ? 'Blog en español' : 'English blog'}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
