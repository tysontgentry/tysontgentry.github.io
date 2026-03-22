import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function App() {
  return (
    <div className="app">
      <div className="bg-grid" aria-hidden />
      <div className="bg-glow bg-glow--1" aria-hidden />
      <div className="bg-glow bg-glow--2" aria-hidden />

      <Header />

      <main className="main">
        <Hero />

        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionReveal}
        >
          <IntroSection />
        </motion.section>

        <motion.section
          id="experience"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionReveal}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="projects"
          className="section section--projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionReveal}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="skills"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionReveal}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="contact"
          className="section section--contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionReveal}
        >
          <Contact />
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
