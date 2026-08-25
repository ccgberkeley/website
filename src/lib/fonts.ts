import type { CSSProperties } from 'react'

// Shared type ramp for the site.
// - poppins: the CCG wordmark, nav/footer, buttons, labels, and other UI text
// - playfair: display headlines and editorial italic accents
// - sans: body copy (set as the global default in index.css)
export const poppins = "'Poppins', sans-serif"
export const playfair = "'Playfair Display', serif"
export const playfairItalic: CSSProperties = { fontFamily: playfair, fontStyle: 'italic' }
export const sans = "'Instrument Sans', sans-serif"
