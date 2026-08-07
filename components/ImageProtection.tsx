'use client'

import { useEffect } from 'react'

// Cierra las vías habituales para llevarse una imagen: menú contextual,
// arrastrar al escritorio, menú de pulsación larga en móvil e impresión.
// La tecla Impr Pant se intercepta y se limpia el portapapeles cuando el
// navegador lo permite. Ojo: ningún sitio web puede impedir de verdad una
// captura de pantalla; para eso hace falta marca de agua.
export default function ImageProtection() {
  useEffect(() => {
    const isImage = (t: EventTarget | null) =>
      t instanceof Element &&
      (t.tagName === 'IMG' || t.closest('picture, figure, [data-protected]') !== null)

    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault()
    }
    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) e.preventDefault()
    }

    // Impr Pant: se vacía el portapapeles y se oculta la página un instante.
    const hideBriefly = () => {
      document.documentElement.classList.add('screen-capture-guard')
      window.setTimeout(() => {
        document.documentElement.classList.remove('screen-capture-guard')
      }, 800)
      navigator.clipboard?.writeText('').catch(() => {})
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key))) {
        e.preventDefault()
        hideBriefly()
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart)
    document.addEventListener('keyup', onKey)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart)
      document.removeEventListener('keyup', onKey)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return null
}
