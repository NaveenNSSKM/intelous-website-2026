import { motion } from 'framer-motion'

interface HeroProps {
  universe: 'scale' | 'build'
  setUniverse: (universe: 'scale' | 'build') => void
}

export default function Hero({ universe, setUniverse }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="badge-dot" />
            <span>UNIVERSE B: BUILD</span>
          </motion.div>

          <h1 className="hero-headline">
            <span className="headline-line">THE ANTI-FAILURE</span>
            <span className="headline-line highlight">VENTURE PARTNER.</span>
          </h1>

          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We close the <span className="execution-gap">Execution Gap</span> in 10 weeks. 
            From strategic PRD to your first 20 qualified leads—we build and operate 
            until you're ready to captain the ship.
          </motion.p>

          <motion.div
            className="toggle-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="toggle-wrapper">
              <span className={`toggle-label ${universe === 'scale' ? 'active' : ''}`}>
                UNIVERSE A: SCALE
              </span>
              
              <motion.div 
                className="toggle-switch-3d"
                onClick={() => setUniverse(universe === 'scale' ? 'build' : 'scale')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="toggle-track-3d">
                  <motion.div 
                    className="toggle-thumb-3d"
                    animate={{ 
                      x: universe === 'scale' ? 0 : 80,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                  <div className="toggle-track-inner" />
                </div>
              </motion.div>

              <span className={`toggle-label ${universe === 'build' ? 'active-green' : ''}`}>
                UNIVERSE B: BUILD
              </span>
            </div>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-decorations">
        <div className="decoration-line line-1" />
        <div className="decoration-line line-2" />
        <div className="decoration-corner corner-tl" />
        <div className="decoration-corner corner-br" />
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 100px;
          overflow: hidden;
          background: var(--architectural-white);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(57, 255, 20, 0.1);
          border: 1px solid rgba(57, 255, 20, 0.3);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 32px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--obsidian);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--system-green);
          border-radius: 50%;
          animation: pulse-green 2s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(57, 255, 20, 0.7); }
          50% { box-shadow: 0 0 0 8px rgba(57, 255, 20, 0); }
        }

        .hero-headline {
          font-size: clamp(48px, 10vw, 100px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 32px;
          color: var(--obsidian);
        }

        .headline-line {
          display: block;
        }

        .highlight {
          color: var(--strategy-pink);
        }

        .hero-subheadline {
          font-size: clamp(18px, 2.5vw, 22px);
          color: var(--gray-medium);
          max-width: 650px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }

        .execution-gap {
          color: var(--strategy-pink);
          font-weight: 600;
          border-bottom: 2px solid var(--strategy-pink);
        }

        .toggle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          margin-bottom: 60px;
        }

        .toggle-wrapper {
          display: flex;
          align-items: center;
          gap: 24px;
          background: var(--white);
          padding: 16px 32px;
          border-radius: 100px;
          border: 2px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .toggle-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--gray-light);
          transition: all 0.3s ease;
        }

        .toggle-label.active {
          color: var(--strategy-pink);
        }

        .toggle-label.active-green {
          color: var(--system-green);
          text-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
        }

        .toggle-switch-3d {
          cursor: pointer;
          perspective: 200px;
        }

        .toggle-track-3d {
          width: 120px;
          height: 48px;
          background: linear-gradient(145deg, #e8e8e8, #ffffff);
          border-radius: 30px;
          position: relative;
          box-shadow: 
            inset 0 4px 8px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.05),
            0 0 0 2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .toggle-track-inner {
          position: absolute;
          inset: 4px;
          background: linear-gradient(145deg, #f5f5f5, #e0e0e0);
          border-radius: 26px;
        }

        .toggle-thumb-3d {
          width: 40px;
          height: 40px;
          background: linear-gradient(145deg, var(--system-green), #2dd912);
          border-radius: 50%;
          position: absolute;
          top: 4px;
          left: 4px;
          z-index: 2;
          box-shadow: 
            0 4px 15px rgba(57, 255, 20, 0.5),
            0 2px 5px rgba(0, 0, 0, 0.2),
            inset 0 2px 3px rgba(255, 255, 255, 0.3);
        }

        .scroll-indicator {
          color: var(--gray-light);
        }

        .hero-decorations {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .decoration-line {
          position: absolute;
          background: var(--strategy-pink);
          opacity: 0.1;
        }

        .line-1 {
          width: 1px;
          height: 200px;
          top: 15%;
          left: 10%;
        }

        .line-2 {
          width: 200px;
          height: 1px;
          bottom: 20%;
          right: 10%;
        }

        .decoration-corner {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(255, 0, 127, 0.1);
        }

        .corner-tl {
          top: 15%;
          left: 5%;
          border-right: none;
          border-bottom: none;
        }

        .corner-br {
          bottom: 15%;
          right: 5%;
          border-left: none;
          border-top: none;
        }

        @media (max-width: 768px) {
          .hero-headline {
            letter-spacing: -1px;
          }

          .toggle-wrapper {
            flex-direction: column;
            gap: 16px;
            padding: 20px 24px;
            border-radius: 20px;
          }

          .toggle-label {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  )
}
