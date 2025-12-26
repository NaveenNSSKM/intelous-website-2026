'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BYXStudioPage() {
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
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#39FF14' }} />
              CREATIVE STUDIO
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              BYX
              <br />
              <span style={{ color: '#39FF14' }}>CREATIVE STUDIO.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              High-impact creative that converts. BYX Studio delivers performance-driven 
              design, video, and content production optimized for B2B demand generation. 
              From landing pages to full campaigns—built for results.
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
                Start a Project
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
                View Portfolio
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
              { title: 'Landing Pages', desc: 'Conversion-optimized pages that turn traffic into pipeline' },
              { title: 'Video Production', desc: 'Product demos, testimonials, and brand content' },
              { title: 'Campaign Assets', desc: 'Full creative packages for multi-channel campaigns' },
            ].map((feature, i) => (
              <div key={i} style={{
                padding: '32px',
                background: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '12px',
                textAlign: 'left',
              }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#050505',
                  marginBottom: '12px',
                }}>
                  {feature.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: 1.6,
                }}>
                  {feature.desc}
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
