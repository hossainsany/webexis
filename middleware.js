import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();
    const lowercasePathname = url.pathname.toLowerCase();

    // If the pathname is already lowercase, no need to redirect
    if (url.pathname === lowercasePathname) {
        return NextResponse.next();
    }

    // Update the pathname to lowercase
    url.pathname = lowercasePathname;

    // 308 is for permanent redirects
    return NextResponse.redirect(url, 308);
}

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
};
