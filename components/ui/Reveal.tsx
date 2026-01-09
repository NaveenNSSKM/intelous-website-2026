'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
    children: React.ReactNode
    width?: 'fit-content' | '100%'
    delay?: number
    duration?: number
    y?: number
    className?: string
}

export default function Reveal({ children, width = 'fit-content', delay = 0.2, duration = 0.8, y = 40, className = '' }: RevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <div ref={ref} className={className} style={{ position: 'relative', width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: [0.215, 0.61, 0.355, 1] }} // cubic-bezier for smooth pop
            >
                {children}
            </motion.div>
        </div>
    )
}
