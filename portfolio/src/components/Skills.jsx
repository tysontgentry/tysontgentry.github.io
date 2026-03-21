import { skillGroups, skillsBlurb } from '../data/content'
import SectionTitle from './SectionTitle'
import './Skills.css'

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__intro">
        <SectionTitle
          eyebrow="Toolkit"
          title="Skills"
          description={skillsBlurb}
        />
      </div>
      <div className="skills__grid">
        {skillGroups.map((g) => (
          <div key={g.title} className="skills__card card">
            <h3 className="skills__card-title">{g.title}</h3>
            <ul className="skills__list">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
