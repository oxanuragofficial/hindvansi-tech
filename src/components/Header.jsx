import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon, ArrowIcon } from './Icons'
import { nav } from '../data'
import { contact, telLink, waLink, messages } from '../config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeId, setActiveId] = useState('')
  const btnRef = useRef(null)

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      let cur = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) cur = id
      }
      setActiveId(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open; Escape closes it.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey) }
  }, [open])

  // Close if the window grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const h = () => mq.matches && setOpen(false)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  return (
    <>
      {/* reading progress */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
        <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto flex max-w-[78rem] items-center justify-between gap-3 rounded-full border py-2 pl-4 pr-2 transition-all duration-300 sm:pl-6 ${
            scrolled || open
              ? 'border-ink/10 bg-paper/90 shadow-[0_14px_40px_-18px_rgba(23,19,15,.45)] backdrop-blur-xl'
              : 'border-ink/10 bg-paper/60 backdrop-blur-md'
          }`}
        >
          <a href="#top" aria-label="Hindvansi Tech, back to top" className="rounded-full">
            <Logo markClass="h-9 w-9 sm:h-10 sm:w-10" />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((n) => {
                const on = activeId === n.href.slice(1)
                return (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      aria-current={on ? 'true' : undefined}
                      className={`block rounded-full px-4 py-2 text-[0.93rem] font-bold transition-colors ${on ? 'bg-ink text-paper' : 'text-ink-2 hover:bg-ink/8'}`}
                    >
                      {n.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={telLink} className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.93rem] font-bold text-ink-2 hover:bg-ink/8 xl:inline-flex" aria-label={`Call ${contact.phoneDisplay}`}>
              <PhoneIcon className="h-4 w-4 text-accent" /> {contact.phoneDisplay}
            </a>
            <a href={waLink(messages.quote)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Get a Free Quote
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
            <button
              ref={btnRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" hidden={!open} className="fixed inset-0 z-[45] overflow-y-auto bg-paper pb-10 pt-24 lg:hidden">
        <nav aria-label="Mobile" className="wrap">
          <ul>
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-ink/15">
                <a href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 font-display text-[2rem] font-semibold leading-none text-ink">
                  <span className="w-7 font-body text-sm font-extrabold text-accent">0{i + 1}</span>
                  <span className="flex-1">{n.label}</span>
                  <ArrowIcon className="h-5 w-5 text-accent" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-wa">
              <WhatsAppIcon /> Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={telLink} onClick={() => setOpen(false)} className="btn btn-dark">
              <PhoneIcon /> Call {contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
