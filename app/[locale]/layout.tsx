import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale as Locale)

  return (
    <>
      <Header locale={locale as Locale} dictionary={dictionary} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale as Locale} dictionary={dictionary} />
      <WhatsAppButton />
    </>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

