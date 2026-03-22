import { motion } from 'framer-motion'
import { profile } from '../data/content'
import './Hero.css'

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="about" className="hero">
      <motion.p className="hero__folio" custom={0} variants={item} initial="hidden" animate="visible">
        FOLIO · {profile.folio}
      </motion.p>

      <motion.h1 className="hero__name" custom={1} variants={item} initial="hidden" animate="visible">
        {profile.displayName}
      </motion.h1>

      <motion.p className="hero__tag" custom={2} variants={item} initial="hidden" animate="visible">
        {profile.heroTagline}
      </motion.p>

      <motion.div className="hero__meta" custom={3} variants={item} initial="hidden" animate="visible">
        <div className="hero__meta-block">
          <span className="hero__meta-label">Availability</span>
          <span className="hero__meta-value">{profile.availability}</span>
        </div>
        <div className="hero__meta-block">
          <span className="hero__meta-label">Location</span>
          <span className="hero__meta-value">{profile.location}</span>
        </div>
        <div className="hero__meta-block">
          <span className="hero__meta-label">Contact</span>
          <a className="hero__meta-value hero__meta-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </motion.div>

      <motion.div className="hero__actions" custom={4} variants={item} initial="hidden" animate="visible">
        <a className="btn btn--primary" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
          View resume
        </a>
        <a className="btn btn--ghost" href="#contact">
          Get in touch
        </a>
      </motion.div>
    </section>
  )
}
