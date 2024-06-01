
export const i18n = {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    // prefixDefault: true // so default locale will be in url
} as const
export type Locale = (typeof i18n)['locales'][number]

export const lang: { title: string, code: Locale }[] = [
    { title: 'English', code: 'en' },
    { title: 'Turkish', code: 'tr' }
]

export const localePrefix = 'as-needed'

export type namespaces = 'global' | 'home'
export type defaultNSType = 'global'
export const defaultNS = 'global' 