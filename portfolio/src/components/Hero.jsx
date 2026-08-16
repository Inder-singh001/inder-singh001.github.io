import { Suspense, lazy, useEffect, useState } from 'react'
import { profile, stats } from '../data.js'
import { Icon } from './Icons.jsx'

const Scene3D = lazy(() => import('./Scene3D.jsx'))

const ROLES = ['Software Engineer', 'Full Stack Developer', 'Real-Time Systems Builder', 'VoIP Platform Engineer']

function useTypewriter(words, speed = 65, pause = 1700) {
  const [text, setText] = useState('')
  useEffect(() => {
    let word = 0
    let char = 0
    let deleting = false
    let timer
    const tick = () => {
      const current = words[word]
      if (!deleting) {
        char++
        setText(current.slice(0, char))
        if (char === current.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
        timer = setTimeout(tick, speed)
      } else {
        char--
        setText(current.slice(0, char))
        if (char === 0) {
          deleting = false
          word = (word + 1) % words.length
        }
        timer = setTimeout(tick, deleting ? 32 : 300)
      }
    }
    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [words, speed, pause])
  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section className="hero" id="top">
      <div className="hero-canvas">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="pulse-dot" />
          Available for projects & gigs
        </div>

        <h1>
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="hero-role">
          &gt; {typed}
          <span className="cursor-blink">_</span>
        </p>

        <p className="hero-desc">
          I build reliable systems that handle real-time operations smoothly and consistently —
          VoIP platforms, high-availability infrastructure, and full-stack apps that don&apos;t
          break down under real-world load.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            View my work <Icon name="arrow" size={17} />
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={17} /> Get in touch
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
          >
            <Icon name="github" size={17} /> GitHub
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  )
}
