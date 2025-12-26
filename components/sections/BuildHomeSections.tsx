'use client'

import { motion } from 'framer-motion'

export default function BuildHomeSections() {
  return (
    <>
      <section style={{
        padding: '120px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
            }}>THE EXECUTION GAP</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
              letterSpacing: '-1px',
            }}>Why Ventures Fail</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              You cannot afford to lose six months to a bloated development agency, and you cannot 
              risk your future on disconnected freelancers who don't understand your GTM logic. 
              Intelous Labs is the anti-failure venture partner.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                icon: '⚡',
                title: 'Speed to Market',
                description: 'We move at the speed of your ambition—from PRD to first 20 qualified leads in exactly 70 days.',
              },
              {
                icon: '🏗️',
                title: 'Sovereign Systems',
                description: 'We don\'t just "build apps"; we architect sovereign systems designed for non-linear agentic expansion.',
              },
              {
                icon: '🚀',
                title: 'Build-Operate-Transfer',
                description: 'We embrace the exit. Our goal is your total sovereignty—you own the ship we built.',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: '32px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '120px 24px',
        background: '#FAFAFA',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
            }}>THE 10-WEEK SPRINT</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
              letterSpacing: '-1px',
            }}>From Vision to Market in 70 Days</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              We move at the speed of your ambition, using a modular platform evolution strategy 
              to go from a PRD to your first 20 qualified leads in exactly 70 days.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {[
              {
                phase: 'Weeks 1-2',
                title: 'Foundation',
                description: 'Deep-dive into your market. Define your ICP, craft positioning, and establish brand architecture.',
                features: ['Strategic PRD Development', 'ICP Research & Definition', 'High-fidelity Wireframes'],
                color: '#FF007F',
              },
              {
                phase: 'Weeks 3-8',
                title: 'The Build',
                description: 'Our engineering lab executes core development of your modular, event-driven platform.',
                features: ['AI-Native Core Development', 'Microservices Architecture', 'Agentic Workflow Design'],
                color: '#39FF14',
                popular: true,
              },
              {
                phase: 'Weeks 9-10',
                title: 'Ignition',
                description: 'We don\'t just deploy; we launch your first GTM campaign and deliver 20 qualified leads.',
                features: ['System Launch & Go-Live', 'First Campaign Execution', '20 Qualified Leads'],
                color: '#4A90E2',
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  border: phase.popular ? `2px solid ${phase.color}` : '1px solid #E0E0E0',
                  borderRadius: '16px',
                  position: 'relative',
                }}
              >
                {phase.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: phase.color,
                    color: '#050505',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '100px',
                  }}>
                    Core Phase
                  </div>
                )}
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  fontWeight: 600,
                  color: phase.color,
                  marginBottom: '8px',
                }}>
                  {phase.phase}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                  {phase.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                  {phase.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {phase.features.map((feature) => (
                    <li key={feature} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#666',
                      marginBottom: '8px',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke={phase.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '120px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                color: '#666',
              }}>BUILD-OPERATE-TRANSFER</span>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
                letterSpacing: '-1px',
              }}>
                We Build the Ship.<br/>
                <span style={{ color: '#FF007F' }}>You Captain It.</span>
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Unlike agencies that thrive on creating a "Black Box" of dependency, we embrace the 
                exit because our goal is your total Sovereignty. We architect the system, run it to 
                prove traction, and then methodically transfer the knowledge to your internal crew.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
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
                    backgroundColor: '#FF007F',
                    color: '#fff',
                  }}
                >
                  Book Architecture Session
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{
                background: '#050505',
                borderRadius: '12px',
                padding: '24px',
                fontFamily: "'IBM Plex Mono', monospace",
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
                </div>
                <code style={{ fontSize: '12px', color: '#999', lineHeight: 2 }}>
                  <span style={{ color: '#FF007F' }}>[BUILD]</span> Architecting sovereign system...<br/>
                  <span style={{ color: '#FF007F' }}>[BUILD]</span> GCP microservices deployed<br/>
                  <span style={{ color: '#FF007F' }}>[BUILD]</span> Kafka event pipelines configured<br/>
                  <span style={{ color: '#39FF14' }}>[OPERATE]</span> Running first GTM campaign...<br/>
                  <span style={{ color: '#39FF14' }}>[OPERATE]</span> 20 qualified leads delivered<br/>
                  <span style={{ color: '#39FF14' }}>[OPERATE]</span> Traction validated<br/>
                  <span style={{ color: '#4A90E2' }}>[TRANSFER]</span> Knowledge handoff initiated<br/>
                  <span style={{ color: '#4A90E2' }}>[TRANSFER]</span> Team training complete<br/>
                  <span style={{ color: '#4A90E2' }}>[TRANSFER]</span> <span style={{ color: '#39FF14' }}>SOVEREIGNTY ACHIEVED</span>
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '120px 24px',
        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.03) 0%, rgba(57, 255, 20, 0.03) 100%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
            }}>Q1 2026 COHORT</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
              letterSpacing: '-1px',
            }}>The Venture Architecture Diagnostic</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              We are not a high-volume factory; we are a high-fidelity laboratory for high-ticket 
              innovators. We only take on five partners for our Q1 2026 cohort to ensure our 
              technical leads can maintain 10/10 oversight on every build.
            </p>
            <div style={{
              display: 'inline-flex',
              gap: '8px',
              marginBottom: '32px',
            }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: i <= 3 ? '#FF007F' : '#E0E0E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: i <= 3 ? '#fff' : '#999',
                  fontSize: '14px',
                  fontWeight: 700,
                }}>
                  {i <= 3 ? '✓' : i}
                </div>
              ))}
            </div>
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '24px',
            }}>
              2 spots remaining for Q1 2026
            </p>
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
                backgroundColor: '#FF007F',
                color: '#fff',
              }}
            >
              Submit Your Mission Details
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
