import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CleanRoomTerminalProps {
  universe: 'scale' | 'build'
}

const terminalContent = {
  scale: {
    tag: 'THE CLEAN ROOM',
    title: 'Human-Verified, Machine-Scaled',
    subtitle: 'Every lead passes through our human verification gate before any outreach.',
    lines: [
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
    ],
    signature: {
      title: 'Human Verification',
      badge: 'CERTIFIED'
    },
    stats: [
      { value: '98%', label: 'Accuracy' },
      { value: '2.4s', label: 'Avg. Review' },
      { value: '24/7', label: 'Coverage' }
    ]
  },
  build: {
    tag: 'THE DEV CONSOLE',
    title: 'Full Control, Your Way',
    subtitle: 'Build custom workflows with our powerful API and developer tools.',
    lines: [
      { text: '[BUILD] Initializing developer environment...', type: 'system' },
      { text: '[API] Connecting to Intelous API v2.4...', type: 'data' },
      { text: 'CONFIG_LOADED: Custom scoring model active', type: 'success' },
      { text: '[WEBHOOK] Registered: /api/leads/incoming', type: 'action' },
      { text: '[API] Enrichment endpoint ready: /api/enrich', type: 'data' },
      { text: 'INTEGRATION: Salesforce sync enabled', type: 'success' },
      { text: '[BUILD] Custom sequence builder initialized', type: 'action' },
      { text: '[API] Rate limit: 10,000 requests/hour', type: 'system' },
      { text: 'DEPLOY: Production workflow v1.2 active', type: 'success' },
      { text: '[BUILD] Your GTM engine is ready', type: 'action' },
    ],
    signature: {
      title: 'Developer Access',
      badge: 'API READY'
    },
    stats: [
      { value: '10K', label: 'API Calls/Hr' },
      { value: '50+', label: 'Integrations' },
      { value: '99.9%', label: 'Uptime' }
    ]
  }
}

export default function CleanRoomTerminal({ universe }: CleanRoomTerminalProps) {
  const content = terminalContent[universe]
  const [displayedLines, setDisplayedLines] = useState<typeof content.lines>([])
  const [_currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayedLines([content.lines[0]])
    setCurrentIndex(0)
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = (prev + 1) % content.lines.length
        if (next === 0) {
          setDisplayedLines([content.lines[0]])
        } else {
          setDisplayedLines(current => [...current.slice(-7), content.lines[next]])
        }
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [universe, content.lines])

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
        <AnimatePresence mode="wait">
          <motion.div
            key={universe + '-header'}
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-tag" style={{
              color: universe === 'scale' ? 'var(--system-green)' : 'var(--logic-blue)',
              background: universe === 'scale' ? 'rgba(57, 255, 20, 0.1)' : 'rgba(0, 123, 255, 0.1)',
              borderColor: universe === 'scale' ? 'rgba(57, 255, 20, 0.2)' : 'rgba(0, 123, 255, 0.2)'
            }}>
              {content.tag}
            </span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-subtitle">{content.subtitle}</p>
          </motion.div>
        </AnimatePresence>

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
              <span className="terminal-title">
                {universe === 'scale' ? 'intelous-clean-room ~ human_audit.log' : 'intelous-dev ~ builder.log'}
              </span>
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
            <AnimatePresence mode="wait">
              <motion.div 
                key={universe + '-card'}
                className="signature-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="signature-header">
                  <div className="avatar" style={{
                    background: universe === 'scale' 
                      ? 'linear-gradient(135deg, var(--strategy-pink), var(--logic-blue))'
                      : 'linear-gradient(135deg, var(--logic-blue), var(--system-green))'
                  }}>
                    <span>{universe === 'scale' ? '👤' : '⚙️'}</span>
                  </div>
                  <div className="signature-info">
                    <h4>{content.signature.title}</h4>
                    <span className="signature-badge" style={{
                      color: universe === 'scale' ? 'var(--system-green)' : 'var(--logic-blue)',
                      background: universe === 'scale' ? 'rgba(57, 255, 20, 0.15)' : 'rgba(0, 123, 255, 0.15)'
                    }}>
                      {content.signature.badge}
                    </span>
                  </div>
                </div>
                
                <div className="signature-visual">
                  <svg viewBox="0 0 200 80" className="signature-svg">
                    <motion.path
                      d="M 10 50 Q 30 20, 50 45 T 90 40 T 130 50 T 170 35 T 190 45"
                      stroke={universe === 'scale' ? '#FF007F' : '#007BFF'}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </svg>
                </div>

                <div className="signature-stats">
                  {content.stats.map(stat => (
                    <div key={stat.label} className="stat">
                      <span className="stat-value" style={{
                        color: universe === 'scale' ? 'var(--strategy-pink)' : 'var(--logic-blue)'
                      }}>
                        {stat.value}
                      </span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

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
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid;
          transition: all 0.3s ease;
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
