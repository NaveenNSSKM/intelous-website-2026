import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import BOTModule from './components/BOTModule'
import RDLabs from './components/RDLabs'
import VentureCTA from './components/VentureCTA'
import './App.css'

function App() {
  const [universe, setUniverse] = useState<'scale' | 'build'>('build')

  return (
    <div className="app">
      <Header />
      <main>
        <Hero universe={universe} setUniverse={setUniverse} />
        <Roadmap />
        <BOTModule />
        <RDLabs />
        <VentureCTA />
      </main>
    </div>
  )
}

export default App
