'use client'

import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import styles from './DiscoveryHub.module.css'

const scaleContent = {
  tag: 'GROUND TRUTH INTELLIGENCE',
  title: 'The Discovery Hub',
  subtitle: 'The Fuel for Your Engine',
  description: 'Stop relying on a single, stagnant database. The Intelous Discovery Hub is a Sovereign Aggregator that queries Apollo, Lusha, Clay, Hunter, and Clearbit simultaneously.',
  stats: [
    { value: '200M+', label: 'Data Points' },
    { value: '98%', label: 'Accuracy Rate' },
    { value: '40M', label: 'Accounts Globally' },
  ],
  features: [
    {
      title: 'The Clean Room',
      description: 'Every lead passes through a manual verification gate where human auditors confirm MX records, syntax, and LinkedIn activity.',
    },
    {
      title: 'Multi-Source Authority',
      description: 'We query the world\'s most authoritative databases simultaneously to eliminate the "Single Point of Failure."',
    },
    {
      title: 'Deep Firmographics',
      description: 'We append tech stacks via BuiltWith and funding rounds to fuel hyper-personalization.',
    },
  ]
}

const buildContent = {
  tag: 'AI-NATIVE SOVEREIGNTY',
  title: 'Technical Architecture',
  subtitle: 'Built for Autonomy',
  description: 'We don\'t build "bolted-on" AI; we build AI-Native Sovereignty. Your product is built on a modular, event-driven platform that can adapt to any B2B team\'s workflow.',
  stats: [
    { value: '70', label: 'Days to Launch' },
    { value: '20+', label: 'First Qualified Leads' },
    { value: '100%', label: 'Ownership Transfer' },
  ],
  features: [
    {
      title: 'Orchestration Layer',
      description: 'Specialized function agents for discovery, prompt selection, and scoring—handling 80% of repetitive labor.',
    },
    {
      title: 'Data Integrity',
      description: 'Every lead is verified and enriched using multi-source logic before entering your campaigns.',
    },
    {
      title: 'Scalability',
      description: 'Decoupled system allows you to scale enrichment and outreach services independently.',
    },
  ]
}

export default function DiscoveryHub() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent

  return (
    <section className={styles.discoveryHub}>
      <div className={styles.container}>
        <div className={styles.hubLayout}>
          <motion.div 
            className={styles.hubContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>{content.tag}</span>
            <h2 className={styles.sectionTitle}>{content.title}</h2>
            <p className={styles.hubSubtitle}>{content.subtitle}</p>
            <p className={styles.hubDescription}>{content.description}</p>

            <div className={styles.hubFeatures}>
              {content.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={styles.hubFeature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={styles.featureBullet} />
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.hubVisual}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.statsGrid}>
              {content.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className={styles.terminalPreview}>
              <div className={styles.terminalHeader}>
                <span className={`${styles.terminalDot} ${styles.red}`} />
                <span className={`${styles.terminalDot} ${styles.yellow}`} />
                <span className={`${styles.terminalDot} ${styles.green}`} />
                <span className={styles.terminalTitle}>discovery_hub.log</span>
              </div>
              <div className={styles.terminalBody}>
                <code>
                  <span className={styles.logTime}>[09:42:31]</span> <span className={styles.logStatus}>[SYNC]</span> Querying Apollo, Lusha, Clay...<br/>
                  <span className={styles.logTime}>[09:42:33]</span> <span className={styles.logOk}>[OK]</span> 2,847 raw records found<br/>
                  <span className={styles.logTime}>[09:42:35]</span> <span className={styles.logStatus}>[CLEAN]</span> Manual verification gate...<br/>
                  <span className={styles.logTime}>[09:42:41]</span> <span className={styles.logOk}>[DONE]</span> 2,789 verified (98.0%)<br/>
                  <span className={styles.logTime}>[09:42:42]</span> <span className={styles.logStatus}>[ENRICH]</span> Appending firmographics...<br/>
                  <span className={styles.logTime}>[09:42:44]</span> <span className={styles.logOk}>[READY]</span> Pipeline deployed
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
