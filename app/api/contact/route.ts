import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.nombre || !data.email || !data.tipoAcompanamiento || !data.tipoSesion) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('Contact form submission:', data)

    // Send email notification using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'ColorMe <noreply@colorme.mx>',
          to: 'hola@colorme.mx',
          replyTo: data.email,
          subject: `Nueva consulta de ${data.nombre} ${data.apellidos || ''}`.trim(),
          html: `
            <h2>Nueva consulta desde colorme.mx</h2>
            <p><strong>Nombre:</strong> ${data.nombre} ${data.apellidos || ''}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Tipo de acompañamiento:</strong> ${data.tipoAcompanamiento}</p>
            <p><strong>Tipo de sesión:</strong> ${data.tipoSesion}</p>
            <p><strong>Modalidad:</strong> ${data.modalidad || 'No especificada'}</p>
            <p><strong>Disponibilidad:</strong> ${data.disponibilidad || 'No especificada'}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${data.mensaje || 'Sin mensaje adicional'}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">Fecha: ${new Date().toLocaleString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          `,
        })
        console.log('Email sent successfully')
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Return error if email fails for contact form
        return NextResponse.json(
          { error: 'Error al enviar el correo. Por favor intenta de nuevo.' },
          { status: 500 }
        )
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email not sent')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
