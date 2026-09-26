import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ImageSlot from '../components/ImageSlot'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/withBase'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain } from '../lib/texture'

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

export default function Join() {
  useReveal()

  return (
    <div style={{ overflowX: 'clip' }}>
      <Nav active="Join" />

      {/* Hero */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
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
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C9B4F2',
              ...heroIn(0),
            }}
          >
            Applications closed
          </div>
          <h1
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(34px, 6.5vw, 64px)',
              letterSpacing: '-0.01em',
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
            No consulting experience required. We recruit for curiosity and work ethic, then train
            the rest. Applications for Fall 2026 are now closed — we look forward to welcoming new
            members in Spring 2027.
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 6, ...heroIn(0.36) }}>
            <a
              href="https://www.instagram.com/berkeleyccg/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              Follow along on Instagram
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

      {/* Photo gallery */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px 96px' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8A6BC1',
            }}
          >
            Life at CCG
          </div>
          <div
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.6vw, 38px)',
              letterSpacing: '-0.01em',
              color: '#191322',
              marginTop: 8,
            }}
          >
            Moments from the <span style={{ color: '#8A6BC1' }}>club</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            {
              id: 'join-photo-1',
              placeholder: 'Recruitment event photo',
              transform: 'rotate(-1.5deg)',
              src: 'join-recruitment.jpg',
            },
            {
              id: 'join-strip-1',
              placeholder: 'Info session photo',
              transform: 'rotate(1deg) translateY(10px)',
              src: 'join-info-session.jpg',
            },
            {
              id: 'join-photo-2',
              placeholder: 'Social night photo',
              transform: 'rotate(-1deg)',
              src: 'join-social-night.jpg',
            },
            {
              id: 'join-strip-2',
              placeholder: 'New member class photo',
              transform: 'rotate(1.5deg) translateY(10px)',
              src: 'join-new-member-class.jpg',
            },
            {
              id: 'join-strip-3',
              placeholder: 'Retreat photo',
              transform: 'rotate(-1deg)',
              src: 'join-retreat.jpg',
            },
          ].map((p) => (
            <div key={p.id} style={{ height: 260, overflow: 'hidden', borderRadius: 14, transform: p.transform }}>
              <ImageSlot
                id={p.id}
                src={withBase(`/assets/photos/${p.src}`)}
                placeholder={p.placeholder}
                style={{ width: '100%', height: 260 }}
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
            flexWrap: 'wrap',
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
              See you in <span style={{ color: '#C9B4F2' }}>Spring 2027</span>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: '#C9B4F2' }}>
              Fall 2026 recruitment has wrapped. Check back for Spring 2027 details, or reach out
              with any questions in the meantime.
            </div>
          </div>
          <Link to="/contact" className="btn-white" style={{ flexShrink: 0 }}>
            Contact us
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
