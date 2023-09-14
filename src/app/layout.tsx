import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  AuthProvider from './context/AuthProvider'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from '@/redux/provider'
import Navbar from './components/Navbar'
export const metadata: Metadata = {
  title: 'Vaido',
  description: 'Vaido build upon nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <Navbar/>
          {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
