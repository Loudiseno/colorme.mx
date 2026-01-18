'use client'

import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 rounded-full border border-silver/20 flex items-center justify-center text-silver/50 hover:border-teal hover:bg-teal hover:text-white transition-all duration-300"
      aria-label="Volver arriba"
    >
      <ArrowUp size={16} />
    </button>
  )
}
