import fs from 'fs'

export async function GET() {
  const target = 'd:/portfolio/vercel.json'
  try {
    if (fs.existsSync(target)) {
      fs.unlinkSync(target)
      return Response.json({ status: 'ok', message: 'Deleted root vercel.json' })
    }
    return Response.json({ status: 'ok', message: 'File did not exist' })
  } catch (e) {
    return Response.json({ status: 'error', message: (e as Error).message })
  }
}
