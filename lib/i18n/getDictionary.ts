import type { Locale } from './config'

const dictionaries = {
  ro: () => import('./dictionaries/ro.json').then((module) => module.default),
  hu: () => import('./dictionaries/hu.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

