'use client'

import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import styles from './TrustCrisis.module.css'

const scaleContent = {
  tag: 'THE HUMAN SIGNATURE',
  title: 'The Crisis of Trust',
  description: 'The B2B market is exhausted by robotic, "black box" automation that burns domain reputations. At Intelous, we solve the Trust Crisis by putting a Human Strategist at the dead-center of every campaign.',
  features: [
    {
      title: 'Human-in-the-Loop',
      description: 'Every "Specialized Digital Worker" we deploy is governed by a human signature to ensure your brand never "hallucinates."',
      icon: '👤'
    },
    {
      title: 'The Human Moat',
      description: 'We build the protective barrier that keeps your business from being commoditized in a world of deepfakes.',
      icon: '🛡️'
    },
    {
      title: 'Strategic Empathy',
      description: 'We replace repetitive manual work with intelligent systems that think like human strategists—but never fly solo.',
      icon: '🧠'
    }
  ]
}

const buildContent = {
  tag: 'THE EXECUTION GAP',
  title: 'Why Ventures Fail',
  description: 'You cannot afford to lose six months to a bloated development agency, and you cannot risk your future on disconnected freelancers who don\'t understand your GTM logic.',
  features: [
    {
      title: 'Speed to Market',
      description: 'We move at the speed of your ambition—from PRD to first 20 qualified leads in exactly 70 days.',
      icon: '⚡'
    },
    {
      title: 'Sovereign Systems',
      description: 'We don\'t just "build apps"; we architect sovereign systems designed for non-linear agentic expansion.',
      icon: '🏗️'
    },
    {
      title: 'Build-Operate-Transfer',
      description: 'We embrace the exit. Our goal is your total sovereignty—you own the ship we built.',
      icon: '🚀'
    }
  ]
}

export default function TrustCrisis() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent

  return (
    <section className={styles.trustCrisis}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionTag}>{content.tag}</span>
          <h2 className={styles.sectionTitle}>{content.title}</h2>
          <p className={styles.sectionSubtitle}>{content.description}</p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {content.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
