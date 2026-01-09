'use client'

import Link from 'next/link'
import { useUniverse } from '@/context/UniverseContext'

export default function Footer() {
  const { universe } = useUniverse()
  const isDark = universe === 'build'

  return (
    <footer className={`py-20 border-t transition-colors duration-500 ${isDark ? 'bg-slate-950 border-white/5 text-slate-400' : 'bg-[#FAFAFA] border-black/5 text-slate-600'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-0.5">
                <span className={`text-2xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Intelous
                </span>
                <span className="text-2xl font-bold tracking-tighter text-[#FF007F]">
                  {universe === 'scale' ? '.ai' : 'Labs'}
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              {universe === 'scale'
                ? 'Specialized Digital Workers. Verified Outcomes. The sovereign GTM operating system.'
                : 'The anti-failure venture partner. From vision to market in 10 weeks.'
              }
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Platform</h4>
            <ul className="space-y-4 text-sm">
              {universe === 'scale' ? (
                <>
                  <li><Link href="/managed-lead-gen" className="hover:text-[#FF007F] transition-colors">Managed Lead Gen</Link></li>
                  <li><Link href="/intelous-os" className="hover:text-[#FF007F] transition-colors">Intelous OS</Link></li>
                  <li><Link href="/discovery-hub" className="hover:text-[#FF007F] transition-colors">Discovery Hub</Link></li>
                  <li><Link href="/byx-studio" className="hover:text-[#FF007F] transition-colors">BYX Studio</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/venture-services" className="hover:text-[#FF007F] transition-colors">Venture Services</Link></li>
                  <li><Link href="/success-stories" className="hover:text-[#FF007F] transition-colors">Success Stories</Link></li>
                  <li><Link href="/articles" className="hover:text-[#FF007F] transition-colors">Articles</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-[#FF007F] transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF007F] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF007F] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy" className="hover:text-[#FF007F] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF007F] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dashed border-opacity-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider opacity-60" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
          <p>&copy; {new Date().getFullYear()} Intelous</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
