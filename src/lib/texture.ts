// Subtle film-grain noise layered under the brand-dark sections, so large
// flat violet fields read as a considered surface rather than a flat
// AI-gradient fill. Cheap (~200x200 tiled SVG), no runtime cost beyond the
// one-time encode below.
const noiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`

const noise = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`

export const violetGrain = `${noise}, #2A1057`
export const violetGrainLight = `${noise}, #3B1878`
