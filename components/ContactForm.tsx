'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    tipoAcompanamiento: '',
    tipoSesion: '',
    modalidad: '',
    disponibilidad: '',
    mensaje: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          nombre: '',
          apellidos: '',
          email: '',
          tipoAcompanamiento: '',
          tipoSesion: '',
          modalidad: '',
          disponibilidad: '',
          mensaje: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="mx-auto text-sage mb-4" size={48} />
        <h3 className="font-display text-2xl text-ink mb-2">¡Mensaje enviado!</h3>
        <p className="text-charcoal/70">Te responderé lo antes posible.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-terracotta hover:text-clay transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-blush/30 rounded-lg text-clay">
          <AlertCircle size={20} />
          <span>Hubo un error. Por favor intenta de nuevo.</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-charcoal mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="apellidos" className="block text-sm font-medium text-charcoal mb-2">
            Apellidos
          </label>
          <input
            type="text"
            id="apellidos"
            value={formData.apellidos}
            onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          ¿Qué tipo de acompañamiento buscas? *
        </label>
        <div className="flex flex-wrap gap-4">
          {['Arteterapia', 'Tanatología', 'Ambas'].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipoAcompanamiento"
                value={option}
                checked={formData.tipoAcompanamiento === option}
                onChange={(e) => setFormData({ ...formData, tipoAcompanamiento: e.target.value })}
                className="w-4 h-4 text-terracotta"
                required
              />
              <span className="text-charcoal">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="tipoSesion" className="block text-sm font-medium text-charcoal mb-2">
          ¿Qué tipo de sesión te gustaría? *
        </label>
        <select
          id="tipoSesion"
          required
          value={formData.tipoSesion}
          onChange={(e) => setFormData({ ...formData, tipoSesion: e.target.value })}
          className="w-full"
        >
          <option value="">Selecciona una opción</option>
          <option value="individual">Individual</option>
          <option value="grupal">Grupal</option>
          <option value="taller">Taller</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          ¿Cómo preferirías realizar tu sesión?
        </label>
        <div className="flex flex-wrap gap-4">
          {['Online', 'Presencial'].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="modalidad"
                value={option}
                checked={formData.modalidad === option}
                onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                className="w-4 h-4 text-terracotta"
              />
              <span className="text-charcoal">{option}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-charcoal/50 mt-1">
          Las sesiones presenciales se agendan según disponibilidad.
        </p>
      </div>

      <div>
        <label htmlFor="disponibilidad" className="block text-sm font-medium text-charcoal mb-2">
          ¿Qué días y horarios tienes disponibles?
        </label>
        <input
          type="text"
          id="disponibilidad"
          placeholder="Ej: Lunes y miércoles por la tarde"
          value={formData.disponibilidad}
          onChange={(e) => setFormData({ ...formData, disponibilidad: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-charcoal mb-2">
          ¿Hay algo que te gustaría compartir?
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Cuéntame un poco sobre lo que estás atravesando o lo que buscas..."
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <span className="animate-spin">⏳</span>
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  )
}
