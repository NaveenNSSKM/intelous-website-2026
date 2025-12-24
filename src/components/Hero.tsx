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
          <h1 className="hero-headline">
            <span className="headline-line">SPECIALIZED DIGITAL</span>
            <span className="headline-line highlight">WORKERS.</span>
            <span className="headline-line">VERIFIED</span>
            <span className="headline-line highlight-blue">OUTCOMES.</span>
          </h1>

          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Pairing <span className="data-highlight">200M+ verified data points</span> with 
            expert human oversight to deliver pipeline that actually converts.
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
                className="toggle-switch"
                onClick={() => setUniverse(universe === 'scale' ? 'build' : 'scale')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="toggle-track">
                  <motion.div 
                    className="toggle-thumb"
                    animate={{ 
                      x: universe === 'scale' ? 0 : 60,
                      backgroundColor: universe === 'scale' ? '#39FF14' : '#007BFF'
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                  <div className="toggle-glow" style={{ 
                    background: universe === 'scale' 
                      ? 'radial-gradient(circle, rgba(57, 255, 20, 0.4) 0%, transparent 70%)' 
                      : 'radial-gradient(circle, rgba(0, 123, 255, 0.4) 0%, transparent 70%)'
                  }} />
                </div>
              </motion.div>

              <span className={`toggle-label ${universe === 'build' ? 'active-blue' : ''}`}>
                UNIVERSE B: BUILD
              </span>
            </div>

            <motion.div 
              className="toggle-indicator"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M10 16L6 12M10 16L14 12" stroke={universe === 'scale' ? '#39FF14' : '#007BFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="hero-decorations">
          <div className="decoration-circle circle-1" />
          <div className="decoration-circle circle-2" />
          <div className="decoration-line line-1" />
          <div className="decoration-line line-2" />
        </div>
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
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-headline {
          font-size: clamp(48px, 10vw, 120px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 32px;
        }

        .headline-line {
          display: block;
        }

        .highlight {
          color: var(--strategy-pink);
          text-shadow: 0 0 60px rgba(255, 0, 127, 0.3);
        }

        .highlight-blue {
          color: var(--logic-blue);
          text-shadow: 0 0 60px rgba(0, 123, 255, 0.3);
        }

        .hero-subheadline {
          font-size: clamp(18px, 2.5vw, 24px);
          color: var(--gray-light);
          max-width: 700px;
          margin: 0 auto 60px;
          line-height: 1.6;
        }

        .data-highlight {
          color: var(--system-green);
          font-weight: 600;
        }

        .toggle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .toggle-wrapper {
          display: flex;
          align-items: center;
          gap: 24px;
          background: rgba(255, 255, 255, 0.03);
          padding: 16px 32px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .toggle-label {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--gray-medium);
          transition: all 0.3s ease;
        }

        .toggle-label.active {
          color: var(--system-green);
          text-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
        }

        .toggle-label.active-blue {
          color: var(--logic-blue);
          text-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        }

        .toggle-switch {
          cursor: pointer;
          position: relative;
        }

        .toggle-track {
          width: 100px;
          height: 40px;
          background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
          border-radius: 25px;
          position: relative;
          box-shadow: 
            inset 0 2px 10px rgba(0, 0, 0, 0.8),
            0 4px 20px rgba(0, 0, 0, 0.5),
            0 0 0 2px rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .toggle-thumb {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.5),
            0 0 20px currentColor;
        }

        .toggle-glow {
          position: absolute;
          inset: -20px;
          pointer-events: none;
        }

        .toggle-indicator {
          margin-top: 16px;
        }

        .hero-decorations {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 0, 127, 0.1);
        }

        .circle-1 {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -200px;
          animation: pulse 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          border-color: rgba(0, 123, 255, 0.1);
          animation: pulse 6s ease-in-out infinite reverse;
        }

        .decoration-line {
          position: absolute;
          width: 1px;
          height: 200px;
          background: linear-gradient(to bottom, transparent, var(--strategy-pink), transparent);
          opacity: 0.2;
        }

        .line-1 {
          top: 20%;
          left: 10%;
          transform: rotate(15deg);
        }

        .line-2 {
          top: 30%;
          right: 15%;
          transform: rotate(-20deg);
          background: linear-gradient(to bottom, transparent, var(--logic-blue), transparent);
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .hero-headline {
            letter-spacing: -1px;
          }

          .toggle-wrapper {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
            border-radius: 20px;
          }

          .toggle-label {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  )
}
