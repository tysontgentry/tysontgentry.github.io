import { motion } from 'framer-motion'
import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import './Projects.css'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <div className="projects">
      <SectionTitle
        eyebrow="Work"
        title="Projects"
        description="Selected work focused on algorithms, data pipelines, and product-style delivery—coursework and personal builds."
      />
      <motion.div
        className="projects__grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {projects.map((p) => (
          <motion.div key={p.title} className="projects__item" variants={cardVariant}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
