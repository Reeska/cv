import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Thomas Champion - CV - ${new Date().toISOString().substring(0, 10)}`,
  description: 'Curriculum vitae',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  )
}
