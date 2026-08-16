import { useEffect, useRef, useState } from 'react'
import { useTheme, ACCENTS } from '../theme.jsx'
import { Icon } from './Icons.jsx'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { mode, setMode, toggleMode, accentId, setAccentId } = useTheme()
  const [open, setOpen] = useState(false)
  const popRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (popRef.current && !popRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">IS</span>
          Inderpreet<span className="gradient-text">.dev</span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleMode}
            aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon name={mode === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <div className="theme-pop" ref={popRef}>
            <button
              className="icon-btn"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Theme settings"
              title="Theme settings"
            >
              <Icon name="palette" size={18} />
            </button>

            {open && (
              <div className="theme-panel" role="dialog" aria-label="Theme settings">
                <h4>Accent color</h4>
                <div className="swatches">
                  {ACCENTS.map((a) => (
                    <button
                      key={a.id}
                      className={`swatch ${a.id === accentId ? 'active' : ''}`}
                      style={{ '--sw': `linear-gradient(135deg, ${a.primary}, ${a.secondary})` }}
                      onClick={() => setAccentId(a.id)}
                      aria-label={`${a.label} accent`}
                      title={a.label}
                    />
                  ))}
                </div>
                <h4>Appearance</h4>
                <div className="mode-row">
                  <button
                    className={`mode-btn ${mode === 'light' ? 'active' : ''}`}
                    onClick={() => setMode('light')}
                  >
                    <Icon name="sun" size={15} /> Light
                  </button>
                  <button
                    className={`mode-btn ${mode === 'dark' ? 'active' : ''}`}
                    onClick={() => setMode('dark')}
                  >
                    <Icon name="moon" size={15} /> Dark
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
