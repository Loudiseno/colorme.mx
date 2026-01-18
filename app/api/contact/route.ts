import { NextResponse } from 'next/server'

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

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the submission
    console.log('Contact form submission:', data)

    // Example Resend integration:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Color Me <noreply@colorme.mx>',
    //   to: 'hola@colorme.mx',
    //   subject: `Nueva consulta de ${data.nombre}`,
    //   html: `
    //     <h2>Nueva consulta desde colorme.mx</h2>
    //     <p><strong>Nombre:</strong> ${data.nombre} ${data.apellidos}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Tipo de acompañamiento:</strong> ${data.tipoAcompanamiento}</p>
    //     <p><strong>Tipo de sesión:</strong> ${data.tipoSesion}</p>
    //     <p><strong>Modalidad:</strong> ${data.modalidad || 'No especificada'}</p>
    //     <p><strong>Disponibilidad:</strong> ${data.disponibilidad || 'No especificada'}</p>
    //     <p><strong>Mensaje:</strong> ${data.mensaje || 'Sin mensaje adicional'}</p>
    //   `,
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
