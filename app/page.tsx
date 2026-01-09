'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustCrisis from '@/components/sections/TrustCrisis'
import DiscoveryHub from '@/components/sections/DiscoveryHub'
import EventEngine from '@/components/sections/EventEngine'
import GTMPods from '@/components/sections/GTMPods'
import DiagnosticCTA from '@/components/sections/DiagnosticCTA'

import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function HomePage() {
  const { universe } = useUniverse()
  const isDark = universe === 'build'

  return (
    <main className={`min-h-screen relative transition-colors duration-500 ${isDark ? 'text-white' : 'bg-[#FAFAFA] text-slate-900'}`}>
      {/* Dark Mode Background with Gradient */}
      {isDark && (
        <div className="fixed inset-0 -z-10 bg-[#020617]">
          <div
            className="absolute inset-0 opacity-20 mix-blend-screen"
            style={{
              background: 'linear-gradient(135deg, #3985f1, #d335c3, #ed3389, #740cc6)'
            }}
          />
          <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-3xl" />
        </div>
      )}

      <Header />
      <Hero />

      <TrustCrisis />
      <DiscoveryHub />
      <EventEngine />
      <GTMPods />
      <DiagnosticCTA />

      <Footer />
    </main>
  )
}
