'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowLeft, CheckCircle, Send, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, Input, Textarea } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const jobsData: Record<string, {
  title: string
  type: string
  location: string
  description: string[]
  requirements: string[]
  benefits: string[]
  responsibilities: string[]
}> = {
  'tehnician': {
    title: 'Tehnician Sisteme Securitate',
    type: 'Full-time',
    location: 'Salonta, Bihor',
    description: [
      'Căutăm tehnicieni motivați pentru a se alătura echipei noastre în instalarea și întreținerea sistemelor de securitate.',
      'Vei lucra cu cele mai noi tehnologii din domeniul supravegherii video, alarmelor și controlului accesului.',
    ],
    requirements: [
      'Experiență de minim 1 an în instalări electrice sau telecomunicații',
      'Cunoștințe de bază despre sisteme de securitate (camere, alarme)',
      'Permis de conducere categoria B',
      'Disponibilitate pentru deplasări în județ și împrejurimi',
      'Abilități de comunicare cu clienții',
      'Atenție la detalii și orientare spre calitate',
    ],
    benefits: [
      'Salariu competitiv + bonusuri de performanță',
      'Training-uri și certificări în domeniu',
      'Echipamente și unelte de lucru asigurate',
      'Mașină de serviciu pentru deplasări',
      'Program flexibil',
      'Posibilități de avansare',
    ],
    responsibilities: [
      'Instalarea sistemelor de supraveghere video',
      'Montaj sisteme de alarmă și detectori',
      'Configurarea echipamentelor și punerea în funcțiune',
      'Întreținere și depanare sisteme existente',
      'Consultanță tehnică pentru clienți',
      'Documentarea lucrărilor efectuate',
    ],
  },
  'agent-comercial': {
    title: 'Agent Comercial',
    type: 'Full-time',
    location: 'Salonta, Bihor',
    description: [
      'Căutăm un agent comercial dinamic pentru dezvoltarea portofoliului de clienți și promovarea serviciilor noastre de securitate.',
      'Vei avea oportunitatea de a lucra cu clienți B2B și B2C, oferind soluții personalizate de securitate.',
    ],
    requirements: [
      'Experiență de minim 2 ani în vânzări, preferabil B2B',
      'Abilități excelente de comunicare și negociere',
      'Permis de conducere categoria B',
      'Orientare spre rezultate și atingerea targeturilor',
      'Cunoștințe de bază despre tehnologie (un plus)',
      'Autonomie și capacitate de auto-organizare',
    ],
    benefits: [
      'Salariu de bază + comisioane atractive',
      'Mașină de serviciu și telefon',
      'Training-uri de vânzări și produs',
      'Portofoliu de clienți existent',
      'Flexibilitate în organizarea programului',
      'Posibilități de avansare către management',
    ],
    responsibilities: [
      'Prospectare și identificare clienți noi',
      'Prezentarea serviciilor și soluțiilor companiei',
      'Negocierea și încheierea contractelor',
      'Menținerea relațiilor cu clienții existenți',
      'Participarea la întâlniri de vânzări și ofertare',
      'Raportarea activității și rezultatelor',
    ],
  },
}

export default function JobDetailPage() {
  const params = useParams()
  const locale = params.locale as Locale
  const slug = params.slug as string

  const job = jobsData[slug]
  
  if (!job) {
    notFound()
  }

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Implement actual form submission with email sending
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <Link 
            href={`/${locale}/cariera`}
            className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Toate pozițiile</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={cn(
              'w-16 h-16 rounded-2xl mb-6 flex items-center justify-center',
              'bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-transparent',
              'border border-[var(--color-accent-cyan)]/30'
            )}>
              <Briefcase className="w-8 h-8 text-[var(--color-accent-cyan)]" />
            </div>
            
            <h1 className="heading-xl mb-4 text-white">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Despre poziție</h2>
                <div className="space-y-3 text-[var(--color-text-secondary)]">
                  {job.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Responsabilități</h2>
                <div className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-accent-cyan)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[var(--color-accent-cyan)]" />
                      </div>
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Cerințe</h2>
                <div className="space-y-3">
                  {job.requirements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-accent-red)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[var(--color-accent-red)]" />
                      </div>
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Ce oferim</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {job.benefits.map((item, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl',
                        'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                      )}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className={cn(
                  'p-8 rounded-3xl',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                )}>
                  {status === 'success' ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Mulțumim pentru aplicație!
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">
                        Te vom contacta în curând.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Aplică acum
                      </h3>
                      <p className="text-[var(--color-text-secondary)] mb-6">
                        Completează formularul și te vom contacta.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Input
                            type="text"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="Numele tău complet"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="Adresa de email"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            placeholder="Număr de telefon"
                            required
                          />
                        </div>
                        <div>
                          <Textarea
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            placeholder="Descrie pe scurt experiența ta..."
                            rows={4}
                          />
                        </div>

                        {status === 'error' && (
                          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>A apărut o eroare. Te rugăm să încerci din nou.</span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full"
                          disabled={status === 'loading'}
                          leftIcon={<Send className="w-4 h-4" />}
                        >
                          {status === 'loading' ? 'Se trimite...' : 'Trimite aplicația'}
                        </Button>

                        <p className="text-xs text-[var(--color-text-muted)] text-center">
                          Sau trimite CV-ul pe{' '}
                          <a href="mailto:contact@emamut.ro" className="text-[var(--color-accent-cyan)]">
                            contact@emamut.ro
                          </a>
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

