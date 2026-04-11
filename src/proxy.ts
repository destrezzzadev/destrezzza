// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-middleware-pathname', pathname);

  // Protected routes: /hf/admin but NOT /hf/admin/login
  if (pathname.startsWith('/hf/admin') && !pathname.startsWith('/hf/admin/login')) {
    const sessionCookie = request.cookies.get('admin_session');

    if (!sessionCookie) {
      // Redirect to login if cookie is missing
      const url = request.nextUrl.clone();
      url.pathname = '/hf/admin/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/hf/admin/:path*'],
};

