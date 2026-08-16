import { skills } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Skills</span>
            <h2 className="section-title">
              Tools of the <span className="gradient-text">trade</span>
            </h2>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.08}>
              <div className="glass-card skill-card">
                <div className="skill-head">
                  <div className="skill-head-icon">
                    <Icon name={group.icon} size={20} />
                  </div>
                  <h3>{group.group}</h3>
                </div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
