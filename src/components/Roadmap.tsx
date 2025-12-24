import { motion } from 'framer-motion'

const roadmapSteps = [
  {
    phase: 'WEEK 1-3',
    title: 'FOUNDATION',
    subtitle: 'Strategic PRD + Branding',
    description: 'Deep-dive into your market, define your ICP, craft your positioning, and establish brand architecture.',
    highlights: ['Market Analysis', 'ICP Definition', 'Brand System', 'Strategic PRD'],
    color: '#FF007F'
  },
  {
    phase: 'WEEK 4-7',
    title: 'BUILD',
    subtitle: 'AI-Native Core Development',
    description: 'We architect and build your GTM infrastructure with AI-native capabilities at the core.',
    highlights: ['Agentic Workflows', 'Data Pipeline', 'CRM Integration', 'Outbound Engine'],
    color: '#39FF14'
  },
  {
    phase: 'WEEK 8-10',
    title: 'IGNITION',
    subtitle: 'Launch + First 20 Leads',
    description: 'Go live with your system. We operate it until you have 20 qualified leads in pipeline.',
    highlights: ['System Launch', 'Lead Generation', 'Performance Tuning', 'Team Training'],
    color: '#007BFF'
  }
]

export default function Roadmap() {
  return (
    <section className="roadmap">
      <div className="roadmap-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">THE 10-WEEK SPRINT</span>
          <h2 className="section-title">From Zero to Pipeline in 10 Weeks</h2>
          <p className="section-subtitle">
            A battle-tested roadmap that transforms your GTM from concept to revenue-generating machine.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-connector">
                <div className="step-dot" style={{ borderColor: step.color }}>
                  <div className="step-dot-inner" style={{ background: step.color }} />
                </div>
                <svg className="arrow-sketch" width="80" height="40" viewBox="0 0 80 40">
                  <motion.path
                    d={index % 2 === 0 ? "M5 20 Q 30 5, 60 20 T 75 20" : "M75 20 Q 50 5, 20 20 T 5 20"}
                    stroke="#FF007F"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                </svg>
              </div>

              <motion.div 
                className="step-card"
                whileHover={{ 
                  y: -8, 
                  boxShadow: `0 20px 60px ${step.color}20`,
                  borderColor: step.color
                }}
              >
                <div className="step-phase" style={{ color: step.color }}>{step.phase}</div>
                <h3 className="step-title">{step.title}</h3>
                <div className="step-subtitle">{step.subtitle}</div>
                <p className="step-description">{step.description}</p>
                
                <div className="step-highlights">
                  {step.highlights.map(highlight => (
                    <span 
                      key={highlight} 
                      className="highlight-tag"
                      style={{ borderColor: `${step.color}40`, color: step.color }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="blueprint-overlay">
                  <div className="blueprint-grid" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .roadmap {
          background: var(--architectural-white);
          position: relative;
          overflow: hidden;
        }

        .roadmap-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--strategy-pink);
          background: rgba(255, 0, 127, 0.08);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 0, 127, 0.2);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--obsidian);
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--gray-medium);
          max-width: 500px;
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--strategy-pink), var(--system-green), #007BFF);
          transform: translateX(-50%);
        }

        .timeline-step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-step.left {
          flex-direction: row;
          padding-right: calc(50% + 60px);
        }

        .timeline-step.right {
          flex-direction: row-reverse;
          padding-left: calc(50% + 60px);
        }

        .step-connector {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }

        .step-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--architectural-white);
          border: 3px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-dot-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .arrow-sketch {
          margin-top: 8px;
        }

        .step-card {
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          flex: 1;
        }

        .step-phase {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 8px;
          font-family: 'IBM Plex Mono', monospace;
        }

        .step-title {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -1px;
          color: var(--obsidian);
          margin-bottom: 4px;
        }

        .step-subtitle {
          font-size: 16px;
          color: var(--gray-medium);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .step-description {
          font-size: 15px;
          color: var(--gray-medium);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .step-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .highlight-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid;
          background: transparent;
        }

        .blueprint-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step-card:hover .blueprint-overlay {
          opacity: 1;
        }

        .blueprint-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 0, 127, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 127, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-step.left,
          .timeline-step.right {
            flex-direction: row;
            padding: 0 0 0 60px;
          }

          .step-connector {
            left: 20px;
          }

          .arrow-sketch {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
