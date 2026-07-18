import { useEffect } from 'react'

// Scroll-reveal matching the design's [data-reveal] behavior.
export function useReveal() {
  useEffect(() => {
    const check = () => {
      document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight * 0.88 && r.bottom > 0) el.classList.add('in')
      })
    }
    const onScroll = () => requestAnimationFrame(check)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const timer = setInterval(check, 400)
    check()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      clearInterval(timer)
    }
  }, [])
}
