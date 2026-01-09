'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useUniverse } from '@/context/UniverseContext'

// Define split links EXACTLY as requested (Intelous.ai / Scale focused)
const leftLinks = [
  { href: '/managed-lead-gen', label: 'Managed Lead Gen' },
  { href: '/intelous-os', label: 'Intelous OS' },
  { href: '/discovery-hub', label: 'IntelousABM' },
]

const rightLinks = [
  { href: '/byx-studio', label: 'BYX Studio' },
  { href: '/resources', label: 'Resources' },
  { href: '/services', label: 'Services' },
]

export default function Header() {
  const { universe, setUniverse } = useUniverse()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isDark = universe === 'build'
  const brandSuffix = universe === 'scale' ? '.ai' : 'Labs'
  const accentColor = '#FF007F'

  // Scroll effect for Phamily Pharma style floating pill
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: scrolled ? '20px' : '0px',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div
          className="mx-auto flex items-center justify-between relative"
          style={{
            maxWidth: scrolled ? '1200px' : '100%',
            padding: scrolled ? '12px 32px' : '24px 48px',
            background: scrolled ? (isDark ? 'rgba(2, 6, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderRadius: scrolled ? '100px' : '0',
            border: scrolled ? (isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.05)') : 'none',
            boxShadow: scrolled ? '0 10px 40px -10px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex w-full items-center justify-between">

            {/* 1. Left Navigation Group */}
            <nav className={`flex items-center gap-8 flex-1 transition-all duration-500 justify-end ${scrolled ? 'pr-8' : 'pr-20'}`}>
              {leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* 2. CENTER LOGO */}
            <div className="flex-shrink-0">
              <Link href="/" className="relative z-20 group block">
                <div className="flex items-center gap-0.5">
                  <span className={`text-2xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Intelous
                  </span>
                  <span
                    className="text-2xl font-bold tracking-tighter"
                    style={{ color: accentColor }}
                  >
                    {brandSuffix}
                  </span>
                </div>
              </Link>
            </div>

            {/* 3. Right Navigation Group + CTA */}
            <nav className={`flex items-center gap-8 flex-1 transition-all duration-500 justify-start ${scrolled ? 'pl-8' : 'pl-20'}`}>
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {link.label}
                  </span>
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 rounded-full text-sm font-sans font-medium text-white shadow-lg shadow-[#FF007F]/25 lowercase"
                style={{ backgroundColor: accentColor }}
              >
                Deploy
              </motion.button>
            </nav>
          </div>

          {/* MOBILE LAYOUT (Compact) */}
          <div className="lg:hidden flex w-full items-center justify-between">
            {/* Logo Left */}
            <Link href="/" className="relative z-20">
              <div className="flex items-center gap-0.5">
                <span className={`text-xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Intelous
                </span>
                <span className="text-xl font-bold tracking-tighter" style={{ color: accentColor }}>{brandSuffix}</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="p-2 relative z-50 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsOpen(true)}
            >
              <span className={`w-6 h-0.5 rounded-full block ${isDark ? 'bg-white' : 'bg-black'}`} />
              <span className={`w-6 h-0.5 rounded-full block ${isDark ? 'bg-white' : 'bg-black'}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ backgroundColor: isDark ? '#020617' : '#fff' }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 rotate-45 ${isDark ? 'bg-white' : 'bg-black'}`} />
                <span className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 -rotate-45 ${isDark ? 'bg-white' : 'bg-black'}`} />
              </div>
            </button>

            <nav className="flex flex-col items-center gap-6 w-full text-center">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xs py-4 rounded-xl bg-[#FF007F] text-white font-sans font-medium text-lg shadow-xl shadow-[#FF007F]/20 mt-8 lowercase"
              >
                Deploy
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
