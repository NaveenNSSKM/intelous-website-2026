import type { CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SovereignTriadProps {
  universe: 'scale' | 'build'
}

const triadContent = {
  scale: {
    tag: 'THE SOVEREIGN TRIAD',
    title: 'Three Pillars of Pipeline Domination',
    items: [
      {
        title: 'The Strategy',
        subtitle: 'Humans',
        icon: '🧠',
        description: 'Expert strategists who understand your ICP, craft messaging, and ensure every outreach feels personal.',
        highlights: ['Account Selection', 'Message Crafting', 'Quality Assurance'],
        color: '#FF007F',
        annotation: 'Real humans, not bots!'
      },
      {
        title: 'The Engine',
        subtitle: 'Platform',
        icon: '⚡',
        description: 'Our proprietary Intelous OS orchestrates multi-channel campaigns with precision timing and sequencing.',
        highlights: ['Omnichannel Orchestration', 'Smart Sequencing', 'Real-time Optimization'],
        color: '#007BFF',
        annotation: 'Built for scale'
      },
      {
        title: 'The Fuel',
        subtitle: 'Data',
        icon: '🔥',
        description: '200M+ verified contacts enriched with intent signals, technographics, and buying committee mapping.',
        highlights: ['Intent Signals', 'Verified Contacts', 'Buying Committee Intel'],
        color: '#39FF14',
        annotation: '200M+ data points'
      }
    ]
  },
  build: {
    tag: 'THE BUILDER TOOLKIT',
    title: 'Everything You Need to Build Your GTM',
    items: [
      {
        title: 'The Blueprint',
        subtitle: 'Frameworks',
        icon: '📐',
        description: 'Proven GTM frameworks and playbooks used by 500+ B2B companies to build predictable pipeline.',
        highlights: ['ICP Templates', 'Sequence Frameworks', 'Scoring Models'],
        color: '#007BFF',
        annotation: 'Battle-tested!'
      },
      {
        title: 'The Toolkit',
        subtitle: 'Platform Access',
        icon: '🛠️',
        description: 'Full access to Intelous OS with unlimited seats. Build, test, and iterate at your own pace.',
        highlights: ['Unlimited Users', 'API Access', 'Custom Workflows'],
        color: '#FF007F',
        annotation: 'Your own instance'
      },
      {
        title: 'The Data Lake',
        subtitle: 'Database',
        icon: '🗄️',
        description: 'Direct access to our 200M+ contact database with advanced search and export capabilities.',
        highlights: ['Bulk Exports', 'Real-time Enrichment', 'Custom Filters'],
        color: '#39FF14',
        annotation: 'Self-serve data'
      }
    ]
  }
}

export default function SovereignTriad({ universe }: SovereignTriadProps) {
  const content = triadContent[universe]

  return (
    <section className="sovereign-triad">
      <div className="triad-container">
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
              color: universe === 'scale' ? 'var(--strategy-pink)' : 'var(--logic-blue)',
              background: universe === 'scale' ? 'rgba(255, 0, 127, 0.1)' : 'rgba(0, 123, 255, 0.1)',
              borderColor: universe === 'scale' ? 'rgba(255, 0, 127, 0.2)' : 'rgba(0, 123, 255, 0.2)'
            }}>
              {content.tag}
            </span>
            <h2 className="section-title">{content.title}</h2>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div 
            key={universe + '-grid'}
            className="triad-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content.items.map((item, index) => (
              <motion.div
                key={item.title}
                className="triad-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{ '--accent-color': item.color } as CSSProperties}
              >
                <div className="card-annotation" style={{ color: item.color }}>
                  <svg className="annotation-arrow" width="40" height="40" viewBox="0 0 40 40">
                    <path d="M5 35 Q 20 20, 35 10" stroke={item.color} strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                    <path d="M30 5 L35 10 L28 12" stroke={item.color} strokeWidth="2" fill="none"/>
                  </svg>
                  <span>{item.annotation}</span>
                </div>

                <div className="card-icon">{item.icon}</div>
                
                <div className="card-header">
                  <h3 className="card-title">{item.title}</h3>
                  <span className="card-subtitle" style={{ color: item.color }}>{item.subtitle}</span>
                </div>

                <p className="card-description">{item.description}</p>

                <ul className="card-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="highlight-item">
                      <span className="highlight-dot" style={{ backgroundColor: item.color }} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${item.color}20 0%, transparent 70%)` }} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .sovereign-triad {
          background: var(--obsidian);
          position: relative;
          overflow: hidden;
        }

        .triad-container {
          max-width: 1400px;
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
        }

        .triad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .triad-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .triad-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 0 40px rgba(255, 0, 127, 0.1);
        }

        .card-annotation {
          position: absolute;
          top: -30px;
          right: 20px;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          transform: rotate(5deg);
        }

        .annotation-arrow {
          transform: rotate(90deg);
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .card-header {
          margin-bottom: 16px;
        }

        .card-title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .card-subtitle {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .card-description {
          color: var(--gray-light);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .card-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-light);
        }

        .highlight-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .card-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 200px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .triad-card:hover .card-glow {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .triad-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }

          .card-annotation {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
