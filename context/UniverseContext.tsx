'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Universe = 'scale' | 'build'

interface UniverseContextType {
  universe: Universe
  setUniverse: (universe: Universe) => void
  toggleUniverse: () => void
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined)

export function UniverseProvider({ children }: { children: ReactNode }) {
  const [universe, setUniverse] = useState<Universe>('scale')

  const toggleUniverse = () => {
    setUniverse(prev => prev === 'scale' ? 'build' : 'scale')
  }

  return (
    <UniverseContext.Provider value={{ universe, setUniverse, toggleUniverse }}>
      {children}
    </UniverseContext.Provider>
  )
}

export function useUniverse() {
  const context = useContext(UniverseContext)
  if (context === undefined) {
    throw new Error('useUniverse must be used within a UniverseProvider')
  }
  return context
}
