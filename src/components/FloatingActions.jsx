import { WhatsAppIcon, PhoneIcon } from './Icons'
import { contact, telLink, waLink, messages } from '../config'

/** Always-available contact: a floating bar on phones and tablets, a round WhatsApp button on desktop. */
export default function FloatingActions() {
  return (
    <>
      <div className="fixed inset-x-3 bottom-3 z-40 rounded-[1.4rem] bg-ink p-2 shadow-[0_18px_40px_-10px_rgba(23,19,15,.6)] lg:hidden" role="group" aria-label="Quick contact">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
          <a href={telLink} className="btn btn-primary" aria-label={`Call ${contact.phoneDisplay}`}>
            <PhoneIcon /> Call now
          </a>
          <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsAppIcon /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <a
        href={waLink(messages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
        className="group fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-wa text-wa-dark shadow-[0_18px_40px_-8px_rgba(37,211,102,.7)] transition-transform hover:scale-105 lg:flex"
      >
        <WhatsAppIcon className="h-8 w-8" />
        <span className="pointer-events-none absolute right-[4.6rem] whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-bold text-paper opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Chat on WhatsApp
        </span>
      </a>
    </>
  )
}
