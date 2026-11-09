import {NextRequest,NextResponse} from 'next/server';import {verifyToken,COOKIE} from '@/lib/auth';
export async function middleware(req:NextRequest){if(req.nextUrl.pathname==='/admin/login')return NextResponse.next();if(!(await verifyToken(req.cookies.get(COOKIE)?.value))){const url=new URL('/admin/login',req.url);url.searchParams.set('next',req.nextUrl.pathname);return NextResponse.redirect(url);}return NextResponse.next();}
export const config={matcher:['/admin/:path*']};
