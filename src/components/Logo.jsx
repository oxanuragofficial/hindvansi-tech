import { useId } from 'react'

/**
 * Hindvansi Tech mark: a rounded hexagon (a precise, engineered shape) holding an H.
 * The right pillar climbs to a point, a quiet sign of growth. Vermilion works on both paper and ink.
 */
export function LogoMark({ className = 'h-10 w-10', title }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={`g${id}`} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF6B35" />
          <stop offset="1" stopColor="#C42E08" />
        </linearGradient>
      </defs>
      <path d="M32 4.5 56.2 18.4v27.2L32 59.5 7.8 45.6V18.4Z" fill={`url(#g${id})`} stroke={`url(#g${id})`} strokeWidth="5" strokeLinejoin="round" />
      <rect x="19" y="20" width="7.4" height="25" rx="1.8" fill="#FFF8EC" />
      <path d="M37.6 45V26.2L45 17.6V45Z" fill="#FFF8EC" strokeLinejoin="round" />
      <rect x="24" y="29.6" width="16" height="6.6" rx="1.2" fill="#FFF8EC" />
    </svg>
  )
}

export default function Logo({ className = '', markClass = 'h-10 w-10', onDark = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClass} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-semibold tracking-tight ${onDark ? 'text-paper' : 'text-ink'}`}>Hindvansi</span>
        <span className={`mt-1 text-[0.62rem] font-extrabold tracking-[0.5em] ${onDark ? 'text-accent-hi' : 'text-accent'}`}>TECH</span>
      </span>
    </span>
  )
}
