import { contactLinks, profile } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-cta">
      <div className="contact-cta__heading">
        <div className="contact-cta__mark" aria-hidden>
          TG
        </div>
        <div>
          <p className="contact-cta__eyebrow">Contact</p>
          <h2 className="contact-cta__title">Let&apos;s build something useful</h2>
        </div>
      </div>

      <p className="contact-cta__summary">
        I&apos;m a University of Houston CS student looking for opportunities to contribute to thoughtful software teams. If you&apos;re hiring interns, collaborating on a project, or want to connect, I&apos;d love to hear from you.
      </p>

      <div className="contact-cta__grid">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            className="contact-cta__card"
            href={item.href}
            target={item.href.startsWith('http') || item.href.endsWith('.pdf') ? '_blank' : undefined}
            rel={item.href.startsWith('http') || item.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
          >
            <span className="contact-cta__card-label">{item.label}</span>
            <span className="contact-cta__card-value">{item.value}</span>
            <span className="contact-cta__card-note">{item.note}</span>
          </a>
        ))}
      </div>

      <div className="contact-cta__actions">
        <a className="contact-cta__btn" href={`mailto:${profile.email}`}>
          Start a conversation
        </a>
        <a className="contact-cta__btn contact-cta__btn--secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          View LinkedIn
        </a>
      </div>
    </div>
  )
}
