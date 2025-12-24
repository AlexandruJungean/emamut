'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface FooterProps {
  locale: Locale
  dictionary: Dictionary
}

export function Footer({ locale, dictionary }: FooterProps) {
  const t = dictionary.common.footer
  const nav = dictionary.common.nav

  const services = [
    { href: `/${locale}/servicii/supraveghere-video`, label: 'Sisteme supraveghere video' },
    { href: `/${locale}/servicii/sisteme-antiefractie`, label: 'Sisteme antiefracție' },
    { href: `/${locale}/servicii/retele-date`, label: 'Rețele date / voce / TV / Wi-Fi' },
    { href: `/${locale}/servicii/control-acces`, label: 'Control acces / pontaj' },
    { href: `/${locale}/servicii/interfoane`, label: 'Interfoane / videointerfoane' },
    { href: `/${locale}/servicii/detectie-incendiu`, label: 'Sisteme detecție incendiu' },
  ]

  const usefulLinks = [
    { href: `/${locale}/termeni-conditii`, label: t.terms },
    { href: `/${locale}/politica-confidentialitate`, label: t.privacy },
    { href: `/${locale}/politica-cookies`, label: t.cookies },
    { href: `/${locale}/despre-noi`, label: nav.about },
    { href: `/${locale}/contact`, label: nav.contact },
  ]

  return (
    <footer className="relative bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700">
        <div className="container-custom py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+40735777296"
              className="flex items-center gap-4 text-white group"
            >
              <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-semibold">+40 735 777 296</p>
                <p className="text-sm text-white/80">{dictionary.common.contact.phone}</p>
              </div>
            </a>

            <a
              href="mailto:contact@emamut.ro"
              className="flex items-center gap-4 text-white group"
            >
              <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-semibold">contact@emamut.ro</p>
                <p className="text-sm text-white/80">{dictionary.common.contact.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-white">
              <div className="p-3 rounded-full bg-white/10">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-semibold">Str. Horea nr. 26, Salonta</p>
                <p className="text-sm text-white/80">{dictionary.common.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-6">
              <div className="bg-white/95 rounded-lg px-4 py-2 inline-block">
                <Image
                  src="/logo.webp"
                  alt="Emamut Security Solutions"
                  width={180}
                  height={56}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              {t.description}
            </p>
            <a
              href="https://www.facebook.com/EmamutSRL"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-lg',
                'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                'text-[var(--color-text-secondary)]',
                'hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]',
                'transition-colors duration-200'
              )}
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.services}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.usefulLinks}</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.newsletter}</h3>
            <p className="text-[var(--color-text-secondary)] mb-4 text-sm leading-relaxed">
              {t.newsletterText}
            </p>
            <form className="space-y-3">
              <Input
                type="text"
                placeholder="Numele tău complet"
              />
              <Input
                type="email"
                placeholder="Adresa ta de email"
              />
              <Button variant="primary" className="w-full">
                {dictionary.common.cta.subscribe}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container-custom py-6">
          <p className="text-center text-[var(--color-text-muted)] text-sm">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

