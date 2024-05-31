import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

import LogoSVG from "@PUBLIC/kazix-blog-logo.svg"
import { useTranslations } from "next-intl"

interface Props extends ComponentProps<'div'> {
}


export default function Logo({
    className,
  }: Readonly<Props>) {
    const t = useTranslations('global');
    return (
        <div className={cn(['m-2 flex items-center', className])} >
            <LogoSVG className="text-4xl me-4 " />
            {t('site-title')}
        </div>

    )
}