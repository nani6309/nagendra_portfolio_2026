'use client'

import { useEffect, useState } from 'react'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function TransparentCutout({ src, alt, width, height, className = '' }: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth || img.width || 1000
      canvas.height = img.naturalHeight || img.height || 1000

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imgData.data

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        const maxVal = Math.max(r, g, b)
        const minVal = Math.min(r, g, b)
        const diff = maxVal - minVal

        // Key out white / light off-white backdrop
        if (r > 215 && g > 215 && b > 215 && diff < 22) {
          data[i + 3] = 0
        } else if (r > 185 && g > 185 && b > 185 && diff < 25) {
          // Soft alpha edge feathering
          const factor = (255 - maxVal) / 45
          data[i + 3] = Math.floor(data[i + 3] * Math.max(0, Math.min(1, factor)))
        }
      }

      ctx.putImageData(imgData, 0, 0)
      setDataUrl(canvas.toDataURL('image/png'))
    }
  }, [src])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dataUrl || src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}
