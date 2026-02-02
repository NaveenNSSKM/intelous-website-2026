'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import { useRef, useState, useEffect } from 'react'

export default function EventEngine() {
  const { universe } = useUniverse()
  const isDark = universe === 'build'

  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Treat Tablet (<1024px) as Mobile for animation purposes to prevent stacking overlaps
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize() // Check on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll-Linked Animations (Desktop/Tablet)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center 60%"]
  })

  // Global Scroll for Butterfly Synchronization
  const { scrollYProgress: scrollGlobal } = useScroll()

  // Butterfly triggers: 
  // Hook (Middle): ~0.5
  // Experience (Right): ~0.65

  const hookIconScale = useTransform(scrollGlobal, [0.48, 0.5, 0.52], [1, 1.25, 1])
  const hookIconGlow = useTransform(scrollGlobal, [0.48, 0.5, 0.52], ["0px 0px 0px rgba(236, 72, 153, 0)", "0px 0px 20px rgba(236, 72, 153, 0.6)", "0px 0px 0px rgba(236, 72, 153, 0)"])

  const expIconScale = useTransform(scrollGlobal, [0.63, 0.65, 0.67], [1, 1.25, 1])
  const expIconGlow = useTransform(scrollGlobal, [0.63, 0.65, 0.67], ["0px 0px 0px rgba(236, 72, 153, 0)", "0px 0px 20px rgba(236, 72, 153, 0.6)", "0px 0px 0px rgba(236, 72, 153, 0)"])


  // Desktop Animation: "Vertical Stack" -> "Horizontal Grid"
  const scaleCenter = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  const xLeft = useTransform(scrollYProgress, [0, 1], ["105%", "0%"])
  const yLeft = useTransform(scrollYProgress, [0, 1], [-25, 0])
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [-5, 0])

  const xRight = useTransform(scrollYProgress, [0, 1], ["-105%", "0%"])
  const yRight = useTransform(scrollYProgress, [0, 1], [-50, 0])
  const rotateRight = useTransform(scrollYProgress, [0, 1], [5, 0])

  const opacityStack = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Mobile Specific Directional Variants
  const mobileRightToLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const mobileLeftToRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section ref={containerRef} className={`py-16 md:py-24 lg:py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900 text-white' : 'bg-[#FAFAFA] text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-[90%] md:max-w-3xl mb-12 md:mb-16 lg:mb-24 mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <span className={`inline-block text-xs font-mono font-bold tracking-[0.2em] mb-4 md:mb-6 uppercase ${isDark ? 'text-pink-400' : 'text-[#FF007F]'}`}>
            USE CASE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 md:mb-6 leading-tight">
            The High-Fidelity Event Engine
          </h2>
          <p className="font-mono text-xs md:text-sm tracking-widest uppercase opacity-60 mb-6">
            Intelous Logic meets BYX Aesthetic
          </p>
          <p className={`text-lg md:text-base lg:text-xl leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Events are the ultimate high-stakes GTM channel, yet most promotion feels like an
            automated afterthought. We architect a cinematic attendance engine that dominates the noise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-10 relative min-h-[auto] md:min-h-[350px] lg:min-h-[400px]">

          {/* Connecting Line (Desktop Only) */}
          <div className={`hidden md:block absolute top-[28px] left-[16%] right-[16%] h-0.5 z-0 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

          {/* Card 1: The Push (Mobile: Right To Left) */}
          <motion.div
            style={!isMobile ? { x: xLeft, y: yLeft, rotate: rotateLeft, opacity: opacityStack } : {}}
            variants={isMobile ? mobileRightToLeft : {}}
            initial={isMobile ? "hidden" : undefined}
            whileInView={isMobile ? "visible" : undefined}
            viewport={{ once: false, margin: "-10%" }}
            className={`relative p-6 md:p-5 lg:p-8 rounded-3xl border backdrop-blur-sm z-20 origin-bottom-right
              ${isDark
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
              }
            `}
          >
            <div className={`w-12 h-12 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-4 lg:mb-8 mx-auto
              ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}
            `}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12L18 8M22 12L18 16M22 12H10M16 21.8C14.7 22.6 13.1 23 11.5 23C5.7 23 1 18.3 1 12.5S5.7 2 11.5 2C13.1 2 14.7 2.4 16 3.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-xl md:text-lg lg:text-2xl font-bold mb-2 text-center">The Push</h3>
            <p className="text-xs font-mono uppercase text-center opacity-60 mb-6 md:mb-4 lg:mb-6 tracking-widest">Intelous Logic</p>

            <p className={`text-sm md:text-xs lg:text-sm leading-relaxed text-center mb-8 md:mb-6 lg:mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our Discovery Hub identifies high-value VIPs based on intent signals, while Managed
              Pods execute hyper-personalized multi-channel outreach.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100/10">
              <div className="text-center">
                <div className={`text-xl md:text-lg lg:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>200M+</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Intent Signals</div>
              </div>
              <div className="text-center">
                <div className={`text-xl md:text-lg lg:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>98%</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">VIP Accuracy</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: The Hook (Mobile: Left To Right) */}
          <motion.div
            style={!isMobile ? { opacity: opacityStack, scale: scaleCenter } : {}}
            variants={isMobile ? mobileLeftToRight : {}}
            initial={isMobile ? "hidden" : undefined}
            whileInView={isMobile ? "visible" : undefined}
            viewport={{ once: false, margin: "-10%" }}
            transition={isMobile ? { delay: 0.1 } : undefined}
            className={`relative p-6 md:p-5 lg:p-8 rounded-3xl border backdrop-blur-sm z-30 transform md:-translate-y-8 lg:-translate-y-12
              ${isDark
                ? 'bg-slate-800/80 border-slate-700 ring-1 ring-pink-500/20 shadow-2xl shadow-pink-900/10'
                : 'bg-white border-pink-100 ring-1 ring-pink-100 shadow-2xl shadow-pink-500/10'
              }
            `}
          >
            <motion.div
              style={!isMobile ? { scale: hookIconScale, boxShadow: hookIconGlow } : {}}
              className={`w-12 h-12 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-4 lg:mb-8 mx-auto
              ${isDark ? 'bg-pink-500 text-white' : 'bg-pink-50 text-pink-600'}
            `}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M10 8L16 12L10 16V8Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <h3 className="text-xl md:text-lg lg:text-2xl font-bold mb-2 text-center">The Hook</h3>
            <p className="text-xs font-mono uppercase text-center opacity-60 mb-6 md:mb-4 lg:mb-6 tracking-widest">BYX Aesthetic</p>

            <p className={`text-sm md:text-xs lg:text-sm leading-relaxed text-center mb-8 md:mb-6 lg:mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              We produce 3D anamorphic "Invitation Trailers" and personalized video messages
              for VIPs to ensure 10/10 registration rates.
            </p>

            <div className={`rounded-lg p-4 font-mono text-[10px] leading-relaxed
              ${isDark ? 'bg-black/50 text-slate-400' : 'bg-slate-900 text-slate-300'}
            `}>
              <div><span className="text-blue-400">[LOAD]</span> 4K Texture Map... <span className="text-green-400">OK</span></div>
              <div><span className="text-blue-400">[SYNC]</span> Human Vision Script</div>
              <div><span className="text-blue-400">[RNDR]</span> Ray-tracing... <span className="text-green-400">DONE</span></div>
            </div>
          </motion.div>

          {/* Card 3: The Experience (Mobile: Left To Right) */}
          <motion.div
            style={!isMobile ? { x: xRight, y: yRight, rotate: rotateRight, opacity: opacityStack } : {}}
            variants={isMobile ? mobileLeftToRight : {}}
            initial={isMobile ? "hidden" : undefined}
            whileInView={isMobile ? "visible" : undefined}
            viewport={{ once: false, margin: "-10%" }}
            transition={isMobile ? { delay: 0.2 } : undefined}
            className={`relative p-6 md:p-5 lg:p-8 rounded-3xl border backdrop-blur-sm z-10 origin-bottom-left
              ${isDark
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
              }
            `}
          >
            <motion.div
              style={!isMobile ? { scale: expIconScale, boxShadow: expIconGlow } : {}}
              className={`w-12 h-12 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-4 lg:mb-8 mx-auto
              ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}
            `}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <h3 className="text-xl md:text-lg lg:text-2xl font-bold mb-2 text-center">The Experience</h3>
            <p className="text-xs font-mono uppercase text-center opacity-60 mb-6 md:mb-4 lg:mb-6 tracking-widest">On-Site Impact</p>

            <p className={`text-sm md:text-xs lg:text-sm leading-relaxed text-center mb-8 md:mb-6 lg:mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              We deploy 3D holographic displays and cinematic product showreels that anchor
              the experience and drive demo bookings.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100/10">
              <div className="text-center">
                <div className={`text-xl md:text-lg lg:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>10/10</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Reg Rate</div>
              </div>
              <div className="text-center">
                <div className={`text-xl md:text-lg lg:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>3x</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Demo ROI</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
