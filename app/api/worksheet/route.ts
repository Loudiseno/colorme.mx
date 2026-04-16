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
    console.log('Worksheet submission received:', {
      name: data.name,
      age: data.age,
      gender: data.gender,
      emotion: data.emotion,
      griefOrGoal: data.griefOrGoal,
      timestamp: new Date().toISOString()
    })

    // Send email notification using Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured. Email will NOT be sent. Please set the RESEND_API_KEY environment variable.')
      return NextResponse.json({
        success: true,
        emailSent: false,
        warning: 'RESEND_API_KEY not configured'
      })
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const dateStr = new Date().toLocaleString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      const result = await resend.emails.send({
        from: 'ColorMe <noreply@colorme.mx>',
        to: 'hola@colorme.mx',
        subject: `Nuevo ejercicio creativo personalizado - ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #B2F7EF; padding-bottom: 10px;">Nuevo ejercicio creativo personalizado</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Nombre:</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Edad:</td><td style="padding: 8px 0;">${data.age} anos</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Genero:</td><td style="padding: 8px 0;">${data.gender}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Emocion:</td><td style="padding: 8px 0;">${data.emotion}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Momento actual:</td><td style="padding: 8px 0;">${data.griefOrGoal}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Fecha:</td><td style="padding: 8px 0;">${dateStr}</td></tr>
            </table>
          </div>
        `,
      })

      console.log('Email sent successfully:', result)
      return NextResponse.json({ success: true, emailSent: true })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Return success for PDF generation but indicate email failure
      return NextResponse.json({
        success: true,
        emailSent: false,
        error: 'Email failed to send'
      })
    }
  } catch (error) {
    console.error('Worksheet submission error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
