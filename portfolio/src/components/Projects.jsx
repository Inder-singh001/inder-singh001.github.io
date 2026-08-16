import { useRef } from 'react'
import { projects } from '../data.js'
import Reveal from './Reveal.jsx'

function TiltCard({ project }) {
  const cardRef = useRef(null)
  const frame = useRef(0)

  const onMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      card.style.transform = `rotateX(${-py * 9}deg) rotateY(${px * 9}deg) scale(1.015)`
    })
  }

  const onLeave = () => {
    const card = cardRef.current
    if (!card) return
    cancelAnimationFrame(frame.current)
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div className="tilt-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
      <article className="glass-card project-card" ref={cardRef}>
        <div className="project-top">
          <h3>{project.title}</h3>
          <span className="project-tag">{project.tag}</span>
        </div>
        <ul className="project-points">
          {project.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </article>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Projects</span>
            <h2 className="section-title">
              Things I&apos;ve <span className="gradient-text">shipped</span>
            </h2>
            <p className="section-sub">
              Production systems spanning real-time communication, security infrastructure and
              full-stack products. Hover a card to explore.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
