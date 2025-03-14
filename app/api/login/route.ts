import { setCookie } from "cookies-next/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const res = NextResponse.json({ status: "ok" }, { status: 200 })
  const body = (await req.json()) as { username: string; password: string }
  if (body.username !== "admin" || body.password !== "admin") {
    return NextResponse.json({ status: "error", body: "Invalid username or password" }, { status: 401 })
  }
  await setCookie("session", "admin", { res, req })
  return res
}

export async function DELETE(req: NextRequest) {
  const res = NextResponse.json({ status: "ok" }, { status: 200 })
  await setCookie("session", "no", { res, req })
  return res
}
