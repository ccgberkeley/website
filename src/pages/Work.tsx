import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/withBase'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain } from '../lib/texture'

// Display names for the logo slugs used below (shared with the client marquee).
const CLIENT_NAMES: Record<string, string> = {
  intel: 'Intel',
  raceforward: 'Race Forward',
  autodesk: 'Autodesk',
  qualcomm: 'Qualcomm',
  jnj: 'Johnson & Johnson',
  oracle: 'Oracle',
  alaska: 'Alaska Airlines',
  urban: 'Urban Outfitters',
  tiktok: 'TikTok',
}

const SEMESTERS = [
  { id: 'sem-sp26', term: 'Spring 2026', clients: ['intel', 'raceforward', 'autodesk'] },
  { id: 'sem-fa25', term: 'Fall 2025', clients: ['qualcomm', 'jnj', 'autodesk'] },
  { id: 'sem-sp25', term: 'Spring 2025', clients: ['oracle', 'alaska', 'urban', 'tiktok'] },
]

const svcIcon = (path: React.ReactNode) => (
  <svg width={56} height={56} viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.4">
    {path}
  </svg>
)

const SERVICES = [
  {
    num: '01',
    title: 'Market expansion',
    desc: 'Market sizing, customer segmentation, competitive landscaping, and go-to-market strategy for teams launching new products or entering new regions. Past work includes international expansion guides and channel strategies.',
    icon: svcIcon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </>,
    ),
  },
  {
    num: '02',
    title: 'Data & analytics',
    desc: "Statistical modeling, forecasting, survey design, and dashboards that turn raw data into clear decisions. We've tackled immense data-driven projects involving quantitative models and white papers.",
    icon: svcIcon(<path d="M4 19h16M6 16v-5M11 16V8M16 16v-8" />),
  },
  {
    num: '03',
    title: 'Growth strategy',
    desc: 'Pricing, positioning, brand audits, and product roadmaps for startups and established firms alike. Deliverables include slide decks, written reports, and midpoint plus final presentations.',
    icon: svcIcon(
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16M10 10v10" />
      </>,
    ),
  },
  {
    num: '04',
    title: 'Operations',
    desc: 'Process audits, cost analysis, and organizational design that cut friction. Each recommendation comes with an implementation plan your team can act on the day we hand it off.',
    icon: svcIcon(
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" strokeDasharray="4 3" />
      </>,
    ),
  },
]

const TIMELINE = [
  { weeks: 'Weeks 1–2', title: 'Scope', desc: 'Initial meetings to define the challenge, success metrics, and deliverables.' },
  { weeks: 'Weeks 3–5', title: 'Research', desc: 'Primary and secondary research, data collection, and expert interviews.' },
  { weeks: 'Weeks 6–8', title: 'Analysis', desc: 'Modeling and synthesis, with a midpoint presentation to check direction.' },
  { weeks: 'Weeks 9–10', title: 'Deliver', desc: 'Final deliverable and presentation, with an implementation roadmap.' },
]

const CLIENTS = [
  ['apple', 'Apple'],
  ['jpmorgan', 'J.P. Morgan'],
  ['autodesk', 'Autodesk'],
  ['jnj', 'Johnson & Johnson'],
  ['urban', 'Urban Outfitters'],
  ['strom', 'Strom Living'],
  ['raceforward', 'Race Forward'],
  ['adobe', 'Adobe'],
  ['tesla', 'Tesla'],
  ['tiktok', 'TikTok'],
  ['oracle', 'Oracle'],
  ['hny', 'HNY+'],
  ['alaska', 'Alaska Airlines'],
  ['chegg', 'Chegg'],
  ['qualcomm', 'Qualcomm'],
] as const

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

function LogoCard({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: 12,
        padding: '0 32px',
        height: 84,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {failed ? (
        <span style={{ fontFamily: poppins, fontSize: 14, fontWeight: 600, color: '#5C5468' }}>{name}</span>
      ) : (
        <img
          src={withBase(`/assets/logos/${slug}.png`)}
          alt={name}
          style={{ maxHeight: 44, maxWidth: 150, width: 'auto', height: 'auto' }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Work() {
  useReveal()
  const [slide, setSlide] = useState(0)
  const rotTimer = useRef<ReturnType<typeof setInterval>>()

  const startRotation = () => {
    if (rotTimer.current) clearInterval(rotTimer.current)
    rotTimer.current = setInterval(() => setSlide((s) => (s + 1) % SEMESTERS.length), 5000)
  }

  useEffect(() => {
    startRotation()
    return () => clearInterval(rotTimer.current)
  }, [])

  const goTo = (i: number) => {
    setSlide(i)
    startRotation()
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav active="Work" />

      {/* Hero: campus photo backdrop + rotating project showcase */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
        <img
          src={withBase('/assets/berkeley-campus.png')}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            opacity: 0.38,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(42,16,87,0.55) 0%, rgba(42,16,87,0.75) 55%, #2A1057 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: 1180,
            margin: '0 auto',
            padding: '88px 40px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 18,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9B4F2',
              ...heroIn(0),
            }}
          >
            Our work
          </div>
          <h1
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 56,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: 0,
              ...heroIn(0.12),
            }}
          >
            Partnering with <span style={{ color: '#C9B4F2' }}>purpose</span>
          </h1>

          {/* Rotating semester client showcase */}
          <div style={{ position: 'relative', width: 'min(760px, 100%)', height: 400, marginTop: 16, ...heroIn(0.24) }}>
            {SEMESTERS.map((s, i) => (
              <div
                key={s.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 28,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 20,
                  padding: '44px 40px',
                  opacity: slide === i ? 1 : 0,
                  zIndex: slide === i ? 2 : 1,
                  pointerEvents: slide === i ? 'auto' : 'none',
                  transition: 'opacity 0.9s ease',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div
                    style={{
                      fontFamily: poppins,
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C9B4F2',
                    }}
                  >
                    Client engagements
                  </div>
                  <div
                    style={{
                      fontFamily: playfair,
                      fontWeight: 700,
                      fontSize: 34,
                      letterSpacing: '-0.01em',
                      color: '#F5F1FC',
                    }}
                  >
                    {s.term}
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
                  {s.clients.map((slug) => (
                    <LogoCard key={slug} slug={slug} name={CLIENT_NAMES[slug]} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
            {SEMESTERS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Semester ${i + 1}`}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: slide === i ? '#C9B4F2' : 'rgba(255,255,255,0.35)',
                  transition: 'background 0.3s',
                }}
              />
            ))}
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

      {/* Numbered service rows */}
      <div
        id="services"
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '72px 40px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div
          data-reveal
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3B1878',
            }}
          >
            Our services
          </div>
          <h2 style={{ fontFamily: playfair, fontWeight: 700, fontSize: 44, letterSpacing: '-0.01em', margin: 0 }}>
            Bring us <span style={{ color: '#3B1878' }}>any problem</span>
          </h2>
        </div>

        {SERVICES.map((s, i) => {
          const number = (
            <div
              key="num"
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 64,
                letterSpacing: '-0.01em',
                color: '#C9B4F2',
                textAlign: i % 2 ? 'right' : 'left',
              }}
            >
              {s.num}
            </div>
          )
          const text = (
            <div key="text" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: poppins, fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em' }}>{s.title}</div>
              <div style={{ fontSize: 16, lineHeight: 1.65, color: '#5C5468' }}>{s.desc}</div>
            </div>
          )
          const graphic = (
            <div
              key="graphic"
              style={{
                height: 180,
                minWidth: 0,
                borderRadius: 10,
                background: '#F2EDFA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {s.icon}
            </div>
          )
          return (
            <div
              key={s.num}
              data-reveal
              className="work-row"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 ? '340px minmax(0,1fr) 120px' : '120px minmax(0,1fr) 340px',
                gap: 40,
                alignItems: 'center',
                background: '#FFFFFF',
                border: '1px solid #E6E1EE',
                borderRadius: 14,
                padding: 48,
              }}
            >
              {i % 2 ? [graphic, text, number] : [number, text, graphic]}
            </div>
          )
        })}
      </div>

      {/* Process timeline */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '80px 40px 64px' }}>
        <div
          data-reveal
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: 56,
          }}
        >
          <div
            style={{
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3B1878',
            }}
          >
            How we work
          </div>
          <h2 style={{ fontFamily: playfair, fontWeight: 700, fontSize: 44, letterSpacing: '-0.01em', margin: 0 }}>
            A 10-week <span style={{ color: '#3B1878' }}>engagement</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {TIMELINE.map((t, i) => (
            <div
              key={t.title}
              data-reveal
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: 28,
                background: '#F2EDFA',
                borderRadius: 14,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: poppins,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#3B1878',
                }}
              >
                {t.weeks}
              </div>
              <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 19 }}>{t.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: '#5C5468' }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated CTA band */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
        <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              maxWidth: 1180,
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: poppins,
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C9B4F2',
              }}
            >
              Our clients
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                width: 'max-content',
                animation: 'marquee 55s linear infinite',
                padding: '14px 0',
              }}
            >
              {[...CLIENTS, ...CLIENTS].map(([slug, name], i) => (
                <LogoCard key={`${slug}-${i}`} slug={slug} name={name} />
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            maxWidth: 1180,
            margin: '0 auto',
            padding: '72px 40px 96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 40,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              Become our next client
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: '#C9B4F2' }}>
              Applications for Fall 2026 are open — reach out at Berkeleyccg@gmail.com.
            </div>
          </div>
          <Link to="/work-with-us" className="btn-white" style={{ flexShrink: 0 }}>
            Get in touch
          </Link>
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
            <img src={withBase('/assets/logo.png')} alt="" style={{ width: 32, height: 32 }} />
            <span style={{ fontFamily: poppins, fontWeight: 700, fontSize: 16, color: '#FFFFFF' }}>
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
            <Link to="/work-with-us" className="footer-link-muted">
              Contact
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
                src={withBase('/assets/ocf-hosted-penguin-dark.svg')}
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
