import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const OUT = 'public/assets/freelance'
mkdirSync(OUT, { recursive: true })

const projects = [
  { name: 'hyderabad-mandi', url: 'https://hyderabadmandi.vercel.app/' },
  { name: 'thanjavur-kitchen', url: 'https://thanjavurkitchen.netlify.app/' },
  { name: 'visishta-school', url: 'https://visishtaschool.com/' },
  { name: 'gladia-brewery', url: 'https://www.gladiabrewery.com/' },
  { name: 'kabooz', url: 'https://kabooz.in/' },
  { name: 'biryani-bhojanam', url: 'https://biryanibhojanam.com/' },
  { name: 'saptha-knots', url: 'https://saptha-knots-frontend.vercel.app/' },
  { name: 'tirumala-sarees', url: 'https://newtirumalasareecenter.vercel.app/' },
  { name: 'vasavi-store', url: 'https://vasavi-general-store.vercel.app/' },
  { name: 'plutography', url: 'https://plutography.in/' },
  { name: 'zerowatts', url: 'https://www.zerowattsphotography.com/' },
]

const browser = await chromium.launch()

for (const p of projects) {
  console.log(`Capturing ${p.name} → ${p.url}`)
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    })
    await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(3000)
    await page.screenshot({ path: `${OUT}/${p.name}.jpg`, type: 'jpeg', quality: 85 })
    await page.close()
    console.log(`  ✓ ${p.name}.jpg`)
  } catch (err) {
    console.error(`  ✗ ${p.name}: ${err.message}`)
  }
}

await browser.close()
console.log('Done.')
