export async function POST(request: Request) {
  const body = (await request.json()) as { username: string; password: string }
  if (body.username !== "admin" || body.password !== "admin") {
    return Response.json({ status: "error", body: "Invalid username or password" }, { status: 401 })
  }
  return Response.json({ status: "ok", body })
}
