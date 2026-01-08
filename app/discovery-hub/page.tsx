'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function DiscoveryHubPage() {
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
              THE INTELLIGENCE ENGINE
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              THE DISCOVERY HUB.
              <br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>GROUND TRUTH.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              In a world drowning in outdated CSVs and "spray and pray" lists, the most valuable
              asset isn't just data—it's The Truth. We don't just find leads; we architect Ground
              Truth Intelligence.
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
              }}>MULTI-SOURCE AUTHORITY</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>The Sovereign Aggregator</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                We have moved past the era of the single data broker. No single database is 100%
                accurate, which is why the Discovery Hub is built as a Sovereign Aggregator. We
                query the world's most authoritative databases simultaneously.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['Apollo', 'Lusha', 'Clay', 'Hunter', 'Clearbit'].map((source) => (
                  <span key={source} style={{
                    padding: '8px 16px',
                    background: '#FAFAFA',
                    border: '1px solid #E0E0E0',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#050505',
                  }}>
                    {source}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {[
                { value: '200M+', label: 'Professionals' },
                { value: '40M', label: 'Accounts' },
                { value: '98%', label: 'Accuracy' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  padding: '24px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#FF007F', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#666', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
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
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
            }}>THE CLEAN ROOM</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Manual Verification Gate</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Technology finds the data, but Humans verify the truth. This is our "Clean Room"—the
              primary differentiator of the Intelous ecosystem.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                step: '01',
                title: 'LinkedIn Presence',
                description: 'Our auditors confirm active LinkedIn presence and recent activity signals.',
              },
              {
                step: '02',
                title: 'MX Record Verification',
                description: 'We verify MX records to ensure email deliverability before any outreach.',
              },
              {
                step: '03',
                title: 'Syntax Validation',
                description: 'Real-time email syntax validation to eliminate bounces and protect your domain.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  border: '1px solid #E0E0E0',
                  borderRadius: '16px',
                }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#FF007F',
                  marginBottom: '16px',
                  opacity: 0.3,
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                  {item.description}
                </p>
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
              }}>DEEP INTELLIGENCE</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>Firmographic Intelligence</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                We go far beyond the name and title to give your GTM team an unfair advantage.
                Our Discovery Hub appends over 200M data points including company revenue,
                department growth trends, funding rounds, and existing technology stacks.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Tech stack data via BuiltWith integration',
                  'Funding rounds and growth signals',
                  'Department hiring trends and growth velocity',
                  'Competitor signal detection',
                ].map((item) => (
                  <li key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '12px',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#FF007F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                background: '#050505',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
                  <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#666', fontFamily: "'IBM Plex Mono', monospace" }}>
                    firmographic_enrichment.log
                  </span>
                </div>
                <code style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#999',
                  lineHeight: 2,
                  display: 'block',
                }}>
                  <span style={{ color: '#FF007F' }}>[ENRICH]</span> Querying BuiltWith for tech stack...<br />
                  <span style={{ color: '#FF007F' }}>[FOUND]</span> Salesforce, HubSpot, Segment detected<br />
                  <span style={{ color: '#FF007F' }}>[ENRICH]</span> Checking Crunchbase funding data...<br />
                  <span style={{ color: '#FF007F' }}>[FOUND]</span> Series B: $15M (6 months ago)<br />
                  <span style={{ color: '#FF007F' }}>[SIGNAL]</span> Engineering team +40% in 90 days<br />
                  <span style={{ color: '#FF007F' }}>[INTENT]</span> HIGH-PRIORITY BUYING WINDOW<br />
                  <span style={{ color: '#fff' }}>[READY]</span> Lead enriched and verified ✓
                </code>
              </div>
            </motion.div>
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
              }}>ONE-CLICK SYNC</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>The GTM Pipe</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Intelligence is only power if it is actionable. We have closed the Execution Gap.
                Our Discovery Hub is natively hard-wired into the Intelous OS. With one click,
                your verified lead lists are published directly to your campaign queue.
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
                See the Discovery Hub in Action
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                padding: '32px',
                background: '#fff',
                border: '2px solid #FF007F',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#666', marginBottom: '16px' }}>
                From Lead Discovery to First Touchpoint
              </div>
              <div style={{ fontSize: '64px', fontWeight: 900, color: '#FF007F', marginBottom: '8px' }}>
                20 min
              </div>
              <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Average Pipeline Deploy Time
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
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
            }}>SOVEREIGN FUEL GUARANTEE</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Domain Insurance</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              When you use the Discovery Hub, you aren't just buying "leads"; you are buying Domain
              Insurance. Because our data is manually scrubbed and multi-source verified, your bounce
              rates plummet and your engagement rates soar. You own the data. You own the system.
              You own the outcome.
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
              Deploy the Discovery Hub
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
