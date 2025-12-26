'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function SuccessStoriesPage() {
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
              SUCCESS STORIES
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              VENTURES
              <br />
              <span style={{ color: '#FF007F' }}>WE HAVE BUILT.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              From concept to market-ready product in 10 weeks. Here are the companies 
              we have helped launch and scale through our Build-Operate-Transfer model.
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
                company: 'TechFlow AI',
                industry: 'Enterprise SaaS',
                result: 'Seed to Series A in 8 months',
                desc: 'Built MVP, acquired first 20 enterprise customers, established GTM playbook'
              },
              { 
                company: 'HealthBridge',
                industry: 'HealthTech',
                result: '$2.5M ARR in Year 1',
                desc: 'From idea to market leader in digital health records management'
              },
              { 
                company: 'SupplySync',
                industry: 'Supply Chain',
                result: '40+ Enterprise Clients',
                desc: 'End-to-end supply chain visibility platform built and scaled'
              },
            ].map((story, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  textAlign: 'left',
                }}
              >
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FF007F',
                  marginBottom: '8px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: '1px',
                }}>
                  {story.industry}
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#050505',
                  marginBottom: '8px',
                }}>
                  {story.company}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#39FF14',
                  marginBottom: '12px',
                }}>
                  {story.result}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: 1.6,
                }}>
                  {story.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
