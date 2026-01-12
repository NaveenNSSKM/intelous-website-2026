'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'

// matches intelous.ai / dark futuristic vibe
const theme = {
    bg: '#030303',
    bgSecondary: '#080808',
    text: '#EDEDED',
    textMuted: '#888888',
    accent: '#FF007F', // Pink
    accentSecondary: '#39FF14', // Green
    accentTertiary: '#4A90E2', // Blue
    border: 'rgba(255, 255, 255, 0.08)',
    cardBg: 'rgba(255, 255, 255, 0.02)',
    cardHover: 'rgba(255, 255, 255, 0.05)',
}

// Icons extracted from TrustCrisis for "Why Ventures Fail"
const Zap = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const AppWindow = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 4v4" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
    </svg>
)

const Rocket = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-9.5A2.7 2.7 0 0 1 14 7a2.7 2.7 0 0 0 4.5 3a22 22 0 0 1-6.5 5" />
        <path d="m9 12 3 3" />
    </svg>
)

// Large Icons for Section 2 (Event Engine Style)
const BoxIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
)

const LayersIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
)

const TargetIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
)

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
}

const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
        y: -8,
        scale: 1.02,
        backgroundColor: theme.cardHover,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
        transition: { duration: 0.3 }
    }
}

function AnimatedCounter({ to }: { to: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null)
    const isInView = useInView(nodeRef, { once: false, margin: "-20%" })
    const springValue = useSpring(0, { stiffness: 50, damping: 20, duration: 1 })
    const rounded = useTransform(springValue, (latest) => Math.round(latest))

    useEffect(() => {
        if (isInView) {
            springValue.set(to)
        } else {
            springValue.set(0)
        }
    }, [isInView, to, springValue])

    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest)
        })
    }, [rounded])

    return <span ref={nodeRef}>{displayValue}</span>
}

function CohortSlot({ index, shouldFill, theme }: { index: number, shouldFill: boolean, theme: any }) {
    const [isChecked, setIsChecked] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView && shouldFill) {
            // Stagger delay: Start after initial appearance (500ms) + stagger
            const timer = setTimeout(() => {
                setIsChecked(true)
            }, 600 + (index * 400))
            return () => clearTimeout(timer)
        }
    }, [isInView, shouldFill, index])

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}

            animate={{
                backgroundColor: isChecked ? theme.accent : 'rgba(255,255,255,0.05)',
                borderColor: isChecked ? theme.accent : theme.border,
                boxShadow: isChecked ? `0 0 20px ${theme.accent}66` : 'none',
                color: isChecked ? '#fff' : '#444'
            }}
            transition={{ duration: 0.5 }}
            style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                borderWidth: '1px',
                borderStyle: 'solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 700,
            }}
        >
            <motion.span
                key={isChecked ? 'check' : 'num'}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {isChecked ? '✓' : index}
            </motion.span>
        </motion.div>
    )
}

function InboxBadge({ text, color = "#ff007f" }: { text: string; color?: string }) {
    return (
        <div style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1px', // The border thickness
            marginBottom: '24px',
            borderRadius: '9999px',
            overflow: 'hidden',
        }}>
            {/* Spinning Gradient Border */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `conic-gradient(transparent 0deg, ${color} 60deg, transparent 120deg)`,
                    opacity: 1,
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity
                }}
            />

            {/* Inner Content Container (Masks the center) */}
            <div style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '7px 19px', // compensated for 1px padding
                borderRadius: '9999px',
                backgroundColor: '#050a14',
                zIndex: 1
            }}>
                <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#fff',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default function BuildHomeSections() {
    const [isMobile, setIsMobile] = useState(false)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    // Ref for Section 2 Scroll Animation
    const sectionTwoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Treat Tablet (<1024px) as Mobile for complex animations
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Scroll Animations for Section 2 (EventEngine Style)
    const { scrollYProgress } = useScroll({
        target: sectionTwoRef,
        offset: ["start 80%", "center 60%"]
    })

    // Desktop Animation: "Vertical Stack" -> "Horizontal Grid" (Fan Out)
    const scaleCenter = useTransform(scrollYProgress, [0, 1], [1.05, 1])

    const xLeft = useTransform(scrollYProgress, [0, 1], ["105%", "0%"])
    const yLeft = useTransform(scrollYProgress, [0, 1], [-25, 0])
    const rotateLeft = useTransform(scrollYProgress, [0, 1], [-5, 0])

    const xRight = useTransform(scrollYProgress, [0, 1], ["-105%", "0%"])
    const yRight = useTransform(scrollYProgress, [0, 1], [-50, 0])
    const rotateRight = useTransform(scrollYProgress, [0, 1], [5, 0])

    const opacityStack = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    // Mobile Variants
    const mobileRightToLeft = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }
    const mobileLeftToRight = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }


    return (
        <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh', overflow: 'hidden' }}>

            {/* SECTION 1: Why Ventures Fail (TrustCrisis Style Architecture) */}
            <section style={{ padding: '140px 24px', position: 'relative' }}>
                {/* Background Grid/Glow */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 50% 0%, rgba(255, 0, 127, 0.05) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <InboxBadge text="THE EXECUTION GAP" color={theme.accent} />
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 900,
                            color: '#fff',
                            margin: '0 0 24px 0',
                            letterSpacing: '-2px',
                            lineHeight: 1.1
                        }}>Why Ventures Fail</h2>
                        <p style={{
                            fontSize: 'clamp(18px, 2vw, 22px)',
                            color: '#94A3B8', // Muted Blue-Grey
                            maxWidth: '720px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}>
                            You cannot afford to <span style={{ color: '#fff', fontWeight: 600 }}>lose six months</span> to a <span style={{ color: '#fff', fontWeight: 600 }}>bloated development agency</span>, or risk your future on <span style={{ color: '#fff', fontWeight: 600 }}>disconnected freelancers</span>. <span style={{ color: '#fff', fontWeight: 600 }}>Intelous Labs</span> is the <span style={{ color: '#fff', fontWeight: 600 }}>anti-failure</span> venture partner.
                        </p>
                    </motion.div>

                    {/* Stacked Cards Animation Layout */}
                    <div className="flex flex-col items-center relative gap-4 perspective-1000 mt-12 min-h-[500px]" style={{ perspective: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginTop: '3rem', minHeight: '500px' }}>
                        {[
                            {
                                title: 'Speed to Market',
                                description: 'We move at the speed of your ambition—from PRD to first 20 qualified leads in exactly 70 days.',
                                icon: <Zap className="w-8 h-8 text-[#FF007F]" />
                            },
                            {
                                title: 'Sovereign Systems',
                                description: 'We don\'t just "build apps"; we architect sovereign systems designed for non-linear agentic expansion.',
                                icon: <AppWindow className="w-8 h-8 text-[#FF007F]" />
                            },
                            {
                                title: 'Build-Operate-Transfer',
                                description: 'We embrace the exit. Our goal is your total sovereignty—you own the ship we built.',
                                icon: <Rocket className="w-8 h-8 text-[#FF007F]" />
                            },
                        ].map((feature, index) => {
                            // Responsive Zigzag Logic
                            const xOffset = isMobile
                                ? '0%'
                                : index === 0 ? '15%' : index === 1 ? '-15%' : '5%';

                            const rotateVal = isMobile
                                ? (index % 2 === 0 ? -2 : 2)
                                : index === 0 ? 6 : index === 1 ? -6 : 3;

                            const isActive = activeIndex === index

                            return (
                                <motion.div
                                    key={feature.title}
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                        x: 0,
                                        rotate: 0,
                                        scale: 0.9
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: index * -40, // Stacking overlap
                                        x: xOffset, // Zigzag horizontal offset
                                        rotate: rotateVal,
                                        scale: 1
                                    }}
                                    animate={isActive ? { scale: 1.03, zIndex: 50, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: index * 0.15,
                                    }}
                                    whileHover={{
                                        zIndex: 50,
                                        scale: 1.03,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    style={{
                                        zIndex: 10 - index,
                                        width: '100%',
                                        maxWidth: '42rem',
                                        padding: '1.5rem',
                                        borderRadius: '2.5rem',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        background: 'rgba(15, 23, 42, 0.9)', // Dark background
                                        backdropFilter: 'blur(24px)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                        transformOrigin: 'center',
                                        display: 'flex',
                                        flexDirection: isMobile ? 'column' : 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '1.5rem'
                                    }}
                                >
                                    <div style={{
                                        textAlign: isMobile ? 'center' : 'left',
                                        order: (!isMobile && index % 2 === 1) ? 2 : 1,
                                        flex: 1
                                    }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                                            {feature.title}
                                        </h3>
                                        <p style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, color: theme.textMuted }}>
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div style={{
                                        flexShrink: 0,
                                        width: isMobile ? '5rem' : '6rem',
                                        height: isMobile ? '5rem' : '6rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '9999px',
                                        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                                        order: (!isMobile && index % 2 === 1) ? 1 : 2
                                    }}>
                                        <span style={{ color: theme.accent, filter: 'drop-shadow(0 0 8px rgba(255,0,127,0.5))' }}>
                                            {feature.icon}
                                        </span>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: 70 Days Sprint (EventEngine Style Animation) */}
            <section ref={sectionTwoRef} style={{ padding: '140px 24px', background: theme.bgSecondary, position: 'relative' }}>
                {/* Subtle scanline effect or tech lines */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.3,
                    pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <InboxBadge text="THE 10-WEEK SPRINT" color={theme.accent} />
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 900,
                            color: '#fff',
                            margin: '0 0 24px 0',
                            letterSpacing: '-2px',
                            lineHeight: 1.1
                        }}>From Vision to Market in 70 Days</h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#94A3B8',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: 1.7,
                            fontWeight: 400
                        }}>
                            <span style={{ color: '#fff', fontWeight: 600 }}>Modular platform evolution</span> strategy to go from a <span style={{ color: '#fff', fontWeight: 600 }}>PRD</span> to your <span style={{ color: '#fff', fontWeight: 600 }}>first 20 qualified leads</span>. <span style={{ color: '#fff', fontWeight: 600 }}>No wasted motion.</span>
                        </p>
                    </motion.div>

                    {/* EventEngine Animation Grid: Center stays, sides fan out */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 relative min-h-[auto] md:min-h-[450px]" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem', alignItems: 'center' }}>

                        {/* Card 1: Foundation (Moves from Right/Stack to Left) */}
                        <motion.div
                            variants={isMobile ? mobileRightToLeft : {}}
                            initial={isMobile ? "hidden" : undefined}
                            whileInView={isMobile ? "visible" : undefined}
                            viewport={{ once: false, margin: "-10%" }}
                            className="relative p-8 rounded-3xl border z-20"
                            style={{
                                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                                borderColor: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(12px)',
                                transformOrigin: 'bottom right',
                                ...(isMobile ? { maxWidth: '450px', width: '100%', marginInline: 'auto' } : { x: xLeft, y: yLeft, rotate: rotateLeft, opacity: opacityStack })
                            }}
                        >
                            <div style={{
                                width: '3.5rem', height: '3.5rem', borderRadius: '1rem',
                                background: 'rgba(30, 41, 59, 1)', // Slate-800
                                color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', marginInline: 'auto'
                            }}>
                                <BoxIcon className="w-8 h-8" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center', color: '#fff' }}>Foundation</h3>
                            <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', textAlign: 'center', opacity: 0.6, marginBottom: '1.5rem', letterSpacing: '0.1em', color: theme.textMuted }}>Weeks 1-2</p>

                            <p style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: '2rem', color: theme.textMuted, lineHeight: 1.6 }}>
                                Deep-dive into your market. Define ICP, craft positioning, and establish brand architecture via high-fidelity wireframes.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.5rem', borderTop: `1px solid ${theme.border}` }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.25rem' }}>100%</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.05em' }}>Clarity</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.25rem' }}>MVP</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.05em' }}>Ready in 14d</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: The Build (Center - Scales) */}
                        <motion.div
                            variants={isMobile ? mobileLeftToRight : {}}
                            initial={isMobile ? "hidden" : undefined}
                            whileInView={isMobile ? "visible" : undefined}
                            viewport={{ once: false, margin: "-10%" }}
                            transition={isMobile ? { delay: 0.1 } : undefined}
                            className="relative p-8 rounded-3xl z-30 transform"
                            style={{
                                backgroundColor: 'rgba(30, 41, 59, 0.8)', // Slate-800
                                borderColor: '#be185d', // Pink-700
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                boxShadow: '0 20px 50px -12px rgba(190, 24, 93, 0.25)', // Pink shadow
                                backdropFilter: 'blur(12px)',
                                marginBottom: isMobile ? '20px' : '-3rem', // Spacing fix
                                marginTop: !isMobile ? '-3rem' : '0',
                                ...(isMobile ? { maxWidth: '450px', width: '100%', marginInline: 'auto' } : { opacity: opacityStack, scale: scaleCenter })
                            }}
                        >
                            <div style={{
                                width: '4rem', height: '4rem', borderRadius: '1rem',
                                background: '#ec4899', // Pink-500
                                color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', marginInline: 'auto'
                            }}>
                                <LayersIcon className="w-8 h-8" />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center', color: '#fff' }}>The Build</h3>
                            <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', textAlign: 'center', opacity: 0.8, marginBottom: '1.5rem', letterSpacing: '0.1em', color: theme.accentSecondary }}>Weeks 3-8</p>

                            <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '2rem', color: '#ccc', lineHeight: 1.6 }}>
                                Our engineering lab executes core development of your modular, event-driven platform efficiently.
                            </p>

                            {/* Code Block Style Feature List */}
                            <div style={{
                                borderRadius: '0.5rem', padding: '1rem', fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: 1.8,
                                background: 'rgba(0,0,0,0.4)', color: '#888'
                            }}>
                                <div><span style={{ color: theme.accentSecondary }}>[INIT]</span> AI-Native Core... <span style={{ color: '#fff' }}>OK</span></div>
                                <div><span style={{ color: theme.accentSecondary }}>[SYNC]</span> Microservices</div>
                                <div><span style={{ color: theme.accentSecondary }}>[DEPLOY]</span> Agentic Workflows... <span style={{ color: '#fff' }}>DONE</span></div>
                            </div>
                        </motion.div>

                        {/* Card 3: Ignition (Moves from Left/Stack to Right) */}
                        <motion.div
                            variants={isMobile ? mobileLeftToRight : {}}
                            initial={isMobile ? "hidden" : undefined}
                            whileInView={isMobile ? "visible" : undefined}
                            viewport={{ once: false, margin: "-10%" }}
                            transition={isMobile ? { delay: 0.2 } : undefined}
                            className="relative p-8 rounded-3xl border z-20"
                            style={{
                                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                                borderColor: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(12px)',
                                transformOrigin: 'bottom left',
                                ...(isMobile ? { maxWidth: '450px', width: '100%', marginInline: 'auto' } : { x: xRight, y: yRight, rotate: rotateRight, opacity: opacityStack })
                            }}
                        >
                            <div style={{
                                width: '3.5rem', height: '3.5rem', borderRadius: '1rem',
                                background: 'rgba(30, 41, 59, 1)', // Slate-800
                                color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', marginInline: 'auto'
                            }}>
                                <TargetIcon className="w-8 h-8" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center', color: '#fff' }}>Ignition</h3>
                            <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', textAlign: 'center', opacity: 0.6, marginBottom: '1.5rem', letterSpacing: '0.1em', color: theme.textMuted }}>Weeks 9-10</p>

                            <p style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: '2rem', color: theme.textMuted, lineHeight: 1.6 }}>
                                We don't just deploy; we launch your first GTM campaign and deliver 20 qualified leads.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.5rem', borderTop: `1px solid ${theme.border}` }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.25rem' }}>20</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.05em' }}>Qualified Leads</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.25rem' }}>Day 70</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.05em' }}>Launch</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: Build-Operate-Transfer (DiagnosticCTA Style) */}
            <section style={{ padding: '140px 24px', background: theme.bg }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems: 'center' }}>

                        {/* Left Column: Text & CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <InboxBadge text="BUILD-OPERATE-TRANSFER" color={theme.accent} />
                            <h2 style={{
                                fontSize: 'clamp(32px, 4vw, 48px)',
                                fontWeight: 900,
                                letterSpacing: '-2px',
                                lineHeight: 1.1,
                                marginBottom: '24px',
                                color: '#fff'
                            }}>
                                We Build the Ship.<br />
                                <span style={{ color: theme.accent }}>You Captain It.</span>
                            </h2>
                            <p style={{
                                fontSize: '20px',
                                lineHeight: 1.6,
                                marginBottom: '32px',
                                color: '#94A3B8',
                                fontWeight: 400
                            }}>
                                Unlike agencies that thrive on creating a <span style={{ color: '#fff', fontWeight: 600 }}>"Black Box"</span> of dependency, we <span style={{ color: '#fff', fontWeight: 600 }}>embrace the exit</span>. We architect the system, run it to prove traction, and methodically transfer the knowledge so you attain <span style={{ color: '#fff', fontWeight: 600 }}>Total Sovereignty</span>.
                            </p>

                            <div style={{ // Empty div placeholder removed or just removed entirely in logic
                                display: 'none'
                            }} />

                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 32px',
                                backgroundColor: theme.accent,
                                color: '#fff',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '14px',
                                transition: 'all 0.3s',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: `0 10px 30px -10px ${theme.accent}66`
                            }}
                                className="group hover:scale-105"
                            >
                                Book Architecture Session
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M4 10H16M16 10L10 4M16 10L10 16" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </motion.div>

                        {/* Right Column: Exact InboxApp Style Stack */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '500px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            perspective: '1000px' // Strong perspective for depth
                        }}>
                            {[
                                {
                                    id: 'build',
                                    name: 'Sovereign Engine',
                                    handle: '@core_architecture',
                                    role: 'Systems Architect',
                                    desc: 'Structuring the immutable core.',
                                    stats: ['100% Code', 'Week 2'],
                                    location: 'GCP / Kafka',
                                    color: theme.accent, // Pink
                                    x: -80, // Back Left
                                    z: -100,
                                    scale: 0.85,
                                    zIndex: 10,
                                    opacity: 0.6,
                                    icon: <BoxIcon className="w-6 h-6" />
                                },
                                {
                                    id: 'operate',
                                    name: 'Growth Protocol',
                                    handle: '@market_validation',
                                    role: 'Growth Engine',
                                    desc: 'Validating traction via campaigns.',
                                    stats: ['20 Leads', 'Week 10'],
                                    location: 'Marketplace',
                                    color: theme.accentSecondary, // Green
                                    x: 0, // Middle
                                    z: -50,
                                    scale: 0.92,
                                    zIndex: 20,
                                    opacity: 0.85,
                                    icon: <TargetIcon className="w-6 h-6" />
                                },
                                {
                                    id: 'transfer',
                                    name: 'Total Sovereignty',
                                    handle: '@ip_ownership',
                                    role: 'Asset Owner',
                                    desc: 'Full IP & Source code handover.',
                                    stats: ['100% IP', 'Day 70'],
                                    location: 'Your Server',
                                    color: theme.accentTertiary, // Blue
                                    x: 80, // Front Right
                                    z: 0,
                                    scale: 1,
                                    zIndex: 30,
                                    opacity: 1,
                                    icon: <LayersIcon className="w-6 h-6" />
                                }
                            ].map((card, idx) => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, x: -100, rotateY: 15 }} // Enter from left
                                    whileInView={{
                                        opacity: card.opacity,
                                        x: card.x,
                                        z: card.z,
                                        scale: card.scale,
                                        rotateY: -12, // Slight tilt like reference
                                        rotateX: 5,
                                        transition: {
                                            duration: 0.8,
                                            delay: idx * 0.15,
                                            ease: "easeOut"
                                        }
                                    }}
                                    viewport={{ once: false }}
                                    whileHover={{
                                        scale: card.scale * 1.05,
                                        zIndex: 40,
                                        opacity: 1,
                                        rotateY: 0, // Flatten
                                        rotateX: 0,
                                        boxShadow: `0 30px 60px -15px ${card.color}44`,
                                        transition: { duration: 0.4 }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        zIndex: card.zIndex,
                                        width: '320px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(165deg, rgba(20,20,24,0.95) 0%, rgba(5,5,10,0.95) 100%)', // Premium dark matte
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
                                        backdropFilter: 'blur(10px)',
                                        overflow: 'hidden',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* 1. Top Pattern Background (Tech Scanlines) */}
                                    <div style={{
                                        height: '130px',
                                        background: `linear-gradient(180deg, ${card.color}15 0%, transparent 100%)`,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        {/* Vertical thin lines */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 19px, ${card.color}22 20px)`,
                                            maskImage: 'linear-gradient(to bottom, black, transparent)'
                                        }} />

                                        {/* Avatar Group */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '14px'
                                        }}>
                                            <div style={{
                                                width: '52px',
                                                height: '52px',
                                                borderRadius: '16px',
                                                background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
                                                border: `1px solid ${card.color}44`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: card.color,
                                                boxShadow: `0 8px 16px -4px ${card.color}33`
                                            }}>
                                                {card.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{card.name}</div>
                                                <div style={{ fontSize: '12px', color: card.color, fontFamily: "'IBM Plex Mono', monospace", opacity: 0.9 }}>{card.handle}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. Content Body */}
                                    <div style={{ padding: '24px' }}>
                                        {/* Role/Desc */}
                                        <div style={{ marginBottom: '28px' }}>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{card.role}</div>
                                            <div style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>{card.desc}</div>
                                        </div>

                                        {/* Stats Row */}
                                        <div style={{ display: 'flex', gap: '32px', marginBottom: '28px' }}>
                                            <div>
                                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', fontFamily: "'IBM Plex Mono', monospace" }}>{card.stats[0].split(' ')[0]}</div>
                                                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500, textTransform: 'uppercase' }}>{card.stats[0].split(' ').slice(1).join(' ')}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', fontFamily: "'IBM Plex Mono', monospace" }}>{card.stats[1]}</div>
                                                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500, textTransform: 'uppercase' }}>Timeline</div>
                                            </div>
                                        </div>

                                        {/* Footer / Location */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            <span style={{ fontSize: '12px', color: '#64748B', fontFamily: "'IBM Plex Mono', monospace" }}>{card.location}</span>
                                            <div style={{ flex: 1 }} />
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                            </svg>
                                        </div>
                                    </div>

                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 4: Diagnostic CTA */}
            <section style={{
                padding: '140px 24px',
                background: theme.bgSecondary,
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background blobs */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255, 0, 127, 0.08) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <InboxBadge text="Q1 2026 COHORT" color={theme.accent} />
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 900,
                            color: '#fff',
                            margin: '32px 0',
                            letterSpacing: '-2px',
                        }}>The Venture Architecture Diagnostic</h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#94A3B8',
                            lineHeight: 1.7,
                            marginBottom: '48px',
                            fontWeight: 400
                        }}>
                            We are not a high-volume factory; we are a <span style={{ color: '#fff', fontWeight: 600 }}>high-fidelity laboratory</span> for <span style={{ color: '#fff', fontWeight: 600 }}>high-ticket innovators</span>. We only take on <span style={{ color: '#fff', fontWeight: 600 }}>five partners</span> for our Q1 2026 cohort.
                        </p>

                        <div style={{
                            display: 'inline-flex',
                            gap: '16px',
                            marginBottom: '48px',
                        }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <CohortSlot key={i} index={i} shouldFill={i <= 3} theme={theme} />
                            ))}
                        </div>

                        <p style={{
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '32px',
                            fontWeight: 500,
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            2 spots remaining for Q1 2026
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${theme.accent}88` }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '24px 56px',
                                fontSize: '18px',
                                fontWeight: 700,
                                borderRadius: '100px',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: '#fff',
                                color: '#000',
                            }}
                        >
                            Submit Your Mission Details
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
