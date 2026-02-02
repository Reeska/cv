import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

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
    <body className={`${inter.className} h-full`}>
    <div className="max-w-[1440px] print:w-auto mx-auto xl:mt-5 print:m-0 flex flex-col gap-6">
      {children}
    </div>
    </body>
    </html>
  )
}
