'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HighlightText({ children, color = '#FF007F' }: { children: React.ReactNode, color?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <span ref={ref} style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
            <span style={{ position: 'relative', zIndex: 10 }}>{children}</span>
            <motion.svg
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '-5%',
                    width: '110%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                    opacity: 0.4
                }}
            >
                <motion.path
                    d="M0 10 Q 50 20 100 10"
                    fill="none"
                    stroke={color}
                    strokeWidth="15"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </motion.svg>
        </span>
    )
}
