"use client"

import Menu from "./menu"
import Logo from "@/components/common/logo"
import { motion, useInView } from "framer-motion"
import { useEffect, useMemo, useRef } from "react"
import NextTopLoader from "nextjs-toploader";


export default function Header() {

    const viewHolder = useRef(null)
    const isInView = useInView(viewHolder)
    const init = useRef(false)
    useEffect(() => {
        init.current = true
    }, [])

    const isScrolling = useMemo(() => {
        return init.current && !isInView
    }, [isInView])


    const variants = {
        hide: {
            y: 20, opacity: 0,
        },
        animateState: {
            x: 0, y: 0, opacity: 1,
        },
    }

    return (
        <>
            <div ref={viewHolder} className="absolute top-10 w-full bg-transparent opacity-5 -z-50"></div>
            <header className={`flex justify-between items-center w-full relative z-10 `}>
                <NextTopLoader
                    color="#000"
                    showSpinner={false} />
                <motion.div layout
                    initial={'hide'}
                    animate={'animateState'}
                    variants={variants}
                    transition={{
                        bounce: 0,
                        duration: 0.3,
                        delay: 0
                    }}
                    className={`w-full flex bg-background z-20 border-b ${isScrolling ? ' fixed top-0' : ''}`}  >
                    <div className="container px-2 w-full flex justify-between items-center">
                        <Logo className="my-4" />
                        <Menu />
                    </div>
                </motion.div>
            </header>
        </>
    )
}