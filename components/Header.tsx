'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useUniverse } from '@/context/UniverseContext'
import styles from './Header.module.css'

const scaleNavLinks = [
  { href: '/managed-lead-gen', label: 'Managed Lead Gen' },
  { href: '/intelous-os', label: 'Intelous OS' },
  { href: '/discovery-hub', label: 'IntelousABM' },
  { href: '/byx-studio', label: 'BYX Studio' },
  { href: '/resources', label: 'Resources' },
  { href: '/services', label: 'Services' },
]

const buildNavLinks = [
  { href: '/venture-services', label: 'Venture Services' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/paign-ai', label: 'Paign.ai' },
  { href: '/articles', label: 'Articles' },
]

export default function Header() {
  const { universe } = useUniverse()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = universe === 'scale' ? scaleNavLinks : buildNavLinks
  const brandSuffix = universe === 'scale' ? '.ai' : 'Labs'
  const ctaText = universe === 'scale' ? 'Deploy Your GTM Pod' : 'Book Architecture Session'
  const ctaColor = 'var(--system-green)'

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Intelous</span>
          <span
            className={styles.logoSuffix}
            style={{ color: universe === 'scale' ? 'var(--system-green)' : 'var(--strategy-pink)' }}
          >
            {brandSuffix}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <motion.button
            className={styles.ctaButton}
            style={{ backgroundColor: ctaColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.bar} ${isOpen ? styles.barOpenTop : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.barOpenMiddle : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.barOpenBottom : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className={styles.mobileCtaButton}
                style={{ backgroundColor: ctaColor }}
                onClick={() => setIsOpen(false)}
              >
                {ctaText}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
