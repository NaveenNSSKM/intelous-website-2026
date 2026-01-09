'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'

// Icons as inline components to avoid external dependency issues
const UserCheck = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
)

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const BrainCircuit = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
    <path d="M12 18v6" />
    <path d="M12 5V0" />
    <path d="M22 2c-4 1.5-6 6.5-6 6.5" />
    <path d="M16 22c-2-1.5-2-4-2-4" />
    <path d="M16 13a4 4 0 1 1 5.923-2.617A4 4 0 0 1 16 13Z" />
  </svg>
)

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

const scaleContent = {
  tag: 'THE HUMAN SIGNATURE',
  title: 'The Crisis of Trust',
  description: 'The B2B market is exhausted by robotic, "black box" automation that burns domain reputations. At Intelous, we solve the Trust Crisis by putting a Human Strategist at the dead-center of every campaign.',
  features: [
    {
      title: "Human-in-the-Loop",
      description: 'Every "Specialized Digital Worker" we deploy is governed by a human signature to ensure your brand never "hallucinates."',
      icon: <UserCheck className="w-8 h-8 text-[#FF007F]" />
    },
    {
      title: "The Human Moat",
      description: "We build the protective barrier that keeps your business from being commoditized in a world of deepfakes.",
      icon: <ShieldCheck className="w-8 h-8 text-[#FF007F]" />
    },
    {
      title: "Strategic Empathy",
      description: "We replace repetitive manual work with intelligent systems that think like human strategists—but never fly solo.",
      icon: <BrainCircuit className="w-8 h-8 text-[#FF007F]" />
    }
  ]
}

const buildContent = {
  tag: 'THE EXECUTION GAP',
  title: 'Why Ventures Fail',
  description: 'You cannot afford to lose six months to a bloated development agency, and you cannot risk your future on disconnected freelancers who don\'t understand your GTM logic.',
  features: [
    {
      title: 'Speed to Market',
      description: 'We move at the speed of your ambition—from PRD to first 20 qualified leads in exactly 70 days.',
      icon: <Zap className="w-8 h-8 text-[#007BFF]" />
    },
    {
      title: 'Sovereign Systems',
      description: 'We don\'t just "build apps"; we architect sovereign systems designed for non-linear agentic expansion.',
      icon: <AppWindow className="w-8 h-8 text-[#007BFF]" />
    },
    {
      title: 'Build-Operate-Transfer',
      description: 'We embrace the exit. Our goal is your total sovereignty—you own the ship we built.',
      icon: <Rocket className="w-8 h-8 text-[#007BFF]" />
    }
  ]
}

export default function TrustCrisis() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent
  const isDark = universe === 'build'

  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    // Increased breakpoint to 1024px to ensure tablets also get the safe "inside frame" layout
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className={`pt-32 pb-24 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-[#FAFAFA] text-slate-900'}`}>

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${isDark ? 'from-purple-900/20 to-transparent' : 'from-pink-100/40 to-transparent'} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={`inline-block text-xs font-mono font-bold tracking-[0.2em] mb-6 uppercase ${isDark ? 'text-pink-400' : 'text-[#FF007F]'}`}>
            {content.tag}
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[0.95]">
            {content.title}
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {content.description}
          </p>
        </motion.div>

        {/* Benefits Stack */}
        <div className="flex flex-col items-center relative gap-4 perspective-1000 mt-12 min-h-[500px]">
          {content.features.map((feature, index) => {
            // Responsive Zigzag: Mobile = Vertical Stack, Desktop = Fanned Zigzag
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
                viewport={{ once: false, amount: 0.4 }} // trigger repeatedly on scroll
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1], // Custom easeOutQuint-ish for snappy arrival
                  delay: index * 0.15,
                }}
                whileHover={{
                  zIndex: 50,
                  scale: 1.03, // Subtle "smooth" reaction
                  transition: { duration: 0.3, ease: "easeOut" } // Ensures the reaction is smooth
                }}
                className={`
                  w-full max-w-2xl p-5 md:p-6 
                  flex flex-col md:flex-row items-center justify-between gap-6
                  rounded-[2.5rem] border backdrop-blur-xl shadow-2xl origin-center
                  ${isDark
                    ? 'bg-[#0F172A]/90 border-white/5 shadow-black/50'
                    : 'bg-white/90 border-slate-100/50 shadow-lg shadow-slate-200/40'
                  }
                `}
                style={{ zIndex: 10 - index }}
              >
                <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {feature.description}
                  </p>
                </div>

                <div className={`
                  flex-shrink-0 w-20 h-20 md:w-24 md:h-24
                  flex items-center justify-center rounded-full transition-all duration-500
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  ${isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                    : 'bg-white border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]'
                  }
                  ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}
                  group-hover:scale-105
                `}>
                  <span className="filter drop-shadow-sm">{feature.icon}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
