'use client'

import type { Locale } from '@/lib/i18n/config'

interface FlagIconProps {
  locale: Locale
  className?: string
}

// SVG flags that work on all platforms including Windows
export function FlagIcon({ locale, className = 'w-5 h-4' }: FlagIconProps) {
  switch (locale) {
    case 'ro':
      return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path fill="#00319c" d="M0 0h213.3v480H0z" />
            <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
            <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
          </g>
        </svg>
      )
    case 'hu':
      return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd">
            <path fill="#fff" d="M640 480H0V0h640z" />
            <path fill="#388d00" d="M640 480H0V320h640z" />
            <path fill="#d43516" d="M640 160.1H0V.1h640z" />
          </g>
        </svg>
      )
    case 'en':
      return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
        </svg>
      )
    default:
      return null
  }
}

