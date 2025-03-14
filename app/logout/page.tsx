"use client"

import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  fetch("/api/login", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      router.push("/login")
    }
  })
  return <></>
}
