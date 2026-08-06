'use client'

import { useEffect } from 'react'

// Desactiva las vías habituales para guardar una imagen: menú contextual,
// arrastrar al escritorio y el menú de pulsación larga en móvil.
// Es un freno para el uso casual; no sustituye al aviso legal ni impide
// una captura de pantalla.
export default function ImageProtection() {
  useEffect(() => {
    const isImage = (t: EventTarget | null) =>
      t instanceof Element && (t.tagName === 'IMG' || t.closest('picture, figure, [data-protected]') !== null)

    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault()
    }
    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) e.preventDefault()
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart)
    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart)
    }
  }, [])

  return null
}
