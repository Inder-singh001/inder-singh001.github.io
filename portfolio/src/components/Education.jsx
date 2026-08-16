import { education } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Education</span>
            <h2 className="section-title">
              Where it <span className="gradient-text">started</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card edu-card">
            <div className="edu-icon">
              <Icon name="cap" size={28} />
            </div>
            <div>
              <h3>{education.school}</h3>
              <p className="edu-degree">{education.degree}</p>
            </div>
            <span className="edu-period">{education.period}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
