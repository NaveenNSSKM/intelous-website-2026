'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function PaignAIPage() {
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
              R&D LABS PROJECT
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              PAIGN
              <br />
              <span style={{ color: '#FF007F' }}>ARTIFICIAL INTELLIGENCE.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Our flagship R&D project. Paign.ai is an AI-powered content generation 
              platform designed specifically for B2B marketing teams. Create campaign 
              content at scale without sacrificing quality or brand consistency.
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
                Join the Waitlist
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
                Read the Whitepaper
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
              { title: 'Brand-Aware Generation', desc: 'AI that learns your voice, tone, and messaging guidelines' },
              { title: 'Multi-Format Output', desc: 'From social posts to whitepapers—all from a single brief' },
              { title: 'Campaign Orchestration', desc: 'Generate complete multi-channel campaigns in minutes' },
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              marginTop: '60px',
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.05) 0%, rgba(57, 255, 20, 0.05) 100%)',
              border: '1px solid #E0E0E0',
              borderRadius: '12px',
            }}
          >
            <p style={{
              fontSize: '14px',
              color: '#666',
              fontFamily: "'IBM Plex Mono', monospace",
            }}>
              STATUS: Private Beta | Expected Launch: Q2 2025
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
