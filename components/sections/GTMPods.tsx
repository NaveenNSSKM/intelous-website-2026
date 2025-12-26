'use client'

import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import styles from './GTMPods.module.css'

const scaleContent = {
  tag: 'OUTCOME-AS-A-SERVICE',
  title: 'Managed GTM Pods',
  subtitle: 'Don\'t Hire a Head. Deploy a Pod.',
  description: 'Traditional SDR hiring is a 20th-century solution to a 21st-century problem. With Intelous, you deploy Productized Capacity in 48 hours.',
  pods: [
    {
      name: 'Launch Pod',
      price: '$4,000',
      period: '/mo',
      description: 'Validation in a box. Your first 100 high-level conversations via single-threaded email outreach.',
      features: ['500 verified contacts/month', 'Access to Intelous OS', 'Shared GTM Strategist', 'Weekly audits & optimizations'],
      ideal: 'Startups & Founders',
      color: 'var(--system-green)',
    },
    {
      name: 'Growth Pod',
      price: '$8,500',
      period: '/mo',
      description: 'Multi-threaded dominance managed by a dedicated strategist to scale your volume.',
      features: ['2,000 verified contacts/month', 'Email + LinkedIn orchestration', 'Dedicated GTM Strategist', 'Daily sentiment optimization'],
      ideal: 'Mid-Market Teams',
      popular: true,
      color: 'var(--strategy-pink)',
    },
    {
      name: 'Scale Pod',
      price: '$15,000+',
      period: '/mo',
      description: 'Full RevOps Mastery. Your entire outbound function, outsourced with fractional CMO leadership.',
      features: ['5,000+ verified contacts/month', 'Full CRM integration', 'Senior Strategist (Frac CMO)', '2-way data sync & handoffs'],
      ideal: 'Enterprise Teams',
      color: 'var(--logic-blue)',
    },
  ]
}

const buildContent = {
  tag: 'THE 10-WEEK SPRINT',
  title: 'Venture Roadmap',
  subtitle: 'From Vision to Market in 70 Days',
  description: 'We move at the speed of your ambition, using a modular platform evolution strategy to go from a PRD to your first 20 qualified leads.',
  pods: [
    {
      name: 'Foundation',
      price: 'Weeks 1-2',
      period: '',
      description: 'Deep-dive into your market. Define your ICP, craft positioning, and establish brand architecture.',
      features: ['Strategic PRD Development', 'ICP Research & Definition', 'High-fidelity Wireframes', 'Brand System Architecture'],
      ideal: 'Phase 1',
      color: 'var(--strategy-pink)',
    },
    {
      name: 'The Build',
      price: 'Weeks 3-8',
      period: '',
      description: 'Our engineering lab executes core development of your modular, event-driven platform.',
      features: ['AI-Native Core Development', 'Microservices Architecture', 'Kafka Event Pipelines', 'Agentic Workflow Design'],
      ideal: 'Phase 2',
      popular: true,
      color: 'var(--system-green)',
    },
    {
      name: 'Ignition',
      price: 'Weeks 9-10',
      period: '',
      description: 'We don\'t just deploy; we launch your first GTM campaign and deliver 20 qualified leads.',
      features: ['System Launch & Go-Live', 'First Campaign Execution', '20 Qualified Leads Delivered', 'Team Training & Handoff'],
      ideal: 'Phase 3',
      color: 'var(--logic-blue)',
    },
  ]
}

export default function GTMPods() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent

  return (
    <section className={styles.gtmPods}>
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
          <p className={styles.podsSubtitle}>{content.subtitle}</p>
          <p className={styles.sectionSubtitle}>{content.description}</p>
        </motion.div>

        <div className={styles.podsGrid}>
          {content.pods.map((pod, index) => (
            <motion.div
              key={pod.name}
              className={`${styles.podCard} ${pod.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {pod.popular && <div className={styles.popularBadge}>Most Popular</div>}
              
              <div className={styles.podHeader}>
                <span className={styles.podIdeal}>{pod.ideal}</span>
                <h3 className={styles.podName}>{pod.name}</h3>
                <div className={styles.podPrice}>
                  <span className={styles.priceValue}>{pod.price}</span>
                  <span className={styles.pricePeriod}>{pod.period}</span>
                </div>
              </div>

              <p className={styles.podDescription}>{pod.description}</p>

              <ul className={styles.podFeatures}>
                {pod.features.map((feature) => (
                  <li key={feature}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke={pod.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className={styles.podCta}
                style={{ 
                  backgroundColor: pod.popular ? pod.color : 'transparent',
                  color: pod.popular ? (pod.color === 'var(--system-green)' ? 'var(--obsidian)' : 'var(--white)') : 'var(--obsidian)',
                  borderColor: pod.color,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {universe === 'scale' ? 'Deploy This Pod' : 'Start This Phase'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
