

'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ButterflyAnimation() {
    const { scrollYProgress } = useScroll()

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 22,
        restDelta: 0.001,
    })

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    /* -----------------------------------------
       PHASE CONTROL
       -----------------------------------------
       0 → 0.45 : wander
       0.5 → 0.65 : event engine
    ----------------------------------------- */

    const phase = useTransform(
        smoothProgress,
        [0.45, 0.5],
        [0, 1]
    )

    /* ---------- WANDER PATH ---------- */
    const wanderX = useTransform(
        smoothProgress,
        [0, 0.15, 0.3, 0.45],
        ['10%', '80%', '30%', '18%']
    )

    const wanderY = useTransform(
        smoothProgress,
        [0, 0.45],
        ['10vh', '58vh']
    )

    /* ---------- EVENT ENGINE PATH ---------- */
    const eventX = useTransform(
        smoothProgress,
        [0.5, 0.65],
        ['18%', '82%']
    )

    const eventY = useTransform(
        smoothProgress,
        [0.5, 0.58, 0.65],
        ['58vh', '25vh', '58vh']
    )

    /* ---------- BLENDED FINAL POSITION ---------- */
    const x = useTransform(
        [wanderX, eventX, phase] as any,
        ([wx, ex, p]: [string, string, number]) => (p < 1 ? wx : ex)
    )

    const y = useTransform(
        [wanderY, eventY, phase] as any,
        ([wy, ey, p]: [string, string, number]) => (p < 1 ? wy : ey)
    )

    /* ---------- ROTATE / SCALE ---------- */
    const rotate = useTransform(
        smoothProgress,
        [0, 0.3, 0.5, 0.58, 0.65],
        [0, 20, 0, 15, -5]
    )

    const scale = useTransform(
        smoothProgress,
        [0, 0.4, 0.65, 0.66],
        [0.85, 1.2, 1, 0]
    )

    /* ---------- FADE OUT ---------- */
    const opacity = useTransform(
        smoothProgress,
        [0.65, 0.66],
        [1, 0]
    )

    if (!mounted) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            <motion.div
                style={{ left: x, top: y, rotate, scale, opacity }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
            >
                <div className="relative w-16 h-12">
                    {/* Wing animation */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            scaleX: [1, 0.15, 1],
                            skewY: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                            duration: 0.22,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <img
                            src="/intelous-main-logo-animation.png"
                            alt="Butterfly Logo"
                            className="w-full h-auto drop-shadow-[0_10px_12px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>

                    {/* Fairy dust */}
                    {[...Array(10)].map((_, i) => (
                        <motion.span
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full"
                            style={{
                                top: '50%',
                                left: '50%',
                                boxShadow: '0 0 8px rgba(255,255,255,0.9)',
                            }}
                            animate={{
                                x: [0, (Math.random() - 0.5) * 120],
                                y: [0, (Math.random() - 0.5) * 120],
                                opacity: [1, 0],
                                scale: [1, 0],
                            }}
                            transition={{
                                duration: 0.9 + Math.random(),
                                repeat: Infinity,
                                delay: Math.random(),
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}



