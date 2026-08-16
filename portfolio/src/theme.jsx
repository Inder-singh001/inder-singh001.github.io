import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const ACCENTS = [
  { id: 'violet', label: 'Violet', primary: '#8b5cf6', secondary: '#22d3ee' },
  { id: 'cyan', label: 'Cyan', primary: '#22d3ee', secondary: '#818cf8' },
  { id: 'emerald', label: 'Emerald', primary: '#34d399', secondary: '#a3e635' },
  { id: 'amber', label: 'Amber', primary: '#f59e0b', secondary: '#fb7185' },
  { id: 'rose', label: 'Rose', primary: '#fb7185', secondary: '#c084fc' },
  { id: 'blue', label: 'Blue', primary: '#60a5fa', secondary: '#2dd4bf' },
]

const ThemeContext = createContext(null)

function readStored(key, fallback, valid) {
  try {
    const v = localStorage.getItem(key)
    return v && valid(v) ? v : fallback
  } catch {
    return fallback
  }
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() =>
    readStored('portfolio-mode', 'dark', (v) => v === 'dark' || v === 'light'),
  )
  const [accentId, setAccentId] = useState(() =>
    readStored('portfolio-accent', 'violet', (v) => ACCENTS.some((a) => a.id === v)),
  )

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    try {
      localStorage.setItem('portfolio-mode', mode)
    } catch {
      /* private browsing */
    }
  }, [mode])

  useEffect(() => {
    document.documentElement.dataset.accent = accentId
    try {
      localStorage.setItem('portfolio-accent', accentId)
    } catch {
      /* private browsing */
    }
  }, [accentId])

  const value = useMemo(() => {
    const accent = ACCENTS.find((a) => a.id === accentId) ?? ACCENTS[0]
    return {
      mode,
      setMode,
      toggleMode: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')),
      accent,
      accentId,
      setAccentId,
    }
  }, [mode, accentId])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
