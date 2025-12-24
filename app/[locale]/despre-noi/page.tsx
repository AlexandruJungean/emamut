'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Zap, Users, MessageCircle, Target, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const stats = [
  { value: '15+', label: 'Ani experiență' },
  { value: '500+', label: 'Clienți mulțumiți' },
  { value: '1000+', label: 'Proiecte finalizate' },
  { value: '24/7', label: 'Suport tehnic' },
]

const differentiators = [
  {
    icon: Zap,
    title: 'Viteză',
    description: 'Reacționăm rapid și eficient la întrebările și nevoile clienților noștri.',
  },
  {
    icon: Shield,
    title: 'Fiabilitate',
    description: 'Asigurăm funcționarea fiabilă a sistemelor de securitate instalate.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicare Eficientă',
    description: 'Comunicăm în mod transparent și eficient pentru a înțelege nevoile clienților.',
  },
  {
    icon: Target,
    title: 'Flexibilitate',
    description: 'Răspundem rapid și eficient la cerințele individuale ale fiecărui proiect.',
  },
]

const values = [
  'Instalări profesionale realizate de echipe certificate',
  'Echipamente de calitate superioară de la branduri recunoscute',
  'Garanție și mentenanță pentru toate proiectele',
  'Consultanță tehnică gratuită',
  'Prețuri competitive și transparente',
  'Respectarea termenelor de livrare',
]

export default function AboutPage() {
  const params = useParams()
  const locale = params.locale as Locale

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-red)] rounded-full blur-[150px] opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border)]">
              <Award className="w-4 h-4 text-[var(--color-accent-cyan)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Din 2010</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-white">Experți în </span>
              <span className="text-gradient">siguranță</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Emamut este o afacere privată înființată în 2010. Activitatea noastră principală 
              constă în proiectarea, instalarea și întreținerea sistemelor de securitate 
              pentru locuințe și afaceri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent-cyan)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/team.webp"
                  alt="Echipa Emamut"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent-red)] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">Ani de experiență</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">
                <span className="text-white">Cine suntem </span>
                <span className="text-gradient">noi?</span>
              </h2>
              
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                <p>
                  Suntem o echipă de profesioniști dedicați securității, cu experiență 
                  vastă în instalarea și întreținerea sistemelor de supraveghere video, 
                  alarme, control acces și multe altele.
                </p>
                <p>
                  Profesionalismul colegilor noștri ne permite abordarea unor lucrări 
                  de proiectare și execuție cu complexitate ridicată. Inovăm în 
                  permanență pentru a menține siguranța atât a persoanelor juridice, 
                  cât și a celor fizice.
                </p>
                <p>
                  Oferim consultanță gratuită, garanție și mentenanță pentru toate 
                  proiectele noastre, asigurând funcționarea optimă a sistemelor instalate.
                </p>
              </div>

              <Link href={`/${locale}/contact`}>
                <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Contactează-ne
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 relative bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">
              <span className="text-white">Ce ne </span>
              <span className="text-gradient">diferențiază?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'p-6 rounded-2xl',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                  'hover:border-[var(--color-accent-cyan)]/50 transition-all duration-300',
                  'group'
                )}
              >
                <div className={cn(
                  'w-14 h-14 rounded-xl mb-4 flex items-center justify-center',
                  'bg-[var(--color-accent-cyan)]/10 group-hover:bg-[var(--color-accent-cyan)]/20',
                  'transition-colors duration-300'
                )}>
                  <item.icon className="w-7 h-7 text-[var(--color-accent-cyan)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                <span className="text-white">De ce să alegi </span>
                <span className="text-gradient">Emamut?</span>
              </h2>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent-cyan)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent-cyan)]" />
                    </div>
                    <p className="text-[var(--color-text-secondary)]">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/modern-office.webp"
                  alt="Birou Emamut"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              'relative rounded-3xl overflow-hidden p-12 md:p-16',
              'bg-gradient-to-r from-red-600 to-red-700'
            )}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="heading-lg text-white mb-4">
                Pregătit să-ți protejezi afacerea?
              </h2>
              <p className="text-white/80 mb-8">
                Contactează-ne pentru o consultație gratuită și o ofertă personalizată.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-white/90 border-white">
                    Cere Ofertă Gratuită
                  </Button>
                </Link>
                <a href="tel:+40735777296">
                  <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                    +40 735 777 296
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

