'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function ServicesPage() {
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
              THE SOVEREIGN ARCHITECTURE
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              THE SCALE
              <br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>SOLUTIONS INDEX.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              In the 2026 market, "outreach" is a commodity, but Orchestration is a superpower.
              The Scale Solutions Index is our answer—a consolidated ecosystem of intelligence,
              logic, and creative authority.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'The Discovery Hub',
                subtitle: 'Ground Truth Intelligence',
                description: 'Multi-source aggregator that cross-references over 200M+ professionals and 40M accounts globally.',
                features: ['Manual Verification Gate', 'Human-in-the-Loop (98% accuracy)', 'Deep Enrichment via BuiltWith'],
                link: '/discovery-hub',
                color: '#FF007F',
              },
              {
                title: 'The Intelous OS',
                subtitle: 'Unified Command Center',
                description: 'A modular GTM suite optimized for high-velocity teams who need a single source of truth.',
                features: ['Omnichannel Execution', 'The Sentiment Brain', 'Technical Sovereignty'],
                link: '/intelous-os',
                color: '#FF007F',
              },
              {
                title: 'Managed GTM Pods',
                subtitle: 'Outcome Capacity',
                description: '"Digital Headcount" through productized service units that combine elite strategy with AI-native execution.',
                features: ['Launch Pod ($4K/mo)', 'Growth Pod ($8.5K/mo)', 'Scale Pod ($15K+/mo)'],
                link: '/managed-lead-gen',
                color: '#4A90E2',
              },
              {
                title: 'BYX Studio',
                subtitle: 'Cinematic Aesthetic Authority',
                description: 'The sister creative arm architecting the "Aesthetic WOW" that fuels our "Logic Engine."',
                features: ['Venture 3D Showcases', 'Founder Personal Brand OS', 'Immersive Event Tech'],
                link: '/byx-studio',
                color: '#FF007F',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={service.link} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ y: -10, borderColor: service.color }}
                    style={{
                      padding: '32px',
                      background: '#FAFAFA',
                      border: '1px solid #E0E0E0',
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '11px',
                      fontWeight: 600,
                      color: service.color,
                      marginBottom: '8px',
                    }}>
                      {service.subtitle}
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                      {service.features.map((feature) => (
                        <li key={feature} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          color: '#666',
                          marginBottom: '8px',
                        }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: service.color,
                    }}>
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
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
            }}>USE CASE</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>The High-Fidelity Event Engine</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Intelous Logic meets BYX Aesthetic. Most B2B events fail because outreach feels
              like spam and the digital experience feels cheap. We architect a cinematic attendance
              engine that dominates the noise.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {[
              {
                phase: 'The Push',
                source: 'Intelous',
                description: 'Discovery Hub identifies VIPs based on intent, Managed Pods execute hyper-personalized multi-channel outreach.',
                color: '#FF007F',
              },
              {
                phase: 'The Hook',
                source: 'BYX',
                description: '3D anamorphic "Invitation Trailers" and personalized video messages for 10/10 registration rates.',
                color: '#FF007F',
              },
              {
                phase: 'The Outcome',
                source: 'Combined',
                description: 'High-intent attendance + automated BANT-qualified meeting scheduling on-site to maximize ROI.',
                color: '#4A90E2',
              },
            ].map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  borderTop: `4px solid ${item.color}`,
                  borderRadius: '0 0 16px 16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: item.color,
                  marginBottom: '8px',
                }}>
                  {item.source}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                  {item.phase}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
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
            }}>Ready to Orchestrate?</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              We provide a unified Go-to-Market Operating System built to power the future of
              outbound campaigns, sales intelligence, and predictable revenue.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                Deploy Your GTM Pod
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '20px 40px',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '1px solid #E0E0E0',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  color: '#050505',
                }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
