'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

// Captura de correo para el público en inglés. Envía a /api/lead con
// source 'en-blog', así Lou recibe cada suscripción y distingue el origen.
export default function EnNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'en-blog' }),
      })
      setStatus('done')
    } catch {
      // El usuario ya dejó su correo; no lo bloqueamos si la red falla.
      setStatus('done')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex items-center justify-center gap-2 rounded-2xl bg-[#B2F7EF]/20 border border-[#B2F7EF] px-6 py-5 text-black">
        <Check size={18} className="text-[#0D9488]" />
        <span className="text-sm font-medium">Thank you — you’re on the list. Check your inbox soon.</span>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-[#B2F7EF]/15 border border-[#B2F7EF] p-6 text-center">
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#B2F7EF] text-black">
        <Mail size={20} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-black mb-1">Gentle resources in your inbox</h3>
      <p className="text-black/60 text-sm mb-4 max-w-md mx-auto">
        Grief and art therapy reflections, exercises, and tools — sent with care. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="Your email"
          className="flex-1 px-4 py-2.5 rounded-full border border-black/15 text-sm focus:outline-none focus:border-[#0D9488] transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#0D9488] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-coral text-xs mt-2">Please enter a valid email.</p>
      )}
    </div>
  )
}
