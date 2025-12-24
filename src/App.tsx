import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SovereignTriad from './components/SovereignTriad'
import GTMCanvas from './components/GTMCanvas'
import CleanRoomTerminal from './components/CleanRoomTerminal'
import GTMPods from './components/GTMPods'
import StrategicWaitlist from './components/StrategicWaitlist'
import './App.css'

function App() {
  const [universe, setUniverse] = useState<'scale' | 'build'>('scale')

  return (
    <div className="app">
      <Header />
      <main>
        <Hero universe={universe} setUniverse={setUniverse} />
        <SovereignTriad />
        <GTMCanvas />
        <CleanRoomTerminal />
        <GTMPods />
        <StrategicWaitlist />
      </main>
    </div>
  )
}

export default App
