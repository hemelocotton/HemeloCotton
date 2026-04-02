import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavigate = (target) => {
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navClass =
    "cursor-pointer transition-colors hover:text-white hover:opacity-100 uppercase";

  return (
    <div className="w-full fixed top-0 left-0 z-[9999] bg-black/50 p-2">
      <div className="flex items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white font-bold text-[30px]"
        >
          <a href="/">
            <img src="/Hemelo Cotton Logo.png" alt="" className="w-[250px]" />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-white/60 text-[5px]">

          {isHomePage ? (
            <>
              <motion.h1
                className={navClass}
                onClick={() => handleNavigate("home")}
                 initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
         
              >
                About
              </motion.h1>

              <motion.h1
                className={navClass}
                onClick={() => handleNavigate("fabrics")}
                 initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
         
              >
                Fabrics
              </motion.h1>

              <motion.h1
                className={navClass}
                onClick={() => handleNavigate("customization")}
                 initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
              >
                Customization
              </motion.h1>

              <motion.h1
                className={navClass}
                onClick={() => handleNavigate("contact")}
                 initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
              >
                Contact
              </motion.h1>
            </>
          ) : (
            <>
              <motion.h1
                className={navClass}
                onClick={() => (window.location.href = "/")}
                 initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
              >
                Home
              </motion.h1>

              {/* <motion.h1
                className={navClass}
                onClick={() => handleNavigate("contact")}
              >
                Contact
              </motion.h1> */}
            </>
          )}

          <motion.h1
            className={navClass}
            onClick={() => handleNavigate("footer")}
             initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
          >
            Talk to Manufacturing Expert
          </motion.h1>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          onNavigate={handleNavigate}
          isHomePage={isHomePage}
        />
      </div>
    </div>
  );
}

function MobileMenu({ onNavigate, isHomePage }) {
  const [open, setOpen] = useState(false);

  const btnClass =
    "text-left opacity-60 hover:opacity-100 uppercase";

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md border border-gray-800 text-white"
      >
        {open ? "✕" : "☰"}
      </button>

      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`${
          open ? "pointer-events-auto" : "pointer-events-none"
        } fixed top-16 left-0 w-screen bg-black/90 backdrop-blur-md`}
      >
        <div className="flex flex-col gap-4 px-6 py-6 text-white text-[12px]">

          {isHomePage ? (
            <>
              <button
                className={btnClass}
                onClick={() => {
                  onNavigate("home");
                  setOpen(false);
                }}
              >
                About
              </button>

              <button
                className={btnClass}
                onClick={() => {
                  onNavigate("fabrics");
                  setOpen(false);
                }}
              >
                Fabrics
              </button>

              <button
                className={btnClass}
                onClick={() => {
                  onNavigate("customization");
                  setOpen(false);
                }}
              >
                Customization
              </button>

              <button
                className={btnClass}
                onClick={() => {
                  onNavigate("contact");
                  setOpen(false);
                }}
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <button
                className={btnClass}
                onClick={() => {
                  window.location.href = "/";
                  setOpen(false);
                }}
              >
                Home
              </button>

              {/* <button
                className={btnClass}
                onClick={() => {
                  onNavigate("contact");
                  setOpen(false);
                }}
              >
                Contact
              </button> */}
            </>
          )}

          <button
            className={btnClass}
            onClick={() => {
              onNavigate("footer");
              setOpen(false);
            }}
          >
            Talk to Manufacturing Expert
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
