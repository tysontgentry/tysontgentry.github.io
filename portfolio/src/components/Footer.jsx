import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import './Footer.css'

function formatUtcTime() {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: profile.timezone,
    timeZoneName: 'short',
  }).format(new Date())
}

export default function Footer() {
  const [time, setTime] = useState(formatUtcTime)

  useEffect(() => {
    const t = setInterval(() => setTime(formatUtcTime()), 60_000)
    return () => clearInterval(t)
  }, [])

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__meta">
          <span>Version: {new Date().getFullYear()} · Edition</span>
          <span className="site-footer__dot" aria-hidden />
          <span>{profile.location} · {profile.timezoneLabel}: {time}</span>
        </p>
        <p className="site-footer__socials">
          Socials:{' '}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {profile.github ? (
            <>
              {', '}
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </>
          ) : null}
        </p>
        <p className="site-footer__copy">© {new Date().getFullYear()} Tyson Gentry</p>
      </div>
    </footer>
  )
}
