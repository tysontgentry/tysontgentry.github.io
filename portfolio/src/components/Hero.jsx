import { motion } from 'framer-motion'
import { profile } from '../data/content'
import './Hero.css'

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__grid">
        <div className="hero__main">
          <motion.div custom={0} variants={item} initial="hidden" animate="visible">
            <span className="hero__pill">
              <span className="hero__dot" aria-hidden />
              {profile.role}
            </span>
          </motion.div>

          <motion.h1 className="hero__title" custom={1} variants={item} initial="hidden" animate="visible">
            {profile.headline}
          </motion.h1>

          <motion.p className="hero__summary" custom={2} variants={item} initial="hidden" animate="visible">
            {profile.summary}
          </motion.p>

          <motion.div className="hero__actions" custom={3} variants={item} initial="hidden" animate="visible">
            <a className="btn btn--primary" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
              View resume
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero__card card"
          custom={4}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <h2 className="hero__card-title">Quick facts</h2>
          <p className="hero__card-meta">Snapshot</p>
          <ul className="hero__facts">
            <li>
              <span className="hero__fact-label">Graduation</span>
              <span className="hero__fact-value">{profile.grad}</span>
            </li>
            <li>
              <span className="hero__fact-label">Degree</span>
              <span className="hero__fact-value">{profile.degree}</span>
            </li>
            <li>
              <span className="hero__fact-label">School</span>
              <span className="hero__fact-value">{profile.school}</span>
            </li>
            <li>
              <span className="hero__fact-label">Location</span>
              <span className="hero__fact-value">{profile.location}</span>
            </li>
            <li className="hero__facts-email">
              <span className="hero__fact-label">Email</span>
              <a className="hero__fact-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
