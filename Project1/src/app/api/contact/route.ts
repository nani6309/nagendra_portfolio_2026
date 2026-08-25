import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, mobile, gmail, message } = body

    // Validation: Name, Mobile, and Message are required. Gmail is optional.
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return NextResponse.json({ error: 'Mobile number is required' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      mobile: mobile.trim(),
      gmail: gmail && typeof gmail === 'string' ? gmail.trim() : null, // Optional
      message: message.trim(),
      timestamp: new Date().toISOString(),
    }

    // Persist submission to data/submissions.json
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'submissions.json')

    try {
      await fs.mkdir(dataDir, { recursive: true })
    } catch {
      // Directory exists or created
    }

    let existing: unknown[] = []
    try {
      const fileData = await fs.readFile(filePath, 'utf-8')
      existing = JSON.parse(fileData)
    } catch {
      existing = []
    }

    existing.push(submission)
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8')

    console.log('New Connect Submission Received:', submission)

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Nagendra will get back to you shortly.',
      submissionId: submission.id,
    })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again or reach out directly.' },
      { status: 500 }
    )
  }
}
