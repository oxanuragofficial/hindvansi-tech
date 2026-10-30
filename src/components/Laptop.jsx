const base = import.meta.env.BASE_URL

export const imgSrc = (p, size) => `${base}work/${p.image}${size === 'sm' ? '-720' : ''}.webp`
export const mobileSrc = (p) => (p.mobile ? `${base}work/${p.mobile}.webp` : null)

/** A laptop frame around a project screenshot. `children` replaces the single image (used for the hero slideshow). */
export default function Laptop({ project, children, className = '' }) {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <div className="relative rounded-t-[1.1rem] border-[7px] border-b-0 border-[#1c1814] bg-[#0d0b09] p-[3px] shadow-[0_30px_70px_-24px_rgba(23,19,15,.6)] sm:rounded-t-[1.4rem] sm:border-[10px]">
        <span className="absolute left-1/2 top-[-6px] h-[3px] w-12 -translate-x-1/2 rounded-full bg-[#3a332b] sm:top-[-8px]" aria-hidden="true" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.55rem] bg-ink sm:rounded-[0.8rem]">
          {children ?? (
            <img
              src={imgSrc(project, 'sm')}
              srcSet={`${imgSrc(project, 'sm')} 720w, ${imgSrc(project)} 1440w`}
              sizes="(min-width: 1024px) 62vw, 100vw"
              width="1440"
              height="900"
              alt={project.alt}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
        </div>
      </div>
      <div className="relative mx-auto h-[0.8rem] w-[106%] max-w-none -translate-x-[2.8%] rounded-b-[1.2rem] bg-gradient-to-b from-[#4a4137] to-[#1c1814] shadow-[0_20px_30px_-12px_rgba(23,19,15,.55)] sm:h-[1rem]">
        <span className="absolute left-1/2 top-0 h-[0.3rem] w-[18%] -translate-x-1/2 rounded-b-lg bg-[#110e0b]" aria-hidden="true" />
      </div>
    </div>
  )
}
