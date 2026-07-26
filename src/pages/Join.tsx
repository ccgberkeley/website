import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ImageSlot from '../components/ImageSlot'
import { useReveal } from '../hooks/useReveal'

const sora = "'Sora', sans-serif"

const EVENTS = [
  {
    date: '1/20–1/29',
    name: 'Coffee Chats',
    detail: 'Meet current members one-on-one — sign up via our Instagram bio!',
    label: 'Jan 20 – 29',
    body: 'Meet current members one-on-one. Sign up via our Instagram bio!',
  },
  {
    date: '1/22',
    name: 'Calapalooza',
    detail: 'Come find our table at Upper Sproul Plaza, 10 am – 4 pm.',
    label: 'Jan 22 · 10 am – 4 pm',
    body: '@ Upper Sproul Plaza',
  },
  {
    date: '1/27',
    name: 'Info Session 1',
    detail: 'Learn what CCG is all about, 8 – 9 pm in Anthropology & Art Practice 155.',
    label: 'Jan 27 · 8 – 9 pm',
    body: '@ Anthropology & Art Practice 155',
  },
  {
    date: '1/28',
    name: 'Info Session 2',
    detail: 'A second chance to meet us, 8 – 9 pm in Social Sciences 60.',
    label: 'Jan 28 · 8 – 9 pm',
    body: '@ Social Sciences 60',
  },
  {
    date: '1/29',
    name: 'Social Night',
    detail: 'Hang out with the whole club, 7 – 9 pm at Haas Courtyard.',
    label: 'Jan 29 · 7 – 9 pm',
    body: '@ Haas Courtyard',
  },
  {
    date: '1/29',
    name: 'Application Due',
    detail: "Applications close at 11 pm sharp — apply via the link in our Instagram bio.",
    label: 'Jan 29 · 11 pm',
    body: "Apply via the link in our Instagram bio — don't wait until the last minute.",
    highlight: true,
  },
  {
    date: '1/31–2/1',
    name: 'Interviews',
    detail: 'Selected applicants interview over the weekend. Offers go out shortly after.',
    label: 'Jan 31 – Feb 1',
    body: 'Selected applicants interview over the weekend. Offers go out shortly after.',
  },
]

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

// Scroll-driven timeline: the event whose center is closest to 42% of the
// viewport height becomes active, mirroring the design's behavior.
function useTimeline() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const check = () => {
      const events = document.querySelectorAll('[data-tl-event]')
      if (!events.length) return
      const target = window.innerHeight * 0.42
      let best = -1
      let bestDist = Infinity
      events.forEach((el, i) => {
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - target)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      if (best < 0) return
      events.forEach((el, i) => el.classList.toggle('tl-active', i === best))
      setActive(best)
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
  return active
}

export default function Join() {
  useReveal()
  const active = useTimeline()
  const current = EVENTS[active]
  const pct = Math.round(((active + 1) / 7) * 100)

  return (
    <div style={{ overflowX: 'clip' }}>
      <Nav active="Join" />

      {/* Hero */}
      <div style={{ position: 'relative', background: '#2A1057', overflow: 'hidden' }}>
        <img
          src="/assets/berkeley-campus.png"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(42,16,87,0.6) 0%, rgba(42,16,87,0.8) 55%, #2A1057 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: 1180,
            margin: '0 auto',
            padding: '110px 40px 80px',
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: sora,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9B4F2',
              ...heroIn(0),
            }}
          >
            Spring 2026 recruitment
          </div>
          <h1
            style={{
              fontFamily: sora,
              fontWeight: 800,
              fontSize: 64,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: 0,
              ...heroIn(0.12),
            }}
          >
            Join our <span style={{ color: '#C9B4F2' }}>family</span>
          </h1>
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 600,
              ...heroIn(0.24),
            }}
          >
            No consulting experience required — we recruit for curiosity and work ethic, then train
            the rest. Scroll through the recruitment timeline below.
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 6, ...heroIn(0.36) }}>
            <a href="https://www.instagram.com/berkeleyccg/" className="btn-white">
              Apply now
            </a>
            <a href="#timeline" className="btn-outline-light">
              See the timeline ↓
            </a>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ position: 'relative', width: '100%', height: 80, display: 'block' }}
        >
          <path d="M0,10 C400,90 1040,-20 1440,50 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,30 C420,104 1060,0 1440,66 L1440,100 L0,100 Z" fill="#FAF9FB" />
        </svg>
      </div>

      {/* Scrolling timeline */}
      <div
        id="timeline"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '88px 40px 40px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)',
          gap: 72,
          alignItems: 'start',
        }}
      >
        {/* Sticky date panel */}
        <div
          style={{
            position: 'sticky',
            top: 96,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            paddingBottom: 40,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
            <div
              style={{
                fontFamily: sora,
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3B1878',
              }}
            >
              Recruitment timeline
            </div>
          </div>
          <div
            style={{
              fontFamily: sora,
              fontWeight: 800,
              fontSize: 112,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#3B1878',
              transition: 'opacity 0.3s',
            }}
          >
            {current.date}
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 32,
              color: '#191322',
              marginTop: -6,
            }}
          >
            {current.name}
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.6, color: '#5C5468', maxWidth: 400 }}>{current.detail}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6, maxWidth: 400 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: sora,
                fontWeight: 600,
                fontSize: 13,
                color: '#5C5468',
              }}
            >
              <span>Step {active + 1} of 7</span>
              <span style={{ color: '#3B1878' }}>{pct}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 999, background: '#E6E1EE', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  borderRadius: 999,
                  background: '#3B1878',
                  width: `${pct}%`,
                  transition: 'width 0.5s cubic-bezier(0.2,0.6,0.2,1)',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 18 }}>
            <div
              style={{
                width: 190,
                height: 220,
                transform: 'rotate(-4deg)',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(25,19,34,0.16)',
                border: '6px solid #FFFFFF',
              }}
            >
              <ImageSlot id="join-photo-1" placeholder="Recruitment event photo" style={{ width: '100%', height: '100%' }} />
            </div>
            <div
              style={{
                width: 190,
                height: 220,
                transform: 'rotate(3deg) translateY(14px)',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(25,19,34,0.16)',
                border: '6px solid #FFFFFF',
              }}
            >
              <ImageSlot id="join-photo-2" placeholder="Social night photo" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>

        {/* Events */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', padding: '8px 0 40px' }}>
          <div style={{ position: 'absolute', left: 11, top: 20, bottom: 60, width: 2, background: '#E6E1EE' }} />
          {EVENTS.map((e) => (
            <div
              key={e.name}
              data-tl-event=""
              style={{ display: 'grid', gridTemplateColumns: '24px minmax(0,1fr)', gap: 24, padding: '20px 0' }}
            >
              <div
                className="tl-dot"
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#C9B4F2',
                  margin: '6px 0 0 4px',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'background 0.4s, box-shadow 0.4s',
                }}
              />
              <div
                style={{
                  background: e.highlight ? '#2A1057' : '#FFFFFF',
                  border: `1px solid ${e.highlight ? '#2A1057' : '#E6E1EE'}`,
                  borderRadius: 14,
                  padding: '28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: sora,
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: e.highlight ? '#C9B4F2' : '#3B1878',
                  }}
                >
                  {e.label}
                </div>
                <div
                  style={{
                    fontFamily: sora,
                    fontWeight: 700,
                    fontSize: 24,
                    letterSpacing: '-0.01em',
                    color: e.highlight ? '#FFFFFF' : undefined,
                  }}
                >
                  {e.name}
                </div>
                <div
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: e.highlight ? 'rgba(255,255,255,0.8)' : '#5C5468',
                  }}
                >
                  {e.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo strip */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 96px' }}>
        <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { id: 'join-strip-1', placeholder: 'Info session photo', transform: 'rotate(-1.5deg)' },
            { id: 'join-strip-2', placeholder: 'New member class photo', transform: 'rotate(1deg) translateY(10px)' },
            { id: 'join-strip-3', placeholder: 'Retreat photo', transform: 'rotate(-1deg)' },
          ].map((p) => (
            <div key={p.id} style={{ height: 260, overflow: 'hidden', borderRadius: 14, transform: p.transform }}>
              <ImageSlot id={p.id} placeholder={p.placeholder} style={{ width: '100%', height: 260 }} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px 120px' }}>
        <div
          data-reveal
          style={{
            background: '#2A1057',
            borderRadius: 14,
            padding: '72px 64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                fontFamily: sora,
                fontWeight: 800,
                fontSize: 36,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              Ready to apply?
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: '#C9B4F2' }}>
              Applications for Spring 2026 close Jan 29 at 11 pm.
            </div>
          </div>
          <a href="https://www.instagram.com/berkeleyccg/" className="btn-white" style={{ flexShrink: 0 }}>
            Apply now
          </a>
        </div>
      </div>

      {/* Compact footer */}
      <div style={{ background: '#191322' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '56px 40px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/assets/logo.png" alt="" style={{ width: 32, height: 32 }} />
            <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: '#FFFFFF' }}>
              Core Consulting Group
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <Link to="/" className="footer-link-muted">
              Home
            </Link>
            <Link to="/about" className="footer-link-muted">
              About
            </Link>
            <Link to="/work" className="footer-link-muted">
              Our work
            </Link>
            <a href="mailto:Berkeleyccg@gmail.com" className="footer-link-muted">
              Berkeleyccg@gmail.com
            </a>
            <span style={{ fontSize: 13, color: '#5C5468' }}>© 2026 CCG</span>
          </div>
        </div>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '0 40px 32px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 12,
            color: '#5C5468',
          }}
        >
          <span style={{ maxWidth: 620 }}>
            We are a student group acting independently of the University of California. We take
            full responsibility for our organization and this web site.
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <a
              href="https://www.ocf.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5C5468' }}
            >
              Hosted by the OCF
            </a>
            <a href="https://www.ocf.berkeley.edu/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/ocf-hosted-penguin-dark.svg"
                alt="Hosted by the OCF"
                style={{ border: 0, height: 32 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
