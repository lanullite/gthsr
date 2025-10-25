import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Block common attack patterns
const suspiciousPatterns = [
  /(\b|\d|_)(union|select|insert|update|delete|drop|create|alter|exec|execute|script|javascript)(\b|\d|_)/gi,
  /(\.\.\/|\.\.\\)/,
  /(<\s*script|script\s*>)/i,
  /(%3C\s*script|script\s*%3E)/i,
  /(union|select|insert|update|delete|drop|create|alter|exec|execute)\s*(\/\*|\-\-)/gi
]

// Block malicious user agents
const maliciousUserAgents = [
  'sqlmap',
  'nikto',
  'nessus',
  'gobuster',
  'dirbuster'
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const userAgent = request.headers.get('user-agent') || ''
  const referer = request.headers.get('referer') || ''
  
  // Check for suspicious patterns in URL
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(url.pathname) || pattern.test(url.search)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }
  
  // Check for malicious user agents
  for (const agent of maliciousUserAgents) {
    if (userAgent.toLowerCase().includes(agent)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }
  
  // Add security headers to response
  const response = NextResponse.next()
  
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  
  return response
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}