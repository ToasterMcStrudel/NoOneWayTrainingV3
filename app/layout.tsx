import '../styles/customColors.scss'
import './globals.scss'
import Navbar from '../componets/Navbar'
import Footer from '@/componets/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'No One Way Training',
  description: 'Dog training',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
