import { profile } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-cta">
      <div className="contact-cta__mark" aria-hidden>
        TG
      </div>
      <h2 className="contact-cta__title">Let&apos;s work together</h2>
      <p className="contact-cta__line">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span className="contact-cta__sep"> · </span>
        <a href={`tel:${profile.phone.replace(/\D/g, '')}`}>{profile.phone}</a>
      </p>
      <a className="contact-cta__btn" href={`mailto:${profile.email}`}>
        Get in touch
      </a>
    </div>
  )
}
