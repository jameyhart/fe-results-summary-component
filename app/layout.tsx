import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Results summary component',
  description: "An attempt to complete the 'Results summary component' challenge.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"hanken-grotesk"}>{children}</body>
    </html>
  )
}
