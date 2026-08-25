import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ImageSlot from '../components/ImageSlot'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { withBase } from '../lib/withBase'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain, violetGrainLight } from '../lib/texture'

const eyebrow: React.CSSProperties = {
  fontFamily: poppins,
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#3B1878',
}

const h2: React.CSSProperties = {
  fontFamily: playfair,
  fontWeight: 700,
  fontSize: 48,
  letterSpacing: '-0.01em',
  lineHeight: 1.08,
  margin: 0,
}

const STATS = [
  { value: 59, label: 'Transfer students' },
  { value: 38, label: 'International' },
  { value: 26, label: 'First-gen + low-income' },
  { value: 50, label: 'Women' },
]

const SERVICES = [
  {
    title: 'Market expansion',
    desc: 'Sizing, segmentation, and go-to-market strategy for new products and regions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: 'Data & analytics',
    desc: 'Statistical modeling and dashboards that turn raw data into decisions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <path d="M4 19h16M6 16v-5M11 16V8M16 16v-8" />
      </svg>
    ),
  },
  {
    title: 'Growth strategy',
    desc: 'Pricing, positioning, and roadmaps for startups and established firms alike.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16M10 10v10" />
      </svg>
    ),
  },
  {
    title: 'Operations',
    desc: 'Process audits and organizational design that cut cost and friction.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" strokeDasharray="4 3" />
      </svg>
    ),
  },
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
  ['intel', 'Intel'],
] as const

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

function LogoCard({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      style={{
        width: 200,
        height: 84,
        borderRadius: 10,
        background: '#FFFFFF',
        border: '1px solid #E6E1EE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {failed ? (
        // Client name stands in until the logo PNG is added
        <span style={{ fontFamily: poppins, fontSize: 14, fontWeight: 600, color: '#5C5468' }}>{name}</span>
      ) : (
        <img
          src={withBase(`/assets/logos/${slug}.png`)}
          alt={name}
          style={{
            maxHeight: slug === 'intel' ? 34 : 44,
            maxWidth: 140,
            width: 'auto',
            height: 'auto',
          }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

const wavePaths = (
  <>
    <path d="M0,80 C420,-20 1020,110 1440,30 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
    <path d="M0,92 C440,4 1040,116 1440,44 L1440,100 L0,100 Z" fill="#3B1878" />
  </>
)

export default function Home() {
  useReveal()
  const { progress, rowRef } = useCountUp()

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav />

      {/* Hero */}
      <div id="top" style={{ position: 'relative', height: '84vh', minHeight: 580, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, animation: 'slowZoom 18s ease-out both' }}>
          <ImageSlot id="hero-photo" placeholder="Drop your club photo here" style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(25,19,34,0.42), rgba(25,19,34,0.68))',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 24,
            padding: '0 40px',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9B4F2',
              ...heroIn(0),
            }}
          >
            UC Berkeley · Haas School of Business
          </div>
          <h1
            style={{
              fontFamily: poppins,
              fontWeight: 800,
              fontSize: 76,
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
              color: '#FFFFFF',
              margin: 0,
              maxWidth: 900,
              ...heroIn(0.15),
            }}
          >
            Core Consulting Group
          </h1>
          <div
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.88)',
              maxWidth: 620,
              ...heroIn(0.3),
            }}
          >
            Empowering students from every background with the tools to succeed in consulting — and
            delivering real results for our clients.
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 8, pointerEvents: 'auto', ...heroIn(0.45) }}>
            <Link to="/work-with-us" className="btn-white">
              Work with us
            </Link>
            <Link to="/join" className="btn-outline-light">
              Join our team
            </Link>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -1,
            width: '100%',
            height: 90,
            display: 'block',
            pointerEvents: 'none',
          }}
        >
          <path d="M0,60 C360,110 1080,-10 1440,50 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,72 C400,116 1060,8 1440,64 L1440,100 L0,100 Z" fill="#2A1057" />
        </svg>
      </div>

      {/* Stats band */}
      <div style={{ background: violetGrain }}>
        <div
          ref={rowRef}
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '48px 40px 64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: playfair,
                  fontWeight: 700,
                  fontSize: 54,
                  letterSpacing: '-0.01em',
                  color: '#FFFFFF',
                }}
              >
                {Math.round(s.value * progress)}%
              </div>
              <div style={{ fontSize: 15, color: '#C9B4F2' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What is CCG? */}
      <div
        id="about"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '120px 40px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={eyebrow}>Who we are</div>
          <h2 style={h2}>
            What is <span style={{ color: '#3B1878' }}>CCG</span>?
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            CCG aims to democratize business careers for students of diverse and non-traditional
            backgrounds by cultivating a team of passionate, hardworking professionals who bring
            fresh perspectives to leadership teams. We prioritize not just counting voices, but
            making every voice count.
          </div>
          <Link
            to="/about"
            className="btn-violet"
            style={{ fontSize: 15, padding: '14px 28px', alignSelf: 'flex-start' }}
          >
            More about us
          </Link>
        </div>
        <div
          data-reveal
          style={{
            height: 440,
            minWidth: 0,
            overflow: 'hidden',
            borderRadius: 14,
            transitionDelay: '0.15s',
          }}
        >
          <ImageSlot id="about-photo" placeholder="Team photo" style={{ width: '100%', height: 440 }} />
        </div>
      </div>

      {/* Services dark sweep */}
      <div style={{ position: 'relative', background: '#FAF9FB' }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
          {wavePaths}
        </svg>
        <div style={{ background: violetGrainLight }}>
          <div id="services" style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 40px 96px' }}>
            <div
              data-reveal
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                maxWidth: 640,
                margin: '0 auto 56px',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ ...eyebrow, color: '#C9B4F2' }}>Our services</div>
              <h2 style={{ ...h2, color: '#FFFFFF' }}>
                What we <span style={{ color: '#C9B4F2' }}>offer</span>
              </h2>
              <div style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)' }}>
                Each semester our teams take on a small number of engagements, so every client gets
                our full attention for 10–12 weeks.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {SERVICES.map((s, i) => (
                <div key={s.title} data-reveal className="service-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'rgba(201,180,242,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {s.icon}
                  </div>
                  <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 18, color: '#FFFFFF' }}>{s.title}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginTop: -6 }}>
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 90, display: 'block', transform: 'scaleY(-1)' }}
        >
          {wavePaths}
        </svg>
      </div>

      {/* Clients marquee */}
      <div id="clients" style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px 56px' }}>
        <div
          data-reveal
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <div style={eyebrow}>Our clients</div>
          <h2 style={{ ...h2, lineHeight: undefined }}>
            Trusted by teams of <span style={{ color: '#3B1878' }}>every size</span>
          </h2>
        </div>
      </div>
      <div data-reveal style={{ overflow: 'hidden', paddingBottom: 40 }}>
        <div style={{ display: 'flex', gap: 16, width: 'max-content', animation: 'marquee 45s linear infinite' }}>
          {[...CLIENTS, ...CLIENTS].map(([slug, name], i) => (
            <LogoCard key={`${slug}-${i}`} slug={slug} name={name} />
          ))}
        </div>
      </div>
      <div data-reveal style={{ display: 'flex', justifyContent: 'center', paddingBottom: 96 }}>
        <Link to="/work" className="link-underline">
          See our client work →
        </Link>
      </div>

      <Footer />
    </div>
  )
}
