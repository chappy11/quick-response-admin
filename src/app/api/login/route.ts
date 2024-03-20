import { login } from "@/authlib";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const response = await request.json();
    await login(response)
    return NextResponse.json(response)
}