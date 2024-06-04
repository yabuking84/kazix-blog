"use client"

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

import LogoSVG from "@PUBLIC/kazix-blog-logo.svg"
import { useTranslations } from "next-intl"
import Link from "next/link";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n.config"

interface Props extends ComponentProps<'div'> {
}


export default function Logo({
    className,
}: Readonly<Props>) {
    const t = useTranslations('global');
    const params = useParams<{ locale: Locale }>()
    return (
        <div className={cn(['m-2 flex items-center', className])} >
            <Link locale={params.locale} className="flex items-center " href={'/' + params.locale}>
                <LogoSVG className="text-4xl me-4 " />
                <span className="font-bold text-2xl">
                    {t('site-title')}
                </span>
            </Link>
        </div>

    )
}