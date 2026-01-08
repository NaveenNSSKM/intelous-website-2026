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
              color: '#94a3b8',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF007F' }} />
              BUILD LOGS
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              SUCCESS
              <br />
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>STORIES.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Real ventures. Real results. From concept to market-ready sovereignty in 70 days.
              See how we've helped ambitious founders close the Execution Gap and achieve total
              technical sovereignty.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'transparent' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {[
            {
              company: 'FinTech Disruptor',
              industry: 'Financial Services',
              challenge: 'Needed to validate B2B payment platform with enterprise clients in 90 days before Series A deadline. Internal team lacked GTM expertise and technical founders had never sold to enterprises.',
              solution: '10-Week MVP Sprint with full GTM integration. We built the core payment processing architecture on GCP microservices, integrated Kafka event pipelines for real-time transaction processing, and deployed a Growth Pod for enterprise outreach.',
              results: ['22 qualified enterprise leads in first month', 'Series A closed at $8M valuation', 'Full technical sovereignty transferred', 'Internal team trained and operating independently'],
              quote: 'Intelous Labs didn\'t just build our platform—they built our entire go-to-market engine. When we closed our Series A, the investors were impressed that we owned every line of code.',
              founder: 'CEO, Stealth FinTech',
              timeline: '10 weeks',
            },
            {
              company: 'AI-Native SaaS',
              industry: 'Enterprise Software',
              challenge: 'Technical founders with deep AI expertise but zero GTM experience. Runway was shrinking and they needed to prove market fit before the next board meeting. Previous agency had burned through $40K with zero results.',
              solution: 'Discovery Hub deployment for verified decision-maker data, Growth Pod for multi-channel outreach, and BYX Studio for brand activation including 3D product showcases and founder brand content.',
              results: ['From 0 to 50 demos/month in 8 weeks', 'Brand recognition established in target market', 'Sustainable pipeline built on sovereign infrastructure', '98.2% email deliverability maintained'],
              quote: 'They understood our technical vision and translated it into revenue. For the first time, our sales motion matched the sophistication of our product.',
              founder: 'CTO, Enterprise AI Startup',
              timeline: '8 weeks',
            },
            {
              company: 'Healthcare Innovator',
              industry: 'HealthTech',
              challenge: 'Complex regulatory environment required precise messaging and verified decision-maker contacts. Previous outreach efforts had damaged domain reputation. Needed HIPAA-compliant workflows.',
              solution: 'Scale Pod with custom compliance workflows. The Clean Room verification process ensured 98% data accuracy. Sentiment-driven handoffs routed positive responses to specialized healthcare sales team.',
              results: ['98.2% email deliverability restored', '15% meeting conversion rate achieved', 'Zero compliance incidents', 'Full system transferred to internal RevOps'],
              quote: 'The Clean Room verification process gave us confidence in every outreach. We finally had a GTM engine that matched our clinical rigor.',
              founder: 'VP Sales, HealthTech Company',
              timeline: '12 weeks',
            },
          ].map((story, i) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'start',
                padding: '60px 0',
                borderBottom: i < 2 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FF007F',
                  }}>
                    {story.industry}
                  </span>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FF007F',
                    padding: '4px 8px',
                    background: 'rgba(57, 255, 20, 0.1)',
                    borderRadius: '4px',
                  }}>
                    {story.timeline}
                  </span>
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>
                  {story.company}
                </h3>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#94a3b8',
                    marginBottom: '8px',
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    THE CHALLENGE
                  </div>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.7 }}>
                    {story.challenge}
                  </p>
                </div>
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#94a3b8',
                    marginBottom: '8px',
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    THE SOLUTION
                  </div>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.7 }}>
                    {story.solution}
                  </p>
                </div>
              </div>

              <div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '32px',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#FF007F',
                    marginBottom: '16px',
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    THE RESULTS
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {story.results.map((result) => (
                      <li key={result} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '14px',
                        color: '#ffffff',
                        fontWeight: 600,
                        marginBottom: '12px',
                      }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#FF007F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  padding: '24px',
                  background: 'rgba(255, 0, 127, 0.1)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #FF007F',
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: '#ffffff',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                  }}>
                    "{story.quote}"
                  </p>
                  <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    — {story.founder}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'transparent' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>The Numbers That Matter</h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}>
            {[
              { value: '70', label: 'Days to Market', suffix: '' },
              { value: '98', label: 'Data Accuracy', suffix: '%' },
              { value: '20+', label: 'Avg. First Month Leads', suffix: '' },
              { value: '100', label: 'Ownership Transfer', suffix: '%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#FF007F', marginBottom: '8px' }}>
                  {stat.value}<span style={{ fontSize: '24px' }}>{stat.suffix}</span>
                </div>
                <div style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 24px',
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
              color: '#ffffff',
              margin: '16px 0',
            }}>Ready to Write Your Story?</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Join the founders who have closed the Execution Gap and achieved GTM sovereignty.
              Only 5 spots available for Q1 2026 cohort.
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
                color: '#fff',
              }}
            >
              Start Your 10-Week Sprint
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
