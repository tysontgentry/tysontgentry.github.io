import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#about" className="site-header__brand" onClick={(e) => { e.preventDefault(); go('about') }}>
          <span className="site-header__mark" aria-hidden />
          Tyson Gentry
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          {navLinks.map(({ id, label }) => (
            <button key={id} type="button" className="site-header__link" onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-header__burger" data-open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="site-header__drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="site-header__nav site-header__nav--mobile" aria-label="Mobile">
              {navLinks.map(({ id, label }) => (
                <button key={id} type="button" className="site-header__link site-header__link--block" onClick={() => go(id)}>
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
