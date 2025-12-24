import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { Hero } from '@/components/sections/Hero'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { TrustSection } from '@/components/sections/TrustSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FAQ } from '@/components/sections/FAQ'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { StructuredData } from '@/components/seo/StructuredData'
import { getFAQSchema, getServicesListSchema } from '@/lib/seo/structured-data'
import type { Metadata } from 'next'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    ro: 'Sisteme de Securitate | Supraveghere Video, Alarme, Control Acces',
    en: 'Security Systems | Video Surveillance, Alarms, Access Control',
    hu: 'Biztonsági Rendszerek | Videómegfigyelés, Riasztók, Beléptető Rendszer',
  }
  
  const descriptions = {
    ro: 'Emamut oferă soluții complete de securitate: sisteme supraveghere video, alarme antiefracție, control acces, interfoane și detecție incendiu. 15+ ani experiență în Bihor.',
    en: 'Emamut offers complete security solutions: video surveillance systems, burglar alarms, access control, intercoms and fire detection. 15+ years experience.',
    hu: 'Az Emamut teljes körű biztonsági megoldásokat kínál: videómegfigyelő rendszerek, riasztók, beléptető rendszerek, kaputelefonok és tűzjelzés. 15+ év tapasztalat.',
  }

  return {
    title: titles[locale as Locale] || titles.ro,
    description: descriptions[locale as Locale] || descriptions.ro,
    alternates: {
      canonical: `https://emamut.ro/${locale}`,
      languages: {
        'ro': 'https://emamut.ro/ro',
        'en': 'https://emamut.ro/en',
        'hu': 'https://emamut.ro/hu',
      },
    },
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale as Locale)

  // FAQ data for structured data
  const faqData = [
    {
      question: dictionary.home.faq.q1.question,
      answer: dictionary.home.faq.q1.answer,
    },
    {
      question: dictionary.home.faq.q2.question,
      answer: dictionary.home.faq.q2.answer,
    },
    {
      question: dictionary.home.faq.q3.question,
      answer: dictionary.home.faq.q3.answer,
    },
    {
      question: dictionary.home.faq.q4.question,
      answer: dictionary.home.faq.q4.answer,
    },
  ]

  return (
    <>
      {/* Structured Data for Home Page */}
      <StructuredData data={[
        getFAQSchema(faqData),
        getServicesListSchema(locale as Locale),
      ]} />
      
      <Hero locale={locale as Locale} dictionary={dictionary} />
      <ServiceCards locale={locale as Locale} dictionary={dictionary} />
      <TrustSection locale={locale as Locale} dictionary={dictionary} />
      <WhyChooseUs locale={locale as Locale} dictionary={dictionary} />
      <FAQ locale={locale as Locale} dictionary={dictionary} />
      <QuoteForm locale={locale as Locale} dictionary={dictionary} />
    </>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
