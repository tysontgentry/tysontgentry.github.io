import { profile } from '../data/content'
import SectionTitle from './SectionTitle'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__panel card">
        <SectionTitle
          eyebrow="Let’s talk"
          title="Contact"
          description="Reach out for internships, research, or collaboration on interesting technical projects."
        />
        <div className="contact__links">
          <a className="contact__row" href={`mailto:${profile.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </a>
          <a className="contact__row" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">linkedin.com/in/tyson-gentry/</span>
          </a>
          <div className="contact__row contact__row--static">
            <span className="contact__label">Phone</span>
            <span className="contact__value">{profile.phone}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
