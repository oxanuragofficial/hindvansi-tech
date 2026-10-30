import { useState } from 'react'
import { WhatsAppIcon, PhoneIcon, MailIcon, ArrowIcon } from './Icons'
import { formServices, formBudgets } from '../data'
import { contact, telLink, waLink, mailLink, messages } from '../config'

const empty = { name: '', business: '', phone: '', email: '', service: '', budget: '', details: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!v.phone.trim() && !v.email.trim()) {
    e.phone = 'Enter a phone number or an email address so we can reply.'
  }
  if (v.phone.trim() && !/^\+?[\d\s()-]{7,}$/.test(v.phone.trim())) e.phone = 'Use digits, spaces, + or dashes, for example +91 98765 43210.'
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address, such as name@example.com.'
  if (!v.service) e.service = 'Choose the service you need.'
  if (!v.details.trim()) e.details = 'Tell us a little about your project.'
  else if (v.details.trim().length < 15) e.details = 'Add a few more details (at least 15 characters).'
  return e
}

function compose(v) {
  const fields = [
    `Name: ${v.name.trim()}`,
    v.business.trim() && `Business: ${v.business.trim()}`,
    v.phone.trim() && `Phone: ${v.phone.trim()}`,
    v.email.trim() && `Email: ${v.email.trim()}`,
    `Service: ${v.service}`,
    v.budget && `Budget: ${v.budget}`,
  ].filter(Boolean)
  return [
    "Hello Hindvansi Tech, I'd like to discuss a project.",
    '',
    ...fields,
    '',
    `Project details: ${v.details.trim()}`,
  ].join('\n')
}

function Field({ id, label, optional, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label} {optional && <span className="opt">(optional)</span>}</label>
      {children}
      {error && <p id={`${id}-err`} className="err">{error}</p>}
    </div>
  )
}

function ContactForm() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null) // null | 'whatsapp' | 'email'

  const set = (k) => (e) => {
    setV((o) => ({ ...o, [k]: e.target.value }))
    if (errors[k]) setErrors((o) => ({ ...o, [k]: undefined }))
    if (sent) setSent(null)
  }
  const a = (k) => ({ 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  function send(channel) {
    const found = validate(v)
    setErrors(found)
    const first = Object.keys(found).find((k) => found[k])
    if (first) {
      document.getElementById(first)?.focus()
      return
    }
    const text = compose(v)
    if (channel === 'whatsapp') window.open(waLink(text), '_blank', 'noopener,noreferrer')
    else {
      // A real link click is the most reliable way to hand off to the visitor's email app.
      const a = document.createElement('a')
      a.href = mailLink(`Project enquiry from ${v.name.trim()}`, text)
      document.body.appendChild(a)
      a.click()
      a.remove()
    }
    setSent(channel)
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); send('whatsapp') }} noValidate aria-label="Project enquiry form" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name}>
          <input id="name" className="input" autoComplete="name" value={v.name} onChange={set('name')} {...a('name')} />
        </Field>
        <Field id="business" label="Business name" optional>
          <input id="business" className="input" autoComplete="organization" value={v.business} onChange={set('business')} />
        </Field>
        <Field id="phone" label="Phone or WhatsApp" error={errors.phone}>
          <input id="phone" type="tel" className="input" autoComplete="tel" inputMode="tel" value={v.phone} onChange={set('phone')} {...a('phone')} />
        </Field>
        <Field id="email" label="Email" optional error={errors.email}>
          <input id="email" type="email" className="input" autoComplete="email" value={v.email} onChange={set('email')} {...a('email')} />
        </Field>
        <Field id="service" label="Service required" error={errors.service}>
          <select id="service" className="input" value={v.service} onChange={set('service')} {...a('service')}>
            <option value="">Choose a service</option>
            {formServices.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field id="budget" label="Estimated budget" optional>
          <select id="budget" className="input" value={v.budget} onChange={set('budget')}>
            <option value="">Prefer not to say</option>
            {formBudgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </Field>
      </div>
      <Field id="details" label="Project details" error={errors.details}>
        <textarea id="details" className="input" rows={5} value={v.details} onChange={set('details')} {...a('details')} placeholder="What do you need, and what is it for?" />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <button type="button" onClick={() => send('whatsapp')} className="btn btn-wa sm:flex-1">
          <WhatsAppIcon /> Send on WhatsApp
        </button>
        <button type="button" onClick={() => send('email')} className="btn btn-dark sm:flex-1">
          <MailIcon /> Send by Email
        </button>
      </div>
      <p className="text-sm text-mute">
        Your message opens ready to send in WhatsApp or your email app. It is delivered when you press send there.
      </p>

      <div aria-live="polite">
        {sent && (
          <p className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-[0.95rem] font-bold text-accent-600">
            {sent === 'whatsapp'
              ? 'WhatsApp opened with your message ready. Press send there to deliver it.'
              : 'Your email app opened with your message ready. Press send there to deliver it.'}
          </p>
        )}
      </div>
    </form>
  )
}

export function Contact() {
  const [ea, eb] = contact.email.split('@')
  const methods = [
    {
      icon: WhatsAppIcon, label: 'WhatsApp', text: 'Fastest way to reach us',
      href: waLink(messages.general), external: true, tone: 'bg-wa text-wa-dark',
    },
    {
      icon: PhoneIcon, label: 'Call', text: contact.phoneDisplay,
      href: telLink, tone: 'bg-accent text-white',
    },
    {
      icon: MailIcon, label: 'Email', text: <>{ea}<wbr />@{eb}</>,
      href: mailLink(messages.emailSubject, messages.emailBody), tone: 'bg-paper text-ink',
    },
  ]
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark section relative isolate overflow-hidden bg-forest text-paper">
      <div className="absolute -right-40 -top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-[140px]" aria-hidden="true" />
      <div className="wrap grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">Contact</p>
          <h2 id="contact-title" className="h-lg mt-5">Let us talk about <em>your project</em></h2>
          <p className="mt-5 max-w-[46ch] text-[#cdd8cf]">
            A few lines are enough to begin. We will reply with questions and, once the scope is clear, an estimate. We do not quote prices without knowing the project.
          </p>

          <ul className="mt-9 space-y-3">
            {methods.map((m) => (
              <li key={m.label}>
                <a
                  href={m.href}
                  {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-full ${m.tone}`}><m.icon className="h-6 w-6" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold">{m.label}</span>
                    <span className="block text-[0.9rem] text-[#cdd8cf] [overflow-wrap:anywhere] sm:text-[0.95rem]">{m.text}</span>
                  </span>
                  <ArrowIcon className="hidden h-5 w-5 flex-none text-accent-hi transition-transform group-hover:translate-x-1 sm:block" />
                  {m.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-xl font-semibold">Helpful to have ready</h3>
          <ul className="mt-3 space-y-2 text-[#cdd8cf]">
            {['A short description of your business and customers', 'Sites you like, and why', 'Logo or brand files, if you have them', 'Your text and photos, if ready', 'A rough deadline or budget range'].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rotate-45 bg-accent-hi" aria-hidden="true" />{t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-paper p-6 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)] sm:p-9 lg:col-span-7">
          <h3 className="h-md text-3xl">Send us your enquiry</h3>
          <p className="mb-7 mt-2 text-mute">Fill this in and choose how to send it.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
