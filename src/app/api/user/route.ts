import { getSession } from "@/authlib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user = await getSession(request);
    return NextResponse.json(user);
}