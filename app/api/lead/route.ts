import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const email = typeof data.email === 'string' ? data.email.trim() : ''
    const name = typeof data.name === 'string' ? data.name.trim() : ''

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Correo electrónico inválido' },
        { status: 400 }
      )
    }

    console.log('Lead captured:', {
      email,
      name,
      source: data.source || 'exploraciones-creativas',
      timestamp: new Date().toISOString(),
    })

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured. Email will NOT be sent.')
      return NextResponse.json({
        success: true,
        emailSent: false,
        warning: 'RESEND_API_KEY not configured',
      })
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const dateStr = new Date().toLocaleString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })

      const result = await resend.emails.send({
        from: 'ColorMe <noreply@colorme.mx>',
        to: ['hola@colorme.mx', 'lou.diseno@gmail.com'],
        subject: `Nuevo correo capturado en Exploraciones creativas${name ? ` - ${name}` : ''}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #B2F7EF; padding-bottom: 10px;">Nuevo correo capturado</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${name ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Nombre:</td><td style="padding: 8px 0;">${name}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Correo:</td><td style="padding: 8px 0;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Origen:</td><td style="padding: 8px 0;">Exploraciones creativas (recursos gratis)</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Fecha:</td><td style="padding: 8px 0;">${dateStr}</td></tr>
            </table>
          </div>
        `,
      })

      console.log('Lead email sent successfully:', result)
      return NextResponse.json({ success: true, emailSent: true })
    } catch (emailError) {
      console.error('Lead email sending failed:', emailError)
      return NextResponse.json({
        success: true,
        emailSent: false,
        error: 'Email failed to send',
      })
    }
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
