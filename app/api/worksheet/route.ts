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

    const email = typeof data.email === 'string' ? data.email.trim() : ''
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    // Log the submission
    console.log('Worksheet submission received:', {
      name: data.name,
      email,
      age: data.age,
      gender: data.gender,
      emotion: data.emotion,
      griefOrGoal: data.griefOrGoal,
      exercises: Array.isArray(data.exercises) ? data.exercises.map((ex: { title?: string }) => ex?.title) : [],
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

      // Bloque con el/los ejercicio(s) generado(s)
      const exercises = Array.isArray(data.exercises) ? data.exercises : []
      const exercisesHtml = exercises.length
        ? exercises
            .map(
              (ex: { title?: string; description?: string; instructions?: string[]; materials?: string[] }) => `
              <div style="margin-top: 16px; padding: 16px; background: #F0F7F6; border-radius: 12px;">
                <h3 style="margin: 0 0 6px; color: #0F766E;">${ex.title ?? 'Ejercicio'}</h3>
                ${ex.description ? `<p style="margin: 0 0 10px; color: #3D4852;">${ex.description}</p>` : ''}
                ${
                  Array.isArray(ex.materials) && ex.materials.length
                    ? `<p style="margin: 0 0 4px; font-weight: bold;">Materiales:</p><p style="margin: 0 0 10px; color: #3D4852;">${ex.materials.join(', ')}</p>`
                    : ''
                }
                ${
                  Array.isArray(ex.instructions) && ex.instructions.length
                    ? `<p style="margin: 0 0 4px; font-weight: bold;">Instrucciones:</p><ol style="margin: 0; padding-left: 18px; color: #3D4852;">${ex.instructions
                        .map((step: string) => `<li style="margin-bottom: 4px;">${step}</li>`)
                        .join('')}</ol>`
                    : ''
                }
              </div>`
            )
            .join('')
        : '<p style="color:#6B7A8C;">(No se registró el detalle del ejercicio)</p>'

      const result = await resend.emails.send({
        from: 'ColorMe <noreply@colorme.mx>',
        to: ['hola@colorme.mx', 'lou.diseno@gmail.com'],
        replyTo: validEmail ? email : undefined,
        subject: `Nuevo ejercicio creativo personalizado - ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #B2F7EF; padding-bottom: 10px;">Nuevo ejercicio creativo personalizado</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Nombre:</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Correo:</td><td style="padding: 8px 0;">${email || '(no proporcionado)'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Edad:</td><td style="padding: 8px 0;">${data.age} anos</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Genero:</td><td style="padding: 8px 0;">${data.gender}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Emocion:</td><td style="padding: 8px 0;">${data.emotion}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Momento actual:</td><td style="padding: 8px 0;">${data.griefOrGoal}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Fecha:</td><td style="padding: 8px 0;">${dateStr}</td></tr>
            </table>
            <h3 style="margin-top: 20px; color: #000; border-bottom: 2px solid #B2F7EF; padding-bottom: 8px;">Ejercicio generado</h3>
            ${exercisesHtml}
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
