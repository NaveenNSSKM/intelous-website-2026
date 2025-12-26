'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function ArticlesPage() {
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
              ARTICLES & INSIGHTS
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              BUILD
              <br />
              <span style={{ color: '#FF007F' }}>KNOWLEDGE BASE.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Insights, frameworks, and lessons learned from building ventures. 
              Deep dives into venture building, GTM strategy, and technical architecture.
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
                title: 'The 10-Week Venture Sprint Framework',
                category: 'Venture Building',
                readTime: '8 min read',
                desc: 'How we compress 6 months of work into 10 weeks without cutting corners'
              },
              { 
                title: 'Why Most MVPs Fail (And How to Fix It)',
                category: 'Product Strategy',
                readTime: '6 min read',
                desc: 'The execution gap between idea and market-ready product'
              },
              { 
                title: 'Build-Operate-Transfer: The New Venture Model',
                category: 'Business Model',
                readTime: '10 min read',
                desc: 'Why we build with you, not for you—and then hand over the keys'
              },
            ].map((article, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{
                  padding: '32px',
                  background: '#fff',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#FF007F',
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: '1px',
                  }}>
                    {article.category}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: '#999',
                  }}>
                    {article.readTime}
                  </span>
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#050505',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}>
                  {article.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: 1.6,
                }}>
                  {article.desc}
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
