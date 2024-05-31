import { cn } from "@/lib/utils"
import Image from "next/image"
import { ComponentProps } from "react"
import { useParams } from 'next/navigation'

import LogoSVG from "@PUBLIC/kazix-blog-logo.svg"
import { Locale, i18n } from "@/i18n.config"
import initTranslations from "@/i18n"

interface Props extends ComponentProps<'div'> { }

export default async function Logo({ className }: Props) {

    const params = useParams<{ locale: Locale }>()
    const locale = params.locale || i18n.defaultLocale

    const { t } = await initTranslations(locale)

    return (
        <div className={cn(['m-2', className])} >
            <LogoSVG />
            {t('global:site-title')}
        </div>

    )
}