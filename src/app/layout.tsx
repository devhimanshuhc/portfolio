import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import Background from '@/components/background'
import SpotifyPlayer from '@/components/SpotifyPlayer'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full Stack Developer & 3D Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} font-mono relative min-h-screen`}>
        <Background />
        <main className="relative">
          {children}
        </main>
        <SpotifyPlayer />
      </body>
    </html>
  )
}
