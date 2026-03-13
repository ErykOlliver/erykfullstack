import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const { pathname, hostname } = req.nextUrl
  const isPainel = hostname.startsWith('painel.')

  if (!isPainel) {
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  if (pathname.startsWith('/auth')) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/dashboard')) {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.redirect(new URL('/auth', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|robots.txt|.*\\.(?:css|js|png|jpg|svg|webp|woff2)).*)',
  ],
}
