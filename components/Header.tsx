'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Instagram, Facebook, BookOpen } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import WhatsAppIcon from './WhatsAppIcon'

const navigation = [
  { name: 'Arteterapia', href: '/arteterapia' },
  { name: 'Tanatología', href: '/tanatologia' },
  { name: 'Sobre mí', href: '/sobre-mi' },
  { name: 'Exploraciones creativas', href: '/hoja-de-trabajo' },
  { name: 'Blog', href: '/#blog' },
]

const socials = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'WhatsApp', href: 'https://wa.me/529992472678', icon: WhatsAppIcon },
  { name: 'Amazon', href: siteConfig.book.amazonEs, icon: BookOpen },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/COLORME_logo-19-768x141.png"
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

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
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
            <div className="flex items-center gap-6 mt-8">
              {socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-black/70 hover:text-black transition-all duration-300 ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(navigation.length + index) * 100}ms` }}
                  aria-label={social.name}
                >
                  <social.icon size={24} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
