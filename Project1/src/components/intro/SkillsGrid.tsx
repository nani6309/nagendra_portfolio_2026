'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function SkillsGrid() {
  const reduced = usePrefersReducedMotion()

  const tile: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.6, delay: 0.42 + i * 0.055, ease: ease.paper },
    }),
  }

  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-x-3.5 gap-y-4 p-0 sm:grid-cols-3">
      {site.skills.items.map((skill, i) => (
        <motion.li
          key={skill.label}
          variants={tile}
          custom={i}
          className="group flex flex-col items-start"
        >
          {/* Squircle Image Icon */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[22%] border border-ink/10 bg-paper-deep/30 shadow-xs transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ink/30 group-hover:shadow-md">
            {skill.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={skill.src}
                alt={skill.label}
                title={skill.label}
                className="h-full w-full rounded-[22%] object-cover transition-transform duration-500 group-hover:scale-105"
                style={skill.scale === 1 ? undefined : { transform: `scale(${skill.scale})` }}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center rounded-[18%] border border-ink/25">
                <span className="display text-sm text-ink/70">{skill.short}</span>
              </span>
            )}
          </div>

          {/* Skill Name Lettering & Highlight Indicator */}
          <div className="mt-2 flex items-center gap-1.5 px-0.5">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal/0 transition-all duration-300 group-hover:scale-125 group-hover:bg-signal"
              aria-hidden="true"
            />
            <span className="text-[0.78rem] font-bold leading-snug tracking-tight text-ink/80 transition-colors duration-300 group-hover:text-ink">
              {skill.label}
            </span>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
