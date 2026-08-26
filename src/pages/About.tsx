import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ImageSlot from '../components/ImageSlot'
import RingMotif from '../components/RingMotif'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { withBase } from '../lib/withBase'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain, violetGrainLight } from '../lib/texture'

const STATS = [
  { value: 59, label: 'Transfer students' },
  { value: 38, label: 'International' },
  { value: 26, label: 'First-gen + low-income' },
  { value: 50, label: 'Women' },
]

const VALUES = [
  {
    title: 'Access for all',
    desc: "Business careers shouldn't depend on your background. We open the door for students from every path.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z" />
      </svg>
    ),
  },
  {
    title: 'Every voice counts',
    desc: 'Fresh perspectives make better advice. We build teams where different viewpoints shape the answer.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="16.5" cy="10" r="2.5" />
        <path d="M3.5 19c.7-3 3-4.5 5.5-4.5s4.8 1.5 5.5 4.5M14.5 14.7c2 .2 3.6 1.4 4.2 3.3" />
      </svg>
    ),
  },
  {
    title: 'Learn by doing',
    desc: 'Real clients, real deliverables, real stakes. Members grow through the work, not the classroom.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B4F2" strokeWidth="1.5">
        <path d="M4 19h16M6 16v-5M11 16V8M16 16v-8" />
      </svg>
    ),
  },
]

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

const wavePaths = (
  <>
    <path d="M0,80 C420,-20 1020,110 1440,30 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
    <path d="M0,92 C440,4 1040,116 1440,44 L1440,100 L0,100 Z" fill="#3B1878" />
  </>
)

export default function About() {
  useReveal()
  const { progress, rowRef } = useCountUp()

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav active="About" />

      {/* Immersive hero: deep purple, full-bleed */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
        <RingMotif size={560} style={{ top: -160, right: -180, animation: 'drift 9s ease-in-out infinite' }} />
        <RingMotif
          size={420}
          style={{ bottom: -80, left: -140, animation: 'drift 12s ease-in-out infinite reverse' }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: 1180,
            margin: '0 auto',
            padding: '130px 40px 90px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start',
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
            About CCG
          </div>
          <h1
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(34px, 6.5vw, 68px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.04,
              color: '#FFFFFF',
              margin: 0,
              maxWidth: 860,
              ...heroIn(0.12),
            }}
          >
            We don't just count voices.
            <br />
            We make <span style={{ color: '#C9B4F2' }}>every voice count</span>.
          </h1>
          <div
            style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: 640,
              ...heroIn(0.24),
            }}
          >
            CCG democratizes business careers for students of diverse and non-traditional
            backgrounds, a team of passionate, hardworking professionals bringing fresh
            perspectives to leadership teams.
          </div>
        </div>

        {/* Diversity stats live inside the color */}
        <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
          <div
            ref={rowRef}
            style={{
              maxWidth: 1180,
              margin: '0 auto',
              padding: '56px 40px 72px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 32,
            }}
          >
            {STATS.map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div
                  style={{
                    fontFamily: playfair,
                    fontWeight: 700,
                    fontSize: 'clamp(34px, 5.5vw, 54px)',
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
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 80, display: 'block', position: 'relative' }}
        >
          <path d="M0,10 C400,90 1040,-20 1440,50 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,30 C420,104 1060,0 1440,66 L1440,100 L0,100 Z" fill="#FAF9FB" />
        </svg>
      </div>

      {/* Who we are */}
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '104px 40px 120px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div data-reveal style={{ height: 460, minWidth: 0, overflow: 'hidden', borderRadius: 14 }}>
          <ImageSlot
            id="about-page-photo"
            src={withBase('/assets/photos/about-team.jpg')}
            placeholder="Drop a candid team photo here"
            style={{ width: '100%', height: 460 }}
          />
        </div>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20, transitionDelay: '0.15s' }}>
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
            Who we are
          </div>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(28px, 4.4vw, 44px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            A student-run consultancy at <span style={{ color: '#3B1878' }}>UC Berkeley</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            We recruit for curiosity and work ethic, no consulting experience required, then
            train every member through real client engagements. Each semester, hand-picked teams
            of six take on projects for startups, nonprofits, and established firms.
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
            <Link to="/join" className="btn-violet" style={{ fontSize: 15, padding: '14px 28px' }}>
              Join our team
            </Link>
            <Link to="/work" className="btn-outline-dark">
              See our work
            </Link>
          </div>
        </div>
      </div>

      {/* Values: full-bleed violet immersion */}
      <div style={{ position: 'relative', background: '#FAF9FB' }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
          {wavePaths}
        </svg>
        <div style={{ background: violetGrainLight }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 40px 96px' }}>
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
                What we stand for
              </div>
              <h2
                style={{
                  fontFamily: playfair,
                  fontWeight: 700,
                  fontSize: 'clamp(30px, 4.6vw, 48px)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.08,
                  margin: 0,
                  color: '#FFFFFF',
                }}
              >
                Our <span style={{ color: '#C9B4F2' }}>values</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  data-reveal
                  className="service-card"
                  style={{ padding: '36px 32px', transitionDelay: `${i * 0.1}s` }}
                >
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
                    {v.icon}
                  </div>
                  <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 19, color: '#FFFFFF' }}>{v.title}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginTop: -6 }}>
                    {v.desc}
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

      {/* Team photos */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px 120px' }}>
        <div
          data-reveal
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: 48,
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
            Life at CCG
          </div>
          <h2
            style={{
              fontFamily: poppins,
              fontWeight: 800,
              fontSize: 'clamp(28px, 4.4vw, 44px)',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            More than a <span style={{ color: '#3B1878' }}>club</span>
          </h2>
        </div>
        <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { id: 'life-photo-1', placeholder: 'Retreat photo', src: 'about-retreat.jpg' },
            { id: 'life-photo-2', placeholder: 'Client presentation photo', src: 'about-presentation.jpg' },
            { id: 'life-photo-3', placeholder: 'Social event photo', src: 'about-social.jpg' },
          ].map((p) => (
            <div key={p.id} style={{ height: 280, overflow: 'hidden', borderRadius: 14 }}>
              <ImageSlot
                id={p.id}
                src={withBase(`/assets/photos/${p.src}`)}
                placeholder={p.placeholder}
                style={{ width: '100%', height: 280 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px 120px' }}>
        <div
          data-reveal
          style={{
            background: violetGrain,
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
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 36,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              Join our <span style={{ color: '#C9B4F2' }}>family</span>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: '#C9B4F2' }}>
              Applications open each semester, no experience required.
            </div>
          </div>
          <Link to="/#contact" className="btn-white" style={{ flexShrink: 0 }}>
            Apply now
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
            <Link to="/work" className="footer-link-muted">
              Our work
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
