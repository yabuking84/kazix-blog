import { Resource, createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { i18n, type namespaces, type Locale, defaultNS } from '@/i18n.config'



export default async function initTranslations(
    locale: Locale,
    namespaces?: namespaces[],
    i18nInstance?: ReturnType<typeof createInstance>,
    resources?: Resource
) {
    i18nInstance = i18nInstance || createInstance()

    i18nInstance.use(initReactI18next)

    if (!resources) {
        i18nInstance.use(
            resourcesToBackend(
                (language: Locale, namespace: namespaces) =>
                    import(`@/locales/${language}/${namespace}.json`)
            )
        )
    }

    const nmspcs = (namespaces === undefined || namespaces.length === 0) ? [defaultNS] : namespaces
    await i18nInstance.init({
        lng: locale,
        resources,
        fallbackLng: i18n.defaultLocale,
        supportedLngs: i18n.locales,
        defaultNS: nmspcs[0],
        fallbackNS: nmspcs[0],
        ns: nmspcs,
        preload: resources ? [] : i18n.locales
    })

    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t
    }
}