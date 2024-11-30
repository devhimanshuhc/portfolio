import type { Metadata, Viewport } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import Background from '@/components/background'
import SpotifyPlayer from '@/components/SpotifyPlayer'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full Stack Developer & 3D Enthusiast',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Portfolio',
    'apple-mobile-web-app-title': 'Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href={spaceMono.style.fontFamily}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
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
