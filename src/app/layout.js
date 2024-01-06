import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head"




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prescott MedSpa | ARTISAN in the Crossings',
  description: 'ARTISAN in the Crossings is a premier medspa in the Prescott, AZ area, offering a variety of aesthetic and wellness services.',
  icon: '/icon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" />
        <title>{"Artisan in the Crossings"}</title>
        <meta name="title" content="Artisan in the Crossings" />
        <meta name="description" content="Artisan in the Crossings Website" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Artisan in the Crossings" />
        <meta property="og:description" content="Artisan in the Crossings Website" />
        <meta property="og:image" content="/icon.ico" />
      </Head>
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
