'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import { useEffect, useRef, useState } from 'react'

const content = {
  tag: 'Q1 2026 COHORT',
  title: 'The Cohort of Sovereignty',
  description: 'We are not a high-volume factory; we are a high-fidelity laboratory. We are hand-selecting only 5 partners for our Q1 2026 cohort to ensure our human strategists can maintain 10/10 oversight on every pod.',
  cta: 'Submit Your Diagnostic',
  reward: 'Receive a custom GTM Strategy Preview based on your own data within 24 hours of submission.',
}

function AnimatedCounter({ to }: { to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: false, margin: "-20%" })
  const springValue = useSpring(0, { stiffness: 50, damping: 20, duration: 1 }) // Slower, chat-type feel
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

export default function DiagnosticCTA() {
  const { universe } = useUniverse()
  const isDark = universe === 'build'

  return (
    <section className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900 text-white' : 'bg-[#FAFAFA] text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text & Form CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={`inline-block text-xs font-bold tracking-[0.15em] mb-4 uppercase text-[#FF007F]`}>
              {content.tag}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 max-w-lg">
              {content.description}
            </p>

            <div className={`flex items-start gap-4 p-5 rounded-xl mb-10 bg-[#FFF5E6] border border-[#FFE0B2]`}>
              <div className="text-2xl mt-1">🎁</div>
              <p className="text-sm leading-relaxed text-slate-700 font-medium">
                {content.reward}
              </p>
            </div>

            <button className="group flex items-center gap-3 px-8 py-4 bg-[#0F172A] text-white rounded-lg font-bold text-sm transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
              {content.cta}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M4 10H16M16 10L10 4M16 10L10 16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>

          {/* Right Column: Visual Card */}
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-xl">
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

                {/* Visual: Circular Progress */}
                <div className="relative w-40 h-40 flex-shrink-0 flex flex-col items-center justify-center">
                  {/* SVG Circle */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Track */}
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#F1F5F9"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Indicator segment (approx 2/5 = 40%) */}
                      <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#00C48C"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="440"
                        strokeDashoffset="440"
                        initial={{ strokeDashoffset: 440 }}
                        strokeLinecap="round"
                        whileInView={{ strokeDashoffset: 440 - (440 * 0.4) }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                  </div>

                  {/* Inner Content */}
                  <div className="text-center z-10">
                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Available</div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-black text-slate-900 tracking-tighter">
                        <AnimatedCounter to={2} />
                      </span>
                      <span className="text-2xl text-slate-300 font-medium">/5</span>
                    </div>
                  </div>

                  {/* Pill Tag */}
                  <div className="absolute -bottom-4 bg-slate-100 text-[10px] font-bold text-slate-500 py-1.5 px-3 rounded-full">
                    Q1 2026 Cohort
                  </div>
                </div>

                {/* Visual: Partner List */}
                <div className="w-full space-y-3">
                  {[
                    { name: 'Partner 1', filled: true },
                    { name: 'Partner 2', filled: true },
                    { name: 'Partner 3', filled: true },
                    { name: 'Your Slot', filled: false, match: true },
                    { name: 'Reserved', filled: false },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      className={`flex items-center justify-between p-3 rounded-lg text-xs md:text-sm font-medium
                        ${item.match
                          ? 'bg-[#E6FFFA] border border-[#B2F5EA] text-slate-900'
                          : item.filled ? 'text-slate-400' : 'bg-[#F0FDF4] border border-transparent text-slate-500'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.filled ? 'bg-slate-300' : 'bg-[#00C48C] animate-pulse'}`} />
                        <span>{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider
                        ${item.filled ? 'text-slate-300' : 'text-[#00C48C]'}
                      `}>
                        {item.filled ? 'FILLED' : 'OPEN'}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
