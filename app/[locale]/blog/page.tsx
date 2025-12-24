'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n/config'

// Mock blog posts - will be replaced with Supabase data
const blogPosts = [
  {
    id: 1,
    slug: 'ghid-complet-alegere-camere-supraveghere',
    title: 'Ghid complet pentru alegerea camerelor de supraveghere',
    excerpt: 'Cum să alegi cele mai potrivite camere de supraveghere pentru casa sau afacerea ta? Află totul despre rezoluție, tipuri de camere și funcții esențiale.',
    image: '/images/hero-1.webp',
    category: 'Supraveghere Video',
    date: '2024-12-15',
    readTime: '8 min',
  },
  {
    id: 2,
    slug: 'avantaje-sistem-alarma-wireless',
    title: '5 avantaje ale sistemelor de alarmă wireless',
    excerpt: 'Sistemele de alarmă wireless oferă numeroase beneficii față de cele tradiționale cu fir. Descoperă de ce tot mai mulți clienți aleg această soluție.',
    image: '/images/hero-2.webp',
    category: 'Sisteme Alarmă',
    date: '2024-12-10',
    readTime: '5 min',
  },
  {
    id: 3,
    slug: 'importanta-mentenantei-sisteme-securitate',
    title: 'De ce este importantă mentenanța sistemelor de securitate',
    excerpt: 'Mentenanța regulată a sistemelor de securitate asigură funcționarea optimă și prelungește durata de viață a echipamentelor. Află cum să îți protejezi investiția.',
    image: '/images/hero-3.webp',
    category: 'Mentenanță',
    date: '2024-12-05',
    readTime: '6 min',
  },
  {
    id: 4,
    slug: 'control-acces-biometric-vs-card',
    title: 'Control acces: Biometric vs. Card RFID - Ce să alegi?',
    excerpt: 'Comparație detaliată între sistemele de control acces biometrice și cele cu carduri RFID. Avantaje, dezavantaje și recomandări.',
    image: '/images/commercial-building.webp',
    category: 'Control Acces',
    date: '2024-11-28',
    readTime: '7 min',
  },
  {
    id: 5,
    slug: 'normative-detectie-incendiu-romania',
    title: 'Normative și reglementări pentru sistemele de detecție incendiu în România',
    excerpt: 'Tot ce trebuie să știi despre obligațiile legale privind sistemele de detecție și avertizare incendiu pentru diferite tipuri de clădiri.',
    image: '/images/warehouse.webp',
    category: 'Detecție Incendiu',
    date: '2024-11-20',
    readTime: '10 min',
  },
  {
    id: 6,
    slug: 'smart-home-securitate-integrata',
    title: 'Integrarea securității în sistemele Smart Home',
    excerpt: 'Cum să integrezi camerele de supraveghere, alarmele și controlul accesului într-un ecosistem smart home unificat.',
    image: '/images/residential-installation.webp',
    category: 'Smart Home',
    date: '2024-11-15',
    readTime: '8 min',
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

export default function BlogPage() {
  const params = useParams()
  const locale = params.locale as Locale

  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

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
              <BookOpen className="w-4 h-4 text-[var(--color-accent-cyan)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Articole și noutăți</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-white">Blog </span>
              <span className="text-gradient">Emamut</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Articole, ghiduri și noutăți din domeniul securității. 
              Rămâi informat despre cele mai noi tehnologii și bune practici.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/${locale}/blog/${featuredPost.slug}`}>
              <div className={cn(
                'grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden',
                'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                'hover:border-[var(--color-accent-cyan)]/50 transition-all duration-300',
                'group'
              )}>
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className={cn(
                    'inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit',
                    'bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)]'
                  )}>
                    {featuredPost.category}
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Posts */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <article className={cn(
                    'h-full rounded-2xl overflow-hidden',
                    'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                    'hover:border-[var(--color-accent-cyan)]/50',
                    'transition-all duration-300 group'
                  )}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                      
                      <span className={cn(
                        'absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium',
                        'bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)]',
                        'border border-[var(--color-accent-cyan)]/30'
                      )}>
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <ArrowRight className="w-4 h-4 text-[var(--color-accent-cyan)] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

