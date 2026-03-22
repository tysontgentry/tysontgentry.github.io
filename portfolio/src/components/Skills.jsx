import { expertiseGroups, expertiseIntro } from '../data/content'
import SectionTitle from './SectionTitle'
import SkillBar from './SkillBar'
import './Skills.css'

export default function Skills() {
  return (
    <div className="expertise">
      <SectionTitle
        eyebrow="Stack"
        title="Expertise"
        description={expertiseIntro}
      />
      <div className="expertise__grid">
        {expertiseGroups.map((group) => (
          <div key={group.title} className="expertise__column">
            <h3 className="expertise__group-title">{group.title}</h3>
            {group.items.map((row) => (
              <SkillBar key={row.name} name={row.name} pct={row.pct} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
