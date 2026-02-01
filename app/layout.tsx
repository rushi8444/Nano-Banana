import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Nano Banana | Future of Freshness',
  description: 'Premium Cold-Pressed Juice - Pure, Fresh, Revolutionary',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Nano Banana | Future of Freshness',
    description: 'Premium Cold-Pressed Juice - Pure, Fresh, Revolutionary',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit bg-black text-white overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
