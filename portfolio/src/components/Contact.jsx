import { profile } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <Reveal>
            <div className="glass-card contact-card">
              <div className="contact-inner">
                <span className="kicker">Contact</span>
                <h2>
                  Let&apos;s build something <span className="gradient-text">reliable</span>
                </h2>
                <p>
                  Have a project in mind — a real-time platform, an ERP system, or a quick
                  development gig? I&apos;m one email away.
                </p>
                <div className="hero-cta" style={{ justifyContent: 'center' }}>
                  <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                    <Icon name="mail" size={17} /> {profile.email}
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name="github" size={17} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.role} · {profile.location}
          </span>
          <div className="footer-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  )
}
