import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './SkillBar.css'

export default function SkillBar({ name, pct }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__row">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{pct}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
