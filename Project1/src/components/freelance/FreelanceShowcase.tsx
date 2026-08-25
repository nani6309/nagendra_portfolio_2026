'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

type Project = (typeof site.freelance.projects)[number]
type Category = (typeof site.freelance.categories)[number]

/**
 * ---------------------------------------------------------------------------
 * SELECTED WORK — Freelance Projects Showcase (High-Performance Edition)
 * ---------------------------------------------------------------------------
 * Optimized for zero lag (60 FPS smooth scroll) and 100% reliable SVG/CSS visual
 * project cards with instant load, zero 404 errors, and an interactive live modal.
 * ---------------------------------------------------------------------------
 */
export default function FreelanceShowcase() {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState<Category>('All')
  const [preview, setPreview] = useState<Project | null>(null)

  const filtered =
    active === 'All'
      ? site.freelance.projects
      : site.freelance.projects.filter((p) => p.category === active)

  const group: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced ? 0 : 0.04, staggerChildren: reduced ? 0 : 0.05 } },
  }

  const heading: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.7, ease: ease.paper },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.6, ease: ease.paper },
    },
  }

  return (
    <>
      <section
        id="freelance"
        className="relative w-full pt-[clamp(3.5rem,8vw,7rem)] pb-[clamp(3.5rem,9vw,8rem)]"
        aria-label={site.freelance.heading}
      >
        <motion.div
          className="relative z-10 mx-auto max-w-[112rem] px-[max(1.25rem,5vw)]"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* -------------------------------------------------- Heading + Badge */}
          <motion.div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" variants={heading}>
            <div>
              <h2
                className="display m-0 text-ink"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 5.5rem)', letterSpacing: '-0.04em' }}
              >
                {site.freelance.heading}
              </h2>
              <p className="body-copy copy m-0 mt-[0.6em] max-w-[54ch] text-graphite">
                {site.freelance.sub}
              </p>
            </div>
            <div className="freelance-badge">{site.freelance.badge}</div>
          </motion.div>

          {/* -------------------------------------------------- Category Filters */}
          <motion.div className="freelance-filters" variants={item}>
            {site.freelance.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`freelance-filter-btn${active === cat ? ' active' : ''}`}
                aria-pressed={active === cat}
              >
                {cat}
                {active === cat && (
                  <motion.span
                    className="freelance-filter-indicator"
                    layoutId="freelance-filter"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* -------------------------------------------------- Grid */}
          <motion.div className="freelance-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  reduced={reduced}
                  onPreview={() => setPreview(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* -------------------------------------------------- Live Site Preview Modal */}
      <AnimatePresence>
        {preview && <LivePreview project={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </>
  )
}

/* ==========================================================================
   PROJECT CARD
   ========================================================================== */

function ProjectCard({
  project,
  reduced,
  onPreview,
}: {
  project: Project
  reduced: boolean
  onPreview: () => void
}) {
  return (
    <motion.div
      className="freelance-card-wrap"
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -15 }}
      transition={reduced ? { duration: 0 } : { duration: 0.4, ease: ease.paper }}
    >
      <div
        className="freelance-card group"
        style={{ ['--card-accent' as string]: project.color }}
      >
        {/* Mini Browser Header Bar */}
        <div className="freelance-card-dots">
          <div className="flex gap-[5px] items-center">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <div className="freelance-card-mini-url">
            <LockIcon />
            <span>{project.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
          </div>
          <span className="freelance-card-category">{project.category}</span>
        </div>

        {/* Visual Cover (High Performance Vector Art - Zero 404s, Zero Lag) */}
        <div className="freelance-card-image">
          <ProjectVisualCover project={project} />
        </div>

        {/* Info */}
        <div className="freelance-card-body">
          <h3 className="freelance-card-name">{project.name}</h3>
          <p className="freelance-card-desc">{project.description}</p>

          {/* Tags */}
          <div className="freelance-card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="freelance-card-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="freelance-card-actions">
            <button
              type="button"
              className="freelance-card-preview-btn"
              onClick={onPreview}
              aria-label={`Preview ${project.name}`}
            >
              <EyeIcon /> Interactive Live Preview
            </button>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="freelance-card-visit-btn"
              title={`Visit ${project.name}`}
            >
              Visit Site
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Accent indicator bar */}
        <div className="freelance-card-accent-bar" />
      </div>
    </motion.div>
  )
}

/* ==========================================================================
   PROJECT VISUAL COVER (Hardware-Accelerated vector illustration per project)
   ========================================================================== */

function ProjectVisualCover({ project }: { project: Project }) {
  const name = project.name.toLowerCase()

  let icon = <UtensilsIcon />
  let badgeText = 'RESTAURANT WEB APP'

  if (name.includes('mandi')) {
    icon = <BowlIcon />
    badgeText = 'HYDERABADI MANDI • LIVE'
  } else if (name.includes('thanjavur')) {
    icon = <DishIcon />
    badgeText = 'SOUTH INDIAN CUISINE'
  } else if (name.includes('visishta')) {
    icon = <AcademicIcon />
    badgeText = 'SCHOOL & PARENT DASHBOARD'
  } else if (name.includes('gladia')) {
    icon = <BeerIcon />
    badgeText = 'CRAFT BREWERY EXPERIENCE'
  } else if (name.includes('kabooz')) {
    icon = <FireIcon />
    badgeText = 'MODERN DINING & ORDERING'
  } else if (name.includes('biryani')) {
    icon = <SpiceIcon />
    badgeText = 'SPECIALTY BIRYANI HOUSE'
  } else if (name.includes('saptha')) {
    icon = <CameraIcon />
    badgeText = 'WEDDING & EVENT MANAGEMENT'
  } else if (name.includes('tirumala')) {
    icon = <SareeIcon />
    badgeText = 'SILK SAREE E-COMMERCE'
  } else if (name.includes('vasavi')) {
    icon = <CartIcon />
    badgeText = 'ONLINE GENERAL STORE'
  } else if (name.includes('plutography')) {
    icon = <CameraIcon />
    badgeText = 'CINEMATIC PHOTOGRAPHY'
  } else if (name.includes('zero') || name.includes('zerowatts')) {
    icon = <CameraIcon />
    badgeText = 'CREATIVE STUDIO PORTFOLIO'
  }

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
      style={{
        background: `radial-gradient(120% 120% at 50% 20%, color-mix(in srgb, ${project.color} 22%, #181816), #0d0e0d)`,
      }}
    >
      {/* Background Subtle Geometry Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${project.color} 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Glowing Ambient Glow Behind Icon */}
      <div
        className="absolute w-28 h-28 rounded-full blur-2xl opacity-30 pointer-events-none"
        style={{ background: project.color }}
      />

      {/* Main Brand Icon Container */}
      <div
        className="relative z-1 w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        style={{
          background: `linear-gradient(135deg, ${project.color}, color-mix(in srgb, ${project.color} 60%, #000))`,
          color: '#ffffff',
        }}
      >
        {icon}
      </div>

      {/* Project Title */}
      <h4
        className="relative z-1 font-bold text-white text-base sm:text-lg tracking-tight m-0"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {project.name}
      </h4>

      {/* Sub Badge */}
      <span
        className="relative z-1 inline-block mt-1 px-2.5 py-0.5 rounded-full text-[0.6rem] font-semibold tracking-widest uppercase"
        style={{
          color: project.color,
          background: `color-mix(in srgb, ${project.color} 18%, rgba(255,255,255,0.05))`,
          border: `1px solid color-mix(in srgb, ${project.color} 35%, transparent)`,
          fontFamily: 'var(--font-display)',
        }}
      >
        {badgeText}
      </span>
    </div>
  )
}

/* ==========================================================================
   LIVE PREVIEW MODAL
   ========================================================================== */

function LivePreview({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="freelance-preview-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="freelance-preview-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chrome header */}
        <div className="freelance-preview-chrome">
          <div className="freelance-preview-dots">
            <button
              type="button"
              onClick={onClose}
              className="freelance-preview-close"
              title="Close modal"
              aria-label="Close preview"
            />
            <span />
            <span />
          </div>
          <div className="freelance-preview-url">
            <LockIcon />
            <span>{project.href}</span>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="freelance-preview-external"
            title="Open website in new tab"
          >
            <ExternalIcon />
          </a>
        </div>

        {/* Live Website Frame */}
        <div className="freelance-preview-frame">
          <iframe
            src={project.href}
            title={`${project.name} — Live Site Preview`}
            className="freelance-preview-iframe"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ==========================================================================
   HIGH-QUALITY INLINE SVG VECTOR ICONS
   ========================================================================== */

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function UtensilsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
      <path d="M15 2v20" />
      <path d="M2 2v20" />
      <path d="M2 12h5a3 3 0 0 0 3-3V2" />
    </svg>
  )
}

function BowlIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3" />
      <path d="M8 4v2" />
      <path d="M16 4v2" />
      <path d="M3 11a9 9 0 0 0 18 0H3z" />
      <path d="M7 20h10" />
    </svg>
  )
}

function DishIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  )
}

function AcademicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function BeerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M6 20h11a2 2 0 0 0 2-2V7H5v11a2 2 0 0 0 2 2z" />
      <path d="M6 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2" />
    </svg>
  )
}

function FireIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
    </svg>
  )
}

function SpiceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

function RingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </svg>
  )
}

function SareeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2 2 16l1.46 4.38L18 6.83l2.38-3.37z" />
      <path d="M14.5 9.5L6 18" />
      <path d="M18 4l-4 16 6-2V4z" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function ApertureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  )
}
