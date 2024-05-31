import HalfMoonSVG from "@/assets/svg/half-moon.svg"
import SunSVG from "@/assets/svg/sun.svg"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

import { useTheme } from 'next-themes'

export default function DarkMode(props: Props) {

    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={cn('flex items-center', props.className)}>
            <Switch
                className="me-2"
                checked={theme === 'dark'}
                onCheckedChange={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }}
            />
            <div className="cursor-pointer" onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
            }}>
                {theme === 'dark' ?
                    <HalfMoonSVG /> :
                    <SunSVG />
                }
            </div>
        </div>
    )
}