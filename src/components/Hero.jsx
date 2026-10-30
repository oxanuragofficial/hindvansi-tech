import { useEffect, useState } from 'react'
import Laptop, { imgSrc, mobileSrc } from './Laptop'
import { WhatsAppIcon, PhoneIcon, CheckIcon, ExternalIcon } from './Icons'
import { projects } from '../data'
import { contact, telLink, waLink, messages } from '../config'

const slides = ['shanti-institute', 'spark-light-salon', 'project-archive'].map((id) => projects.find((p) => p.id === id))

export default function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [paused])

  const current = slides[i]

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-24 sm:pt-28">
      <div className="absolute -right-32 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[110px]" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-forest/10 blur-[110px]" aria-hidden="true" />

      <div className="wrap grid items-center gap-12 pb-16 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-14">
        <div className="lg:col-span-6">
          <p className="kicker rise">Web development and digital services</p>
          <h1 id="hero-title" className="h-xl rise mt-5" style={{ animationDelay: '.08s' }}>
            Websites that work <em>as hard</em> as your business does.
          </h1>
          <p className="rise mt-6 max-w-[34rem] text-[1.05rem] text-mute sm:text-lg" style={{ animationDelay: '.16s' }}>
            Hindvansi Tech designs and builds fast, mobile-friendly websites, brand identities and custom tools for small businesses, startups and local service providers. Message us and get a clear answer, not a sales pitch.
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: '.24s' }}>
            <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsAppIcon /> Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={telLink} className="btn btn-dark" aria-label={`Call ${contact.phoneDisplay}`}>
              <PhoneIcon /> Call {contact.phoneDisplay}
            </a>
          </div>

          <ul className="rise mt-8 grid gap-x-6 gap-y-3 text-[0.95rem] font-semibold text-ink-2 sm:grid-cols-2" style={{ animationDelay: '.32s' }}>
            {['Mobile-first design', 'Scope agreed before work starts', 'Direct line to your developer', 'WhatsApp and call buttons built in'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-white"><CheckIcon className="h-3.5 w-3.5" /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* laptop + phone slideshow */}
        <div
          className="rise lg:col-span-6"
          style={{ animationDelay: '.2s' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative px-1 pb-8 sm:px-6 lg:px-0 lg:pb-10 lg:pl-4">
            <Laptop>
              {slides.map((p, n) => (
                <img
                  key={p.id}
                  src={imgSrc(p, 'sm')}
                  srcSet={`${imgSrc(p, 'sm')} 720w, ${imgSrc(p)} 1440w`}
                  sizes="(min-width: 1024px) 560px, 92vw"
                  width="1440"
                  height="900"
                  alt={n === i ? p.alt : ''}
                  aria-hidden={n === i ? undefined : true}
                  loading={n === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </Laptop>

            {/* phone */}
            <div className="float absolute bottom-0 right-1 w-[24%] sm:right-6 lg:right-0 lg:w-[22%]" aria-hidden="true">
              <div className="relative aspect-[9/19] overflow-hidden rounded-[1.1rem] border-[4px] border-[#1c1814] bg-ink shadow-[0_24px_40px_-14px_rgba(23,19,15,.7)] sm:rounded-[1.5rem] sm:border-[5px]">
                {slides.map((p, n) => (
                  <img
                    key={p.id}
                    src={mobileSrc(p)}
                    alt=""
                    width="390"
                    height="844"
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <span className="absolute left-1/2 top-1 h-1 w-8 -translate-x-1/2 rounded-full bg-black/80" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 flex max-w-[34rem] flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/12 bg-card/80 px-4 py-3">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-mute">Pages from our own projects</p>
              <p className="truncate font-display text-lg font-semibold">{current.title}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1" role="group" aria-label="Choose a project preview">
                {slides.map((p, n) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setI(n)}
                    aria-label={`Show ${p.title}`}
                    aria-pressed={n === i}
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                  >
                    <span className={`block h-2 rounded-full transition-all ${n === i ? 'w-6 bg-accent' : 'w-2 bg-ink/25'}`} />
                  </button>
                ))}
              </div>
              <a href={current.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-extrabold text-accent hover:underline">
                Open <ExternalIcon className="h-4 w-4" />
                <span className="sr-only"> {current.title} live website (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
