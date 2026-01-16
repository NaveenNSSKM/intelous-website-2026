'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function VentureServicesPage() {
  const { setUniverse } = useUniverse()

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
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Video with "Industrial" Tech Overlay */}
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
              opacity: 1, // Full visibility for HD look
              filter: 'contrast(1.05)', // Subtle contrast boost only
            }}
          >
            <source src="/venture-services.mp4" type="video/mp4" />
          </video>

          {/* Layer 1: Tech Grid Pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.3
          }} />



          {/* Layer 3: Cinematic Vignette & Color Grade */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(2, 6, 23, 0.4) 0%, #020617 90%)',
            mixBlendMode: 'multiply'
          }} />

          {/* Layer 4: Deep Blue/Purple Tint */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(57, 133, 241, 0.1), rgba(116, 12, 198, 0.1))',
            mixBlendMode: 'overlay'
          }} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <InboxBadge text="THE ARCHITECT'S MANIFESTO" />

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 54px)', // Reduced for better balance
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: 1,
              letterSpacing: '-0.02em', // Slightly less tight
              textShadow: '0 4px 30px rgba(0,0,0,0.5)'
            }}>
              VENTURE SOLUTIONS
              <br />
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
                INDEX
              </span>
            </h1>

            <p style={{
              fontSize: '16px', // Reduced from 20px
              color: '#e2e8f0',
              maxWidth: '720px', // Slightly narrower for readability
              margin: '0 auto 40px',
              lineHeight: 1.8, // Increased line height for elegance
              fontWeight: 400,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              Most venture building fails because it is treated like a creative experiment rather than
              an industrial operation. Intelous Labs exists to break this cycle. We act as your
              on-demand co-founding team to architect, build, and launch your product with the
              precision of a sovereign system.
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
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#94a3b8',
            }}>THE INDUSTRIAL MENU</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>Core Venture Services</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              The specialized digital workforce and technical infrastructure we deploy for your vision.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'Strategic PRD Architecture',
                description: 'Detailed product blueprints that map every microservice and user flow before a single line of code is written.',
                icon: '📋',
              },
              {
                title: 'AI-Native Core Development',
                description: 'Building modular, agent-based systems on GCP and Kubernetes, not just "bolted-on" LLM features.',
                icon: '🤖',
              },
              {
                title: 'Agentic Workflow Design',
                description: 'Creating specialized digital workers—Discovery, Prompt, and Scoring agents—to handle 80% of repetitive labor.',
                icon: '⚙️',
              },
              {
                title: 'High-Fidelity Branding (BYX)',
                description: 'Series-A quality brand identity, 3D product renders, and cinematic "Founder Story" assets.',
                icon: '🎨',
              },
              {
                title: 'Venture Talent Handoff',
                description: 'Internal technical vetting and hiring of your permanent in-house team, managed within our ecosystem.',
                icon: '👥',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
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
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            }}>70-DAY ENGINEERING SPRINT</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>The 10-Week MVP Sprint</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              We move at the speed of your vision, utilizing a rigorous 70-day engineering sprint
              to move from raw data or a simple prompt to your first 20 qualified leads.
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #FF007F 0%, #FF007F 50%, #4A90E2 100%)',
              transform: 'translateX(-50%)',
            }} />

            {[
              {
                phase: 'Weeks 01–02',
                title: 'Foundation',
                items: [
                  'Deep ICP research and strategic Product Requirement Documents (PRDs)',
                  'High-fidelity wireframes and user flow mapping',
                  'Brand architecture and positioning strategy',
                ],
                color: '#FF007F',
                align: 'right',
              },
              {
                phase: 'Weeks 03–08',
                title: 'The Build',
                items: [
                  'Core development of your modular, event-driven platform',
                  'Building the "Brain" using microservices and Kafka pipelines',
                  'PostgreSQL storage and agentic workflow implementation',
                ],
                color: '#FF007F',
                align: 'left',
              },
              {
                phase: 'Weeks 09–10',
                title: 'Ignition',
                items: [
                  'We don\'t just "deploy"—we launch your first GTM campaign',
                  'Hand over your first 20 qualified leads',
                  'Market traction validation for your next funding round',
                ],
                color: '#4A90E2',
                align: 'right',
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: phase.align === 'right' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{
                  display: 'flex',
                  justifyContent: phase.align === 'right' ? 'flex-end' : 'flex-start',
                  marginBottom: '60px',
                  paddingLeft: phase.align === 'left' ? '52%' : '0',
                  paddingRight: phase.align === 'right' ? '52%' : '0',
                }}
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `2px solid ${phase.color}`,
                  borderRadius: '16px',
                  padding: '32px',
                  maxWidth: '500px',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{
                    position: 'absolute',
                    [phase.align === 'right' ? 'right' : 'left']: '-42px',
                    top: '32px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: phase.color,
                    border: '4px solid #020617',
                    boxShadow: '0 0 0 2px ' + phase.color,
                  }} />
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    color: phase.color,
                  }}>
                    {phase.phase}
                  </span>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', margin: '8px 0 16px' }}>
                    {phase.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {phase.items.map((item) => (
                      <li key={item} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '14px',
                        color: '#cbd5e1',
                        marginBottom: '12px',
                        lineHeight: 1.6,
                      }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}>
                          <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke={phase.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'transparent' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
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
              }}>BUILD-OPERATE-TRANSFER</span>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>
                Dependency is Death.<br />
                <span style={{ color: '#FF007F' }}>Sovereignty is Life.</span>
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Dependency is a business model for agencies, but it is a death sentence for startups.
                Our Build-Operate-Transfer model is architected for your eventual independence.
              </p>

              <div style={{ marginBottom: '24px' }}>
                {[
                  { phase: 'BUILD', desc: 'We architect the sovereign system using high-fidelity primitives—GCP, microservices, and event-driven logic.', color: '#FF007F' },
                  { phase: 'OPERATE', desc: 'We run the engine to prove traction, utilizing our real-time Scoring & Intent System to validate your ICP.', color: '#FF007F' },
                  { phase: 'TRANSFER', desc: 'Once traction is proven, we migrate the entire technical infrastructure and operational knowledge to your team.', color: '#4A90E2' },
                ].map((item) => (
                  <div key={item.phase} style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '20px',
                  }}>
                    <div style={{
                      width: '80px',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      fontWeight: 700,
                      color: item.color,
                    }}>
                      {item.phase}
                    </div>
                    <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{
                background: '#0a0a0a',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#94a3b8',
                  marginBottom: '16px',
                }}>
                  infrastructure_audit.log
                </div>
                <code style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  color: '#cbd5e1',
                  lineHeight: 2.2,
                  display: 'block',
                }}>
                  <span style={{ color: '#FF007F' }}>[ARCHITECTURE]</span> Decoupled microservices on Kafka<br />
                  <span style={{ color: '#FF007F' }}>[STORAGE]</span> PostgreSQL + Redis caching layer<br />
                  <span style={{ color: '#FF007F' }}>[AGENTS]</span> CrewAI-style orchestration model<br />
                  <span style={{ color: '#FF007F' }}>[INTELLIGENCE]</span> Real-time sentiment analysis<br />
                  <span style={{ color: '#FF007F' }}>[SCALING]</span> Independent service scaling enabled<br />
                  <span style={{ color: '#4A90E2' }}>[HANDOFF]</span> Documentation complete<br />
                  <span style={{ color: '#4A90E2' }}>[HANDOFF]</span> Team training scheduled<br />
                  <span style={{ color: '#fff' }}>[STATUS]</span> <span style={{ color: '#FF007F' }}>SOVEREIGNTY READY</span>
                </code>
              </div>
            </motion.div>
          </div>
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
            }}>INTERNAL HIRING</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>Venture Talent Handoff</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              A system is only as good as the humans who captain it. We don't just send you resumes;
              we technically vet your founding engineers within our own lab environment.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              { title: 'Technical Vetting', desc: 'We evaluate candidates on the exact stack and architecture we\'ve built for you.' },
              { title: 'Knowledge Transfer', desc: 'Candidates learn the Kafka event-loops, Gemini prompt structures, and scoring logic.' },
              { title: 'Culture Fit', desc: 'We find humans who will grow the ship we built, ensuring long-term independence.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.1) 0%, rgba(57, 255, 20, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: '#FF007F',
                  fontWeight: 700,
                  fontSize: '20px',
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
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
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#94a3b8',
            }}>Q1 2026 COHORT</span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '16px 0',
            }}>The Venture Architecture Diagnostic</h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              We are not a high-volume factory; we are a high-fidelity laboratory for high-ticket
              innovators. We only take on five partners for our Q1 2026 cohort. Submit your mission
              details to undergo our Venture Architecture Diagnostic.
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
              Submit Your Mission Details
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
