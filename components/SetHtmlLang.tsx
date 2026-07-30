'use client'

import { useEffect } from 'react'

// Ajusta el atributo lang del <html> para las páginas en inglés,
// sin afectar el layout raíz (que queda en es-MX para el sitio en español).
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang
    document.documentElement.lang = lang
    return () => {
      document.documentElement.lang = prev
    }
  }, [lang])

  return null
}
