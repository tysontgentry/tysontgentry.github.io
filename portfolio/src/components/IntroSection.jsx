import { motion } from 'framer-motion'
import { profile, highlights } from '../data/content'
import './IntroSection.css'

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function IntroSection() {
  return (
    <section id="intro" className="intro">
      <div className="intro__head">
        <motion.h2 className="intro__title" custom={0} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {profile.introTitle}
        </motion.h2>
        <motion.p className="intro__body" custom={1} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {profile.introBody}
        </motion.p>
      </div>

      <div className="intro__cards">
        <motion.div className="intro__card" custom={2} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="intro__card-label">Education</p>
          <p className="intro__card-strong">{profile.schoolLine}</p>
          <p className="intro__card-line">{profile.degreeLine}</p>
          <p className="intro__card-meta">{profile.gradRange}</p>
        </motion.div>
        <motion.div className="intro__card" custom={3} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="intro__card-label">Contact</p>
          <a className="intro__card-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="intro__card-link" href={`tel:${profile.phone.replace(/\D/g, '')}`}>
            {profile.phone}
          </a>
          <p className="intro__card-meta">{profile.location}</p>
        </motion.div>
      </div>

      <ul className="intro__highlights">
        {highlights.map((h, i) => (
          <motion.li
            key={h.num}
            className="intro__highlight"
            custom={i + 4}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="intro__highlight-num">{h.num}</span>
            <p className="intro__highlight-text">
              {h.before}
              <strong>{h.strong}</strong>
              {h.after}
            </p>
          </motion.li>
        ))}
      </ul>

      <motion.div className="intro__resume" custom={8} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <a className="intro__resume-link" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
          View full resume →
        </a>
      </motion.div>
    </section>
  )
}
