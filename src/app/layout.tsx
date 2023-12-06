import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '@dani1ok | Frontend',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout children={children} />
      </body>
    </html>
  )
}
