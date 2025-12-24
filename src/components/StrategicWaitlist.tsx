import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface StrategicWaitlistProps {
  universe: 'scale' | 'build'
}

const waitlistContent = {
  scale: {
    badge: 'LIMITED ACCESS',
    headline: ['THE GTM OS IS BEING', 'HAND-BUILT FOR A SELECT FEW.'],
    description: "We're not looking for everyone. We're looking for ambitious teams ready to dominate their markets with precision-engineered pipeline.",
    button: 'Apply for Q1 2026 Cohort',
    counter: { value: 5, label: 'Pods Available', subLabel: 'per month' }
  },
  build: {
    badge: 'EARLY ACCESS',
    headline: ['BUILD YOUR GTM MACHINE', 'WITH FULL PLATFORM ACCESS.'],
    description: "Join our builder community and get early access to the complete Intelous toolkit. Shape the future of outbound with us.",
    button: 'Request Builder Access',
    counter: { value: 25, label: 'Builder Seats', subLabel: 'remaining' }
  }
}

export default function StrategicWaitlist({ universe }: StrategicWaitlistProps) {
  const [email, setEmail] = useState('')
  const content = waitlistContent[universe]

  return (
    <section className="strategic-waitlist">
      <div className="waitlist-container">
        <div className="background-elements">
          <div className="bg-gradient bg-1" style={{
            background: universe === 'scale' ? 'var(--strategy-pink)' : 'var(--logic-blue)'
          }} />
          <div className="bg-gradient bg-2" style={{
            background: universe === 'scale' ? 'var(--logic-blue)' : 'var(--system-green)'
          }} />
          <div className="bg-grid" />
        </div>

        <motion.div
          className="waitlist-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={universe}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="exclusivity-badge"
                style={{
                  background: universe === 'scale' ? 'rgba(255, 0, 127, 0.1)' : 'rgba(0, 123, 255, 0.1)',
                  borderColor: universe === 'scale' ? 'rgba(255, 0, 127, 0.3)' : 'rgba(0, 123, 255, 0.3)'
                }}
              >
                <span className="badge-pulse" style={{
                  background: universe === 'scale' ? 'var(--strategy-pink)' : 'var(--logic-blue)'
                }} />
                <span className="badge-text" style={{
                  color: universe === 'scale' ? 'var(--strategy-pink)' : 'var(--logic-blue)'
                }}>
                  {content.badge}
                </span>
              </motion.div>

              <h2 className="waitlist-headline">
                {content.headline[0]}
                <br />
                <span className="headline-highlight" style={{
                  background: universe === 'scale' 
                    ? 'linear-gradient(135deg, var(--strategy-pink), var(--logic-blue))'
                    : 'linear-gradient(135deg, var(--logic-blue), var(--system-green))'
                }}>
                  {content.headline[1]}
                </span>
              </h2>

              <p className="waitlist-description">{content.description}</p>

              <div className="counter-display">
                <div className="counter-box">
                  <span className="counter-number" style={{
                    color: universe === 'scale' ? 'var(--system-green)' : 'var(--logic-blue)'
                  }}>
                    {content.counter.value}
                  </span>
                  <span className="counter-label">{content.counter.label}</span>
                </div>
                <div className="counter-divider" />
                <div className="counter-box">
                  <span className="counter-text">{content.counter.subLabel}</span>
                  <span className="counter-label">Capacity</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.form 
            className="waitlist-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
              />
              <motion.button
                type="submit"
                className="submit-button"
                style={{
                  background: universe === 'scale' ? 'var(--strategy-pink)' : 'var(--logic-blue)'
                }}
                whileHover={{ scale: 1.02, boxShadow: universe === 'scale' 
                  ? '0 0 40px rgba(255, 0, 127, 0.5)' 
                  : '0 0 40px rgba(0, 123, 255, 0.5)' 
                }}
                whileTap={{ scale: 0.98 }}
              >
                {content.button}
              </motion.button>
            </div>
          </motion.form>

          <div className="trust-strip">
            <span className="trust-item">
              <span className="check">✓</span>
              No obligation
            </span>
            <span className="trust-item">
              <span className="check">✓</span>
              {universe === 'scale' ? '15-min strategy call' : 'Developer onboarding'}
            </span>
            <span className="trust-item">
              <span className="check">✓</span>
              {universe === 'scale' ? 'Custom proposal' : 'API documentation'}
            </span>
          </div>
        </motion.div>

        <div className="footer-bar">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">Intelous</span>
              <span className="logo-ai">.ai</span>
            </div>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-copyright">
              © 2024 Intelous.ai. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .strategic-waitlist {
          background: var(--obsidian);
          position: relative;
          overflow: hidden;
          padding-bottom: 0;
        }

        .waitlist-container {
          position: relative;
        }

        .background-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          transition: all 0.5s ease;
        }

        .bg-1 {
          top: -200px;
          left: -200px;
        }

        .bg-2 {
          bottom: -200px;
          right: -200px;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .waitlist-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 24px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .exclusivity-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid;
          padding: 10px 24px;
          border-radius: 100px;
          margin-bottom: 32px;
          transition: all 0.3s ease;
        }

        .badge-pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 0, 127, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(255, 0, 127, 0); }
        }

        .badge-text {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .waitlist-headline {
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .headline-highlight {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .waitlist-description {
          font-size: 18px;
          color: var(--gray-light);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .counter-display {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px 40px;
          margin-bottom: 40px;
        }

        .counter-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .counter-number {
          font-size: 56px;
          font-weight: 900;
          line-height: 1;
          text-shadow: 0 0 30px currentColor;
          transition: color 0.3s ease;
        }

        .counter-text {
          font-size: 24px;
          font-weight: 800;
          color: var(--white);
        }

        .counter-label {
          font-size: 12px;
          color: var(--gray-medium);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        .counter-divider {
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
        }

        .waitlist-form {
          margin-bottom: 32px;
        }

        .form-row {
          display: flex;
          gap: 12px;
          max-width: 560px;
          margin: 0 auto;
        }

        .email-input {
          flex: 1;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          outline: none;
          transition: all 0.3s;
        }

        .email-input::placeholder {
          color: var(--gray-medium);
        }

        .email-input:focus {
          border-color: var(--strategy-pink);
          background: rgba(255, 255, 255, 0.08);
        }

        .submit-button {
          color: white;
          padding: 18px 32px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          white-space: nowrap;
          transition: all 0.3s;
        }

        .trust-strip {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--gray-light);
        }

        .check {
          color: var(--system-green);
          font-weight: bold;
        }

        .footer-bar {
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 32px 24px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-logo {
          font-size: 20px;
          font-weight: 800;
        }

        .logo-text {
          color: var(--white);
        }

        .logo-ai {
          color: var(--strategy-pink);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 14px;
          color: var(--gray-medium);
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--white);
        }

        .footer-copyright {
          font-size: 13px;
          color: var(--gray-medium);
        }

        @media (max-width: 640px) {
          .form-row {
            flex-direction: column;
          }

          .counter-display {
            flex-direction: column;
            gap: 20px;
            padding: 24px;
          }

          .counter-divider {
            width: 80px;
            height: 1px;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
