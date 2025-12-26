'use client'

import { UniverseProvider } from '@/context/UniverseContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UniverseProvider>
      {children}
    </UniverseProvider>
  )
}
