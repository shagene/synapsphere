import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('authToken');
  const isProtectedRoute = ['/quizzes', '/progress', '/achievements', '/settings', '/dashboard'].some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !authToken) {
    // For dashboard, allow access but the page will show guest version
    if (request.nextUrl.pathname === '/dashboard') {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/quizzes', '/progress', '/achievements', '/settings'],
};