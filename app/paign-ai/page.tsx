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

  // Inline Badge Component with Transparent Background and Spinning Border
  const InboxBadge = ({ text, color = "#ff007f" }: { text: string; color?: string }) => {
    return (
      <div style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '9999px',
        marginBottom: '24px',
      }}>
        {/* Border Container with Mask */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '9999px',
          padding: '1px', // Border Thickness
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          overflow: 'hidden',
        }}>
          {/* Spinning Gradient */}
          <motion.div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: `conic-gradient(transparent 0deg, ${color} 60deg, transparent 120deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </div>

        {/* Inner Content (Transparent) */}
        <div style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7px 19px',
          borderRadius: '9999px',
          backgroundColor: 'transparent', // Fully transparent
          zIndex: 1
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: '#fff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            {text}
          </span>
        </div>
      </div>
    )
  }

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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1, // Full visibility
              filter: 'saturate(1.1) contrast(1.1)', // Natural HD enhancement
            }}
          >
            <source src="/paign.ai.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.3) 0%, rgba(2, 6, 23, 0.5) 50%, rgba(2, 6, 23, 0.95) 100%)',
          }} />
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <InboxBadge text="R&D LABS PROJECT" />

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 54px)', // Reduced size
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              PAIGN.AI
              <br />
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>THE CAMPAIGN BRAIN.</span>
            </h1>

            <p style={{
              fontSize: '16px', // Reduced size
              color: '#e2e8f0', // Lighter for better contrast on video
              maxWidth: '720px',
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Our flagship R&D project. Paign.ai is the AI-powered campaign orchestration
              engine that powers the Intelous ecosystem. It's the "Specialized Digital Worker"
              that thinks like a human strategist but executes at machine velocity.
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
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.1)', // Slightly more visible background
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Read the Technical Spec
              </motion.button>
            </div>
          </motion.div>
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
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#94a3b8',
            }}>THE ARCHITECTURE</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>Agentic Workflow Design</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Paign.ai uses a CrewAI-style orchestration model where specialized digital
              workers handle discovery, message creation, and campaign execution autonomously.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                agent: 'Discovery Agent',
                role: 'Auto-finds leads matching target profile',
                status: 'ACTIVE',
                color: '#FF007F',
              },
              {
                agent: 'Research Agent',
                role: 'Identifies competitor signals and benchmarks',
                status: 'ACTIVE',
                color: '#FF007F',
              },
              {
                agent: 'Prompt Agent',
                role: 'Generates hyper-personalized messaging',
                status: 'ACTIVE',
                color: '#FF007F',
              },
              {
                agent: 'Scoring Agent',
                role: 'Classifies responses by sentiment and intent',
                status: 'ACTIVE',
                color: '#FF007F',
              },
              {
                agent: 'Execution Agent',
                role: 'Launches multi-channel sequences',
                status: 'ACTIVE',
                color: '#FF007F',
              },
              {
                agent: 'Optimization Agent',
                role: 'A/B tests and refines based on results',
                status: 'BETA',
                color: '#FFBD2E',
              },
            ].map((item, i) => (
              <motion.div
                key={item.agent}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ borderColor: item.color }}
                style={{
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>{item.agent}</h3>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 600,
                    color: item.color,
                    padding: '4px 8px',
                    background: `${item.color}20`,
                    borderRadius: '4px',
                  }}>
                    {item.status}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'transparent' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                color: '#94a3b8',
              }}>TECHNICAL SOVEREIGNTY</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#ffffff',
                margin: '16px 0',
              }}>Built for Autonomy</h2>
              <p style={{
                fontSize: '16px',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Paign.ai is built on a modular, event-driven platform that can adapt to any
                B2B team's workflow. The architecture ensures you own every component.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Decoupled microservices on Apache Kafka',
                  'PostgreSQL for structured entity storage',
                  'Redis for in-memory session caching',
                  'Real-time sentiment analysis pipeline',
                  'Predictive thresholds for human-level nuance',
                ].map((item) => (
                  <li key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    marginBottom: '12px',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#FF007F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                background: '#0a0a0a',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
                  <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#94a3b8', fontFamily: "'IBM Plex Mono', monospace" }}>
                    paign_orchestration.log
                  </span>
                </div>
                <code style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#cbd5e1',
                  lineHeight: 2.2,
                  display: 'block',
                }}>
                  <span style={{ color: '#FF007F' }}>[DISCOVERY]</span> Querying target profiles...<br />
                  <span style={{ color: '#FF007F' }}>[FOUND]</span> 847 matches in ICP segment<br />
                  <span style={{ color: '#FF007F' }}>[RESEARCH]</span> Enriching with firmographics...<br />
                  <span style={{ color: '#FF007F' }}>[DONE]</span> Tech stack + funding appended<br />
                  <span style={{ color: '#FF007F' }}>[PROMPT]</span> Generating personalized sequences...<br />
                  <span style={{ color: '#FF007F' }}>[OK]</span> 847 unique messages created<br />
                  <span style={{ color: '#FF007F' }}>[EXECUTE]</span> Launching multi-channel campaign<br />
                  <span style={{ color: '#FF007F' }}>[LIVE]</span> Email + LinkedIn synchronized<br />
                  <span style={{ color: '#4A90E2' }}>[SCORING]</span> Monitoring sentiment pipeline...<br />
                  <span style={{ color: '#fff' }}>[STATUS]</span> <span style={{ color: '#FF007F' }}>CAMPAIGN ACTIVE</span>
                </code>
              </div>
            </motion.div>
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
            <div style={{
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              marginBottom: '40px',
            }}>
              <p style={{
                fontSize: '14px',
                color: '#cbd5e1',
                fontFamily: "'IBM Plex Mono', monospace",
              }}>
                STATUS: <span style={{ color: '#FF007F' }}>Private Beta</span> | Expected Public Launch: <span style={{ color: '#FF007F' }}>Q2 2026</span>
              </p>
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>Get Early Access</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Join the waitlist to be among the first to deploy Paign.ai for your GTM operations.
              Early access includes direct integration support and custom agent configuration.
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
              Join the Waitlist
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
