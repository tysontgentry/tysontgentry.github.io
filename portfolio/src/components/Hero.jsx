import { motion } from 'framer-motion'
import { heroStats, profile } from '../data/content'
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
      <div className="hero__layout">
        <div className="hero__main">
          <motion.p className="hero__folio" custom={0} variants={item} initial="hidden" animate="visible">
            FOLIO · {profile.folio}
          </motion.p>

          <motion.h1 className="hero__name" custom={1} variants={item} initial="hidden" animate="visible">
            {profile.displayName}
          </motion.h1>

          <motion.p className="hero__tag" custom={2} variants={item} initial="hidden" animate="visible">
            {profile.heroTagline}
          </motion.p>

          <motion.p className="hero__summary" custom={3} variants={item} initial="hidden" animate="visible">
            {profile.summary}
          </motion.p>

          <motion.div className="hero__actions" custom={4} variants={item} initial="hidden" animate="visible">
            <a className="btn btn--primary" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
              View resume
            </a>
            <a className="btn btn--ghost" href="#projects">
              See projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.aside className="hero__panel" custom={5} variants={item} initial="hidden" animate="visible">
          <div className="hero__panel-intro">
            <p className="hero__panel-label">Currently</p>
            <p className="hero__panel-title">Open to Summer 2026 software engineering internships</p>
            <p className="hero__panel-copy">
              Interested in backend systems, AI infrastructure, data tooling, and product engineering roles where strong CS fundamentals matter.
            </p>
          </div>

          <div className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-label">{stat.label}</span>
                <span className="hero__stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      <motion.div className="hero__meta" custom={6} variants={item} initial="hidden" animate="visible">
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
    </section>
  )
}
