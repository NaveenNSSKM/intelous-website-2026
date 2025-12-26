'use client'

import { motion } from 'framer-motion'
import styles from './EventEngine.module.css'

export default function EventEngine() {
  return (
    <section className={styles.eventEngine}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionTag}>USE CASE</span>
          <h2 className={styles.sectionTitle}>The High-Fidelity Event Engine</h2>
          <p className={styles.sectionSubtitle}>Intelous Logic meets BYX Aesthetic</p>
          <p className={styles.description}>
            Events are the ultimate high-stakes GTM channel, yet most promotion feels like an 
            automated afterthought. We architect a cinematic attendance engine that dominates the noise.
          </p>
        </motion.div>

        <div className={styles.engineGrid}>
          <motion.div
            className={styles.engineCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M22 12L18 8M22 12L18 16M22 12H10M16 21.8C14.7 22.6 13.1 23 11.5 23C5.7 23 1 18.3 1 12.5S5.7 2 11.5 2C13.1 2 14.7 2.4 16 3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>The Push</h3>
            <p className={styles.cardLabel}>Intelous Logic</p>
            <p className={styles.cardDescription}>
              Our Discovery Hub identifies high-value VIPs based on intent signals, while Managed 
              Pods execute hyper-personalized multi-channel outreach across Email and LinkedIn.
            </p>
            <div className={styles.cardStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>200M+</span>
                <span className={styles.statLabel}>Intent Signals</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>VIP Accuracy</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.engineCard} ${styles.highlight}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>The Hook</h3>
            <p className={styles.cardLabel}>BYX Aesthetic</p>
            <p className={styles.cardDescription}>
              We produce 3D anamorphic "Invitation Trailers" and personalized video messages 
              for VIPs to ensure 10/10 registration rates. Cinematic quality that stops the scroll.
            </p>
            <div className={styles.cardVisual}>
              <div className={styles.renderLog}>
                <code>
                  <span className={styles.logOk}>[LOAD]</span> 4K Cinematic Texture Map... <span className={styles.logSuccess}>OK</span><br/>
                  <span className={styles.logOk}>[SYNC]</span> Human Vision Script → 3D Environment<br/>
                  <span className={styles.logOk}>[RENDER]</span> Ray-tracing Product Blueprint... <span className={styles.logSuccess}>DONE</span>
                </code>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.engineCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>The Experience</h3>
            <p className={styles.cardLabel}>On-Site Impact</p>
            <p className={styles.cardDescription}>
              We deploy 3D holographic displays and cinematic product showreels that anchor 
              the experience and drive demo bookings. Maximum ROI from every event investment.
            </p>
            <div className={styles.cardStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>10/10</span>
                <span className={styles.statLabel}>Registration Rate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>3x</span>
                <span className={styles.statLabel}>Demo Bookings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
