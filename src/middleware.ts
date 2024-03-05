import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./authlib";

export async function middleware(request: NextRequest) {
    const unAuth = ['http://localhost:3000/', 'http://localhost:3000/login'];

    if (unAuth.includes(request.url)) {
        return NextResponse.next();
    }

    return await updateSession(request)
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
        '/((?!api|_next/static|_next/image|favicon.ico|calamity.svg|admin.svg|.*\\.svg$).*)'
    ],
}