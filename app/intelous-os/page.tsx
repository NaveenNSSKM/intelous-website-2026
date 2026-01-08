'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function IntelousOSPage() {
  const { setUniverse } = useUniverse()

  useEffect(() => {
    setUniverse('scale')
  }, [setUniverse])

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <Header />

      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
              padding: '10px 20px',
              background: '#fff',
              border: '1px solid #E0E0E0',
              borderRadius: '100px',
              marginBottom: '32px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF007F' }} />
              THE COMMAND CENTER
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              ONE STACK.
              <br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>TOTAL ORCHESTRATION.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Stop fighting the "Tool Sprawl" that is killing your team's velocity. Intelous OS is
              the "Glass Box" system that unifies your entire GTM function into a single,
              high-fidelity command center.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
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
            }}>OMNICHANNEL SOVEREIGNTY</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Orchestrated Everywhere</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Your buyers don't live in one inbox; they live across the entire digital landscape.
              Intelous OS provides total orchestration across Email, LinkedIn, and SMS.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {[
              { channel: 'Email', icon: '📧', integration: 'Mailgun', desc: 'High-deliverability email sequences with real-time tracking' },
              { channel: 'LinkedIn', icon: '💼', integration: 'Heyreach', desc: 'Synchronized connection requests and InMail sequences' },
              { channel: 'SMS', icon: '📱', integration: 'Twilio', desc: 'Strategic follow-up messages for high-intent signals' },
            ].map((item, i) => (
              <motion.div
                key={item.channel}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: '#FF007F' }}
                style={{
                  padding: '32px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#050505', marginBottom: '8px' }}>
                  {item.channel}
                </h3>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#FF007F',
                  marginBottom: '12px',
                }}>
                  via {item.integration}
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: '40px',
              padding: '24px',
              background: '#050505',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <code style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              color: '#999',
            }}>
              <span style={{ color: '#FF007F' }}>LinkedIn connection</span> triggers <span style={{ color: '#666' }}>→</span> only if <span style={{ color: '#FF007F' }}>email opened</span> <span style={{ color: '#666' }}>→</span> <span style={{ color: '#FF007F' }}>SMS follow-up</span> triggers <span style={{ color: '#666' }}>→</span> only if <span style={{ color: '#FF007F' }}>no reply in 48h</span>
            </code>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#FAFAFA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
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
              }}>THE SENTIMENT BRAIN</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>Human Intent Detection</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                We have moved past the era of tracking "vanity metrics" like open rates. Intelous OS
                is built on a Sentiment Analysis Pipeline that classifies every incoming interaction
                as Positive, Neutral, or Negative.
              </p>

              <div style={{ marginBottom: '24px' }}>
                {[
                  { sentiment: 'Positive', action: 'Immediate sales alert + CRM update', color: '#FF007F' },
                  { sentiment: 'Neutral', action: 'Routed to strategist for manual follow-up', color: '#FFBD2E' },
                  { sentiment: 'Negative', action: 'Auto-removed + domain protected', color: '#FF5F57' },
                ].map((item) => (
                  <div key={item.sentiment} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    background: '#fff',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    marginBottom: '12px',
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: item.color,
                    }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#050505' }}>{item.sentiment}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{item.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                background: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                padding: '32px',
              }}>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#666',
                  marginBottom: '20px',
                }}>
                  sentiment_analysis.pipeline
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Incoming Reply:</div>
                  <div style={{
                    padding: '16px',
                    background: '#FAFAFA',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#050505',
                    fontStyle: 'italic',
                  }}>
                    "This looks interesting. Can we schedule a call next week to discuss further?"
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'rgba(255, 0, 127, 0.1)',
                  border: '1px solid #FF007F',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#FF007F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}>
                    ✓
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FF007F' }}>POSITIVE INTENT</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Sales alert triggered → CRM updated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
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
            }}>THE DIGITAL WORKFORCE</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Specialized Agents</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              The OS is powered by a modular "Crew" of digital workers, each performing a specialized
              function in your campaign lifecycle.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              { name: 'Setup Agent', role: 'Guides campaign objectives and persona mapping', status: 'ACTIVE' },
              { name: 'Research Agent', role: 'Identifies competitor signals and benchmarks', status: 'ACTIVE' },
              { name: 'Discovery Agent', role: 'Auto-finds leads matching target profile', status: 'ACTIVE' },
              { name: 'Execution Agent', role: 'Launches multi-channel sequences', status: 'ACTIVE' },
            ].map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ borderColor: '#FF007F' }}
                style={{
                  padding: '24px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#050505' }}>{agent.name}</h3>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#FF007F',
                    padding: '4px 8px',
                    background: 'rgba(255, 0, 127, 0.1)',
                    borderRadius: '4px',
                  }}>
                    {agent.status}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>{agent.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#FAFAFA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
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
              }}>STRATEGIC INTELLIGENCE</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>Chat with Your Funnel</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Imagine asking your GTM system a question and getting a data-backed answer in seconds.
                Because Intelous OS unifies all engagement data, you can ask natural questions and
                get instant intelligence.
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
                  color: '#ffffff',
                }}
              >
                Request a Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                background: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                padding: '24px',
              }}>
                <div style={{
                  padding: '16px',
                  background: '#FAFAFA',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>You asked:</div>
                  <div style={{ fontSize: '14px', color: '#050505', fontWeight: 600 }}>
                    "Why did our meeting rate drop this week in the Fintech sector?"
                  </div>
                </div>
                <div style={{
                  padding: '16px',
                  background: 'rgba(255, 0, 127, 0.05)',
                  border: '1px solid rgba(255, 0, 127, 0.2)',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#FF007F',
                    fontWeight: 600,
                    marginBottom: '8px',
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    INTELOUS OS ANALYSIS:
                  </div>
                  <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>
                    Meeting rate dropped 23% due to VP-level personas showing 40% lower engagement.
                    Recommended: Shift messaging to focus on cost-reduction vs. growth themes based
                    on current market sentiment.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.05) 0%, rgba(255, 0, 127, 0.05) 100%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Ready to Own Your GTM?</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              You own the system. You own the insight. You own the outcome. This is the end of
              the "Black Box" era and the beginning of total GTM sovereignty.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '20px 40px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#FF007F',
                color: '#ffffff',
              }}
            >
              Deploy the Intelous OS
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
