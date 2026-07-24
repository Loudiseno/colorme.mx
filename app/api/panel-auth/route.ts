import { NextResponse } from 'next/server'
import crypto from 'crypto'

const SALT = 'colorme-panel:'
const COOKIE = 'panel_session'
const MAX_AGE = 60 * 60 * 24 * 30 // 30 días

function tokenFor(password: string): string {
  return crypto.createHash('sha256').update(SALT + password).digest('hex')
}

// POST: iniciar sesión con contraseña
export async function POST(request: Request) {
  let password = ''
  try {
    const body = await request.json()
    password = typeof body?.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 })
  }

  const expected = process.env.PANEL_PASSWORD
  if (!expected) {
    return NextResponse.json(
      { error: 'El panel no está configurado. Falta PANEL_PASSWORD.' },
      { status: 500 }
    )
  }

  if (!password || password !== expected) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE, tokenFor(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
  })
  return res
}

// DELETE: cerrar sesión
export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return res
}
