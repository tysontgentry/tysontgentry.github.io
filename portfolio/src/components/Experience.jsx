import { motion } from 'framer-motion'
import { experienceTimeline, orgPills, experienceStats } from '../data/content'
import SectionTitle from './SectionTitle'
import './Experience.css'

export default function Experience() {
  return (
    <div className="experience">
      <SectionTitle
        eyebrow="Journey"
        title="Experience"
        description="A timeline of work and community involvement—building systems, supporting operations, and growing in STEM."
      />

      <div className="experience__orgs" aria-label="Organizations">
        {orgPills.map((label) => (
          <span key={label} className="experience__org-pill">
            {label}
          </span>
        ))}
      </div>

      <div className="experience__timeline">
        {experienceTimeline.map((job, i) => (
          <motion.article
            key={job.id}
            className={`experience__job ${job.isSecondary ? 'experience__job--secondary' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <div className="experience__job-head">
              <h3 className="experience__role">{job.role}</h3>
              <p className="experience__company">{job.company}</p>
              <p className="experience__dates">
                {job.dates} · {job.location}
              </p>
            </div>
            <p className="experience__desc">{job.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="experience__stats">
        {experienceStats.map((s) => (
          <div key={s.label} className="experience__stat">
            <span className="experience__stat-value">{s.value}</span>
            <span className="experience__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
