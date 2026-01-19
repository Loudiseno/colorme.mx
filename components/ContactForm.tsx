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
      <div className="text-center py-12 bg-frost/50 rounded-3xl">
        <div className="w-16 h-16 rounded-full bg-teal-glow/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-teal" size={32} />
        </div>
        <h3 className="font-display text-2xl text-ink mb-2">¡Mensaje enviado!</h3>
        <p className="text-charcoal/70">Te responderé lo antes posible.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-teal hover:text-teal-dark transition-colors font-medium"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-coral/10 border border-coral/20 rounded-xl text-coral">
          <AlertCircle size={20} />
          <span>Hubo un error. Por favor intenta de nuevo.</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            id="nombre"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="form-input-full peer"
            placeholder=" "
          />
          <label
            htmlFor="nombre"
            className="absolute left-4 top-3 text-slate/70 transition-all duration-200 pointer-events-none
                       peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal peer-focus:bg-canvas peer-focus:px-1
                       peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-canvas peer-[:not(:placeholder-shown)]:px-1"
          >
            Nombre *
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="apellidos"
            value={formData.apellidos}
            onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
            className="form-input-full peer"
            placeholder=" "
          />
          <label
            htmlFor="apellidos"
            className="absolute left-4 top-3 text-slate/70 transition-all duration-200 pointer-events-none
                       peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal peer-focus:bg-canvas peer-focus:px-1
                       peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-canvas peer-[:not(:placeholder-shown)]:px-1"
          >
            Apellidos
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="form-input-full peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-3 text-slate/70 transition-all duration-200 pointer-events-none
                     peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal peer-focus:bg-canvas peer-focus:px-1
                     peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-canvas peer-[:not(:placeholder-shown)]:px-1"
        >
          Correo electrónico *
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-3">
          ¿Qué tipo de acompañamiento buscas? *
        </label>
        <div className="flex flex-wrap gap-3">
          {['Arteterapia', 'Tanatología', 'Ambas'].map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                formData.tipoAcompanamiento === option
                  ? 'bg-teal text-white'
                  : 'bg-mist/50 text-charcoal hover:bg-teal-glow/30'
              }`}
            >
              <input
                type="radio"
                name="tipoAcompanamiento"
                value={option}
                checked={formData.tipoAcompanamiento === option}
                onChange={(e) => setFormData({ ...formData, tipoAcompanamiento: e.target.value })}
                className="sr-only"
                required
              />
              <span className="text-sm font-medium">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="tipoSesion" className="block text-sm font-medium text-charcoal mb-3">
          ¿Qué tipo de sesión te gustaría? *
        </label>
        <select
          id="tipoSesion"
          required
          value={formData.tipoSesion}
          onChange={(e) => setFormData({ ...formData, tipoSesion: e.target.value })}
          className="form-input-full appearance-none cursor-pointer"
        >
          <option value="">Selecciona una opción</option>
          <option value="individual">Individual</option>
          <option value="grupal">Grupal</option>
          <option value="taller">Taller</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-3">
          ¿Cómo preferirías realizar tu sesión?
        </label>
        <div className="flex flex-wrap gap-3">
          {['Online', 'Presencial'].map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                formData.modalidad === option
                  ? 'bg-teal text-white'
                  : 'bg-mist/50 text-charcoal hover:bg-teal-glow/30'
              }`}
            >
              <input
                type="radio"
                name="modalidad"
                value={option}
                checked={formData.modalidad === option}
                onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                className="sr-only"
              />
              <span className="text-sm font-medium">{option}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-slate mt-2">
          Las sesiones presenciales se agendan según disponibilidad.
        </p>
      </div>

      <div className="relative">
        <input
          type="text"
          id="disponibilidad"
          value={formData.disponibilidad}
          onChange={(e) => setFormData({ ...formData, disponibilidad: e.target.value })}
          className="form-input-full peer"
          placeholder=" "
        />
        <label
          htmlFor="disponibilidad"
          className="absolute left-4 top-3 text-slate/70 transition-all duration-200 pointer-events-none
                     peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal peer-focus:bg-canvas peer-focus:px-1
                     peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-canvas peer-[:not(:placeholder-shown)]:px-1"
        >
          ¿Qué días y horarios tienes disponibles?
        </label>
      </div>

      <div className="relative">
        <textarea
          id="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          className="form-input-full peer resize-none"
          placeholder=" "
        />
        <label
          htmlFor="mensaje"
          className="absolute left-4 top-3 text-slate/70 transition-all duration-200 pointer-events-none
                     peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal peer-focus:bg-canvas peer-focus:px-1
                     peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-canvas peer-[:not(:placeholder-shown)]:px-1"
        >
          ¿Hay algo que te gustaría compartir?
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary inline-flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  )
}
