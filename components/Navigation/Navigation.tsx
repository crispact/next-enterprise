"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            <li key={1}>
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
            <li key={2}>
              <Link
                href="/login"
                className={`block rounded-sm p-0 px-3 py-2 ${
                  pathname === "/login"
                    ? "bg-blue-700 text-white"
                    : "border-0 text-gray-900 hover:bg-transparent hover:text-blue-700"
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
