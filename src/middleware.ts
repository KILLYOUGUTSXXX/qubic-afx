import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: 'killyourguts2025' })
  const url = request.nextUrl.clone()
  if (!token) {
    if (url.pathname === '/' || url.pathname.match(/^\/portal\/.*/g)) {
      url.pathname = '/api/auth/signin'
      return NextResponse.redirect(url)
    }
  } else {
    if (url.pathname === '/api/auth/signin') {
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*'
}
