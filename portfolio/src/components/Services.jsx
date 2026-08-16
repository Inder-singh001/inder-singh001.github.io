import { services } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

function ServiceCard({ service }) {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div className="glass-card service-card" onMouseMove={onMove}>
      <div className="service-icon">
        <Icon name={service.icon} size={24} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Services</span>
            <h2 className="section-title">
              What I can <span className="gradient-text">build for you</span>
            </h2>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
