import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedBook - AI-Powered Medical Booking Platform',
  description: 'Book appointments with doctors through AI voice agent or Telegram bot. Connect with medical centers seamlessly.',
  keywords: 'medical booking, doctor appointments, AI voice agent, healthcare, telemedicine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 