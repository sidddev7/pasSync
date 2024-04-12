import { NextRequest, NextResponse } from "next/server";
export async function GET() {
    return NextResponse.json({ message: "Product Api" })
}
export async function POST(request: NextRequest) {
    return NextResponse.json({ message: "POST Product Api",body:request.json()  })
}