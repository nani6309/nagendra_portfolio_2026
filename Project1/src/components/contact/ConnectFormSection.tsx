'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

/**
 * ---------------------------------------------------------------------------
 * CONNECT WITH ME — Unique Interactive Form Section
 * ---------------------------------------------------------------------------
 * Designed matching Nagendra's paper/ink aesthetic with instant API feedback,
 * required Name, Mobile, and Message fields, plus an optional Gmail field.
 * ---------------------------------------------------------------------------
 */
export default function ConnectFormSection() {
  const reduced = usePrefersReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    gmail: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setStatus('error')
      setErrorMsg('Please enter your name.')
      return
    }

    if (!formData.mobile.trim()) {
      setStatus('error')
      setErrorMsg('Please enter your mobile number.')
      return
    }

    if (!formData.message.trim()) {
      setStatus('error')
      setErrorMsg('Please write a message.')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    try {
      const DEFAULT_ENDPOINT = 'https://portfolio-backend-1-6lcs.onrender.com/api/v1/contact'
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || DEFAULT_ENDPOINT

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          mobile: formData.mobile.trim(),
          gmail: formData.gmail ? formData.gmail.trim() : null,
          message: formData.message.trim(),
        }),
      })

      const data = await res.json()

      if ((res.ok || res.status === 201) && data.success) {
        setStatus('success')
        setFormData({ name: '', mobile: '', gmail: '', message: '' })
      } else {
        setStatus('error')
        const serverError = data.message || data.error || (data.data && typeof data.data === 'object' ? Object.values(data.data).join(', ') : null)
        setErrorMsg(serverError || 'Failed to send message. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Unable to reach Nagendra\'s backend server.')
    }
  }

  const group: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced ? 0 : 0.04, staggerChildren: reduced ? 0 : 0.06 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.7, ease: ease.paper },
    },
  }

  return (
    <section
      id="connect-form"
      className="relative w-full pt-[clamp(4rem,9vw,7.5rem)] pb-[clamp(4rem,10vw,8rem)]"
      aria-label="Connect With Me"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-[112rem] px-[max(1.25rem,5vw)]"
        variants={group}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {/* Title */}
        <motion.div variants={item} className="mb-10 text-center max-w-3xl mx-auto">
          <span
            className="eyebrow inline-block text-signal mb-2"
            style={{ fontSize: 'clamp(0.65rem,0.9vw,0.8rem)', letterSpacing: '0.18em' }}
          >
            GET IN TOUCH
          </span>
          <h2
            className="display m-0 text-ink"
            style={{ fontSize: 'clamp(2.25rem, 4.8vw, 5.5rem)', letterSpacing: '-0.04em' }}
          >
            CONNECT WITH ME
          </h2>
          <p className="body-copy copy m-0 mt-3 mx-auto text-graphite">
            Have a project, job opportunity, or business requirement? Fill out the form below or connect directly.
          </p>
        </motion.div>

        {/* Two-Column Grid: Left Direct Cards + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Info & Direct Channels */}
          <motion.div variants={item} className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-[#faf9f5] border border-ink/10 shadow-sm flex flex-col gap-5">
              <h3 className="font-bold text-xl text-ink m-0 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Direct Channels
              </h3>
              <p className="text-sm text-graphite m-0 leading-relaxed font-normal">
                Prefer direct communication? Reach out directly via Email, Phone, or WhatsApp.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nagvenky57@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-ink/8 hover:border-signal/50 transition-colors group text-decoration-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-signal/10 text-signal flex items-center justify-center font-bold">
                    <MailIcon />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-graphite uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                      Gmail / Email
                    </div>
                    <div className="text-sm font-semibold text-ink group-hover:text-signal transition-colors">
                      nagvenky57@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nagendra-kumar-palla-579220411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-ink/8 hover:border-[#0077b5]/50 transition-colors group text-decoration-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center font-bold">
                    <LinkedInIcon />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-graphite uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                      LinkedIn Profile
                    </div>
                    <div className="text-sm font-semibold text-ink group-hover:text-[#0077b5] transition-colors">
                      Nagendra Kumar Palla
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div variants={item} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-[#faf9f5] border border-ink/10 shadow-sm flex flex-col gap-6"
            >
              {/* Form Status Banners */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 text-sm font-semibold flex items-center gap-3">
                  <CheckCircleIcon />
                  Thank you! Your message has been sent successfully. Nagendra will get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-950 text-sm font-semibold flex items-center gap-3">
                  <AlertCircleIcon />
                  {errorMsg || 'Failed to send message. Please check the fields and try again.'}
                </div>
              )}

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="connect-name"
                  className="font-bold text-xs uppercase tracking-wider text-ink"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Your Name <span className="text-signal">*</span>
                </label>
                <input
                  id="connect-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-ink/15 text-ink placeholder-graphite/50 focus:outline-none focus:border-ink transition-colors font-medium text-sm"
                />
              </div>

              {/* Mobile Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="connect-mobile"
                  className="font-bold text-xs uppercase tracking-wider text-ink"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Mobile Number <span className="text-signal">*</span>
                </label>
                <input
                  id="connect-mobile"
                  type="tel"
                  name="mobile"
                  required
                  placeholder="Enter your mobile / WhatsApp number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-ink/15 text-ink placeholder-graphite/50 focus:outline-none focus:border-ink transition-colors font-medium text-sm"
                />
              </div>

              {/* Gmail / Email Field (OPTIONAL) */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="connect-gmail"
                    className="font-bold text-xs uppercase tracking-wider text-ink"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Gmail / Email
                  </label>
                  <span className="text-[0.68rem] font-bold text-graphite uppercase tracking-wider bg-ink/5 px-2 py-0.5 rounded">
                    Optional
                  </span>
                </div>
                <input
                  id="connect-gmail"
                  type="email"
                  name="gmail"
                  placeholder="Enter your email address (optional)"
                  value={formData.gmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-ink/15 text-ink placeholder-graphite/50 focus:outline-none focus:border-ink transition-colors font-medium text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="connect-message"
                  className="font-bold text-xs uppercase tracking-wider text-ink"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Message <span className="text-signal">*</span>
                </label>
                <textarea
                  id="connect-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, query, or job requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-ink/15 text-ink placeholder-graphite/50 focus:outline-none focus:border-ink transition-colors font-medium text-sm resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 rounded-xl bg-ink text-paper font-bold text-xs uppercase tracking-widest hover:bg-signal transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SendIcon />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function AlertCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}
