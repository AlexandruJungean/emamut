'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

// Mock job listings - will be replaced with Supabase data
const jobs = [
  {
    id: 1,
    slug: 'tehnician',
    title: 'Tehnician Sisteme Securitate',
    type: 'Full-time',
    location: 'Salonta, Bihor',
    description: 'Căutăm tehnicieni pentru instalarea și întreținerea sistemelor de supraveghere video, alarmă și control acces.',
    requirements: [
      'Experiență în instalări electrice sau telecomunicații',
      'Cunoștințe de bază despre sisteme de securitate',
      'Permis categoria B',
      'Disponibilitate pentru deplasări',
    ],
  },
  {
    id: 2,
    slug: 'agent-comercial',
    title: 'Agent Comercial',
    type: 'Full-time',
    location: 'Salonta, Bihor',
    description: 'Căutăm agent comercial pentru dezvoltarea portofoliului de clienți și promovarea serviciilor noastre.',
    requirements: [
      'Experiență în vânzări B2B',
      'Abilități excelente de comunicare',
      'Permis categoria B',
      'Orientare spre rezultate',
    ],
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'Dezvoltare profesională',
    description: 'Training-uri și certificări în domeniul securității',
  },
  {
    icon: Heart,
    title: 'Echipă prietenoasă',
    description: 'Mediu de lucru colegial și suportiv',
  },
  {
    icon: Award,
    title: 'Bonusuri performanță',
    description: 'Recompense pentru rezultate deosebite',
  },
  {
    icon: Users,
    title: 'Stabilitate',
    description: 'Companie solidă cu 15+ ani de experiență',
  },
]

export default function CareerPage() {
  const params = useParams()
  const locale = params.locale as Locale

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border)]">
              <Briefcase className="w-4 h-4 text-[var(--color-accent-cyan)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Cariere la Emamut</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-white">Alătură-te </span>
              <span className="text-gradient">echipei noastre</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Căutăm oameni pasionați care vor să construiască o carieră în domeniul 
              securității. Oferim oportunități de dezvoltare și un mediu de lucru stimulant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 relative bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'p-6 rounded-2xl text-center',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                )}
              >
                <div className={cn(
                  'w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center',
                  'bg-[var(--color-accent-cyan)]/10'
                )}>
                  <benefit.icon className="w-6 h-6 text-[var(--color-accent-cyan)]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">
              <span className="text-white">Poziții </span>
              <span className="text-gradient">disponibile</span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Descoperă oportunitățile de carieră disponibile în echipa noastră
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${locale}/cariera/${job.slug}`}>
                  <div className={cn(
                    'p-8 rounded-2xl',
                    'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                    'hover:border-[var(--color-accent-cyan)]/50',
                    'transition-all duration-300 group'
                  )}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-accent-cyan)] transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        Vezi detalii
                      </Button>
                    </div>

                    <p className="text-[var(--color-text-secondary)] mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, i) => (
                        <span
                          key={i}
                          className={cn(
                            'px-3 py-1 rounded-full text-xs',
                            'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]'
                          )}
                        >
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="px-3 py-1 text-xs text-[var(--color-accent-cyan)]">
                          +{job.requirements.length - 3} altele
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Jobs CTA */}
          {jobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-[var(--color-text-muted)]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Nu avem poziții deschise momentan
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Dar poți trimite CV-ul tău pentru viitoare oportunități.
              </p>
              <a href="mailto:contact@emamut.ro">
                <Button variant="primary">
                  Trimite CV
                </Button>
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application CTA */}
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
                Nu găsești poziția potrivită?
              </h2>
              <p className="text-white/80 mb-8">
                Trimite-ne CV-ul tău și te vom contacta când avem o poziție potrivită pentru tine.
              </p>
              <a href="mailto:contact@emamut.ro?subject=Aplicație spontană - CV">
                <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-white/90 border-white">
                  Trimite CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

