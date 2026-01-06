import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Lexend_Deca } from 'next/font/google'
import Providers from '@/components/Providers'



const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Intelous - Sovereign GTM Operating System',
  description: 'Specialized Digital Workers. Verified Outcomes. The sovereign GTM operating system for scaling B2B revenue.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ibmPlexMono.variable} ${lexendDeca.variable}`}>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
