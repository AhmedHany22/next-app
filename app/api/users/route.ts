import { NextResponse } from "next/server";
import data from "@/data.json"

export async function GET() {
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const cred = await request.json();

    const result = data.filter(user => user.email == cred.email && user.password == cred.password);
    const user = result[0];

    return NextResponse.json({
        user,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiYWdlIjozMH0.S2n2fnJfUVMb-2m11jWTdZ6SiJGZqp3gq1v5pJ52_fw"
    });
}