'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, ShieldAlert, Network, KeyRound, Phone, Flame, ArrowRight, CheckCircle, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const services = [
  {
    icon: Camera,
    slug: 'supraveghere-video',
    title: 'Sisteme Supraveghere Video',
    description: 'Proiectăm și instalăm sisteme de supraveghere video cu camere HD/4K, înregistrare și acces de la distanță.',
    features: ['Camere IP & Analog', 'Înregistrare 24/7', 'Acces remote', 'Viziune nocturnă'],
  },
  {
    icon: ShieldAlert,
    slug: 'sisteme-antiefractie',
    title: 'Sisteme Antiefracție',
    description: 'Centrale de alarmă, senzori de mișcare, contacte magnetice și avertizare în caz de efracție.',
    features: ['Centrale wireless', 'Senzori volumetrici', 'Alertare SMS/App', 'Sirene interior/exterior'],
  },
  {
    icon: Network,
    slug: 'retele-date',
    title: 'Rețele Date / Voce / TV / Wi-Fi',
    description: 'Instalare cabluri de rețea, prize RJ45, switch-uri, routere și soluții complete de conectivitate.',
    features: ['Cablare structurată', 'Rețele Wi-Fi', 'Sisteme TV', 'VoIP'],
  },
  {
    icon: KeyRound,
    slug: 'control-acces',
    title: 'Control Acces / Pontaj',
    description: 'Sisteme de control acces cu carduri, amprentă sau cod PIN, plus soluții de pontaj electronic.',
    features: ['Carduri RFID', 'Biometrie', 'Pontaj electronic', 'Management vizitatori'],
  },
  {
    icon: Phone,
    slug: 'interfoane',
    title: 'Interfoane / Videointerfoane',
    description: 'Sisteme audio și video pentru identificarea și comunicarea cu vizitatorii.',
    features: ['Audio & Video', 'Deblocare la distanță', 'Multi-apartament', 'Integrare smartphone'],
  },
  {
    icon: Flame,
    slug: 'detectie-incendiu',
    title: 'Sisteme Detecție Incendiu',
    description: 'Detectoare de fum, căldură și gaze, centrale de incendiu și sisteme de avertizare certificate.',
    features: ['Detectoare fum', 'Detectoare căldură', 'Centrale adresabile', 'Sirene evacuare'],
  },
]

const whyUs = [
  'Instalarea echipamentelor este realizată de echipe specializate în domeniu.',
  'Montaj rapid și prețuri avantajoase.',
  'Garanție, Mentenanță și Service pentru orice lucrare efectuată.',
]

export default function ServicesPage() {
  const params = useParams()
  const locale = params.locale as Locale

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-red)] rounded-full blur-[150px] opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border)]">
              <Award className="w-4 h-4 text-[var(--color-accent-cyan)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Soluții complete</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-white">Serviciile </span>
              <span className="text-gradient">noastre</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Tehnologia este aliatul nostru pentru siguranța ta. Profesionalismul 
              colegilor noștri ne permite abordarea unor lucrări de proiectare și 
              execuție cu complexitate ridicată.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/${locale}/servicii/${service.slug}`}>
                  <div className={cn(
                    'h-full p-8 rounded-2xl',
                    'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                    'hover:border-[var(--color-accent-cyan)]/50',
                    'hover:shadow-lg hover:shadow-[var(--color-accent-cyan)]/5',
                    'transition-all duration-300 group'
                  )}>
                    {/* Icon */}
                    <div className={cn(
                      'w-16 h-16 rounded-2xl mb-6 flex items-center justify-center',
                      'bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-transparent',
                      'group-hover:from-[var(--color-accent-cyan)]/30',
                      'transition-all duration-300'
                    )}>
                      <service.icon className="w-8 h-8 text-[var(--color-accent-cyan)]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[var(--color-accent-cyan)]" />
                          <span className="text-[var(--color-text-secondary)]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-[var(--color-accent-cyan)] font-medium">
                      <span>Vezi detalii</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 relative bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-8">
                <span className="text-white">De ce să ne </span>
                <span className="text-gradient">alegeți pe noi?</span>
              </h2>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'flex items-start gap-4 p-4 rounded-xl',
                      'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-cyan)]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[var(--color-accent-cyan)]" />
                    </div>
                    <p className="text-[var(--color-text-secondary)]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={cn(
                'p-12 rounded-3xl',
                'bg-gradient-to-br from-[var(--color-accent-cyan)]/10 to-transparent',
                'border border-[var(--color-accent-cyan)]/20'
              )}>
                <div className="text-6xl font-bold text-[var(--color-accent-cyan)] mb-4">15+</div>
                <div className="text-xl text-white mb-2">Ani de experiență</div>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Oferim servicii de calitate premium din 2010
                </p>
                <Link href={`/${locale}/contact`}>
                  <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Cere Ofertă Gratuită
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

