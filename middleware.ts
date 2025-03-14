import { getCookie } from "cookies-next/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/", req.url))
  const session = await getCookie("session", { res, req })
  if (session === "admin") {
    if (req.nextUrl.pathname.startsWith("/login")) {
      return res
    }
    return NextResponse.next()
  }
  if (req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL("/login", req.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
}
