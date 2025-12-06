const pdfMod = require('pdf-parse')
console.log('pdfMod type:', typeof pdfMod)
console.log('pdfMod keys:', Object.keys(pdfMod))
console.log('pdfMod default type:', typeof pdfMod.default)
if (pdfMod.default) console.log('default keys:', Object.keys(pdfMod.default))
if (pdfMod.PDFParse) {
	console.log('PDFParse type:', typeof pdfMod.PDFParse)
	try {
		console.log('PDFParse toString():', pdfMod.PDFParse.toString().slice(0,300))
	} catch (e) {
		console.log('Could not toString PDFParse:', e.message)
	}
	try {
		console.log('PDFParse prototype keys:', Object.getOwnPropertyNames(pdfMod.PDFParse.prototype))
	} catch (e) {
		console.log('Could not list prototype keys:', e.message)
	}
}
