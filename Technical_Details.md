# 🔧 EMAMUT Website - Technical Details

## 🏗️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | Latest | Animations |

### Backend/Services (To be integrated)
| Service | Purpose | Status |
|---------|---------|--------|
| Supabase | Database, Auth, Storage | ⏳ Phase 2 |
| Resend | Email sending | ⏳ After approval |
| Google Maps API | Map embed on contact page | ✅ Ready |
| reCAPTCHA Enterprise | Form spam protection | ✅ Ready |

---

## 📁 Project Structure

```
web-emamut/
├── app/
│   ├── [locale]/                    # Language wrapper (ro, hu, en)
│   │   ├── page.tsx                 # Home
│   │   ├── despre-noi/
│   │   │   └── page.tsx
│   │   ├── servicii/
│   │   │   ├── page.tsx             # Services overview
│   │   │   ├── supraveghere-video/
│   │   │   ├── sisteme-antiefractie/
│   │   │   ├── retele-date/
│   │   │   ├── control-acces/
│   │   │   ├── interfoane/
│   │   │   └── detectie-incendiu/
│   │   ├── referinte/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx             # Blog list
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Individual blog
│   │   ├── ebook/
│   │   │   └── page.tsx
│   │   ├── cariera/
│   │   │   ├── page.tsx             # Career list
│   │   │   ├── tehnician/
│   │   │   └── agent-comercial/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── termeni-conditii/
│   │   ├── politica-confidentialitate/
│   │   └── politica-cookies/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts             # Contact form handler
│   │   ├── quote/
│   │   │   └── route.ts             # Quote form handler
│   │   ├── newsletter/
│   │   │   └── route.ts             # Newsletter handler
│   │   └── ebook/
│   │       └── route.ts             # Ebook download handler
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/                          # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   ├── Accordion.tsx
│   │   └── Modal.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Breadcrumb.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServiceCards.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPosts.tsx
│   │   ├── QuoteForm.tsx
│   │   ├── ContactForm.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── GoogleMap.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── BlogSidebar.tsx
│   │   └── RelatedPosts.tsx
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceSidebar.tsx
│   │   └── ServiceGrid.tsx
│   └── common/
│       ├── AnimatedCounter.tsx
│       ├── ParallaxSection.tsx
│       ├── ScrollReveal.tsx
│       ├── WhatsAppButton.tsx
│       └── ImageLightbox.tsx
├── content/
│   └── legal/
│       └── ro/
│           ├── politica-cookies.md
│           ├── politica-confidentialitate.md
│           └── termeni-conditii.md
├── lib/
│   ├── i18n/
│   │   ├── config.ts                # i18n configuration
│   │   ├── dictionaries/
│   │   │   ├── ro.json
│   │   │   ├── hu.json
│   │   │   └── en.json
│   │   └── getDictionary.ts
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── types.ts
│   ├── email/
│   │   └── send.ts
│   ├── recaptcha/
│   │   └── verify.ts                # reCAPTCHA Enterprise verification
│   └── utils/
│       ├── cn.ts                    # Class name utility
│       └── formatDate.ts
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useLanguage.ts
│   ├── useRecaptcha.ts              # reCAPTCHA Enterprise hook
│   └── useForm.ts
├── types/
│   ├── blog.ts
│   ├── service.ts
│   ├── career.ts
│   └── form.ts
├── public/
│   ├── images/
│   │   ├── hero-1.webp
│   │   ├── hero-2.webp
│   │   ├── hero-3.webp
│   │   ├── Ebook.webp
│   │   └── media/                   # Reference images (11 files)
│   ├── icons/
│   │   ├── services/                # Service icons
│   │   └── flags/                   # Country flags (RO, HU, GB)
│   ├── logo.webp
│   └── screenshots/                 # Reference screenshots
├── styles/
│   └── animations.css               # Custom animations
├── middleware.ts                    # i18n routing middleware
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### CSS Variables (globals.css)

```css
:root {
  /* Colors */
  --color-bg-primary: #0a0a0f;
  --color-bg-secondary: #0d1117;
  --color-bg-card: #1a1f2e;
  --color-bg-card-hover: #242b3d;
  
  --color-accent-cyan: #00d4ff;
  --color-accent-cyan-glow: rgba(0, 212, 255, 0.3);
  --color-accent-red: #ff3b3b;
  --color-accent-red-glow: rgba(255, 59, 59, 0.3);
  
  --color-text-primary: #ffffff;
  --color-text-secondary: #8b949e;
  --color-text-muted: #6e7681;
  
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-glow: rgba(0, 212, 255, 0.5);
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #0a0a0f 0%, #1a1f2e 50%, #0d1117 100%);
  --gradient-card: linear-gradient(145deg, rgba(26, 31, 46, 0.8), rgba(13, 17, 23, 0.9));
  --gradient-accent: linear-gradient(90deg, #00d4ff, #00ff88);
  
  /* Shadows */
  --shadow-glow-cyan: 0 0 20px rgba(0, 212, 255, 0.3);
  --shadow-glow-red: 0 0 20px rgba(255, 59, 59, 0.3);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4);
  
  /* Spacing */
  --container-max: 1400px;
  --section-padding: 6rem;
  
  /* Border Radius */
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
        'accent-cyan': 'var(--color-accent-cyan)',
        'accent-red': 'var(--color-accent-red)',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 🌍 Internationalization (i18n)

### Languages
| Language | Code | Flag | Status |
|----------|------|------|--------|
| Română | `ro` | 🇷🇴 | Default, primary |
| Magyar | `hu` | 🇭🇺 | AI translated |
| English | `en` | 🇬🇧 | AI translated |

### Middleware Configuration

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ro', 'hu', 'en']
const defaultLocale = 'ro'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return
  
  // Redirect to default locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)'],
}
```

### Dictionary Structure

```json
// lib/i18n/dictionaries/ro.json
{
  "common": {
    "nav": {
      "home": "Acasă",
      "about": "Despre Noi",
      "services": "Servicii",
      "references": "Referințe",
      "blog": "Blog",
      "ebook": "Ebook",
      "career": "Carieră",
      "contact": "Contact"
    },
    "cta": {
      "requestQuote": "Cere Ofertă",
      "learnMore": "Mai multe detalii",
      "readMore": "Citește mai mult",
      "submit": "Trimite",
      "download": "Descarcă"
    },
    "footer": {
      "services": "Servicii",
      "usefulLinks": "Linkuri utile",
      "newsletter": "Newsletter",
      "copyright": "© 2025 Emamut - Toate drepturile rezervate"
    }
  },
  "home": {
    "hero": {
      "slide1": {
        "title": "SISTEME SUPRAVEGHERE VIDEO",
        "subtitle": "Destinații posibile:"
      }
    },
    "services": {
      "title": "Serviciile noastre",
      "residential": "Securitate locuință",
      "cameras": "Sisteme camere",
      "alarm": "Sisteme alarmă",
      "intercom": "Sisteme interfoane"
    }
  }
}
```

---

## 🔐 reCAPTCHA Enterprise Configuration

### Client-side Hook

```typescript
// hooks/useRecaptcha.ts
'use client'

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void
        execute: (siteKey: string, options: { action: string }) => Promise<string>
      }
    }
  }
}

export async function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve) => {
    window.grecaptcha.enterprise.ready(async () => {
      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action }
      )
      resolve(token)
    })
  })
}
```

### Server-side Verification

```typescript
// lib/recaptcha/verify.ts
export async function verifyRecaptcha(token: string, expectedAction: string): Promise<boolean> {
  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.RECAPTCHA_PROJECT_ID}/assessments?key=${process.env.RECAPTCHA_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: {
          token,
          expectedAction,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    }
  )

  const assessment = await response.json()
  
  // Check if valid (score 0.0 to 1.0, higher = more likely human)
  return assessment.tokenProperties?.valid && assessment.riskAnalysis?.score >= 0.5
}
```

---

## 📧 Email Configuration

### API Route Example (with reCAPTCHA Enterprise)

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { verifyRecaptcha } from '@/lib/recaptcha/verify'

// Initialize Resend (will be undefined until API key is provided)
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, message, recaptchaToken } = body

  // Verify reCAPTCHA Enterprise
  const isHuman = await verifyRecaptcha(recaptchaToken, 'CONTACT_FORM')
  
  if (!isHuman) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
  }

  // Send email (or mock if Resend not configured)
  try {
    if (resend) {
      await resend.emails.send({
        from: 'Emamut Website <noreply@emamut.ro>',
        to: 'contact@emamut.ro',
        subject: `Mesaj nou de la ${name}`,
        html: `
          <h2>Mesaj nou de pe website</h2>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        `,
      })
    } else {
      // Mock email sending for development
      console.log('📧 Email would be sent:', { name, email, phone, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

---

## 🗄️ Supabase Schema (Phase 2)

### Tables

```sql
-- Blog Posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title_ro VARCHAR(255) NOT NULL,
  title_hu VARCHAR(255),
  title_en VARCHAR(255),
  excerpt_ro TEXT,
  excerpt_hu TEXT,
  excerpt_en TEXT,
  content_ro TEXT NOT NULL,
  content_hu TEXT,
  content_en TEXT,
  featured_image VARCHAR(500),
  category VARCHAR(100),
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Career Posts
CREATE TABLE career_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title_ro VARCHAR(255) NOT NULL,
  title_hu VARCHAR(255),
  title_en VARCHAR(255),
  description_ro TEXT NOT NULL,
  description_hu TEXT,
  description_en TEXT,
  requirements_ro TEXT[],
  requirements_hu TEXT[],
  requirements_en TEXT[],
  benefits_ro TEXT[],
  benefits_hu TEXT[],
  benefits_en TEXT[],
  featured_image VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Contact Form Submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quote Requests
CREATE TABLE quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_type VARCHAR(50), -- Personal/Business
  service_type VARCHAR(100),
  system_size VARCHAR(50),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  county VARCHAR(100),
  city VARCHAR(100) NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 📦 Required npm Packages

```bash
# Core
npm install framer-motion lucide-react clsx tailwind-merge

# i18n
npm install next-intl

# Forms
npm install react-hook-form @hookform/resolvers zod

# Email (Phase 2 - after business approval)
npm install resend

# Supabase (Phase 2)
npm install @supabase/supabase-js

# Maps
npm install @react-google-maps/api

# Rich Text (for admin, Phase 2)
npm install @tiptap/react @tiptap/starter-kit

# Image optimization
npm install sharp
```

---

## 🔑 Environment Variables

### `.env.local` (Current Status)

```env
# ═══════════════════════════════════════════════════════════════
# APP CONFIGURATION
# ═══════════════════════════════════════════════════════════════
NEXT_PUBLIC_SITE_URL=https://emamut.ro
NEXT_PUBLIC_SITE_NAME=Emamut Security Solutions

# ═══════════════════════════════════════════════════════════════
# GOOGLE MAPS ✅ CONFIGURED
# ═══════════════════════════════════════════════════════════════
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# ═══════════════════════════════════════════════════════════════
# RECAPTCHA ENTERPRISE ✅ CONFIGURED
# ═══════════════════════════════════════════════════════════════
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_API_KEY=your_google_cloud_api_key
RECAPTCHA_PROJECT_ID=your_project_id

# ═══════════════════════════════════════════════════════════════
# EMAIL (RESEND) ⏳ PENDING - After business approval
# ═══════════════════════════════════════════════════════════════
RESEND_API_KEY=

# ═══════════════════════════════════════════════════════════════
# SUPABASE ⏳ PHASE 2
# ═══════════════════════════════════════════════════════════════
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

---

## 📞 Contact Information

| Item | Value | Status |
|------|-------|--------|
| Phone | +40 735 777 296 | ✅ Confirmed |
| WhatsApp | +40 735 777 296 | ✅ Confirmed |
| Email | contact@emamut.ro | ✅ Confirmed |
| Address | Str. Horea nr. 26, Salonta, jud. Bihor | ✅ Confirmed |
| Facebook | https://www.facebook.com/EmamutSRL | ✅ Confirmed |

---

## 📋 Project Status

### ✅ Ready & Available
- [x] Logo (`logo.webp`)
- [x] Hero images (`hero-1.webp`, `hero-2.webp`, `hero-3.webp`)
- [x] Ebook cover image (`Ebook.webp`)
- [x] Media/reference images (11 images in `/media`)
- [x] Contact information (phone, email, address)
- [x] WhatsApp number confirmed
- [x] Service descriptions (all 6)
- [x] Facebook link
- [x] Google Maps API Key
- [x] reCAPTCHA Enterprise (Site Key + API Key + Project ID)
- [x] Cookie Policy (Romanian)
- [x] Privacy Policy (Romanian)
- [x] Terms & Conditions (Romanian)

### 🤖 AI Will Handle
- [x] Hungarian translations (all content)
- [x] English translations (all content)
- [x] UI/UX copywriting

### ⏳ Pending (After Business Approval)
- [ ] Resend API Key (for email sending)
- [ ] Supabase setup (for blog/career admin)

### 📸 Optional (Can Enhance Later)
- [ ] High-res team photo
- [ ] Office/workspace photos
- [ ] Additional project photos for References page

---

## 🚀 Development Status: READY TO BUILD!

All required assets and API keys are available. Development can begin immediately.

### Phase 1 (Starting Now):
1. ✅ Project setup complete
2. 🔨 Design system & UI components
3. 🔨 Multi-language setup (RO/HU/EN)
4. 🔨 Header with language switcher
5. 🔨 Footer
6. 🔨 Home page

Let's go! 🦣⚡
