'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
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
              SERVICES & USE CASES
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              GTM SERVICES
              <br />
              <span style={{ color: '#39FF14' }}>THAT SCALE.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              From pipeline generation to full-funnel orchestration, our services are 
              designed for B2B companies ready to scale. Choose your path to predictable revenue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { 
                title: 'Managed Lead Generation', 
                desc: 'End-to-end lead gen with verified outcomes and transparent reporting',
                link: '/managed-lead-gen'
              },
              { 
                title: 'Intelous OS Platform', 
                desc: 'Your GTM command center for unified data and intelligent workflows',
                link: '/intelous-os'
              },
              { 
                title: 'Account-Based Marketing', 
                desc: 'Precision targeting and personalized engagement for enterprise deals',
                link: '/discovery-hub'
              },
              { 
                title: 'BYX Creative Studio', 
                desc: 'Performance-driven creative that converts traffic into pipeline',
                link: '/byx-studio'
              },
            ].map((service, i) => (
              <motion.a 
                key={i} 
                href={service.link}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  textAlign: 'left',
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#050505',
                  marginBottom: '12px',
                }}>
                  {service.title}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}>
                  {service.desc}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#39FF14',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
