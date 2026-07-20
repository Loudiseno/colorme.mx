'use client'

import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'

const STORAGE_KEY = 'colorme_recursos_email'

export default function EmailGateModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Solo mostrar si el usuario no ha dejado su correo antes
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setIsOpen(true)
      }
    } catch {
      setIsOpen(true)
    }
  }, [])

  // Bloquear scroll del fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Por favor escribe un correo válido.')
      return
    }

    setIsSubmitting(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
          source: 'exploraciones-creativas',
        }),
      })
    } catch {
      // No bloquear el acceso si la red falla: el usuario ya dejó su correo
    } finally {
      try {
        localStorage.setItem(STORAGE_KEY, email.trim())
      } catch {
        // localStorage no disponible (modo privado): continuar de todas formas
      }
      setIsSubmitting(false)
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#B2F7EF] flex items-center justify-center mx-auto mb-5">
          <Mail className="text-black" size={24} strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl md:text-3xl text-black mb-3">
          Recursos gratis para ti
        </h2>
        <p className="text-black/70 text-sm leading-relaxed mb-6">
          Déjame tu correo para acceder a los ejercicios creativos gratuitos.
          Así también puedo compartirte nuevos recursos y acompañamiento de vez
          en cuando.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 text-left">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre (opcional)"
            className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm focus:outline-none focus:border-[#0D9488] transition-colors"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico *"
            className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm focus:outline-none focus:border-[#0D9488] transition-colors"
          />
          {error && <p className="text-red-600 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0D9488] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {isSubmitting ? 'Un momento...' : 'Acceder a los recursos gratis'}
          </button>
        </form>

        <p className="text-[11px] text-black/40 mt-4 leading-relaxed">
          Sin spam. Puedes darte de baja cuando quieras.{' '}
          <a href="/politica-de-privacidad" className="underline hover:text-black/60">
            Política de privacidad
          </a>
        </p>
      </div>
    </div>
  )
}
