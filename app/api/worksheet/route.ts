import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.emotion || !data.griefOrGoal) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('Worksheet submission:', {
      name: data.name,
      age: data.age,
      gender: data.gender,
      emotion: data.emotion,
      griefOrGoal: data.griefOrGoal
    })

    // Send email notification using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'ColorMe <noreply@colorme.mx>',
          to: 'hola@colorme.mx',
          subject: `Nuevo ejercicio creativo personalizado - ${data.name}`,
          html: `
            <h2>Nuevo ejercicio creativo personalizado completado</h2>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Edad:</strong> ${data.age} años</p>
            <p><strong>Género:</strong> ${data.gender}</p>
            <p><strong>Momento actual:</strong> ${data.griefOrGoal}</p>
            <p><strong>Emoción:</strong> ${data.emotion}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX', {
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
        // Continue even if email fails - user still gets PDF
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email not sent')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Worksheet submission error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
