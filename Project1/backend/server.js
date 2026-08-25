const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(__dirname, 'submissions.json')

// POST /api/connect
app.post('/api/connect', (req, res) => {
  const { name, mobile, gmail, message } = req.body

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' })
  }
  if (!mobile || !mobile.trim()) {
    return res.status(400).json({ error: 'Mobile number is required' })
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const newSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: name.trim(),
    mobile: mobile.trim(),
    gmail: gmail ? gmail.trim() : null, // Optional Gmail
    message: message.trim(),
    createdAt: new Date().toISOString(),
  }

  let submissions = []
  if (fs.existsSync(DATA_FILE)) {
    try {
      const content = fs.readFileSync(DATA_FILE, 'utf-8')
      submissions = JSON.parse(content)
    } catch (err) {
      submissions = []
    }
  }

  submissions.push(newSubmission)
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2))

  console.log('Backend Received Connect Request:', newSubmission)

  return res.status(200).json({
    success: true,
    message: 'Submission saved successfully!',
    data: newSubmission,
  })
})

// GET /api/connect (to view submissions)
app.get('/api/connect', (req, res) => {
  if (fs.existsSync(DATA_FILE)) {
    try {
      const content = fs.readFileSync(DATA_FILE, 'utf-8')
      return res.json(JSON.parse(content))
    } catch (err) {
      return res.status(500).json({ error: 'Error reading submissions' })
    }
  }
  return res.json([])
})

app.listen(PORT, () => {
  console.log(`Backend Express server listening on http://localhost:${PORT}`)
})
