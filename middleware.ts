import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protege todas las rutas /panel/* con una contraseña (variable de entorno
// PANEL_PASSWORD). El login y su API quedan fuera de la protección para evitar
// un bucle de redirección.

const SALT = 'colorme-panel:'

async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Rutas públicas dentro del área del panel
  if (pathname.startsWith('/panel/login')) {
    return NextResponse.next()
  }

  const password = process.env.PANEL_PASSWORD
  const cookie = req.cookies.get('panel_session')?.value
  const expected = password ? await sha256Hex(SALT + password) : null

  if (!expected || !cookie || cookie !== expected) {
    const url = req.nextUrl.clone()
    url.pathname = '/panel/login'
    url.search = ''
    if (!password) {
      url.searchParams.set('config', 'missing')
    }
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/panel', '/panel/:path*'],
}
