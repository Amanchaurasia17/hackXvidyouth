import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Themes from './components/Themes'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Judges from './components/Judges'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <>
      <div className="animated-bg" />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Prizes />
      <Judges />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
