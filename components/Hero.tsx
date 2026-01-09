'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'

const scaleContent = {
  tag: 'UNIVERSE A: SCALE',
  headline: ['SPECIALIZED DIGITAL WORKERS.'],
  highlightLine: 'VERIFIED OUTCOMES.',
  subheadline: 'Stop hiring "heads" and hoping for a miracle. The era of the bloated SDR agency and the complex "Black Box" AI is over. We pair 200M+ data points with expert human strategists to build the GTM team you wish you could hire.',
  ctaPrimary: 'Deploy Your Sovereign GTM Pod',
  ctaSecondary: 'Watch the Engine Run',
}

const buildContent = {
  tag: 'UNIVERSE B: BUILD',
  headline: ['THE ANTI-FAILURE'],
  highlightLine: 'VENTURE PARTNER.',
  subheadline: 'We close the Execution Gap in 10 weeks. From strategic PRD to your first 20 qualified leads—we build and operate until you\'re ready to captain the ship.',
  ctaPrimary: 'Initiate Your 10-Week Sprint',
  ctaSecondary: 'View the Build Logs',
}

// Icon Data
const scaleIcons = [
  { path: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3 3a2.2 2.2 0 0 0 .09 2.91c.84.79 2.13.8 2.91.09 1.5-1.26 2-5 2-5s-3.74.5-5 2zM14.8 9.7a2 2 0 0 0 2.83 0l.56-.57a2 2 0 0 0-2.83-2.83l-.57.56a2 2 0 0 0 0 2.84zM22 2l-2.73 7.25c-.23.62-.35 1.28-.35 1.95a7 7 0 0 1-7 7c-.67 0-1.33-.12-1.95-.35L2.75 14.8M10 22l7.25-2.75c.62-.23 1.28-.35 1.95-.35a7 7 0 0 0 7-7c0-.67-.12-1.33-.35-1.95L22 10", label: "Speed" }, // Rocket/Speed (custom hybrid)
  { path: "M12 2v8M12 14v8M2 12h8M14 12h8", label: "Integrate" }, // Plus/Crosshair
  { path: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z", label: "Global" }, // Moon/Global
  { path: "M21 12a9 9 0 1 1-6.219-8.56", label: "AI Core" }, // Activity/Pulse
]

const buildIcons = [
  { path: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", label: "Build" }, // Hammer/Wrench
  { path: "M2 12h5M17 12h5M12 2v5M12 17v5M12 12m-7 0a7 7 0 1 1 14 0a7 7 0 1 1-14 0", label: "Target" },
  { path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Secure" }, // Shield
  { path: "M4 17l6-6-6-6M12 19h8", label: "Code" }, // Terminal
]

export default function Hero() {
  const { universe, setUniverse } = useUniverse()
  const [hoveredUniverse, setHoveredUniverse] = useState<string | null>(null)
  const activeTab = hoveredUniverse || universe
  const content = universe === 'scale' ? scaleContent : buildContent
  const accentColor = universe === 'scale' ? '#FF007F' : '#FF007F'
  const isDark = universe === 'build'

  const currentIcons = universe === 'scale' ? scaleIcons : buildIcons

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">

      {/* DYNAMIC BACKGROUND */}
      {/* DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isDark ? (
          // Dark Mode: Deep Nebula Effect
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[#020617]"
          >
            <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen" />
          </motion.div>
        ) : (
          // Light Mode: "Circle Type" Centered Concentric Glows
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white"
          >
            {/* Outer Blue Circle */}
            <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-400/10 rounded-full blur-[120px]" />

            {/* Mid Purple Circle */}
            <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/15 rounded-full blur-[100px]" />

            {/* Center Pink Circle (The "Sun") */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[80px]" />
          </motion.div>
        )}

        {/* Grain Overlay */}
        <div className={`absolute inset-0 opacity-[0.03] ${isDark ? 'bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100' : 'bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-50'}`} />
      </div>

      <div className="relative z-10 max-w-[1240px] px-6 text-center">

        {/* HEADLINE AREA with GLASS CARD WRAPPER */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={universe}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              {content.headline.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ filter: 'blur(10px)', opacity: 0, scale: 1.05 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
                    // REDUCED TEXT SIZE
                    className={`text-[clamp(24px,4vw,48px)] font-black leading-[1.0] tracking-[-0.03em] ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}

              <div className="overflow-hidden mt-1">
                <motion.h1
                  initial={{ filter: 'blur(10px)', opacity: 0, scale: 1.05 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  // REDUCED TEXT SIZE
                  className="text-[clamp(24px,4vw,48px)] font-black leading-[1.0] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#7928CA] to-[#FF0080]"
                >
                  {content.highlightLine}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className={`mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
              >
                {content.subheadline}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* TOGGLE PILL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-10 inline-flex"
          >
            <div className={`p-1.5 rounded-full border backdrop-blur-md inline-flex relative gap-2 transition-colors duration-500 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-black/5 shadow-sm'}`}>
              <button
                onClick={() => setUniverse('scale')}
                onMouseEnter={() => setHoveredUniverse('scale')}
                onMouseLeave={() => setHoveredUniverse(null)}
                className={`relative px-8 py-3 rounded-full text-sm font-mono font-bold transition-all duration-300 z-10 ${activeTab === 'scale' ? 'text-white' : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-black')}`}
              >
                {activeTab === 'scale' && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#FF007F] rounded-full -z-10 shadow-lg shadow-[#FF007F]/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                intelous.ai
              </button>

              <button
                onClick={() => setUniverse('build')}
                onMouseEnter={() => setHoveredUniverse('build')}
                onMouseLeave={() => setHoveredUniverse(null)}
                className={`relative px-8 py-3 rounded-full text-sm font-mono font-bold transition-all duration-300 z-10 ${activeTab === 'build' ? 'text-white' : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-black')}`}
              >
                {activeTab === 'build' && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#FF007F] rounded-full -z-10 shadow-lg shadow-[#FF007F]/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                intelouslabs
              </button>
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl text-sm font-bold text-white shadow-xl shadow-[#FF007F]/20 transition-all"
              style={{ backgroundColor: accentColor }}
            >
              {content.ctaPrimary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-4 rounded-xl text-sm font-bold border transition-all ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-600'}`}
            >
              {content.ctaSecondary}
            </motion.button>
          </motion.div>

        </div> {/* Close Glass Card */}



      </div>
    </section>
  )
}
