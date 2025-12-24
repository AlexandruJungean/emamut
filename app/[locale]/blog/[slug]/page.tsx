'use client'

import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

// Mock blog posts - will be replaced with Supabase data
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string[]
  image: string
  category: string
  date: string
  readTime: string
}> = {
  'ghid-complet-alegere-camere-supraveghere': {
    title: 'Ghid complet pentru alegerea camerelor de supraveghere',
    excerpt: 'Cum să alegi cele mai potrivite camere de supraveghere pentru casa sau afacerea ta?',
    content: [
      'Camerele de supraveghere au devenit un element esențial pentru securitatea locuințelor și afacerilor. În acest ghid, vom analiza principalele aspecte de care trebuie să ții cont atunci când alegi un sistem de supraveghere video.',
      '## Rezoluția camerei',
      'Rezoluția este unul dintre cei mai importanți factori. Camerele HD (720p) sunt suficiente pentru monitorizare generală, dar pentru detalii clare (precum recunoașterea feței sau a numerelor de înmatriculare), recomandăm camere Full HD (1080p) sau 4K.',
      '## Tipuri de camere',
      '**Camere dome** - Discrete și potrivite pentru interior, oferă un design compact și sunt dificil de vandalizat.',
      '**Camere bullet** - Vizibile și intimidante, ideale pentru exterior. Oferă de obicei distanță focală mai mare.',
      '**Camere PTZ** - Pan-Tilt-Zoom, permit controlul direcției și zoom-ul de la distanță. Perfecte pentru zone mari.',
      '## Viziune nocturnă',
      'Dacă ai nevoie de monitorizare 24/7, viziunea nocturnă este esențială. Camerele cu IR (infraroșu) oferă imagine alb-negru noaptea, în timp ce cele cu lumină albă pot oferi imagine color.',
      '## Stocare și acces remote',
      'Poți opta pentru stocare locală (NVR/DVR) sau cloud. Majoritatea sistemelor moderne oferă acces de pe smartphone, permițându-ți să vezi camerele de oriunde.',
      '## Concluzie',
      'Alegerea camerelor de supraveghere potrivite depinde de nevoile tale specifice. Pentru o recomandare personalizată, contactează-ne pentru o consultație gratuită.',
    ],
    image: '/images/hero-1.webp',
    category: 'Supraveghere Video',
    date: '2024-12-15',
    readTime: '8 min',
  },
  'avantaje-sistem-alarma-wireless': {
    title: '5 avantaje ale sistemelor de alarmă wireless',
    excerpt: 'Sistemele de alarmă wireless oferă numeroase beneficii față de cele tradiționale cu fir.',
    content: [
      'Sistemele de alarmă wireless au revoluționat industria securității, oferind flexibilitate și funcționalități avansate. Iată cele mai importante avantaje:',
      '## 1. Instalare rapidă și curată',
      'Fără cabluri care să trebuiască ascunse în pereți, instalarea durează ore în loc de zile. Nu sunt necesare lucrări de construcție sau reparații ulterioare.',
      '## 2. Flexibilitate în amplasare',
      'Senzorii pot fi mutați sau adăugați ușor, fără modificări majore. Ideal pentru chiriași sau pentru cei care își renovează frecvent spațiul.',
      '## 3. Fiabilitate crescută',
      'Sistemele moderne folosesc comunicație criptată și backup celular, asigurând funcționarea chiar și în cazul întreruperilor de curent sau internet.',
      '## 4. Control de la distanță',
      'Aplicațiile mobile îți permit să armezi/dezarmezi alarma, să primești notificări și să vezi starea sistemului de oriunde în lume.',
      '## 5. Integrare smart home',
      'Se integrează ușor cu alte dispozitive inteligente: iluminat, încuietori, termostats și sisteme de supraveghere video.',
    ],
    image: '/images/hero-2.webp',
    category: 'Sisteme Alarmă',
    date: '2024-12-10',
    readTime: '5 min',
  },
}

const relatedPosts = [
  {
    slug: 'avantaje-sistem-alarma-wireless',
    title: '5 avantaje ale sistemelor de alarmă wireless',
    image: '/images/hero-2.webp',
    category: 'Sisteme Alarmă',
  },
  {
    slug: 'importanta-mentenantei-sisteme-securitate',
    title: 'De ce este importantă mentenanța sistemelor de securitate',
    image: '/images/hero-3.webp',
    category: 'Mentenanță',
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage() {
  const params = useParams()
  const locale = params.locale as Locale
  const slug = params.slug as string

  const post = blogPosts[slug]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-[var(--color-bg-primary)]/60" />
        </div>
        
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la blog</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className={cn(
              'inline-block px-3 py-1 rounded-full text-sm font-medium mb-4',
              'bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)]'
            )}>
              {post.category}
            </span>
            
            <h1 className="heading-lg mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} citire</span>
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
              className="lg:col-span-2"
            >
              <article className="prose prose-invert max-w-none">
                {post.content.map((block, index) => {
                  if (block.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                        {block.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (block.startsWith('**') && block.endsWith('**')) {
                    return (
                      <p key={index} className="font-semibold text-white">
                        {block.replace(/\*\*/g, '')}
                      </p>
                    )
                  }
                  if (block.includes('**')) {
                    const parts = block.split(/(\*\*.*?\*\*)/g)
                    return (
                      <p key={index} className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        {parts.map((part, i) => 
                          part.startsWith('**') ? (
                            <strong key={i} className="text-white">{part.replace(/\*\*/g, '')}</strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {block}
                    </p>
                  )
                })}
              </article>

              {/* Share */}
              <div className={cn(
                'mt-12 pt-8 border-t border-[var(--color-border)]',
                'flex items-center gap-4'
              )}>
                <span className="text-[var(--color-text-secondary)]">
                  <Share2 className="w-5 h-5" />
                </span>
                <span className="text-[var(--color-text-secondary)]">Distribuie:</span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className={cn(
                      'p-2 rounded-lg',
                      'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                      'hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]',
                      'transition-colors'
                    )}
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      'p-2 rounded-lg',
                      'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                      'hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]',
                      'transition-colors'
                    )}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className={cn(
                  'p-6 rounded-2xl',
                  'bg-gradient-to-br from-red-600 to-red-700'
                )}>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Ai nevoie de consultanță?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Contactează-ne pentru o evaluare gratuită a nevoilor tale de securitate.
                  </p>
                  <Link href={`/${locale}/contact`}>
                    <Button variant="secondary" className="w-full bg-white text-red-600 hover:bg-white/90 border-white">
                      Cere Ofertă
                    </Button>
                  </Link>
                </div>

                {/* Related Posts */}
                <div className={cn(
                  'p-6 rounded-2xl',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                )}>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Articole similare
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/${locale}/blog/${related.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white group-hover:text-[var(--color-accent-cyan)] transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {related.category}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Article */}
      <section className="py-16 relative border-t border-[var(--color-border)]">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link 
              href={`/${locale}/blog`}
              className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Toate articolele</span>
            </Link>
            
            <Link 
              href={`/${locale}/blog/avantaje-sistem-alarma-wireless`}
              className="flex items-center gap-2 text-[var(--color-accent-cyan)] hover:text-white transition-colors"
            >
              <span>Articol următor</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

