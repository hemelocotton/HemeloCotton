import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

import Pattern from './animation/Pattern'
import Visual from './animation/Visual'
import Creative from './animation/Creative'
import Caruosel from './animation/Caruosel'
import Collections from './animation/Collections'
import Connect from './animation/Connect'

function App() {

  return (
    <>
      <Navbar />

      {/* ABOUT / HOME */}
      <section id="home">
        <Hero />
      </section>

      <div><hr className='border-white/20'/></div>

      <div className='w-full overflow-hidden'>
        <Pattern />
      </div>

      <section id="fabrics">
        <Visual />
      </section>

      <div><hr className='border-white/20'/></div>

      <div className='w-full overflow-hidden'>
        <Pattern />
      </div>

      <section id="customization">
        <Creative />
      </section>

      <section id="fabrics-carousel">
        <Caruosel />
      </section>

      <div><hr className='border-white/20'/></div>

      <section id="collections">
        <Collections />
      </section>

      <section id="contact">
        <Connect />
      </section>

      <Footer />

    </>
  )
}

export default App
