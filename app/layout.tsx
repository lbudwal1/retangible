import './globals.css'
import Navbar from './navbar'
import { Inter } from 'next/font/google'
import styles from '../styles/navbar.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Retangible',
  description: 'Retangible',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div>
          <Navbar />
        </div>

        <div className={styles.contentContainer}>
          {children}
        </div>

      </body>
    </html>
  )
}
