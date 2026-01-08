'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'

const scaleContent = {
  tag: 'UNIVERSE A: SCALE',
  headline: ['SPECIALIZED DIGITAL', 'WORKERS.'],
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

export default function Hero() {
  const { universe, setUniverse } = useUniverse()
  const [hoveredUniverse, setHoveredUniverse] = useState<string | null>(null)
  const activeTab = hoveredUniverse || universe
  const content = universe === 'scale' ? scaleContent : buildContent
  const accentColor = universe === 'scale' ? '#FF007F' : '#FF007F'
  const isDark = universe === 'build'

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '100px',
      overflow: 'hidden',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '1200px',
        padding: '0 24px',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            color: '#666',
            padding: '10px 20px',
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : '#fff',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E0E0E0',
            borderRadius: '100px',
            marginBottom: '32px',
            backdropFilter: isDark ? 'blur(10px)' : 'none',
          }}
        >
          <motion.span
            animate={{ backgroundColor: accentColor }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: accentColor,
            }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={content.tag}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              style={{ color: isDark ? '#cbd5e1' : '#666' }}
            >
              {content.tag}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={universe}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {content.headline.map((line, i) => (
              <h1 key={i} style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: 900,
                color: isDark ? '#FFFFFF' : '#050505',
                marginBottom: i === content.headline.length - 1 ? '0' : '0',
                lineHeight: 1.1,
                letterSpacing: '-2px',
              }}>
                {line}
              </h1>
            ))}

            <motion.h1
              style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: 900,
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                marginBottom: '24px',
                lineHeight: 1.1,
                letterSpacing: '-2px',
              }}
            >
              {content.highlightLine}
            </motion.h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              {content.subheadline}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            onMouseLeave={() => setHoveredUniverse(null)}
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : '#fff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E0E0E0',
              borderRadius: '100px',
              padding: '8px',
              display: 'inline-flex',
              position: 'relative',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
          >
            <button
              onClick={() => setUniverse('scale')}
              onMouseEnter={() => setHoveredUniverse('scale')}
              style={{
                width: '160px',
                padding: '16px 0',
                borderRadius: '100px',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'scale' ? '#fff' : (isDark ? '#cbd5e1' : '#666'),
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'IBM Plex Mono', monospace",
                cursor: 'pointer',
                position: 'relative',
                zIndex: 2,
                transition: 'color 0.2s ease',
                outline: 'none',
              }}
            >
              {activeTab === 'scale' && (
                <motion.div
                  layoutId="activePill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#FF007F',
                    borderRadius: '100px',
                    zIndex: -1,
                    boxShadow: '0 4px 12px rgba(255, 0, 127, 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              intelous.ai
            </button>

            <button
              onClick={() => setUniverse('build')}
              onMouseEnter={() => setHoveredUniverse('build')}
              style={{
                width: '160px',
                padding: '16px 0',
                borderRadius: '100px',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'build' ? '#fff' : (isDark ? '#cbd5e1' : '#666'),
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'IBM Plex Mono', monospace",
                cursor: 'pointer',
                position: 'relative',
                zIndex: 2,
                transition: 'color 0.2s ease',
                outline: 'none',
              }}
            >
              {activeTab === 'build' && (
                <motion.div
                  layoutId="activePill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#FF007F',
                    borderRadius: '100px',
                    zIndex: -1,
                    boxShadow: '0 4px 12px rgba(255, 0, 127, 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              intelouslabs
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: accentColor,
              color: '#ffffff',
              transition: 'background-color 0.3s ease',
            }}
          >
            {content.ctaPrimary}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#666',
              background: 'transparent',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {content.ctaSecondary}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ marginTop: '60px', color: '#999' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            position: 'absolute',
            width: '1px',
            height: '200px',
            left: '10%',
            top: '20%',
            background: accentColor,
            opacity: 0.15,
            transformOrigin: 'top',
          }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            position: 'absolute',
            width: '1px',
            height: '150px',
            right: '15%',
            bottom: '25%',
            background: accentColor,
            opacity: 0.15,
            transformOrigin: 'bottom',
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            top: '15%',
            left: '5%',
            borderTop: `1px solid ${accentColor}`,
            borderLeft: `1px solid ${accentColor}`,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            bottom: '20%',
            right: '8%',
            borderBottom: `1px solid ${accentColor}`,
            borderRight: `1px solid ${accentColor}`,
          }}
        />
      </div>
    </section>
  )
}
