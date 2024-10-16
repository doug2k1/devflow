import { ThemeProvider } from '@/context/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const spaceGroteskFont = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'DevFlow is a platform for developers to share their knowledge and learn from others.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient box-shadow-none',
          footerActionLink: 'primary-text-gradient hover:text-primary-500',
        },
      }}
    >
      <ThemeProvider>
        <html lang="en">
          <body
            className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
          >
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  )
}
