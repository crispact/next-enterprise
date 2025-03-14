"use client"

import { useGetCookie } from "cookies-next"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const getCookie = useGetCookie()
  return (
    <nav className="border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <ul className="flex w-full flex-row justify-between space-x-8 rounded-lg border border-gray-100 bg-white p-4 font-medium md:mt-0">
          <li key={1} className="grow-0">
            <Link
              href="/"
              className={`block rounded-sm p-0 px-3 py-2 ${
                pathname === "/"
                  ? "bg-blue-700 text-white"
                  : "border-0 text-gray-900 hover:bg-transparent hover:text-blue-700"
              }`}
              aria-current="page"
            >
              Inicio
            </Link>
          </li>
          <li key={2} className="grow-0">
            <Link
              href={getCookie("session") === "admin" ? "/logout" : "/login"}
              className={`block rounded-sm p-0 px-3 py-2 ${
                pathname === "/login"
                  ? "bg-blue-700 text-white"
                  : "border-0 text-gray-900 hover:bg-transparent hover:text-blue-700"
              }`}
            >
              {getCookie("session") === "admin" ? "Logout" : "Login"}
            </Link>
          </li>
          <li key={0} className="mr-2 flex grow-1 flex-col items-end justify-center">
            <Image
              src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif"}
              alt={"logo"}
              width={39}
              height={39}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}
