import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { AdminDto } from "./app/_lib/types/Admin.type";
import { toast } from "react-toastify";


const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('10 min from now').sign(key)
}


export async function decrypt(input: string, request: NextRequest): Promise<any> {
    if (!input) {
        toast.error('Token is expired',{
            onClose:()=>NextResponse.redirect(new URL('/login', request.url))
        })
        return;
    }
    const { payload } = await jwtVerify(input, key, { algorithms: ['HS256'] });
    
    return payload
}

export async function login(data: AdminDto) {
    const expires = new Date(Date.now() + ((10 * 1000) * 5));
    const session = await encrypt({ data, expires });
    const response = NextResponse.next();
    cookies().set("user", session, { expires, httpOnly: true })
    return response;
}

export async function logout() {
    cookies().set("user", "", { expires: new Date(0) });
}

export async function getSession(request: NextRequest) {
    const session = request.cookies.get("user")?.value;

    if (!session) {
  
        return;
    }
    const parsed = decrypt(session, request)

    return parsed;
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("user")?.value;

    if (!session) {
        toast.error('Token is expired',{
            onClose:()=>NextResponse.redirect(new URL('/login', request.url))
        })
        return;
    };

    const parsed = await decrypt(session, request);
    parsed.expires = new Date(Date.now() + ((10 * 1000) * 5))
    const res = NextResponse.next();
    res.cookies.set({
        name: 'user',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires
    })

    return res;
}