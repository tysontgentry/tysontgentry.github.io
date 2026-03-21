import { experience } from '../data/content'
import SectionTitle from './SectionTitle'
import './Experience.css'

export default function Experience() {
  return (
    <div className="experience">
      <SectionTitle
        eyebrow="Background"
        title="Experience & involvement"
        description="Retail operations experience plus active participation in STEM and CS communities."
      />
      <div className="experience__grid">
        {experience.map((e) => (
          <article key={e.title} className="experience__card card">
            <h3 className="experience__title">{e.title}</h3>
            <p className="experience__meta">{e.meta}</p>
            <p className="experience__body">{e.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
