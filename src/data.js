export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const tools = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Figma', 'WhatsApp integration', 'Google Maps embeds', 'SEO basics']

export const services = [
  {
    id: 'website-development',
    icon: 'code',
    name: 'Website Development',
    wide: true,
    problem: 'For businesses with no website, or one that is slow, outdated or hard to use on a phone.',
    items: ['Business and brochure websites', 'E-commerce websites', 'Custom web applications', 'Redesign and maintenance'],
  },
  {
    id: 'ui-ux-branding',
    icon: 'pen',
    name: 'UI/UX Design and Branding',
    problem: 'For businesses that need a clear interface or a look that stays consistent everywhere.',
    items: ['UI/UX design in Figma', 'Logo design and brand identity'],
  },
  {
    id: 'marketing-content',
    icon: 'trend',
    name: 'Digital Marketing and Content',
    problem: 'For businesses that have a site but are hard to find, or have little on it worth reading.',
    items: ['Social media management', 'SEO and local SEO', 'Copywriting and content', 'Email marketing'],
  },
  {
    id: 'ai-automation',
    icon: 'spark',
    name: 'AI and Business Automation',
    problem: 'For repetitive work such as answering the same questions or moving data between tools.',
    items: ['AI chatbots', 'AI integrations', 'Practical business automation'],
  },
  {
    id: 'custom-software',
    icon: 'layers',
    name: 'Custom Software and Dashboards',
    problem: 'For processes that spreadsheets and off-the-shelf tools handle badly.',
    items: ['Custom software development', 'Business dashboards', 'Workflow-specific tools'],
  },
]

/**
 * Showcase projects. `kind` says honestly what each one is.
 * Do not label a project "client work" until that is confirmed.
 */
export const projects = [
  {
    id: 'shanti-institute',
    title: 'Shanti Institute',
    category: 'Education / Business Website',
    kind: 'Institute website',
    summary: 'An educational institute website with course information, faculty, achievements, gallery content and clear enquiry routes.',
    note: 'Shows how a long list of courses, people and photos can be organised so a student or parent reaches an enquiry button quickly. Faculty and achievement text is sample content until the institute supplies approved material.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    live: 'https://shanti-institute-jamo-age6.vercel.app',
    repo: 'https://github.com/oxanuragofficial/Shanti-Institute-jamo',
    image: 'shanti',
    mobile: 'm-shanti',
    alt: 'Shanti Institute home page with a safety training banner, navigation and the institute logo.',
    previewNote: 'Rendered from the repository source.',
  },
  {
    id: 'spark-light-salon',
    title: 'Spark Light Unisex Salon',
    category: 'Local Business Website',
    kind: 'Concept website',
    summary: 'A salon website concept with service presentation, gallery content, business information, location details and WhatsApp-based appointment enquiries.',
    note: 'Call and WhatsApp buttons stay within reach on every screen. Enquiries start a WhatsApp chat; this is not a full booking system.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp links'],
    live: 'https://oxanuragofficialprojects.github.io/sparklight-unisexsalon/',
    repo: 'https://github.com/oxanuragofficial/sparklight-unisexsalon',
    image: 'sparklight',
    mobile: 'm-sparklight',
    alt: 'Spark Light salon home page on a dark background with the headline Where Style Meets Soul and booking buttons.',
    previewNote: 'Rendered from the repository source.',
  },
  {
    id: 'la-bella-vista',
    title: 'La Bella Vista Restaurant',
    category: 'Restaurant Website',
    kind: 'Concept website',
    summary: 'A restaurant website concept showcasing menu items, pricing, opening hours and contact options.',
    note: 'Puts the menu, opening hours and ways to get in touch on one page. A menu showcase, not an online ordering platform.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Embedded map'],
    live: 'https://oxanuragofficialprojects.github.io/restaurant-website-client/',
    repo: 'https://github.com/oxanuragofficial/restaurant-website-client',
    image: 'la-bella-vista',
    alt: 'La Bella Vista restaurant home page with a dining room photo, the headline Experience Culinary Excellence and menu buttons.',
    previewNote: 'Screenshot from the project-archive repository.',
  },
  {
    id: 'elite-salon',
    title: 'Elite Salon',
    category: 'Beauty / Local Business Website',
    kind: 'Concept website',
    summary: 'A salon and beauty services website concept with service pricing, responsive navigation, a location map and appointment enquiry links.',
    note: 'Keeps the call, WhatsApp and services links in the header so a visitor can act without scrolling.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp links'],
    live: 'https://oxanuragofficialprojects.github.io/salon-shop-website-client/',
    repo: 'https://github.com/oxanuragofficial/salon-shop-website-client',
    image: 'elite-salon',
    alt: 'Elite Salon home page with a salon interior photo, the headline Experience Luxury Hair Care and service and WhatsApp buttons.',
    previewNote: 'Screenshot from the project-archive repository.',
  },
  {
    id: 'project-namma',
    title: 'Project Namma',
    category: 'Creative Web Design',
    kind: 'Front-end study',
    summary: 'A creative agency-style front-end experience exploring bold typography, immersive video, animation and interactive website elements.',
    note: 'A study in oversized type, a full-screen video background and a custom cursor. A practice project, not a client site.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vimeo embed'],
    live: 'https://oxanurag.github.io/projectnamma/',
    repo: 'https://github.com/oxanuragofficial/projectnamma',
    image: 'namma',
    mobile: 'm-namma',
    alt: 'Project Namma home page with very large black headline text on a white background.',
    previewNote: 'Rendered from the repository source. The background video is not shown.',
  },
  {
    id: 'project-archive',
    title: 'Project Archive',
    category: 'Portfolio / Web Experiments',
    kind: 'Portfolio hub',
    summary: 'A portfolio hub organising website experiments, front-end projects and design practice in one place.',
    note: 'Sorts a large number of repositories into labelled groups so a visitor can find a specific piece of work without scrolling a raw list.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://project-archive-ruddy.vercel.app/',
    repo: 'https://github.com/oxanuragofficial/project-archive',
    image: 'project-archive',
    mobile: 'm-project-archive',
    alt: 'Project Archive home page with a dark background, a headline about client sites and UI experiments, and a summary row.',
    previewNote: 'Rendered from the repository source.',
  },
]

export const steps = [
  { name: 'Discover', text: 'We learn about your business, your customers and what the project has to achieve.' },
  { name: 'Plan', text: 'We agree scope, pages, features and priorities, and what is left for later.' },
  { name: 'Design', text: 'We develop the look and the user experience and share it with you for feedback.' },
  { name: 'Build', text: 'We build the site to work on every screen, with the features the plan calls for.' },
  { name: 'Review and launch', text: 'We test, refine and prepare the agreed deliverables for launch.' },
]

export const why = [
  { icon: 'target', title: 'Business first', text: 'Every page earns its place by helping someone call, message, buy or understand.' },
  { icon: 'phone', title: 'Built for phones', text: 'Most visitors arrive on a phone. We design for small screens first, then scale up.' },
  { icon: 'chat', title: 'Honest communication', text: 'We say what is included, what is not and what could change the price or timing.' },
  { icon: 'bolt', title: 'Practical technology', text: 'We choose the simplest tools that do the job well, so your site stays fast and easy to maintain.' },
  { icon: 'eye', title: 'Attention to detail', text: 'Spacing, alignment, image cropping and small-screen behaviour get checked, not assumed.' },
  { icon: 'wrench', title: 'Easy to look after', text: 'Clean structure and simple content files mean the next change does not mean starting over.' },
]

export const faqs = [
  { q: 'What types of websites can Hindvansi Tech build?', a: 'Business and brochure websites, e-commerce sites, portfolio sites and custom web applications. Our published examples so far are websites for an institute, salons and a restaurant, plus creative front-end work.' },
  { q: 'Can the website be customised to match my brand?', a: 'Yes. If you already have a logo, colours and fonts, we build around them. If you do not, we can design a simple brand identity first.' },
  { q: 'Will the website work on mobile phones?', a: 'Yes. Every site is planned for phones first and checked on tablets, laptops and large screens before launch.' },
  { q: 'Can I ask for changes after launch?', a: 'Yes. We agree how revisions work before the project starts, including how many rounds are included. Later changes can be handled as separate small tasks.' },
  { q: 'Do you provide website maintenance?', a: 'Maintenance and updates are available. What they cover and how they are charged is agreed per project.' },
  { q: 'Can you add WhatsApp, maps, forms or other services?', a: 'Yes. WhatsApp and call buttons, embedded maps and enquiry forms are common. For other services we will tell you honestly if they are not a good fit.' },
  { q: 'How do I get a quote?', a: 'Message us on WhatsApp, call, email or use the form below. Tell us what you need and we will reply with questions and, once the scope is clear, an estimate. We do not quote a price without knowing the project.' },
  { q: 'What should I prepare before we start?', a: 'A short description of your business and customers, sites you like, any logo or brand files, your text and photos if you have them, and a rough deadline or budget range.' },
]

export const formServices = [
  'Website Development',
  'UI/UX Design and Branding',
  'Digital Marketing and Content',
  'AI and Business Automation',
  'Custom Software and Dashboards',
  'Not sure yet',
]

export const formBudgets = ['Not decided yet', 'Under 25,000 INR', '25,000 to 75,000 INR', '75,000 to 2,00,000 INR', 'Above 2,00,000 INR']
