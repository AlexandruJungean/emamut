import type { Metadata, Viewport } from 'next'
import { Orbitron, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { StructuredData } from '@/components/seo/StructuredData'
import { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema } from '@/lib/seo/structured-data'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#050507',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://emamut.ro'),
  title: {
    default: 'Emamut - Sisteme de Securitate | Supraveghere Video, Alarme, Control Acces',
    template: '%s | Emamut',
  },
  description:
    'Emamut oferă soluții complete de securitate: sisteme supraveghere video, alarme antiefracție, control acces, interfoane și detecție incendiu. Experiență din 2010. Salonta, Bihor.',
  keywords: [
    'sisteme securitate',
    'camere supraveghere',
    'camere supraveghere Oradea',
    'alarme antiefractie',
    'control acces',
    'interfoane',
    'videointerfoane',
    'detectie incendiu',
    'retele date',
    'Salonta',
    'Bihor',
    'Oradea',
    'Romania',
    'instalare camere',
    'sisteme alarma',
  ],
  authors: [{ name: 'Emamut SRL', url: 'https://emamut.ro' }],
  creator: 'Emamut Security Solutions',
  publisher: 'Emamut SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    alternateLocale: ['en_US', 'hu_HU'],
    url: 'https://emamut.ro',
    siteName: 'Emamut Security Solutions',
    title: 'Emamut - Sisteme de Securitate Profesionale',
    description:
      'Soluții complete de securitate pentru locuințe și afaceri. 15+ ani experiență, 500+ clienți mulțumiți.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emamut - Sisteme de Securitate pentru Locuințe și Afaceri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emamut - Sisteme de Securitate',
    description: 'Soluții complete de securitate pentru locuințe și afaceri. 15+ ani experiență.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://emamut.ro',
    languages: {
      'ro': 'https://emamut.ro/ro',
      'en': 'https://emamut.ro/en',
      'hu': 'https://emamut.ro/hu',
    },
  },
  category: 'security',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className="dark">
      <head>
        {/* Structured Data for LLMs and Search Engines */}
        <StructuredData data={[
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          getWebsiteSchema(),
        ]} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${orbitron.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        
        {/* reCAPTCHA Enterprise Script */}
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
