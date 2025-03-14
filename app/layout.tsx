import "styles/tailwind.css"
import { Navigation } from "components/Navigation/Navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Poke app</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
