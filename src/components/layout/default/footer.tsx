import initTranslations from "@/i18n"
import { Locale, i18n } from "@/i18n.config"
import { useParams } from "next/navigation"

export default async function Footer() {

    const params = useParams<{ locale: Locale }>()
    const locale = params.locale || i18n.defaultLocale

    const { t } = await initTranslations(locale,[])

    return (
        <footer className="border-t 
        bg-gradient-to-r to-indigo-950 from-primary
        ">
            <h1 className="text-center text-white py-6 px-6 text-lg">
                © {t('footer:all-rights-reserved')}
            </h1>
        </footer>
    )
}

