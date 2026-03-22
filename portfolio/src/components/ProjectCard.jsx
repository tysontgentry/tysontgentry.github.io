import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { title, subtitle, description, tags, highlight, status, year, outcome } = project
  return (
    <article className={`project-card ${highlight ? 'project-card--highlight' : ''}`}>
      <div className="project-card__topline">
        <p className="project-card__eyebrow">{subtitle}</p>
        <div className="project-card__meta">
          {year ? <span className="project-card__meta-item">{year}</span> : null}
          {status ? <span className="project-card__meta-item project-card__meta-item--status">{status}</span> : null}
        </div>
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__body">{description}</p>
      {outcome ? <p className="project-card__outcome">{outcome}</p> : null}
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
