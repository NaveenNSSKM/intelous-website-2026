import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const terminalLines = [
  { text: '[SYSTEM] Initializing Clean Room Protocol...', type: 'system' },
  { text: '[DATA] Fetching lead batch #9021...', type: 'data' },
  { text: 'HUMAN_AUDIT: Lead #9021 verified... [98% Match]', type: 'success' },
  { text: '[ACTION] Triggering LinkedIn sequence for John D. (VP Sales @ TechCorp)', type: 'action' },
  { text: '[DATA] Enrichment complete: 12 intent signals detected', type: 'data' },
  { text: 'HUMAN_AUDIT: Lead #9022 verified... [95% Match]', type: 'success' },
  { text: '[ACTION] Initiating email sequence...', type: 'action' },
  { text: '[SYSTEM] Quality gate passed: 47/50 leads verified', type: 'system' },
  { text: 'HUMAN_AUDIT: Lead #9023 verified... [99% Match]', type: 'success' },
  { text: '[ACTION] Multi-channel orchestration active', type: 'action' },
]

export default function CleanRoomTerminal() {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalLines>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = (prev + 1) % terminalLines.length
        if (next === 0) {
          setDisplayedLines([terminalLines[0]])
        } else {
          setDisplayedLines(current => [...current.slice(-7), terminalLines[next]])
        }
        return next
      })
    }, 2000)

    setDisplayedLines([terminalLines[0]])
    return () => clearInterval(interval)
  }, [])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'success': return '#39FF14'
      case 'action': return '#FF007F'
      case 'data': return '#007BFF'
      default: return '#888'
    }
  }

  return (
    <section className="clean-room-terminal">
      <div className="terminal-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">THE CLEAN ROOM</span>
          <h2 className="section-title">Human-Verified, Machine-Scaled</h2>
          <p className="section-subtitle">
            Every lead passes through our human verification gate before any outreach.
          </p>
        </motion.div>

        <div className="terminal-wrapper">
          <motion.div
            className="terminal-box"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="terminal-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">intelous-clean-room ~ human_audit.log</span>
            </div>
            <div className="terminal-body">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={`${line.text}-${index}`}
                  className="terminal-line"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="line-prompt">$</span>
                  <span className="line-text" style={{ color: getLineColor(line.type) }}>
                    {line.text}
                  </span>
                  {index === displayedLines.length - 1 && (
                    <motion.span 
                      className="cursor"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      _
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="signature-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="signature-card">
              <div className="signature-header">
                <div className="avatar">
                  <span>👤</span>
                </div>
                <div className="signature-info">
                  <h4>Human Verification</h4>
                  <span className="signature-badge">CERTIFIED</span>
                </div>
              </div>
              
              <div className="signature-visual">
                <svg viewBox="0 0 200 80" className="signature-svg">
                  <motion.path
                    d="M 10 50 Q 30 20, 50 45 T 90 40 T 130 50 T 170 35 T 190 45"
                    stroke="#FF007F"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </svg>
              </div>

              <div className="signature-stats">
                <div className="stat">
                  <span className="stat-value">98%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat">
                  <span className="stat-value">2.4s</span>
                  <span className="stat-label">Avg. Review</span>
                </div>
                <div className="stat">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Coverage</span>
                </div>
              </div>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>SOC 2 Type II</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>ISO 27001</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .clean-room-terminal {
          background: linear-gradient(180deg, var(--obsidian) 0%, #0a0808 100%);
          position: relative;
        }

        .terminal-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--system-green);
          background: rgba(57, 255, 20, 0.1);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(57, 255, 20, 0.2);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--gray-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .terminal-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .terminal-box {
          background: #0a0a0a;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 16px;
          background: #111;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .terminal-dot.red { background: #ff5f57; }
        .terminal-dot.yellow { background: #febc2e; }
        .terminal-dot.green { background: #28c840; }

        .terminal-title {
          margin-left: 12px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--gray-medium);
        }

        .terminal-body {
          padding: 20px;
          min-height: 320px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
        }

        .terminal-line {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .line-prompt {
          color: var(--system-green);
          font-weight: 600;
        }

        .line-text {
          flex: 1;
        }

        .cursor {
          color: var(--system-green);
          font-weight: bold;
        }

        .signature-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .signature-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 28px;
        }

        .signature-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .avatar {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--strategy-pink), var(--logic-blue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .signature-info h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .signature-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--system-green);
          background: rgba(57, 255, 20, 0.15);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .signature-visual {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 24px;
        }

        .signature-svg {
          width: 100%;
          height: 80px;
        }

        .signature-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 24px;
          font-weight: 800;
          color: var(--strategy-pink);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: var(--gray-medium);
        }

        .trust-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 12px;
          color: var(--gray-light);
        }

        .badge-icon {
          color: var(--system-green);
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .terminal-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
