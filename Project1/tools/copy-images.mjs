import { cpSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

const SRC = 'C:\\Users\\DCS\\.gemini\\antigravity-ide\\brain\\e37e1d4e-906d-49c7-bcbc-012f9d847446'
const DST = join(process.cwd(), 'public', 'assets', 'freelance')

mkdirSync(DST, { recursive: true })

const map = {
  'hyderabad_mandi': 'hyderabad-mandi.png',
  'thanjavur_kitchen': 'thanjavur-kitchen.png',
  'visishta_school': 'visishta-school.png',
  'gladia_brewery': 'gladia-brewery.png',
  'kabooz_restaurant': 'kabooz.png',
  'biryani_bhojanam': 'biryani-bhojanam.png',
  'saptha_knots': 'saptha-knots.png',
  'tirumala_sarees': 'tirumala-sarees.png',
  'vasavi_store': 'vasavi-store.png',
  'plutography_studio': 'plutography.png',
  'zerowatts_photo': 'zerowatts.png',
}

const files = readdirSync(SRC)
for (const [prefix, destName] of Object.entries(map)) {
  const match = files.find(f => f.startsWith(prefix) && f.endsWith('.png'))
  if (match) {
    cpSync(join(SRC, match), join(DST, destName))
    console.log(`✓ ${match} → ${destName}`)
  } else {
    console.log(`✗ no file matching ${prefix}*`)
  }
}
console.log('Done.')
