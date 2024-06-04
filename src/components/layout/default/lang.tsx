"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import USASVG from "@/assets/svg/countries/usa.svg"
import TurkeySVG from "@/assets/svg/countries/turkey.svg"
import { useTranslations } from "next-intl"
import { useParams, usePathname  } from "next/navigation"
import type { Locale } from "@/i18n.config"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function LanguageSwitcher({ className, ...props }: Props) {

    const t = useTranslations()

    const params = useParams<{ locale: Locale }>()

    const locale = params.locale

    const langs: { [key in Locale]: { title: string, icon: ReactNode } } = {
        en: {
            title: t('language-switcher.english'),
            icon: <USASVG />,
        },
        tr: {
            title: t('language-switcher.turkish'),
            icon: <TurkeySVG />
        }
    }

    return (
        <div {...props} className={cn('flex', className)}>
            <DropdownMenu>
                <DropdownMenuTrigger className="me-8 outline-none  flex items-center">
                    <span className="text-2xl me-2">{langs[locale].icon}</span>
                    <span className="uppercase font-bold">{locale}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="me-8 mt-5">
                    <DropdownMenuLabel>{t('language-switcher.language')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {Object.entries(langs).map(([k, v]) => (
                        <DropdownMenuItem key={k} className="p-0">
                            <Link className="flex items-center w-full px-2 py-2" href={`/${k}`}>
                                {v.icon} &nbsp;
                                <span className="font-bold">{v.title}</span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )

}