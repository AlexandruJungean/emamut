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
| Service | Purpose |
|---------|---------|
| Supabase | Database, Auth, Storage |
| Resend / SendGrid | Email sending |
| Google Maps API | Map embed on contact page |
| reCAPTCHA v3 | Form spam protection |

---

## 📁 Project Structure

```
web-emamut/
├── app/
│   ├── [locale]/                    # Language wrapper
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
│   │   ├── politica-cookies/
│   │   └── autorizatii/
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
│   └── utils/
│       ├── cn.ts                    # Class name utility
│       └── formatDate.ts
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useLanguage.ts
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
│   │   └── media/                   # Reference images
│   ├── icons/
│   │   ├── services/                # Service icons
│   │   └── flags/                   # Country flags
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

## 📧 Email Configuration

### API Route Example

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, message, recaptchaToken } = body

  // Verify reCAPTCHA
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    { method: 'POST' }
  )
  const recaptchaData = await recaptchaResponse.json()

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
  }

  // Send email
  try {
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

    return NextResponse.json({ success: true })
  } catch (error) {
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

# Email
npm install resend

# Supabase (Phase 2)
npm install @supabase/supabase-js

# Maps
npm install @react-google-maps/api

# Rich Text (for admin, Phase 2)
npm install @tiptap/react @tiptap/starter-kit

# Image optimization
npm install sharp

# reCAPTCHA
npm install react-google-recaptcha-v3
```

---

## 🔑 Environment Variables

Create `.env.local` file:

```env
# App
NEXT_PUBLIC_SITE_URL=https://emamut.ro
NEXT_PUBLIC_SITE_NAME=Emamut Security Solutions

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Email (Resend)
RESEND_API_KEY=your_resend_api_key

# Supabase (Phase 2)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

---

## 📋 What You Need to Provide

### ✅ Already Have
- [x] Logo (`logo.webp`)
- [x] Hero images (`hero-1.webp`, `hero-2.webp`, `hero-3.webp`)
- [x] Ebook cover image (`Ebook.webp`)
- [x] Media/reference images (11 images in `/media`)
- [x] Contact information
- [x] Service descriptions (all 6)
- [x] Facebook link

### ❌ Need from You

#### 1. **API Keys & Credentials**
| Item | Purpose | Where to Get |
|------|---------|--------------|
| Google Maps API Key | Contact page map | [Google Cloud Console](https://console.cloud.google.com) |
| reCAPTCHA v3 Keys | Form spam protection | [Google reCAPTCHA](https://www.google.com/recaptcha/admin) |
| Resend API Key | Email sending | [Resend.com](https://resend.com) or alternative |
| Domain DNS access | Email verification | Your domain registrar |

#### 2. **Content**
| Item | Purpose | Notes |
|------|---------|-------|
| Hungarian translations | Multi-language | All page content |
| English translations | Multi-language | All page content |
| Testimonials (3-5) | Home page carousel | Name, role, company, review text, photo (optional) |
| FAQ answers | Home page FAQ | Already have questions, need full answers |
| Reference projects | Portfolio page | Photos, descriptions, client names (if permitted) |
| Blog content | Initial blog posts | If you want posts at launch |
| Career job details | Career pages | Full job descriptions for both positions |
| Terms & Conditions | Legal page | Full legal text |
| Privacy Policy | Legal page | Full legal text, GDPR compliant |
| Cookie Policy | Legal page | Full legal text |
| Licenses/Authorizations | Legal page | License numbers, images |

#### 3. **Images (Optional but Recommended)**
| Item | Purpose | Recommended Size |
|------|---------|------------------|
| High-res team photo | About & Career pages | 1920x1080px |
| Office/workspace photos | About page | 1200x800px |
| Project photos | References page | 800x600px each |
| Service-specific images | Service pages | 1200x800px each |

#### 4. **Decisions Needed**
- [ ] Confirm WhatsApp number for chat button: +40 735 777 296
- [ ] Preferred email service (Resend, SendGrid, or SMTP?)
- [ ] Admin access - should admin panel be at `/admin` or separate?
- [ ] Do you want cookie consent banner?
- [ ] Do you want blog comments feature?

---

## 🚀 Getting Started

Once you provide the API keys, I can start building! The first phase will include:

1. Setting up the project structure
2. Creating the design system & UI components
3. Implementing multi-language support
4. Building the Header & Footer
5. Creating the Home page

Let me know when you're ready! 🦣

