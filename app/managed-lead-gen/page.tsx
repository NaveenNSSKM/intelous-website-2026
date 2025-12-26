'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ManagedLeadGenPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <Header />
      
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
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
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#39FF14' }} />
              MANAGED LEAD GENERATION
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              QUALIFIED LEADS.
              <br />
              <span style={{ color: '#39FF14' }}>ZERO GUESSWORK.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Our managed lead generation service combines AI-powered targeting with human expertise 
              to deliver sales-ready leads directly to your pipeline. No black boxes, no mysteries—just 
              verified outcomes.
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
                  backgroundColor: '#39FF14',
                  color: '#050505',
                }}
              >
                Start Your Campaign
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
                View Case Studies
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
              { metric: '200M+', label: 'Data Points Analyzed', desc: 'Real-time intent signals' },
              { metric: '47%', label: 'Higher Conversion', desc: 'vs. traditional outbound' },
              { metric: '10x', label: 'ROI Average', desc: 'First 90 days' },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '32px',
                background: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '12px',
                textAlign: 'left',
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#39FF14',
                  marginBottom: '8px',
                }}>
                  {stat.metric}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#050505',
                  marginBottom: '4px',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                }}>
                  {stat.desc}
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
