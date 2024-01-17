import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import favicon from '@/public/assets/icons/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FESBbaš',
  description: 'Sve za studente FESB-a na jednom mjestu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="@/public/assets/icons/logo.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}