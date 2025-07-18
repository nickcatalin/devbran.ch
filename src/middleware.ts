import { NextRequest, NextResponse } from 'next/server';
import { isTokenNearExpiry } from './lib/auth-utils';

/**
 * Middleware for route protection and authentication verification
 * Protects routes like /dashboard and /settings
 * Implements token validation and refresh logic
 * 
 * @param request The incoming request
 * @returns NextResponse with appropriate redirects or the original request
 */
export async function middleware(request: NextRequest) {
    // Get the pathname from the request
    const { pathname } = request.nextUrl;

    // Define protected routes that require authentication
    const protectedRoutes = ['/dashboard', '/settings'];

    // Define authentication routes (to prevent redirect loops)
    const authRoutes = ['/login', '/signup', '/auth/callback'];

    // Check if the current path is a protected route
    const isProtectedRoute = protectedRoutes.some(route =>
        pathname === route || pathname.startsWith(`${route}/`)
    );

    // If this is a protected route, check for authentication
    if (isProtectedRoute) {
        // Get the authentication cookie/token
        const authSession = request.cookies.get('appwrite-session');
        const fallbackSession = request.cookies.get('appwrite-fallback-session');

        // If no authentication is found, redirect to login
        if (!authSession && !fallbackSession) {
            // Create the redirect URL with the original URL as the callback
            const redirectUrl = new URL('/login', request.url);
            redirectUrl.searchParams.set('callbackUrl', encodeURI(pathname));

            // Add a toast message parameter to show on the login page
            redirectUrl.searchParams.set('authRequired', 'true');

            // Redirect to login page
            return NextResponse.redirect(redirectUrl);
        }

        // Check if the session is about to expire
        if (authSession && isTokenNearExpiry(authSession.value)) {
            // Create a response that continues the request
            const response = NextResponse.next();

            // Add a header that the client can use to trigger a session refresh
            response.headers.set('X-Auth-Session-Refresh', 'needed');

            return response;
        }
    }

    // For authentication pages, check if user is already authenticated
    // to avoid unnecessary login pages for logged-in users
    const isAuthRoute = authRoutes.some(route =>
        pathname === route || pathname.startsWith(`${route}/`)
    );

    if (isAuthRoute) {
        const authSession = request.cookies.get('appwrite-session');

        // If user is already authenticated and trying to access login/signup pages,
        // redirect them to dashboard
        if (authSession && !pathname.includes('callback')) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    // Continue with the request if authentication check passes or route is not protected
    return NextResponse.next();
}

/**
 * Configure which paths this middleware runs on
 */
export const config = {
    // Match only specific paths that need protection or processing
    matcher: [
        '/dashboard/:path*',
        '/settings/:path*',
        '/login',
        '/signup',
    ],
};