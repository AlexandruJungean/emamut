'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const projects = [
  {
    id: 1,
    title: 'Sistem supraveghere depozit logistic',
    category: 'Supraveghere Video',
    location: 'Oradea, Bihor',
    year: '2024',
    image: '/images/warehouse.webp',
    description: 'Instalare sistem complet de supraveghere video cu 24 camere IP 4K, NVR și acces remote.',
  },
  {
    id: 2,
    title: 'Securitate magazin retail',
    category: 'Sisteme Antiefracție',
    location: 'Salonta, Bihor',
    year: '2024',
    image: '/images/retail-store.webp',
    description: 'Sistem de alarmă wireless cu senzori volumetrici, contacte magnetice și monitorizare 24/7.',
  },
  {
    id: 3,
    title: 'Control acces clădire birouri',
    category: 'Control Acces',
    location: 'Cluj-Napoca',
    year: '2023',
    image: '/images/commercial-building.webp',
    description: 'Implementare sistem control acces biometric cu pontaj electronic pentru 150 angajați.',
  },
  {
    id: 4,
    title: 'Rețea date vilă rezidențială',
    category: 'Rețele Date',
    location: 'Oradea, Bihor',
    year: '2023',
    image: '/images/residential-installation.webp',
    description: 'Cablare structurată Cat6, rețea Wi-Fi mesh și sistem smart home integrat.',
  },
  {
    id: 5,
    title: 'Sistem videointerfon ansamblu rezidențial',
    category: 'Interfoane',
    location: 'Timișoara',
    year: '2023',
    image: '/images/modern-office.webp',
    description: 'Instalare sistem videointerfon pentru 48 apartamente cu integrare smartphone.',
  },
  {
    id: 6,
    title: 'Detecție incendiu atelier producție',
    category: 'Detecție Incendiu',
    location: 'Arad',
    year: '2022',
    image: '/images/technical-workshop.webp',
    description: 'Sistem adresabil de detecție incendiu cu 40 detectoare și centrală certificată.',
  },
]

const stats = [
  { value: '1000+', label: 'Proiecte finalizate' },
  { value: '500+', label: 'Clienți mulțumiți' },
  { value: '15+', label: 'Ani experiență' },
  { value: '6', label: 'Tipuri servicii' },
]

export default function ReferencesPage() {
  const params = useParams()
  const locale = params.locale as Locale

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border)]">
              <Award className="w-4 h-4 text-[var(--color-accent-cyan)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Portofoliu proiecte</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-white">Proiectele </span>
              <span className="text-gradient">noastre</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Descoperă câteva dintre proiectele realizate pentru clienții noștri. 
              Fiecare proiect reflectă angajamentul nostru pentru calitate și profesionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 relative">
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
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent-cyan)] mb-2">
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

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'group rounded-2xl overflow-hidden',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                  'hover:border-[var(--color-accent-cyan)]/50',
                  'transition-all duration-300'
                )}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-xs font-medium',
                      'bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)]',
                      'border border-[var(--color-accent-cyan)]/30'
                    )}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                Vrei să fii următorul nostru proiect?
              </h2>
              <p className="text-white/80 mb-8">
                Contactează-ne pentru o consultație gratuită și o ofertă personalizată.
              </p>
              <Link href={`/${locale}/contact`}>
                <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-white/90 border-white" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Cere Ofertă Gratuită
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

