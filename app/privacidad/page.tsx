import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Color Me. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacidadPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-charcoal/60 hover:text-terracotta transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-ink mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none text-charcoal/80">
          <p className="lead">
            En Color Me, respetamos tu privacidad y nos comprometemos a proteger 
            tus datos personales. Esta política explica cómo recopilamos, usamos 
            y protegemos tu información.
          </p>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Información que recopilamos
          </h2>
          <p>
            Recopilamos la información que nos proporcionas voluntariamente cuando:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Completas el formulario de contacto</li>
            <li>Agendas una cita a través de Calendly</li>
            <li>Te comunicas con nosotros por correo electrónico</li>
          </ul>
          <p>
            Esta información puede incluir tu nombre, correo electrónico, y cualquier 
            información que decidas compartir sobre tu situación.
          </p>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Uso de la información
          </h2>
          <p>Utilizamos tu información para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a tus consultas y solicitudes</li>
            <li>Agendar y gestionar tus citas</li>
            <li>Proporcionarte los servicios de acompañamiento solicitados</li>
            <li>Enviarte información relevante sobre nuestros servicios (solo si lo autorizas)</li>
          </ul>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Protección de datos
          </h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información personal 
            contra acceso no autorizado, alteración, divulgación o destrucción. 
            Nunca compartimos tu información con terceros sin tu consentimiento, 
            excepto cuando sea requerido por ley.
          </p>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Confidencialidad terapéutica
          </h2>
          <p>
            Todo lo que compartas durante las sesiones de arteterapia y tanatología 
            es estrictamente confidencial. Esta confidencialidad solo puede romperse 
            en casos excepcionales establecidos por la ley, como riesgo inminente 
            para ti o para terceros.
          </p>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Cookies y análisis
          </h2>
          <p>
            Utilizamos Google Analytics para entender cómo los visitantes interactúan 
            con nuestro sitio web. Esta herramienta puede utilizar cookies para 
            recopilar información anónima sobre tu visita.
          </p>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Tus derechos
          </h2>
          <p>Tienes derecho a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceder a los datos personales que tenemos sobre ti</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Retirar tu consentimiento en cualquier momento</li>
          </ul>

          <h2 className="font-display text-2xl text-ink mt-8 mb-4">
            Contacto
          </h2>
          <p>
            Si tienes preguntas sobre esta política de privacidad o deseas ejercer 
            tus derechos, puedes contactarnos en:{' '}
            <a 
              href={`mailto:${siteConfig.email}`}
              className="text-terracotta hover:text-clay"
            >
              {siteConfig.email}
            </a>
          </p>

          <p className="text-sm text-charcoal/50 mt-12">
            Última actualización: Enero 2026
          </p>
        </div>
      </div>
    </section>
  )
}
