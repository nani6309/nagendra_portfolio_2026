'use client'

import { useEffect } from 'react'

/**
 * Custom cursor disabled — standard native browser cursor restored everywhere.
 */
export default function Cursor() {
  useEffect(() => {
    document.documentElement.classList.remove('custom-cursor')
  }, [])

  return null
}
