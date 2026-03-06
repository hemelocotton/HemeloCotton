import { useState } from 'react'
import { motion } from "framer-motion";

function Navbar() {

  const handleNavigate = (target) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className='w-full fixed top-0 left-0 z-[9999] bg-black/50'>
        <div className='flex items-center justify-between px-5 py-4 lg:px-8'>

          <motion.h2
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='text-white font-bold text-[30px] flex items-center gap-2'
          >
            <img src="/Hemelo Cotton Logo.png" alt="" className='w-[50px]' />
            HEMELO COTTON
          </motion.h2>

          {/* DESKTOP MENU */}
          <div className='hidden md:flex items-center gap-12 text-white/60 text-[5px]'>

            <motion.h1
              className='cursor-pointer hover:text-white uppercase'
              onClick={() => handleNavigate('home')}
            >
              About
            </motion.h1>

            <motion.h1
              className='cursor-pointer hover:text-white uppercase'
              onClick={() => handleNavigate('fabrics')}
            >
              Fabrics
            </motion.h1>

            <motion.h1
              className='cursor-pointer hover:text-white uppercase'
              onClick={() => handleNavigate('customization')}
            >
              Customization
            </motion.h1>

            <motion.h1
              className='cursor-pointer hover:text-white uppercase'
              onClick={() => handleNavigate('contact')}
            >
              Contact
            </motion.h1>

            <motion.h1
              className='cursor-pointer hover:text-white uppercase'
              onClick={() => handleNavigate('collections')}
            >
              FAQ
            </motion.h1>

            <motion.h1
              className='cursor-pointer hover:text-white uppercase'
              onClick={() => handleNavigate('contact')}
            >
              Talk to Manufacturing Expert
            </motion.h1>

          </div>

          <MobileMenu onNavigate={handleNavigate} />
        </div>
      </div>
    </>
  )
}

function MobileMenu({ onNavigate }) {

  const [open, setOpen] = useState(false)

  return (
    <div className='md:hidden'>

      <button
        onClick={() => setOpen(!open)}
        className='text-white p-2 rounded-md border border-white'
      >
        {open ? "✕" : "☰"}
      </button>

      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`${open ? 'pointer-events-auto' : 'pointer-events-none'} fixed top-16 left-0 w-screen bg-black/80 backdrop-blur-md`}
      >

        <div className='flex flex-col gap-4 px-6 py-6 text-white text-sm'>

          <button onClick={() => { onNavigate('home'); setOpen(false) }}>About</button>

          <button onClick={() => { onNavigate('fabrics'); setOpen(false) }}>Fabrics</button>

          <button onClick={() => { onNavigate('customization'); setOpen(false) }}>Customization</button>

          <button onClick={() => { onNavigate('contact'); setOpen(false) }}>Contact</button>

          <button onClick={() => { onNavigate('collections'); setOpen(false) }}>FAQ</button>

          <button onClick={() => { onNavigate('contact'); setOpen(false) }}>Talk to Manufacturing Expert</button>

        </div>

      </motion.div>

    </div>
  )
}

export default Navbar
