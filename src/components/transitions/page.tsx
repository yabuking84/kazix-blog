'use client'

import { motion } from "framer-motion"
import { ComponentProps } from "react"

interface Props extends ComponentProps<'div'> { }

export default function PageTransition({ children, className }: Props) {

    return (
        <motion.div
            className={className}
            initial={'initialState'}
            animate={'animateState'}
            transition={{
                bounce: 0,
                duration: 0.3
            }}
            variants={{
                initialState: {
                    y: 10, opacity: 0
                },
                animateState: {
                    y: 0, opacity: 1,
                },
            }}
        >
            {children}
        </motion.div>
    )
}