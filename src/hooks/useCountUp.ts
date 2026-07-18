import { useEffect, useRef, useState } from 'react'

// Count-up that starts when the referenced row scrolls into view, matching
// the design's 1400ms cubic ease-out. Scroll + resize + interval triggers so
// it can't stay frozen at 0% (per council review).
export function useCountUp() {
  const [progress, setProgress] = useState(0)
  const started = useRef(false)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => {
      if (started.current || !rowRef.current) return
      const r = rowRef.current.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) {
        started.current = true
        const t0 = performance.now()
        const dur = 1400
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur)
          setProgress(1 - Math.pow(1 - p, 3))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    const timer = setInterval(check, 400)
    check()
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      clearInterval(timer)
    }
  }, [])

  return { progress, rowRef }
}
