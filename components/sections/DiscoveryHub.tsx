'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import { useEffect, useRef } from 'react'

// Animated Counter Component
function AnimatedCounter({ value, isDark }: { value: string, isDark: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  useEffect(() => {
    const match = value.match(/(\d+)(.*)/)
    if (!match || !isInView) return

    const numericValue = parseInt(match[1])
    const suffix = match[2] || ""

    const controls = animate(0, numericValue, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest).toFixed(0) + suffix
        }
      }
    })

    return () => controls.stop()
  }, [value, isInView])

  return <span ref={ref} className={isDark ? 'text-white' : 'text-slate-900'}>0</span>
}

const scaleContent = {
  tag: 'GROUND TRUTH INTELLIGENCE',
  title: 'The Discovery Hub',
  subtitle: 'The Fuel for Your Engine',
  description: 'Stop relying on a single, stagnant database. The Intelous Discovery Hub is a Sovereign Aggregator that queries Apollo, Lusha, Clay, Hunter, and Clearbit simultaneously.',
  stats: [
    {
      value: '200M+',
      label: 'Data Points',
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" // Database
    },
    {
      value: '98%',
      label: 'Accuracy Rate',
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check Circle
    },
    {
      value: '40M',
      label: 'Accounts Globally',
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Globe
    },
  ],
  features: [
    {
      title: 'The Clean Room',
      description: 'Every lead passes through a manual verification gate where human auditors confirm MX records, syntax, and LinkedIn activity.',
    },
    {
      title: 'Multi-Source Authority',
      description: 'We query the world\'s most authoritative databases simultaneously to eliminate the "Single Point of Failure."',
    },
    {
      title: 'Deep Firmographics',
      description: 'We append tech stacks via BuiltWith and funding rounds to fuel hyper-personalization.',
    },
  ]
}

const buildContent = {
  tag: 'AI-NATIVE SOVEREIGNTY',
  title: 'Technical Architecture',
  subtitle: 'Built for Autonomy',
  description: 'We don\'t build "bolted-on" AI; we build AI-Native Sovereignty. Your product is built on a modular, event-driven platform that can adapt to any B2B team\'s workflow.',
  stats: [
    {
      value: '70',
      label: 'Days to Launch',
      icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning/Fast
    },
    {
      value: '20+',
      label: 'First Qualified Leads',
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" // Users
    },
    {
      value: '100%',
      label: 'Ownership Transfer',
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" // Shield
    },
  ],
  features: [
    {
      title: 'Orchestration Layer',
      description: 'Specialized function agents for discovery, prompt selection, and scoring—handling 80% of repetitive labor.',
    },
    {
      title: 'Data Integrity',
      description: 'Every lead is verified and enriched using multi-source logic before entering your campaigns.',
    },
    {
      title: 'Scalability',
      description: 'Decoupled system allows you to scale enrichment and outreach services independently.',
    },
  ]
}

export default function DiscoveryHub() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent
  const isDark = universe === 'build'

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50/50 text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 1. CENTERED HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className={`inline-block text-xs font-mono font-bold tracking-[0.2em] mb-4 uppercase ${isDark ? 'text-pink-400' : 'text-[#FF007F]'}`}
          >
            {content.tag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className={`text-xl md:text-2xl font-light mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            {content.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className={`text-base leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            {content.description}
          </motion.p>
        </div>

        {/* 2. KEY METRICS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {content.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 200 }}
              className={`p-6 rounded-2xl flex items-center gap-5 group cursor-pointer
                ${isDark
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-pink-500/10'
                  : 'bg-white shadow-lg hover:shadow-xl hover:shadow-pink-500/5'
                } transition-all duration-300 relative overflow-hidden`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_-4px_rgba(255,0,127,0.3)] transition-transform group-hover:scale-110 group-hover:rotate-3 border
                 ${isDark ? 'bg-slate-800 border-slate-700 text-[#FF007F]' : 'bg-white border-pink-50 text-[#FF007F]'}`}
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.icon} />
                </svg>
              </div>

              <div>
                <div className={`text-4xl font-black tracking-tight leading-none mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <AnimatedCounter value={stat.value} isDark={isDark} />
                </div>
                <div className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {stat.label}
                </div>
              </div>
              <div className={`absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${isDark ? 'bg-pink-500' : 'bg-purple-500'}`} />
            </motion.div>
          ))}
        </div>

        {/* 3. SPLIT CONTENT: FEATURES (Left) & TERMINAL (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Features List - Left Side Animation (Corrected Stagger) */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {content.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 50,
                      damping: 20
                    }
                  }
                }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex gap-5 group items-start
                  ${isDark
                    ? 'bg-slate-800/40 border-white/5 hover:bg-slate-800 hover:border-pink-500/20 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/5 hover:border-pink-50'
                  }`}
              >
                {/* Feature Bullet Point REMOVED per user request */}

                <div>
                  <h4 className={`text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h4>
                  <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Terminal Window - Ultra Smooth Drop Down */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1] // "Apple-style" Soft Settle Bezier
            }}
            className="relative"
          >
            {/* Glow Behind Terminal */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl opacity-50" />

            <div className="rounded-2xl overflow-hidden bg-[#0F172A] shadow-2xl border border-slate-700/50 font-mono text-sm relative z-10 h-[380px]">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-6 py-4 bg-[#1E293B]/80 backdrop-blur-sm border-b border-slate-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 text-xs text-slate-500 font-bold tracking-wider opacity-75">discovery_hub.log</div>
              </div>

              {/* Terminal Body with Typewriter Effect */}
              <div className="p-6 text-slate-300 font-mono text-xs md:text-sm leading-relaxed overflow-hidden relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]/90 pointer-events-none z-10" />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-50px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.8 } }
                  }}
                >
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="text-slate-500">[09:42:31]</span> <span className="text-blue-400">[SYNC]</span> Querying Apollo, Lusha, Clay...
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="text-slate-500">[09:42:33]</span> <span className="text-green-400">[OK]</span> 2,847 raw records found
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="text-slate-500">[09:42:35]</span> <span className="text-yellow-400">[CLEAN]</span> Manual verification gate...
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="text-slate-500">[09:42:41]</span> <span className="text-green-400">[DONE]</span> 2,789 verified (98.0%)
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="text-slate-500">[09:42:42]</span> <span className="text-purple-400">[ENRICH]</span> Appending firmographics...
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="border-l-2 border-pink-500 pl-3 ml-1 my-3 py-1 bg-white/5 rounded-r">
                    <span className="text-slate-500 block text-[10px] mb-0.5">PAYLOAD EXTRACTED:</span>
                    <span className="text-pink-300 font-bold">{`{ tech_stack: ["HubSpot"], funding: "Series B" }`}</span>
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="text-slate-500">[09:42:44]</span> <span className="text-green-400">[READY]</span> Pipeline deployed
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-slate-500 animate-pulse mt-2">
                    <span className="inline-block w-2 h-4 bg-pink-500 align-middle"></span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
