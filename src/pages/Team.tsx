import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ImageSlot from '../components/ImageSlot'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/withBase'
import { poppins, playfair, playfairItalic as serifItalic } from '../lib/fonts'
import { violetGrain, violetGrainLight } from '../lib/texture'

const EXECS = [
  { slot: 'team-eric', name: 'Eric Xie', role: 'President', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'z4@berkeley.edu' },
  { slot: 'team-gavin', name: 'Gavin Pon', role: 'Vice President of Consulting', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'gavinpon13@berkeley.edu' },
  { slot: 'team-sonny', name: 'Sonny Casteel', role: 'Internal Vice President', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'sontron@berkeley.edu' },
  { slot: 'team-frankco', name: 'Frankco Wong', role: 'External Vice President', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'Frankcowong@berkeley.edu' },
]

const DIRECTORS = [
  { slot: 'team-jasir', name: 'Jasir Baig', role: 'Director of Corporate Relations', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'JasirBaig2@berkeley.edu' },
  { slot: 'team-elaine', name: 'Elaine Owyoung', role: 'Director of Finance', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'elaine.owyoung@berkeley.edu' },
  { slot: 'team-vitalii', name: 'Vitalii Pavlenko', role: 'Director of Marketing', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'vitalii-pavlenko@berkeley.edu' },
  { slot: 'team-bonpatrick', name: 'Bonpatrick Estrella', role: 'Director of Professional Development', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'bonpatricke@berkeley.edu' },
  { slot: 'team-jeremiah', name: 'Jeremiah Simpson', role: 'Director of Community College Relations', linkedin: 'https://www.linkedin.com/in/frankcowong/', email: 'jeremiahsimpson@berkeley.edu' },
]

const FIRMS_ROW_1 = [
  ['mckinsey', 'McKinsey & Company'],
  ['bcg', 'BCG'],
  ['bain', 'Bain & Company'],
  ['goldman', 'Goldman Sachs'],
  ['blackrock', 'BlackRock'],
  ['jpmc', 'JPMorgan Chase & Co.'],
  ['oliverwyman', 'Oliver Wyman'],
  ['accenture', 'Accenture'],
  ['visa', 'Visa'],
  ['zs', 'ZS'],
  ['mufg', 'MUFG'],
  ['mastercard', 'Mastercard'],
  ['pfizer', 'Pfizer'],
] as const

const FIRMS_ROW_2 = [
  ['microsoft', 'Microsoft'],
  ['amazon', 'Amazon'],
  ['nvidia', 'NVIDIA'],
  ['amd', 'AMD'],
  ['cisco', 'Cisco'],
  ['ey', 'EY'],
  ['kpmg', 'KPMG'],
  ['deloitte', 'Deloitte'],
  ['pwc', 'PwC'],
  ['bakertilly', 'Baker Tilly'],
  ['cvs', 'CVS'],
  ['nbcu', 'NBCUniversal'],
] as const

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

const mailIcon = (color: string, size: number) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

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
          style={{ maxHeight: 44, maxWidth: 210, width: 'auto', height: 'auto' }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Team() {
  useReveal()

  return (
    <div style={{ overflowX: 'clip' }}>
      <Nav active="Team" />

      {/* Hero */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
        <div
          style={{
            position: 'relative',
            maxWidth: 1180,
            margin: '0 auto',
            padding: '100px 40px 56px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
            textAlign: 'center',
            pointerEvents: 'none',
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
            Our team
          </div>
          <h1
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 60,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: 0,
              ...heroIn(0.12),
            }}
          >
            Meet our <span style={{ color: '#C9B4F2' }}>team</span>
          </h1>
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 580,
              ...heroIn(0.24),
            }}
          >
            The leadership behind every engagement — and the family behind the leadership.
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ position: 'relative', width: '100%', height: 80, display: 'block', pointerEvents: 'none' }}
        >
          <path d="M0,10 C400,90 1040,-20 1440,50 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,30 C420,104 1060,0 1440,66 L1440,100 L0,100 Z" fill="#FAF9FB" />
        </svg>
      </div>

      {/* Executive board: violet contrast band */}
      <div style={{ position: 'relative', background: '#FAF9FB' }}>
        {/* Exec team banner */}
        <div
          style={{
            position: 'relative',
            height: 560,
            overflow: 'hidden',
            background: 'repeating-linear-gradient(45deg, #EFEBF6 0, #EFEBF6 24px, #E6E1EE 24px, #E6E1EE 48px)',
          }}
        >
          <div style={{ position: 'absolute', inset: 0 }}>
            <ImageSlot
              id="team-exec-banner"
              src={withBase('/assets/photos/team-banner.jpg')}
              placeholder="Drop your full team banner photo here (PNG/JPG)"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(25,19,34,0.15), rgba(25,19,34,0.45))',
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
              justifyContent: 'flex-end',
              gap: 12,
              paddingBottom: 44,
              pointerEvents: 'none',
            }}
          >
            <img
              src={withBase('/assets/logo.png')}
              alt=""
              style={{ width: 80, height: 80, filter: 'drop-shadow(0 4px 16px rgba(25,19,34,0.5))' }}
            />
            <div
              style={{
                fontFamily: poppins,
                fontWeight: 800,
                fontSize: 60,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(25,19,34,0.7)',
                textAlign: 'center',
                lineHeight: 1.1,
              }}
            >
              Core Consulting Group
            </div>
            <div
              style={{
                ...serifItalic,
                fontSize: 28,
                color: '#C9B4F2',
                textShadow: '0 0 18px rgba(201,180,242,0.5)',
              }}
            >
              Leadership · 2026
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
          <path d="M0,80 C420,-20 1020,110 1440,30 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,92 C440,4 1040,116 1440,44 L1440,100 L0,100 Z" fill="#3B1878" />
        </svg>
        <div style={{ background: violetGrainLight }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 40px 88px' }}>
            <div data-reveal style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2
                style={{
                  fontFamily: playfair,
                  fontWeight: 700,
                  fontSize: 56,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.05,
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Executive <span style={{ color: '#C9B4F2' }}>Board</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {EXECS.map((m, i) => (
                <div
                  key={m.slot}
                  data-reveal
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 14,
                    textAlign: 'center',
                    transitionDelay: `${i * 0.08}s`,
                  }}
                >
                  <div
                    style={{
                      width: 170,
                      height: 170,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '4px solid rgba(201,180,242,0.5)',
                    }}
                  >
                    <ImageSlot id={m.slot} placeholder="Headshot" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ fontFamily: poppins, fontWeight: 700, fontSize: 20, color: '#FFFFFF' }}>{m.name}</div>
                    <div style={{ ...serifItalic, fontSize: 17, color: '#C9B4F2' }}>{m.role}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-exec" style={{ fontFamily: poppins }}>
                      in
                    </a>
                    <a href={`mailto:${m.email}`} aria-label="Email" className="social-exec">
                      {mailIcon('#FFFFFF', 16)}
                    </a>
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
          <path d="M0,80 C420,-20 1020,110 1440,30 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,92 C440,4 1040,116 1440,44 L1440,100 L0,100 Z" fill="#3B1878" />
        </svg>
      </div>

      {/* Directors */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px 112px' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 56,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            The <span style={{ color: '#3B1878' }}>Directors</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {DIRECTORS.map((m, i) => (
            <div
              key={m.slot}
              data-reveal
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                textAlign: 'center',
                transitionDelay: `${i * 0.08}s`,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid #F2EDFA',
                  flexShrink: 0,
                }}
              >
                <ImageSlot id={m.slot} placeholder="Headshot" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* flex: 1 keeps the social chips bottom-aligned across the row even when titles wrap */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                <div style={{ fontFamily: poppins, fontWeight: 700, fontSize: 18 }}>{m.name}</div>
                <div style={{ ...serifItalic, fontSize: 16, color: '#3B1878' }}>{m.role}</div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-director" style={{ fontFamily: poppins }}>
                  in
                </a>
                <a href={`mailto:${m.email}`} aria-label="Email" className="social-director">
                  {mailIcon('#3B1878', 15)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where we work */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '88px 40px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            textAlign: 'center',
            alignItems: 'center',
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
            Where we work
          </div>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 44,
              letterSpacing: '-0.01em',
              margin: 0,
              color: '#FFFFFF',
            }}
          >
            Our members go <span style={{ color: '#C9B4F2' }}>everywhere</span>
          </h2>
        </div>
        <div style={{ padding: '48px 0 88px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                width: 'max-content',
                animation: 'marquee 60s linear infinite',
                padding: '14px 0',
              }}
            >
              {[...FIRMS_ROW_1, ...FIRMS_ROW_1].map(([slug, name], i) => (
                <LogoCard key={`${slug}-${i}`} slug={slug} name={name} />
              ))}
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                width: 'max-content',
                animation: 'marqueeRev 55s linear infinite',
                padding: '14px 0',
              }}
            >
              {[...FIRMS_ROW_2, ...FIRMS_ROW_2].map(([slug, name], i) => (
                <LogoCard key={`${slug}-${i}`} slug={slug} name={name} />
              ))}
            </div>
          </div>
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
            <Link to="/join" className="footer-link-muted">
              Join
            </Link>
            <a href="mailto:berkeleyccg@gmail.com" className="footer-link-muted">
              berkeleyccg@gmail.com
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
