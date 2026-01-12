'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustCrisis from '@/components/sections/TrustCrisis'
import DiscoveryHub from '@/components/sections/DiscoveryHub'
import EventEngine from '@/components/sections/EventEngine'
import GTMPods from '@/components/sections/GTMPods'
import DiagnosticCTA from '@/components/sections/DiagnosticCTA'
import BuildHomeSections from '@/components/sections/BuildHomeSections'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function HomePage() {
  const { universe } = useUniverse()

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <Header />
      <Hero />

      {universe === 'scale' ? (
        <>
          <TrustCrisis />
          <DiscoveryHub />
          <EventEngine />
          <GTMPods />
          <DiagnosticCTA />
        </>
      ) : (
        <BuildHomeSections />
      )}

      <Footer />
    </main>
  )
}
