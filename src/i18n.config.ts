
export const i18n = {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    // prefixDefault: true // so default locale will be in url
} as const
export type Locale = (typeof i18n)['locales'][number]

export type namespaces = 'global' | 'home'
export type defaultNSType = 'global'
export const defaultNS = 'global' 