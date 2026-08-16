const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, size = 20 }) {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </>
    ),
    github: (
      <path d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.72 7.76 6.5 9.02.47.08.65-.2.65-.46v-1.62c-2.64.57-3.2-1.27-3.2-1.27-.43-1.1-1.06-1.4-1.06-1.4-.86-.59.07-.58.07-.58.96.07 1.46.98 1.46.98.85 1.45 2.23 1.03 2.77.79.09-.62.33-1.03.6-1.27-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.88.98-2.55-.1-.24-.42-1.21.09-2.52 0 0 .8-.26 2.61.97a9.1 9.1 0 0 1 4.76 0c1.81-1.23 2.6-.97 2.6-.97.52 1.31.2 2.28.1 2.52.61.67.98 1.51.98 2.55 0 3.65-2.22 4.45-4.34 4.69.34.29.64.87.64 1.76v2.6c0 .26.18.55.66.46a9.52 9.52 0 0 0 6.49-9.02c0-5.25-4.25-9.5-9.5-9.5Z" />
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.28 4.28l1.42 1.42M18.3 18.3l1.42 1.42M2.5 12h2M19.5 12h2M4.28 19.72l1.42-1.42M18.3 5.7l1.42-1.42" />
      </>
    ),
    moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />,
    palette: (
      <>
        <path d="M12 21a9 9 0 1 1 9-9c0 2.5-1.5 3.5-3 3.5h-2a2 2 0 0 0-1.5 3.3c.4.5.2 2.2-2.5 2.2Z" />
        <circle cx="7.5" cy="11" r="1" fill="currentColor" />
        <circle cx="10.5" cy="7" r="1" fill="currentColor" />
        <circle cx="15" cy="7.5" r="1" fill="currentColor" />
      </>
    ),
    stack: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
        <path d="m3 17.5 9 5 9-5" opacity="0.45" />
      </>
    ),
    grid: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </>
    ),
    bolt: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />,
    monitor: (
      <>
        <rect x="2.5" y="4" width="19" height="13" rx="2" />
        <path d="M9 21h6M12 17v4" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" strokeWidth="2.6" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </>
    ),
    signal: <path d="M4 19c0-8.28 6.72-15 15-15M4 13.5A9.5 9.5 0 0 1 13.5 4M4 8.5A4.5 4.5 0 0 1 8.5 4M4.5 19h.01" />,
    terminal: (
      <>
        <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
        <path d="m7 9 3.5 3L7 15M13 15.5h4" />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </>
    ),
    cap: (
      <>
        <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
        <path d="M6.5 12v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V12" />
        <path d="M21.5 9.5V15" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
