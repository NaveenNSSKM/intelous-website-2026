'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function ManagedLeadGenPage() {
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
              THE GTM PODS
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              DON'T HIRE A HEAD.
              <br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>DEPLOY A POD.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Traditional B2B hiring is a 20th-century solution to a 21st-century problem. It takes
              an average of four months to find a competent SDR and another six months to realize
              they weren't the right fit. Intelous Managed GTM Pods are the "Third Option."
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
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
              }}>THE SPECIALIZED WORKFORCE</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>What is a Pod?</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                A Pod is a high-fidelity unit of execution composed of one Human Strategist and a
                suite of Specialized Digital Workers. Unlike a standard agency where your account
                is passed to a junior intern, our Pods are led by a strategist who has built GTM
                motions for the world's most aggressive brands.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div style={{
                  padding: '20px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#050505', marginBottom: '8px' }}>
                    The Strategist
                  </div>
                  <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                    20% creative spark, empathy, and manual audit
                  </div>
                </div>
                <div style={{
                  padding: '20px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#050505', marginBottom: '8px' }}>
                    Digital Workers
                  </div>
                  <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                    80% of repetitive labor automated
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                padding: '32px',
                background: '#FAFAFA',
                border: '2px solid #FF007F',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#666', marginBottom: '8px' }}>
                Setup Time
              </div>
              <div style={{ fontSize: '64px', fontWeight: 900, color: '#FF007F', marginBottom: '8px' }}>
                &lt; 1 hour
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '24px' }}>
                vs. weeks for traditional team
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
              }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#050505' }}>48h</div>
                  <div style={{ fontSize: '11px', color: '#666' }}>Deploy Time</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#050505' }}>75%</div>
                  <div style={{ fontSize: '11px', color: '#666' }}>More Efficient</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#FAFAFA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Choose Your Pod</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              We don't sell "hours" or "effort"; we sell the Sovereign Capacity to reach your
              market and book the meetings that matter.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {[
              {
                name: 'Launch Pod',
                price: '$4,000',
                period: '/mo',
                ideal: 'Startups & Founders',
                description: 'Validation in a box. Your first 100 high-level conversations via single-threaded email outreach.',
                features: [
                  '500 verified contacts/month',
                  'Access to Intelous OS & Discovery Hub',
                  'Shared GTM Strategist',
                  'Weekly audits & optimizations',
                ],
                outcome: 'High-fidelity data on what resonates with your ICP',
                color: '#FF007F',
              },
              {
                name: 'Growth Pod',
                price: '$8,500',
                period: '/mo',
                ideal: 'Mid-Market Teams',
                description: 'Multi-threaded dominance managed by a dedicated strategist to scale your volume.',
                features: [
                  '2,000 verified contacts/month',
                  'Email + LinkedIn orchestration via Heyreach',
                  'Dedicated GTM Strategist',
                  'Daily sentiment optimization',
                ],
                outcome: 'Predictable volume of booked meetings',
                color: '#FF007F',
                popular: true,
              },
              {
                name: 'Scale Pod',
                price: '$15,000+',
                period: '/mo',
                ideal: 'Enterprise Teams',
                description: 'Full RevOps Mastery. Your entire outbound function, outsourced with fractional CMO leadership.',
                features: [
                  '5,000+ verified contacts/month',
                  'Full CRM integration (SF/HubSpot)',
                  'Senior Strategist (Fractional CMO)',
                  '2-way data sync & sentiment handoffs',
                ],
                outcome: 'Total Go-to-Market sovereignty',
                color: '#4A90E2',
              },
            ].map((pod, i) => (
              <motion.div
                key={pod.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  border: pod.popular ? `2px solid ${pod.color}` : '1px solid #E0E0E0',
                  borderRadius: '16px',
                  position: 'relative',
                }}
              >
                {pod.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: pod.color,
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '100px',
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: pod.color,
                  marginBottom: '8px',
                }}>
                  {pod.ideal}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#050505', marginBottom: '8px' }}>
                  {pod.name}
                </h3>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '36px', fontWeight: 900, color: '#050505' }}>{pod.price}</span>
                  <span style={{ fontSize: '14px', color: '#666' }}>{pod.period}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>
                  {pod.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {pod.features.map((feature) => (
                    <li key={feature} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '13px',
                      color: '#666',
                      marginBottom: '8px',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke={pod.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={{
                  padding: '12px',
                  background: `${pod.color}10`,
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: pod.color, marginBottom: '4px' }}>
                    OUTCOME
                  </div>
                  <div style={{ fontSize: '13px', color: '#050505' }}>{pod.outcome}</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '14px',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: pod.popular ? 'none' : `1px solid ${pod.color}`,
                    cursor: 'pointer',
                    backgroundColor: pod.popular ? pod.color : 'transparent',
                    color: pod.popular ? '#fff' : pod.color,
                  }}
                >
                  Deploy This Pod
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
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
              }}>THE ADVANTAGE</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>
                The "Kalungi-Killer"
                <br />
                <span style={{ color: '#FF007F' }}>Advantage</span>
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Why pay a legacy agency $45,000 a month for billable hours and manual labor when
                you can deploy a Sovereign System for a fraction of the cost? Legacy agencies thrive
                on dependency; they want you to stay slow so they can bill more hours.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
              }}>
                Intelous thrives on Autonomy. We don't want you to depend on us; we want you to
                own a system that produces results with industrial precision. Our Pods are 75% more
                efficient because we have removed the human error from data management while
                keeping the human empathy in the strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div style={{
                  padding: '24px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#FF5F57', marginBottom: '8px' }}>
                    LEGACY AGENCY
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#050505', marginBottom: '4px' }}>
                    $45K+
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>per month</div>
                  <div style={{ fontSize: '12px', color: '#FF5F57', marginTop: '12px' }}>
                    Billable hours, dependency
                  </div>
                </div>
                <div style={{
                  padding: '24px',
                  background: 'rgba(255, 0, 127, 0.05)',
                  border: '2px solid #FF007F',
                  borderRadius: '12px',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#FF007F', marginBottom: '8px' }}>
                    INTELOUS POD
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#050505', marginBottom: '4px' }}>
                    $8.5K
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>per month</div>
                  <div style={{ fontSize: '12px', color: '#FF007F', marginTop: '12px' }}>
                    Sovereign system, autonomy
                  </div>
                </div>
              </div>
              <div style={{
                marginTop: '16px',
                padding: '16px',
                background: '#050505',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '14px',
                  color: '#FF007F',
                }}>
                  This is the end of the "Black Box" agency era.
                </span>
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
            }}>Ready to Deploy?</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Stop hiring heads and hoping for miracles. Deploy Productized Capacity in 48 hours
              and start booking the meetings that matter.
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
              Deploy Your Sovereign GTM Pod
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
