'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustCrisis from '@/components/sections/TrustCrisis'
import DiscoveryHub from '@/components/sections/DiscoveryHub'
import GTMPods from '@/components/sections/GTMPods'
import DiagnosticCTA from '@/components/sections/DiagnosticCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustCrisis />
      <DiscoveryHub />
      <GTMPods />
      <DiagnosticCTA />
      <Footer />
    </main>
  )
}
