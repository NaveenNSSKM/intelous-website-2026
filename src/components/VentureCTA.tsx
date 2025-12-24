import { motion } from 'framer-motion'
import { useState } from 'react'

export default function VentureCTA() {
  const [email, setEmail] = useState('')

  return (
    <section className="venture-cta">
      <div className="cta-container">
        <div className="cta-background">
          <div className="bg-gradient bg-1" />
          <div className="bg-gradient bg-2" />
          <div className="bg-grid" />
        </div>

        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="cta-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="badge-pulse" />
            <span>NOW ACCEPTING Q1 2025 VENTURES</span>
          </motion.div>

          <h2 className="cta-headline">
            STOP HIRING VENDORS.
            <br />
            <span className="gradient-text">PARTNER WITH A SYSTEM.</span>
          </h2>

          <p className="cta-description">
            The 10-week sprint that transforms your GTM from fragile to formidable. 
            Limited to 5 ventures per quarter.
          </p>

          <motion.form 
            className="cta-form"
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
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255, 0, 127, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your 10-Week Sprint
              </motion.button>
            </div>
          </motion.form>

          <div className="trust-items">
            <div className="trust-item">
              <span className="check">✓</span>
              <span>Free architecture session</span>
            </div>
            <div className="trust-item">
              <span className="check">✓</span>
              <span>20-lead guarantee</span>
            </div>
            <div className="trust-item">
              <span className="check">✓</span>
              <span>Full system ownership</span>
            </div>
          </div>
        </motion.div>

        <div className="footer-bar">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">Intelous</span>
              <span className="logo-labs">Labs</span>
            </div>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-copyright">
              © 2024 Intelous Labs. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .venture-cta {
          background: var(--architectural-white);
          position: relative;
          padding-bottom: 0;
          overflow: hidden;
        }

        .cta-container {
          position: relative;
        }

        .cta-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .bg-1 {
          background: var(--strategy-pink);
          top: -200px;
          right: -200px;
        }

        .bg-2 {
          background: var(--system-green);
          bottom: 0;
          left: -200px;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 24px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 0, 127, 0.08);
          border: 1px solid rgba(255, 0, 127, 0.2);
          padding: 10px 24px;
          border-radius: 100px;
          margin-bottom: 32px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--strategy-pink);
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: var(--strategy-pink);
          border-radius: 50%;
          animation: pulse-pink 2s ease-in-out infinite;
        }

        @keyframes pulse-pink {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 0, 127, 0.7); }
          50% { box-shadow: 0 0 0 8px rgba(255, 0, 127, 0); }
        }

        .cta-headline {
          font-size: clamp(36px, 7vw, 72px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -2px;
          color: var(--obsidian);
          margin-bottom: 24px;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--strategy-pink), var(--system-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          font-size: 18px;
          color: var(--gray-medium);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 550px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-form {
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
          background: var(--white);
          border: 2px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          color: var(--obsidian);
          font-size: 16px;
          outline: none;
          transition: all 0.3s;
        }

        .email-input::placeholder {
          color: var(--gray-light);
        }

        .email-input:focus {
          border-color: var(--strategy-pink);
        }

        .submit-button {
          background: var(--strategy-pink);
          color: white;
          padding: 18px 32px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          white-space: nowrap;
          transition: all 0.3s;
        }

        .trust-items {
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
          color: var(--gray-medium);
        }

        .check {
          color: var(--system-green);
          font-weight: bold;
        }

        .footer-bar {
          background: var(--obsidian);
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

        .logo-labs {
          color: var(--strategy-pink);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--white);
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 640px) {
          .form-row {
            flex-direction: column;
          }

          .trust-items {
            flex-direction: column;
            align-items: center;
            gap: 12px;
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
