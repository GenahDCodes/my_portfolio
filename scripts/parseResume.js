const fs = require('fs')
const path = require('path')
const pdfMod = require('pdf-parse')
const pdf = pdfMod.default || pdfMod

// Try project root first, then fallback to user's Desktop
const possiblePaths = [
  path.join(__dirname, '..', 'Muhammed Aminu Umar Resume.pdf'),
  path.join(process.env.USERPROFILE || 'C:\\Users\\Aminu Umar', 'Desktop', 'Muhammed Aminu Umar Resume.pdf')
]

let resumePath = possiblePaths.find(p => fs.existsSync(p))
if (!resumePath) resumePath = possiblePaths[0]
const outPath = path.join(__dirname, '..', 'scripts', 'extracted_resume.txt')

if (!fs.existsSync(resumePath)) {
  console.error('Resume PDF not found at', resumePath)
  process.exit(1)
}

const dataBuffer = fs.readFileSync(resumePath)

async function parse() {
  try {
    // Use PDFParse class if available (works with current pdf-parse build)
    if (pdfMod && pdfMod.PDFParse) {
      const parser = new pdfMod.PDFParse({ data: dataBuffer })
      // load document then extract text
      if (typeof parser.load === 'function') await parser.load()
      let text = ''
      if (typeof parser.getText === 'function') {
        text = await parser.getText()
      } else if (typeof parser.getPageText === 'function') {
        // fallback: concatenate pages
        const pageCount = parser.doc ? parser.doc.numPages : 0
        const parts = []
        for (let i = 1; i <= pageCount; i++) {
          parts.push(await parser.getPageText(i))
        }
        text = parts.join('\n\n')
      }

  // Normalize text output
  let out = ''
  if (typeof text === 'string') out = text
  else if (Buffer.isBuffer(text)) out = text.toString('utf8')
  else if (text && typeof text.text === 'string') out = text.text
  else out = String(text)

  fs.writeFileSync(outPath, out, 'utf8')
  console.log('Extracted resume text written to', outPath)
      return
    }

    // Fallback to function-style API if present
    if (typeof pdfMod === 'function') {
      const data = await pdfMod(dataBuffer)
      fs.writeFileSync(outPath, data.text || '', 'utf8')
      console.log('Extracted resume text written to', outPath)
      return
    }

    console.error('No compatible pdf-parse API found')
    process.exit(1)
  } catch (err) {
    console.error('Failed to parse PDF:', err)
    process.exit(1)
  }
}

parse()
