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
import { useLocale, useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import type { Locale } from "@/i18n.config"
import { ReactNode, useTransition } from "react"
import { cn } from "@/lib/utils"
import { useRouter, Link, usePathname } from "@/services/navigation"

export default function LanguageSwitcher({ className, ...props }: Props) {

    const t = useTranslations()
    const locale = useLocale() as Locale;

    const params = useParams<{ locale: Locale }>()
    const router = useRouter();
    const pathname = usePathname();

    const [isPending, startTransition] = useTransition();

    function onSelect(nextLocale: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }


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
                            <p onClick={() => onSelect((k as Locale))}
                                className="cursor-pointer flex items-center w-full px-2 py-2">
                                {v.icon} &nbsp;
                                <span className="font-bold">{v.title}</span>
                            </p>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )

}