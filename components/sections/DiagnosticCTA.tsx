'use client'

import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import styles from './DiagnosticCTA.module.css'

const scaleContent = {
  tag: 'Q1 2026 COHORT',
  title: 'The Cohort of Sovereignty',
  description: 'We are not a high-volume factory; we are a high-fidelity laboratory. We are hand-selecting only 5 partners for our Q1 2026 cohort to ensure our human strategists can maintain 10/10 oversight on every pod.',
  cta: 'Submit Your Diagnostic',
  reward: 'Receive a custom GTM Strategy Preview based on your own data within 24 hours of submission.',
}

const buildContent = {
  tag: 'ARCHITECTURE SESSION',
  title: 'The Venture Architecture Diagnostic',
  description: 'We only take on five partners for our Q1 2026 cohort to ensure our technical leads can maintain 10/10 oversight on every build. This is for founders who know that in 2026, the only way to win is to own the system.',
  cta: 'Book Architecture Session',
  reward: 'We will audit your vision, evaluate your technical readiness, and provide a blueprint for your 10-week journey.',
}

export default function DiagnosticCTA() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent

  return (
    <section className={styles.diagnosticCta}>
      <div className={styles.container}>
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <span className={styles.sectionTag}>{content.tag}</span>
            <h2 className={styles.ctaTitle}>{content.title}</h2>
            <p className={styles.ctaDescription}>{content.description}</p>
            
            <div className={styles.rewardBox}>
              <div className={styles.rewardIcon}>🎁</div>
              <p>{content.reward}</p>
            </div>

            <motion.button
              className={styles.ctaButton}
              style={{
                backgroundColor: universe === 'scale' ? 'var(--system-green)' : 'var(--strategy-pink)',
                color: universe === 'scale' ? 'var(--obsidian)' : 'var(--white)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>

          <div className={styles.ctaVisual}>
            <div className={styles.cohortCounter}>
              <div className={styles.counterLabel}>Available Spots</div>
              <div className={styles.counterValue}>
                <span className={styles.current}>2</span>
                <span className={styles.divider}>/</span>
                <span className={styles.total}>5</span>
              </div>
              <div className={styles.counterSublabel}>Q1 2026 Cohort</div>
            </div>

            <div className={styles.statusGrid}>
              <div className={`${styles.statusItem} ${styles.taken}`}>
                <div className={styles.statusDot} />
                <span>Partner 1</span>
              </div>
              <div className={`${styles.statusItem} ${styles.taken}`}>
                <div className={styles.statusDot} />
                <span>Partner 2</span>
              </div>
              <div className={`${styles.statusItem} ${styles.taken}`}>
                <div className={styles.statusDot} />
                <span>Partner 3</span>
              </div>
              <div className={`${styles.statusItem} ${styles.available}`}>
                <div className={styles.statusDot} />
                <span>Your Slot?</span>
              </div>
              <div className={`${styles.statusItem} ${styles.available}`}>
                <div className={styles.statusDot} />
                <span>Reserved</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
