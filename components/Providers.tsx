'use client'

import { UniverseProvider } from '@/context/UniverseContext'
import SmoothScroll from '@/components/SmoothScroll'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UniverseProvider>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </UniverseProvider>
  )
}
