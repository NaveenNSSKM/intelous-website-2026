'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function VentureServicesPage() {
  const { setUniverse } = useUniverse()

  useEffect(() => {
    setUniverse('build')
  }, [setUniverse])

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <Header />
      
      <section style={{
        minHeight: '80vh',
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
              VENTURE SERVICES
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              BUILD-OPERATE-
              <br />
              <span style={{ color: '#FF007F' }}>TRANSFER.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              We embed with your team for 10 weeks. From strategic PRD to your first 20 
              qualified leads—we build and operate until you are ready to captain the ship. 
              No consultants. No slide decks. Just execution.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '16px 32px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#666',
                  background: 'transparent',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                View the Process
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop: '80px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { week: 'Week 1-2', title: 'Discovery & Strategy', desc: 'Deep dive into your market, customers, and competitive landscape' },
              { week: 'Week 3-6', title: 'Build Phase', desc: 'PRD, technical architecture, MVP development, and GTM setup' },
              { week: 'Week 7-10', title: 'Operate & Transfer', desc: 'Launch, iterate, train your team, and hand over the controls' },
            ].map((phase, i) => (
              <div key={i} style={{
                padding: '32px',
                background: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '12px',
                textAlign: 'left',
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FF007F',
                  marginBottom: '8px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: '1px',
                }}>
                  {phase.week}
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#050505',
                  marginBottom: '12px',
                }}>
                  {phase.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: 1.6,
                }}>
                  {phase.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
