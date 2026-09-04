import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#B2F7EF] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-black mb-4">
          Página no encontrada
        </h2>
        <p className="text-black/70 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe o fue movida.
          Te invitamos a explorar nuestros servicios de tanatología y arte como terapia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#B2F7EF] text-black px-8 py-3 rounded-full font-medium hover:bg-[#5ECFC0] transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/arteterapia-mexico"
            className="inline-block border border-black/20 text-black px-8 py-3 rounded-full font-medium hover:bg-black/5 transition-colors"
          >
            Conocer Arte como terapia
          </Link>
        </div>
      </div>
    </section>
  )
}
