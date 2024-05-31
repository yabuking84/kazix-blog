"use client"

import Menu from "./menu"
import Logo from "@/components/common/logo"
import { motion, useInView } from "framer-motion"
import { useEffect, useMemo, useRef } from "react"

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
                <motion.div layout
                    initial={'hide'}
                    animate={'animateState'}
                    variants={variants}
                    transition={{
                        bounce: 0,
                        duration: 0.3,
                        delay: 0
                    }}
                    className={`w-full flex bg-white  z-20 ${isScrolling ? 'border-b fixed top-0' : ''}`}  >
                    <div className="w-full flex justify-between items-center">
                        <Logo className="my-4 ms-6" />
                        <Menu />
                    </div>
                </motion.div>
            </header>
        </>
    )
}