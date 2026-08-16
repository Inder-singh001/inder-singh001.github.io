import { profile } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">About</span>
            <h2 className="section-title">
              Engineering for the <span className="gradient-text">real world</span>
            </h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="glass-card about-text">
              <p className="lead">{profile.overview}</p>
              <p>{profile.goal}</p>
              <p>{profile.summary}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-meta">
              <a className="meta-row" href={`mailto:${profile.email}`}>
                <Icon name="mail" />
                <span>{profile.email}</span>
              </a>
              <a className="meta-row" href={profile.github} target="_blank" rel="noreferrer noopener">
                <Icon name="github" />
                <span>github.com/{profile.githubHandle}</span>
              </a>
              <div className="meta-row">
                <Icon name="pin" />
                <span>{profile.location}</span>
              </div>
              <div className="meta-row">
                <Icon name="cap" />
                <span>B.Tech CSE · GNDEC · 2021–2025</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
