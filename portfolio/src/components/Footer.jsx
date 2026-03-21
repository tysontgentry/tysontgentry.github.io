import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} Tyson Gentry. Built with React & Vite.</p>
      </div>
    </footer>
  )
}
