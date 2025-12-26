'use client'

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
  const { universe, toggleUniverse } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent
  const accentColor = universe === 'scale' ? '#39FF14' : '#FF007F'

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '100px',
      overflow: 'hidden',
      background: '#FAFAFA',
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
            background: '#fff',
            border: '1px solid #E0E0E0',
            borderRadius: '100px',
            marginBottom: '32px',
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
                color: '#050505',
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
                color: accentColor,
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
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '1px',
            color: universe === 'scale' ? '#39FF14' : '#999',
            transition: 'color 0.3s ease',
          }}>
            UNIVERSE A: SCALE
          </span>
          
          <motion.div 
            onClick={toggleUniverse}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '120px',
              height: '40px',
              background: 'linear-gradient(180deg, #e0e0e0 0%, #f5f5f5 100%)',
              borderRadius: '20px',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #E0E0E0',
            }}
          >
            <motion.div 
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)',
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: '2px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.8)',
              }}
              animate={{ x: universe === 'scale' ? 0 : 80 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
            <div style={{
              position: 'absolute',
              inset: '4px',
              borderRadius: '16px',
              background: 'linear-gradient(90deg, rgba(57, 255, 20, 0.2) 0%, rgba(255, 0, 127, 0.2) 100%)',
            }} />
          </motion.div>

          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '1px',
            color: universe === 'build' ? '#FF007F' : '#999',
            transition: 'color 0.3s ease',
          }}>
            UNIVERSE B: BUILD
          </span>
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
              color: universe === 'scale' ? '#050505' : '#fff',
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
            <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
