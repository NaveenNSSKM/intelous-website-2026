import { motion } from 'framer-motion'

const pods = [
  {
    name: 'LAUNCH',
    price: '$4,000',
    period: '/month',
    description: 'Perfect for startups ready to validate their outbound engine.',
    color: '#007BFF',
    outcomes: [
      '25 Verified Meetings/Mo',
      '500 Qualified Leads',
      '3-Channel Outreach',
      'Weekly Strategy Calls',
      'Dedicated SDR Support'
    ],
    popular: false
  },
  {
    name: 'GROWTH',
    price: '$8,500',
    period: '/month',
    description: 'For scaling teams who need consistent, predictable pipeline.',
    color: '#FF007F',
    outcomes: [
      '50 Verified Meetings/Mo',
      '1,500 Qualified Leads',
      '5-Channel Orchestration',
      'Bi-Weekly Strategy Deep-Dives',
      'Priority Human Verification',
      'Custom ICP Refinement'
    ],
    popular: true
  },
  {
    name: 'SCALE',
    price: '$15,000+',
    period: '/month',
    description: 'Enterprise-grade pipeline generation for market dominators.',
    color: '#39FF14',
    outcomes: [
      '100+ Verified Meetings/Mo',
      'Unlimited Lead Volume',
      'Full Omnichannel Suite',
      'Dedicated Strategy Team',
      'Real-time Dashboard Access',
      'Custom Integrations',
      'Executive QBRs'
    ],
    popular: false
  }
]

export default function GTMPods() {
  return (
    <section className="gtm-pods">
      <div className="pods-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">MANAGED GTM PODS</span>
          <h2 className="section-title">Choose Your Growth Engine</h2>
          <p className="section-subtitle">
            Full-service GTM pods with guaranteed outcomes, not just activities.
          </p>
        </motion.div>

        <div className="pods-grid">
          {pods.map((pod, index) => (
            <motion.div
              key={pod.name}
              className={`pod-card ${pod.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 0 60px ${pod.color}30`,
                borderColor: pod.color
              }}
              style={{ '--pod-color': pod.color } as React.CSSProperties}
            >
              {pod.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="pod-header">
                <h3 className="pod-name" style={{ color: pod.color }}>{pod.name}</h3>
                <div className="pod-pricing">
                  <span className="pod-price">{pod.price}</span>
                  <span className="pod-period">{pod.period}</span>
                </div>
                <p className="pod-description">{pod.description}</p>
              </div>

              <ul className="pod-outcomes">
                {pod.outcomes.map((outcome) => (
                  <li key={outcome} className="outcome-item">
                    <span className="outcome-check" style={{ color: pod.color }}>✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className="pod-cta"
                style={{ 
                  background: pod.popular ? pod.color : 'transparent',
                  borderColor: pod.color,
                  color: pod.popular ? '#000' : pod.color
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>

              <div 
                className="pod-glow" 
                style={{ background: `radial-gradient(ellipse at bottom, ${pod.color}15 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="guarantee-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="guarantee-content">
            <span className="guarantee-icon">🛡️</span>
            <div className="guarantee-text">
              <h4>Performance Guarantee</h4>
              <p>If we don't deliver the promised meetings in Month 1, Month 2 is on us.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .gtm-pods {
          background: var(--obsidian);
          position: relative;
        }

        .pods-container {
          max-width: 1300px;
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
          color: var(--strategy-pink);
          background: rgba(255, 0, 127, 0.1);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 0, 127, 0.2);
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
          max-width: 500px;
          margin: 0 auto;
        }

        .pods-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 60px;
        }

        .pod-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .pod-card.popular {
          border-color: var(--strategy-pink);
          transform: scale(1.02);
        }

        .popular-badge {
          position: absolute;
          top: 20px;
          right: -35px;
          background: var(--strategy-pink);
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 6px 40px;
          transform: rotate(45deg);
        }

        .pod-header {
          margin-bottom: 28px;
        }

        .pod-name {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 12px;
        }

        .pod-pricing {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 12px;
        }

        .pod-price {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .pod-period {
          font-size: 16px;
          color: var(--gray-medium);
        }

        .pod-description {
          font-size: 14px;
          color: var(--gray-light);
          line-height: 1.6;
        }

        .pod-outcomes {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
          margin-bottom: 28px;
        }

        .outcome-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: var(--gray-light);
        }

        .outcome-check {
          font-weight: bold;
          font-size: 16px;
          flex-shrink: 0;
        }

        .pod-cta {
          width: 100%;
          padding: 16px 24px;
          border-radius: 12px;
          border: 2px solid;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .pod-cta:hover {
          transform: translateY(-2px);
        }

        .pod-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          pointer-events: none;
        }

        .guarantee-section {
          display: flex;
          justify-content: center;
        }

        .guarantee-content {
          display: flex;
          align-items: center;
          gap: 20px;
          background: linear-gradient(135deg, rgba(57, 255, 20, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%);
          border: 1px solid rgba(57, 255, 20, 0.2);
          border-radius: 16px;
          padding: 24px 36px;
        }

        .guarantee-icon {
          font-size: 36px;
        }

        .guarantee-text h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--system-green);
        }

        .guarantee-text p {
          font-size: 14px;
          color: var(--gray-light);
        }

        @media (max-width: 1024px) {
          .pods-grid {
            grid-template-columns: 1fr;
            max-width: 450px;
            margin: 0 auto 60px;
          }

          .pod-card.popular {
            transform: none;
          }
        }

        @media (max-width: 600px) {
          .guarantee-content {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
        }
      `}</style>
    </section>
  )
}
