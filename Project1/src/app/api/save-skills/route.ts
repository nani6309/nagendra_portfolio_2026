import fs from 'fs'

export async function GET() {
  const files = [
    {
      src: 'd:/portfolio/Project1/reference/studio-source/WhatsApp Image 2026-08-21 at 8.47.02 PM.jpeg',
      dest: 'd:/portfolio/Project1/public/assets/projects/studio-01.jpg',
    },
    {
      src: 'd:/portfolio/Project1/reference/studio-source/WhatsApp Image 2026-08-21 at 8.47.03 PM (1).jpeg',
      dest: 'd:/portfolio/Project1/public/assets/projects/studio-02.jpg',
    },
    {
      src: 'd:/portfolio/Project1/reference/studio-source/WhatsApp Image 2026-08-21 at 8.47.03 PM.jpeg',
      dest: 'd:/portfolio/Project1/public/assets/projects/studio-03.jpg',
    },
  ]

  const results: string[] = []

  for (const item of files) {
    try {
      if (fs.existsSync(item.src)) {
        fs.copyFileSync(item.src, item.dest)
        results.push(`Copied ${item.dest}`)
      } else {
        results.push(`Source not found: ${item.src}`)
      }
    } catch (e) {
      results.push(`Error copying ${item.dest}: ${(e as Error).message}`)
    }
  }

  return Response.json({ status: 'ok', results })
}
