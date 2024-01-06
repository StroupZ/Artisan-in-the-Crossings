import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head"




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prescott MedSpa | ARTISAN in the Crossings',
  description: 'ARTISAN in the Crossings is a premier medspa in the Prescott, AZ area, offering a variety of aesthetic and wellness services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/og-icon.png" type="image/x-icon" />
        <title>{"Artisan in the Crossings"}</title>
        <meta name="title" content="Prescott MedSpa | ARTISAN in the Crossings" />
        <meta name="description" content="ARTISAN in the Crossings is a premier medspa in the Prescott, AZ area, offering a variety of aesthetic and wellness services." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prescott MedSpa | ARTISAN in the Crossings" />
        <meta property="og:description" content="ARTISAN in the Crossings is a premier medspa in the Prescott, AZ area, offering a variety of aesthetic and wellness services." />
        <meta property="og:image" content="/og-icon.png" />
      </Head>
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
