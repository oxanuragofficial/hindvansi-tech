import Logo from './Logo'
import { WhatsAppIcon, PhoneIcon, MailIcon, ExternalIcon } from './Icons'
import { nav, services, projects } from '../data'
import { contact, telLink, waLink, mailLink, messages } from '../config'

const link = 'hover:text-white hover:underline'

export default function Footer() {
  return (
    <footer className="on-dark bg-ink pb-28 text-[#cfc4ad] lg:pb-0">
      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-12 lg:gap-x-8">
        <div className="col-span-2 lg:col-span-4">
          <a href="#top" aria-label="Hindvansi Tech, back to top"><Logo onDark markClass="h-11 w-11" /></a>
          <p className="mt-5 max-w-sm">
            A freelance technology and digital services company building websites, design and practical software for small businesses, startups and local service providers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
              <WhatsAppIcon /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={telLink} className="btn btn-ghost btn-sm"><PhoneIcon /> Call</a>
          </div>
        </div>

        <nav aria-label="Footer: explore" className="lg:col-span-2">
          <h2 className="font-body text-xs font-extrabold uppercase tracking-[0.16em] text-accent-hi">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => <li key={n.href}><a className={link} href={n.href}>{n.label}</a></li>)}
          </ul>
        </nav>

        <nav aria-label="Footer: services" className="lg:col-span-3">
          <h2 className="font-body text-xs font-extrabold uppercase tracking-[0.16em] text-accent-hi">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => <li key={s.id}><a className={link} href={`#${s.id}`}>{s.name}</a></li>)}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-3">
          <h2 className="font-body text-xs font-extrabold uppercase tracking-[0.16em] text-accent-hi">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li><a className={`inline-flex items-center gap-2.5 ${link}`} href={telLink}><PhoneIcon className="h-5 w-5 text-accent-hi" /> {contact.phoneDisplay}</a></li>
            <li><a className={`inline-flex max-w-full items-start gap-2.5 [overflow-wrap:anywhere] ${link}`} href={mailLink(messages.emailSubject, messages.emailBody)}><MailIcon className="mt-0.5 h-5 w-5 flex-none text-accent-hi" /> {contact.email}</a></li>
          </ul>
          <h2 className="mt-8 font-body text-xs font-extrabold uppercase tracking-[0.16em] text-accent-hi">Featured projects</h2>
          <ul className="mt-3 space-y-2">
            {projects.map((p) => (
              <li key={p.id}>
                <a className={`inline-flex items-center gap-1.5 ${link}`} href={p.live} target="_blank" rel="noopener noreferrer">
                  {p.title} <ExternalIcon className="h-3.5 w-3.5" /><span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Hindvansi Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
