/**
 * Single source of truth for contact details and every pre-written message.
 * Change a number or email here and every button on the site updates.
 */
export const contact = {
  name: 'Hindvansi Tech',
  phoneDisplay: '+91 74795 21662',
  phoneTel: '+917479521662',
  whatsappNumber: '917479521662', // country code + number, digits only
  // The email address was typed "hindvansitech.support@gmil.com" in the brief; "gmail.com" is assumed.
  email: 'hindvansitech.support@gmail.com',
}

export const waLink = (text) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`

export const mailLink = (subject, body) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const telLink = `tel:${contact.phoneTel}`

/* Ready-made messages */
export const messages = {
  general:
    "Hello Hindvansi Tech, I'd like to discuss a project for my business. Could you please tell me how we can get started?",
  quote:
    "Hello Hindvansi Tech, I'd like a free quote for a project. Here is a short description of what I need: ",
  service: (name) =>
    `Hello Hindvansi Tech, I'm interested in your ${name} service. Could you please explain how it works and share an estimate?`,
  project: (title) =>
    `Hello Hindvansi Tech, I saw your ${title} project on your website and would like something similar for my business. Can we talk about it?`,
  emailSubject: 'Project enquiry from your website',
  emailBody:
    "Hello Hindvansi Tech,\n\nI'd like to discuss a project.\n\nMy name:\nMy business:\nWhat I need:\n\nThank you.",
}
