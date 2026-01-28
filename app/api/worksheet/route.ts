import { NextResponse } from 'next/server'

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

    // Log the submission for now
    console.log('Worksheet submission:', {
      name: data.name,
      age: data.age,
      gender: data.gender,
      emotion: data.emotion,
      griefOrGoal: data.griefOrGoal
    })

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example Resend integration:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'ColorMe <noreply@colorme.mx>',
    //   to: 'hola@colorme.mx',
    //   subject: `Nuevo ejercicio creativo personalizado - ${data.name}`,
    //   html: `
    //     <h2>Nuevo ejercicio creativo personalizado completado</h2>
    //     <p><strong>Nombre:</strong> ${data.name}</p>
    //     <p><strong>Edad:</strong> ${data.age}</p>
    //     <p><strong>Género:</strong> ${data.gender}</p>
    //     <p><strong>Momento actual:</strong> ${data.griefOrGoal}</p>
    //     <p><strong>Emoción:</strong> ${data.emotion}</p>
    //     <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX')}</p>
    //   `,
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Worksheet submission error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
