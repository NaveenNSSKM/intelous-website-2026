'use client'

import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'
import { useState, useEffect } from 'react'

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
      color: '#FF007F', // System Green replacement
    },
    {
      name: 'Growth Pod',
      price: '$8,500',
      period: '/mo',
      description: 'Multi-threaded dominance managed by a dedicated strategist to scale your volume.',
      features: ['2,000 verified contacts/month', 'Email + LinkedIn orchestration', 'Dedicated GTM Strategist', 'Daily sentiment optimization'],
      ideal: 'Mid-Market Teams',
      popular: true,
      color: '#FF007F', // Strategy Pink replacement
    },
    {
      name: 'Scale Pod',
      price: '$15,000+',
      period: '/mo',
      description: 'Full RevOps Mastery. Your entire outbound function, outsourced with fractional CMO leadership.',
      features: ['5,000+ verified contacts/month', 'Full CRM integration', 'Senior Strategist (Frac CMO)', '2-way data sync & handoffs'],
      ideal: 'Enterprise Teams',
      color: '#007BFF', // Logic Blue replacement
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
      color: '#FF007F',
    },
    {
      name: 'The Build',
      price: 'Weeks 3-8',
      period: '',
      description: 'Our engineering lab executes core development of your modular, event-driven platform.',
      features: ['AI-Native Core Development', 'Microservices Architecture', 'Kafka Event Pipelines', 'Agentic Workflow Design'],
      ideal: 'Phase 2',
      popular: true,
      color: '#FF007F',
    },
    {
      name: 'Ignition',
      price: 'Weeks 9-10',
      period: '',
      description: 'We don\'t just deploy; we launch your first GTM campaign and deliver 20 qualified leads.',
      features: ['System Launch & Go-Live', 'First Campaign Execution', '20 Qualified Leads Delivered', 'Team Training & Handoff'],
      ideal: 'Phase 3',
      color: '#007BFF',
    },
  ]
}

export default function GTMPods() {
  const { universe } = useUniverse()
  const content = universe === 'scale' ? scaleContent : buildContent
  const isDark = universe === 'build'

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation Logic
  const getVariants = (index: number) => {
    // Optimized for "Snappy but Smooth" (Faster duration, smoother ease)
    const fastSmoothTransition = {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98] // Snappier landing, no drag
    }

    if (isMobile) {
      // Mobile: Fast Fade Up
      return {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...fastSmoothTransition, delay: index * 0.1 }
        }
      }
    }

    // Tablet & Desktop: Fast Directional Convergence
    // Left Card (0): Slides In from Left
    if (index === 0) return {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { ...fastSmoothTransition, delay: 0 }
      }
    }
    // Center Card (1): Drops In from Top
    if (index === 1) return {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { ...fastSmoothTransition, delay: 0.1 }
      }
    }
    // Right Card (2): Slides In from Right
    return {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { ...fastSmoothTransition, delay: 0.2 }
      }
    }
  }

  return (
    <section className={`py-16 md:py-24 lg:py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900 text-white' : 'bg-[#FAFAFA] text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-[90%] md:max-w-3xl mb-16 md:mb-20 mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <span className={`inline-block text-xs font-mono font-bold tracking-[0.2em] mb-4 md:mb-6 uppercase ${isDark ? 'text-pink-400' : 'text-[#FF007F]'}`}>
            {content.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
            {content.title}
          </h2>
          <p className="font-mono text-xs md:text-sm tracking-widest uppercase opacity-60 mb-6">
            {content.subtitle}
          </p>
          <p className={`text-lg md:text-base lg:text-xl leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-start">
          {content.pods.map((pod, index) => (
            <motion.div
              key={pod.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              variants={getVariants(index)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative flex flex-col h-full p-6 md:p-5 lg:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300
                ${isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/5 hover:border-pink-200/50'
                }
                ${pod.popular ? (isDark ? 'ring-2 ring-pink-500' : 'ring-2 ring-[#FF007F]') : ''}
              `}
            >
              {pod.popular && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg
                  ${isDark ? 'bg-pink-500 text-white shadow-pink-500/40' : 'bg-[#FF007F] text-white shadow-pink-500/30'}
                `}>
                  Most Popular
                </div>
              )}

              <div className="mb-6 md:mb-4 lg:mb-8">
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-60 mb-2 block">{pod.ideal}</span>
                <h3 className="text-xl md:text-lg lg:text-2xl font-bold mb-4">{pod.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl md:text-2xl lg:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{pod.price}</span>
                  <span className="text-xs md:text-[10px] lg:text-sm font-mono opacity-60">{pod.period}</span>
                </div>
              </div>

              <p className={`text-sm md:text-xs lg:text-sm leading-relaxed mb-8 md:mb-6 lg:mb-8 opacity-80 min-h-[60px] md:min-h-[50px] lg:min-h-[60px]`}>
                {pod.description}
              </p>

              <ul className="space-y-4 md:space-y-3 lg:space-y-4 mb-8 md:mb-6 lg:mb-10 flex-grow">
                {pod.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm md:text-xs lg:text-sm">
                    <svg className={`w-5 h-5 md:w-4 md:h-4 flex-shrink-0 ${isDark ? 'text-pink-400' : 'text-[#FF007F]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="opacity-80 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 md:py-3 lg:py-4 rounded-xl font-bold text-sm md:text-xs lg:text-sm transition-all duration-300
                ${pod.popular
                  ? (isDark ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-500/25' : 'bg-[#FF007F] text-white hover:bg-pink-600 shadow-lg shadow-pink-500/25')
                  : (isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200')
                }
              `}>
                {universe === 'scale' ? 'Deploy This Pod' : 'Start This Phase'}
              </button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
