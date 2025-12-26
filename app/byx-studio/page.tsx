'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function BYXStudioPage() {
  const { setUniverse } = useUniverse()

  useEffect(() => {
    setUniverse('scale')
  }, [setUniverse])

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA' }}>
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
              color: '#666',
              padding: '10px 20px',
              background: '#fff',
              border: '1px solid #E0E0E0',
              borderRadius: '100px',
              marginBottom: '32px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#39FF14' }} />
              THE AESTHETIC AUTHORITY
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#050505',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}>
              IN A NOISY WORLD,
              <br />
              <span style={{ color: '#FF007F' }}>YOU NEED TO SCREAM.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Most companies treat their visuals as an afterthought, using flat screenshots and 
              stock templates that scream "amateur." BYX Studio is the sister creative arm of Intelous, 
              specialized in architecting the Sovereign Authority your brand deserves.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
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
              color: '#666',
            }}>VISUALIZING THE GLASS BOX</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Venture 3D Showcases</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              People cannot trust what they cannot see. If your product is a complex technical 
              "Glass Box," you need a visual medium that exposes its brilliance.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: 'Ultra-Realistic Product Renders',
                description: 'Ray-traced 3D environments that explain how your data flows and how your logic works.',
                icon: '🎨',
              },
              {
                title: 'Animated Software Blueprints',
                description: 'Product storytelling for the high-stakes buyer—visualizing the invisible.',
                icon: '🔧',
              },
              {
                title: 'Technical Architecture Viz',
                description: 'Prove your technical superiority with stunning architectural visualizations.',
                icon: '🏗️',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: '#FF007F' }}
                style={{
                  padding: '32px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#FAFAFA' }}>
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
                color: '#666',
              }}>THE HUMAN MOAT</span>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#050505',
                margin: '16px 0',
              }}>Founder Brand OS</h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                In an era of deepfakes and robotic automation, Human Trust is the only currency 
                that matters. People buy from founders they recognize and leaders they respect.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Our Founder Brand OS is designed to turn CEOs into Key Opinion Leaders (KOLs) 
                without the 40-hour-a-week content grind. We produce cinematic vertical reels 
                and AI-driven "Newshour" content that anchors your human face to your automated outreach.
              </p>
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
                Build Your Brand OS
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.05) 0%, rgba(57, 255, 20, 0.05) 100%)',
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                padding: '32px',
              }}>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#666',
                  marginBottom: '20px',
                }}>
                  founder_brand.pipeline
                </div>
                {[
                  { step: 'Cinematic Vertical Reels', status: 'ACTIVE' },
                  { step: 'AI-Driven Newshour Content', status: 'ACTIVE' },
                  { step: 'LinkedIn KOL Strategy', status: 'ACTIVE' },
                  { step: 'Human Face → Automated Outreach Sync', status: 'ACTIVE' },
                ].map((item, i) => (
                  <div key={item.step} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: '#fff',
                    borderRadius: '8px',
                    marginBottom: '8px',
                  }}>
                    <span style={{ fontSize: '14px', color: '#050505' }}>{item.step}</span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '10px',
                      color: '#39FF14',
                      padding: '4px 8px',
                      background: 'rgba(57, 255, 20, 0.1)',
                      borderRadius: '4px',
                    }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
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
              color: '#666',
            }}>CINEMATIC ATTENDANCE</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>The High-Fidelity Event Engine</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Events are the ultimate high-stakes GTM channel. BYX Studio transforms event GTM 
              by architecting a Cinematic Attendance Engine.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {[
              {
                title: 'The Hook',
                description: '3D anamorphic "Invitation Trailers" that make your summit feel like a cinematic premiere.',
                color: '#FF007F',
              },
              {
                title: 'The Logic',
                description: 'Assets injected into Intelous Managed Pod sequences for hyper-personalized VIP outreach.',
                color: '#39FF14',
              },
              {
                title: 'The Experience',
                description: '3D holographic displays and cinematic showreels that anchor the experience and drive demos.',
                color: '#4A90E2',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: '#FAFAFA',
                  borderTop: `4px solid ${item.color}`,
                  borderRadius: '0 0 16px 16px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#050505', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#050505' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#666',
            }}>PROCESS PORN</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#fff',
              margin: '16px 0',
            }}>The Creative Lab</h2>
            <p style={{
              fontSize: '18px',
              color: '#999',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              We don't hide our craft; we invite you into the lab. Just as Intelous OS exposes 
              its data logs, BYX Studio exposes its Creative Precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: '#111',
              borderRadius: '12px',
              padding: '24px',
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '20px',
            }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
              <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#666' }}>byx_render.log</span>
            </div>
            <code style={{ fontSize: '13px', color: '#999', lineHeight: 2.2, display: 'block' }}>
              <span style={{ color: '#FF007F' }}>[LOAD]</span> 4K Cinematic Texture Map... <span style={{ color: '#39FF14' }}>OK</span><br/>
              <span style={{ color: '#FF007F' }}>[SYNC]</span> Human Vision Script #9021 → 3D Environment<br/>
              <span style={{ color: '#FF007F' }}>[RENDER]</span> Ray-tracing Sovereign Product Blueprint... <span style={{ color: '#39FF14' }}>DONE</span><br/>
              <span style={{ color: '#4A90E2' }}>[QUALITY]</span> 4K resolution verified<br/>
              <span style={{ color: '#4A90E2' }}>[EXPORT]</span> Preparing deployment package...<br/>
              <span style={{ color: '#39FF14' }}>[DEPLOY]</span> Asset auto-injected into Intelous GTM Pod.<br/>
              <span style={{ color: '#fff' }}>[STATUS]</span> <span style={{ color: '#39FF14' }}>CREATIVE SOVEREIGNTY ACHIEVED</span>
            </code>
          </motion.div>
        </div>
      </section>

      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.05) 0%, rgba(57, 255, 20, 0.05) 100%)',
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
              color: '#666',
            }}>VENTURE PARTNER SYNERGY</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#050505',
              margin: '16px 0',
            }}>Logic + Aesthetic = Authority</h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              BYX Studio is not a separate vendor; we are your Venture Partner. BYX assets are 
              a standard component of our Universe A Scale Pods and our Universe B 10-Week Sprints. 
              We ensure your brand looks as professional as your system operates.
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
              Start a Creative Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
