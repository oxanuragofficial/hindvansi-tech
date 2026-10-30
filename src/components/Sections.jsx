import { imgSrc } from './Laptop'
import {
  WhatsAppIcon, PhoneIcon, MailIcon, ExternalIcon, GithubIcon, CodeIcon, PenIcon, TrendIcon,
  SparkIcon, LayersIcon, PhoneMobileIcon, ChatIcon, BoltIcon, WrenchIcon, TargetIcon, EyeIcon,
} from './Icons'
import { tools, services, projects, steps, why, faqs } from '../data'
import { contact, telLink, waLink, mailLink, messages } from '../config'

const icons = {
  code: CodeIcon, pen: PenIcon, trend: TrendIcon, spark: SparkIcon, layers: LayersIcon,
  phone: PhoneMobileIcon, chat: ChatIcon, bolt: BoltIcon, wrench: WrenchIcon, target: TargetIcon, eye: EyeIcon,
}
const Icon = ({ name, ...p }) => {
  const C = icons[name]
  return <C {...p} />
}
const num = (i) => String(i + 1).padStart(2, '0')

/** Email that can break at the @ instead of mid-word. */
const Email = ({ value }) => {
  const [a, b] = value.split('@')
  return <>{a}<wbr />@{b}</>
}

export function Tools() {
  return (
    <section aria-label="Technologies we work with" className="on-dark overflow-hidden bg-ink py-5 text-paper">
      <div className="marquee">
        {[0, 1].map((k) => (
          <ul key={k} className="flex flex-none items-center" aria-hidden={k === 1 ? 'true' : undefined}>
            {tools.map((t) => (
              <li key={t} className="flex items-center gap-8 pr-8 font-display text-xl font-medium italic sm:text-2xl">
                {t}
                <span className="h-2 w-2 rotate-45 bg-accent-hi" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Our services</p>
            <h2 id="services-title" className="h-lg mt-5">Everything your business needs to look <em>professional</em> online</h2>
          </div>
          <p className="text-mute lg:col-span-4 lg:col-start-9">
            Start with the problem you want solved. We will tell you which service fits and what it involves.
          </p>
        </div>

        <ol className="mt-12 border-t-2 border-ink">
          {services.map((s, i) => (
            <li key={s.id} id={s.id} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-x-8 md:py-10">
              <div className="flex items-center gap-4 md:col-span-5">
                <span className="font-display text-3xl font-medium italic text-accent md:w-14 md:text-4xl">{num(i)}</span>
                <h3 className="h-md flex-1">{s.name}</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-mute">{s.problem}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${s.name} includes`}>
                  {s.items.map((it) => <li key={it} className="chip">{it}</li>)}
                </ul>
              </div>
              <div className="md:col-span-2 md:text-right">
                <a href={waLink(messages.service(s.name))} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm w-full md:w-auto">
                  <WhatsAppIcon className="text-[#128c4a]" /> Get a quote
                  <span className="sr-only"> for {s.name} (opens WhatsApp in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Showcase() {
  return (
    <section id="work" aria-labelledby="work-title" className="on-dark section relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute -right-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[130px]" aria-hidden="true" />
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Our work</p>
            <h2 id="work-title" className="h-lg mt-5">Six projects, <em>all in one place</em></h2>
          </div>
          <p className="text-[#cfc4ad] lg:col-span-5">
            Each has a live demo and open source code. Every one is labelled for what it is: a website for an institute, a concept for a local business, or a front-end study.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.id} className="flex flex-col">
              <a href={p.live} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="group block">
                <div className="browser transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="browser-bar"><i /><i /><i /></div>
                  <img
                    src={imgSrc(p, 'sm')}
                    srcSet={`${imgSrc(p, 'sm')} 720w, ${imgSrc(p)} 1440w`}
                    sizes="(min-width: 1280px) 400px, (min-width: 640px) 46vw, 92vw"
                    width="1440"
                    height="900"
                    alt=""
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
              </a>
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="h-md">{p.title}</h3>
                  <span className="font-display text-lg italic text-accent-hi" aria-hidden="true">{num(i)}</span>
                </div>
                <p className="mt-1 text-sm font-bold text-accent-hi">{p.kind} &middot; {p.category}</p>
                <p className="mt-3 text-[0.95rem] text-[#cfc4ad]">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Technologies used in ${p.title}`}>
                  {p.tech.map((t) => <li key={t} className="chip !text-xs">{t}</li>)}
                </ul>
                <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live site <ExternalIcon />
                    <span className="sr-only"> : {p.title} (opens in a new tab)</span>
                  </a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    <GithubIcon /> Code
                    <span className="sr-only"> : {p.title} source (opens in a new tab)</span>
                  </a>
                </div>
                <a href={waLink(messages.project(p.title))} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 self-start text-sm font-extrabold text-[#5ff09a] hover:underline">
                  <WhatsAppIcon className="h-4 w-4" /> I want something like this
                  <span className="sr-only"> : {p.title} (opens WhatsApp in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section bg-paper-2">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker">How we work</p>
            <h2 id="process-title" className="h-lg mt-5">A clear path from first message to <em>launch</em></h2>
          </div>
          <p className="text-mute lg:col-span-4 lg:col-start-9">
            Timing and the number of review rounds are agreed for each project, so no two projects run in exactly the same way.
          </p>
        </div>
        <ol className="mt-12 grid gap-0 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.name} className="relative grid grid-cols-[3.25rem_1fr] gap-x-4 border-l-2 border-ink/20 pb-8 pl-5 last:pb-0 lg:block lg:border-l-0 lg:border-t-2 lg:border-ink lg:pb-0 lg:pl-0 lg:pt-6">
              <span className="absolute -left-[0.6rem] top-1 h-[1.1rem] w-[1.1rem] rounded-full border-2 border-ink bg-accent lg:hidden" aria-hidden="true" />
              <span className="font-display text-4xl font-medium italic leading-none text-accent lg:text-5xl" aria-hidden="true">{num(i)}</span>
              <div className="lg:mt-5">
                <h3 className="h-md"><span className="sr-only">Step {i + 1}: </span>{s.name}</h3>
                <p className="mt-2 text-[0.97rem] text-mute">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section aria-labelledby="why-title" className="section">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="kicker">Why Hindvansi Tech</p>
          <h2 id="why-title" className="h-lg mt-5">Practical, careful and <em>easy to work with</em></h2>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w) => (
            <li key={w.title} className="flex gap-4 border-t border-ink/20 pt-6">
              <span className="icon-bubble"><Icon name={w.icon} /></span>
              <div>
                <h3 className="h-md">{w.title}</h3>
                <p className="mt-2 text-mute">{w.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section bg-paper-2">
      <div className="wrap grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="kicker">About us</p>
          <h2 id="about-title" className="h-lg mt-5">About <em>Hindvansi Tech</em></h2>
          <div className="mt-7 max-w-[62ch] space-y-5 text-mute">
            <p>
              Hindvansi Tech helps businesses build a stronger digital presence through website development, thoughtful design and practical technology. The focus is on digital experiences that communicate clearly, work on every device and support real business needs.
            </p>
            <p>
              We work as a freelance company, which means you deal directly with the person doing the work. We usually help small and medium-sized businesses, startups and local service providers such as salons, restaurants and educational institutes.
            </p>
            <p>
              Our work covers five areas: website development, UI/UX design and branding, digital marketing and content, AI and business automation, and custom software and dashboards. Our public portfolio currently shows website and front-end projects, and we describe each one for exactly what it is.
            </p>
          </div>
        </div>

        <aside aria-label="Contact us directly" className="lg:col-span-5">
          <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink p-7 text-paper sm:p-9">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/50 blur-[70px]" aria-hidden="true" />
            <h3 className="h-md relative text-3xl">Talk to us directly</h3>
            <p className="relative mt-2 text-[#cfc4ad]">Choose the way that suits you. We reply personally.</p>
            <div className="relative mt-7 grid gap-3">
              <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                <WhatsAppIcon /> WhatsApp us<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={telLink} className="btn btn-ghost"><PhoneIcon /> {contact.phoneDisplay}</a>
              <a href={mailLink(messages.emailSubject, messages.emailBody)} className="btn btn-ghost px-3 text-[0.82rem] [overflow-wrap:anywhere] min-[380px]:text-[0.9rem] sm:px-4 sm:text-[0.98rem]">
                <MailIcon /> <span><Email value={contact.email} /></span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="kicker">FAQ</p>
          <h2 id="faq-title" className="h-lg mt-5 lg:sticky lg:top-28">Questions we are <em>often asked</em></h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="faq">
              <summary>
                <span>{f.q}</span>
                <span className="plus" aria-hidden="true" />
              </summary>
              <div className="answer"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
