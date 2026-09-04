'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { assets } from '@/config/assets'
import { intro } from '@/config/tokens'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'
import VideoArtFrame from './VideoArtFrame'
import SkillsGrid from './SkillsGrid'

/**
 * ---------------------------------------------------------------------------
 * PAGE 02 — HELLO
 * ---------------------------------------------------------------------------
 * Three columns, and the hierarchy is doing all of the work: HELLO enormous,
 * then a bold line of introduction, then grey body copy, then two headings at
 * a single shared size. No cards, no rules, no icons on the education entries.
 * The only devices on the page are size, weight and space, which is what makes
 * the sheet read as typeset rather than assembled.
 *
 * The section reveals from ONE observer on the grid rather than four
 * independent ones, so it arrives as a single composition instead of four
 * things that happen to be near each other. Order is set by `custom`, not by
 * DOM position, so the plate can lead while the markup keeps its reading
 * order:
 *
 *     frame → HELLO → copy → skills and experience
 *
 * The portrait hangs a little past the bottom of the sheet so that the tear
 * below runs behind it — a photograph laid on the page before it was torn.
 * ---------------------------------------------------------------------------
 */
export default function IntroSection() {
  const reduced = usePrefersReducedMotion()

  const group: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced ? 0 : 0.05 } },
  }

  /** Copy and headings: a short rise. */
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.95, delay: i * 0.13, ease: ease.paper },
    }),
  }

  /**
   * The artwork surfaces rather than arrives: opacity and a breath of scale,
   * no travel. A plate that slides in is a card; a plate that fades up out of
   * the grain was always in the paper and you simply had not noticed it yet.
   */
  const plate: Variants = {
    hidden: { opacity: 0, scale: 1.045 },
    show: {
      opacity: 1,
      scale: 1,
      transition: reduced ? { duration: 0 } : { duration: 1.5, ease: ease.paper },
    },
  }

  const heading: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.95, delay: 0.13, ease: ease.paper },
    },
  }

  return (
    <section
      id="intro"
      className="relative w-full pb-0 pt-[clamp(3.5rem,10vh,8rem)]"
      aria-label="Introduction"
    >
      <div className="relative z-1 px-[max(1.5rem,7vw)] pb-[clamp(2.5rem,6vh,4.5rem)]">
        <motion.div
          className="intro-grid mx-auto max-w-[112rem]"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* -------------------------------------------------- HELLO */}
          <motion.div className="area-heading" variants={heading}>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(3.25rem, 6.4vw, 8.5rem)', letterSpacing: '-0.045em' }}
            >
              {site.intro.heading}
            </h2>
          </motion.div>

          {/* -------------------------------------------------- the plate */}
          <motion.div className="area-portrait relative z-1 lg:-mb-[7vw]" variants={plate}>
            <VideoArtFrame
              video={assets.frame.video}
              poster={assets.frame.poster}
              image={assets.frame.image}
              aspect={intro.portraitAspect}
              objectFit={assets.frame.fit}
              objectPosition={assets.frame.position}
              keyBand={assets.frame.key}
              alt={`${site.firstName}, full length`}
            />
          </motion.div>

          {/* -------------------------------------------------- copy */}
          <motion.div className="area-copy" variants={item} custom={2}>
            <p className="body-copy m-0 mt-[0.6em] font-bold text-ink">{site.intro.lede}</p>

            <div className="mt-[1.6em] flex flex-col gap-[1.15em]">
              {site.intro.paragraphs.map((para) => (
                <p key={para} className="body-copy copy m-0 text-graphite">
                  {para}
                </p>
              ))}
            </div>

            {/* -------------------------------------------------- RESUME BUTTONS */}
            <div className="mt-[1.8em] flex flex-wrap items-center gap-3">
              <motion.a
                href={site.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-paper shadow-md transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                </span>
                <span className="text-[0.8125rem] font-extrabold uppercase tracking-[0.08em] text-paper">
                  View My Resume
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>

              <motion.a
                href={site.resume.pdfPath}
                download={site.resume.filename}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-ink/20 bg-paper/80 px-5 py-3.5 text-ink shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-ink hover:bg-paper hover:shadow-md"
                title="Download PDF Resume"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="text-[0.78125rem] font-bold uppercase tracking-[0.06em] text-ink">
                  Download PDF
                </span>
              </motion.a>
            </div>

            <h3 className="section-head m-0 mt-[1.5em] text-ink">{site.education.heading}</h3>

            <dl className="m-0 mt-[1.1em] flex flex-col gap-[1.15em]">
              {site.education.items.map((edu) => (
                <div key={edu.degree}>
                  <dt className="body-copy m-0 font-bold leading-snug text-ink">{edu.degree}</dt>
                  <dd className="body-copy m-0 mt-[0.2em] leading-snug text-graphite">{edu.detail}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* -------------------------------------------------- skills + experience */}
          <motion.div className="area-aside" variants={item} custom={3}>
            <div>
              <h3 className="section-head m-0 mb-[0.75em] text-ink">{site.skills.heading}</h3>
              <SkillsGrid />
            </div>

            <div>
              <h3 className="section-head m-0 mb-[0.75em] text-ink">{site.experience.heading}</h3>
              <ol className="m-0 flex list-none flex-col gap-[1.5em] p-0">
                {site.experience.items.map((job) => (
                  <li key={job.period}>
                    <p className="body-copy m-0 font-bold leading-snug tracking-[-0.01em] text-ink">
                      {job.period}
                    </p>
                    <p className="body-copy m-0 mt-[0.15em] font-bold leading-snug text-ink">{job.role}</p>
                    <p className="body-copy m-0 mt-[0.1em] leading-snug text-graphite">{job.company}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
