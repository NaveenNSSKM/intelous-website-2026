'use client'

import Link from 'next/link'
import { useUniverse } from '@/context/UniverseContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { universe } = useUniverse()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Intelous</span>
              <span style={{ color: universe === 'scale' ? 'var(--system-green)' : 'var(--strategy-pink)' }}>
                {universe === 'scale' ? '.ai' : 'Labs'}
              </span>
            </div>
            <p className={styles.brandDescription}>
              {universe === 'scale' 
                ? 'Specialized Digital Workers. Verified Outcomes. The sovereign GTM operating system.'
                : 'The anti-failure venture partner. From vision to market in 10 weeks.'
              }
            </p>
          </div>

          <div className={styles.footerLinks}>
            <h4>Platform</h4>
            <ul>
              {universe === 'scale' ? (
                <>
                  <li><Link href="/managed-lead-gen">Managed Lead Gen</Link></li>
                  <li><Link href="/intelous-os">Intelous OS</Link></li>
                  <li><Link href="/discovery-hub">Discovery Hub</Link></li>
                  <li><Link href="/byx-studio">BYX Studio</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/venture-services">Venture Services</Link></li>
                  <li><Link href="/success-stories">Success Stories</Link></li>
                  <li><Link href="/articles">Articles</Link></li>
                </>
              )}
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Intelous. All rights reserved.</p>
          <div className={styles.footerBadge}>
            <span>SOVEREIGN SYSTEM v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
