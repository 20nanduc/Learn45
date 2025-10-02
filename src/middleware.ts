import { NextRequest, NextResponse } from 'next/server';
import { handleProtectedPageVisit } from '@/middleware/auth.middleware';


export function middleware(request: NextRequest) {
    let response: NextResponse | null = null;


    response = handleProtectedPageVisit(request);
    if (response) {
        return response;
    }
    return NextResponse.next();
}


export const config = {
    //excluded
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};