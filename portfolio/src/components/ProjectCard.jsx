import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { title, subtitle, description, tags, highlight } = project
  return (
    <article className={`project-card ${highlight ? 'project-card--highlight' : ''}`}>
      <p className="project-card__eyebrow">{subtitle}</p>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__body">{description}</p>
      <div className="project-card__tags">
        {tags.map((t) => (
          <span key={t} className="project-card__tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
