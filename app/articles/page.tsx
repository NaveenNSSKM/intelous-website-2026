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
    <main className="min-h-screen relative text-white selection:bg-[#FF007F] selection:text-white">
      {/* Dark Mode Background with Gradient */}
      <div className="fixed inset-0 -z-10 bg-[#020617]">
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            background: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)'
          }}
        />
        <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-3xl" />
      </div>
      <Header />

      <section style={{
        minHeight: '60vh',
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
              color: '#94a3b8',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF007F' }} />
              ARTICLES & INSIGHTS
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              BUILD
              <br />
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>KNOWLEDGE BASE.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Deep dives into venture building, GTM strategy, and technical architecture.
              Frameworks and lessons learned from building ventures that achieve sovereignty.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'transparent' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '48px',
              background: 'rgba(255, 0, 127, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              marginBottom: '40px',
              cursor: 'pointer',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '16px',
            }}>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                fontWeight: 600,
                color: '#FF007F',
                padding: '4px 12px',
                background: 'rgba(255, 0, 127, 0.1)',
                borderRadius: '100px',
              }}>
                FEATURED
              </span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>12 min read</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
              The Execution Gap: Why 90% of Ventures Fail Before Launch
            </h2>
            <p style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '24px' }}>
              Most venture building fails because it is treated like a creative experiment rather
              than an industrial operation. This deep dive explores the gap between vision and
              execution, and how the Build-Operate-Transfer model closes it.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#FF007F',
            }}>
              Read Article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'The 10-Week Venture Sprint Framework',
                category: 'Venture Building',
                readTime: '8 min read',
                desc: 'How we compress 6 months of work into 10 weeks without cutting corners. A detailed breakdown of each phase.',
              },
              {
                title: 'Why Most MVPs Fail (And How to Fix It)',
                category: 'Product Strategy',
                readTime: '6 min read',
                desc: 'The execution gap between idea and market-ready product—and the frameworks to bridge it.',
              },
              {
                title: 'Build-Operate-Transfer: The New Venture Model',
                category: 'Business Model',
                readTime: '10 min read',
                desc: 'Why we build with you, not for you—and then hand over the keys to complete sovereignty.',
              },
              {
                title: 'AI-Native Architecture for B2B Ventures',
                category: 'Technical',
                readTime: '15 min read',
                desc: 'How to build modular, event-driven platforms that scale with your venture—from Kafka to CrewAI.',
              },
              {
                title: 'The Human Moat in the Age of AI',
                category: 'GTM Strategy',
                readTime: '7 min read',
                desc: 'Why human strategists remain the center of every successful campaign, even with AI automation.',
              },
              {
                title: 'From PRD to 20 Qualified Leads in 70 Days',
                category: 'Case Study',
                readTime: '9 min read',
                desc: 'A complete walkthrough of a real 10-Week Sprint, including technical decisions and GTM deployment.',
              },
            ].map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: '#FF007F' }}
                style={{
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
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
                    color: '#94a3b8',
                  }}>
                    {article.readTime}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                }}>
                  {article.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'transparent' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>Subscribe to Build Insights</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Weekly frameworks, case studies, and tactical insights on venture building and GTM strategy.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  width: '300px',
                  outline: 'none',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                }}
              />
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
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
