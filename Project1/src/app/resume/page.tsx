import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'Resume — Nagendra Kumar | Full Stack Developer & SDET',
  description:
    'View and download the official resume of Nagendra Kumar Palla. Full Stack Developer & SDET at Wipro Limited specializing in Java, Spring Boot, React, Next.js, and Test Automation.',
}

export default function ResumePage() {
  const pdfUrl = site.resume.pdfPath
  const filename = site.resume.filename

  return (
    <main className="min-h-screen bg-[#111110] text-[#eaeaea] selection:bg-amber-500/30 font-sans">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#161615]/90 border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="hidden sm:block h-5 w-px bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-white text-sm sm:text-base">
              NAGENDRA KUMAR
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              RESUME PDF
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 ml-auto">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg px-3.5 py-2 transition-all"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span className="hidden sm:inline">Open Direct</span>
          </a>

          <a
            href={pdfUrl}
            download={filename}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg px-4 py-2 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-8 flex flex-col gap-6">
        {/* Document Information & Quick Controls Bar */}
        <div className="bg-[#1b1b1a] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight m-0">
                Palla Nagendra Kumar — Resume
              </h1>
              <p className="text-xs text-white/50 m-0 mt-0.5 font-mono">
                Full Stack Developer & SDET • PDF Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={pdfUrl}
              download={filename}
              className="flex-1 sm:flex-none text-center text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg px-4 py-2 transition-colors"
            >
              Save Offline
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 rounded-lg px-4 py-2 transition-colors"
            >
              Full Tab View ↗
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="bg-[#1b1b1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            title="Nagendra Kumar Resume PDF"
            className="w-full h-[80vh] min-h-[700px] border-0 rounded-b-xl bg-white"
          />
        </div>
      </div>
    </main>
  )
}
