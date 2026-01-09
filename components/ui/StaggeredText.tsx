'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggeredTextProps {
    text: string | string[]
    className?: string
    delay?: number
    tag?: any
}

export default function StaggeredText({ text, className = '', delay = 0, tag: Tag = 'div' }: StaggeredTextProps) {
    const ref = useRef<any>(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    const words = Array.isArray(text) ? text : text.split(" ")

    return (
        <Tag className={className} ref={ref} style={{ overflow: 'hidden' }}>
            <span className="sr-only">{Array.isArray(text) ? text.join(' ') : text}</span>
            <motion.span
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.05, delayChildren: delay }}
                aria-hidden
                style={{ display: 'inline-block' }}
            >
                {words.map((word, i) => (
                    <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
                        <motion.span
                            style={{ display: 'inline-block' }}
                            variants={{
                                hidden: { y: "110%" },
                                visible: { y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
                            }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    </span>
                ))}
            </motion.span>
        </Tag>
    )
}
