import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ImageSlot from '../components/ImageSlot'
import RingMotif from '../components/RingMotif'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/withBase'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain, violetGrainLight } from '../lib/texture'

const BRANCHES = [
  { name: 'Pasadena City College', region: 'Pasadena' },
  { name: 'Irvine Valley College', region: 'Irvine' },
  { name: 'Folsom Lake College', region: 'Folsom' },
  { name: 'De Anza College', region: 'Cupertino' },
  { name: 'College of San Mateo', region: 'San Mateo' },
  { name: 'Sacramento City College', region: 'Sacramento' },
  { name: 'El Camino College', region: 'Torrance' },
  { name: 'Long Beach City College', region: 'Long Beach' },
  { name: 'Solano Community College', region: 'Fairfield — coming soon' },
]

const STEPS = [
  {
    num: '01',
    title: 'Reach out',
    body: 'Message us — or we may find you. We look for motivated students at community colleges with strong transfer communities who want to bring consulting to their campus.',
  },
  {
    num: '02',
    title: 'Meet the team',
    body: 'A 30-minute call where we walk through who CCG is, what consulting looks like, what our branches do, and where our consultants end up. All questions welcome.',
  },
  {
    num: '03',
    title: 'Found your club',
    body: 'Build an executive board, find a faculty advisor, and register on your campus. We support you through all of it — and our name helps you recruit your first members.',
  },
  {
    num: '04',
    title: 'Train your members',
    body: 'You get our full training materials and a dedicated mentor from our committee, so your board can teach consulting confidently even if no one has done it before.',
  },
  {
    num: '05',
    title: 'Land your first project',
    body: 'We help you source a first engagement from local businesses and personal connections — small in scale, real in impact, perfect for learning.',
  },
]

const PERKS = [
  {
    title: 'Full training curriculum',
    desc: '75+ slides of new-member training — consulting foundations, MECE, storytelling, decking, and mock cases — so new branches can teach consulting from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
        <path d="M4 19V6a2 2 0 0 1 2-2h13v13H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h13" />
        <path d="M9 8h6M9 11h4" />
      </svg>
    ),
  },
  {
    title: 'A dedicated mentor',
    desc: 'Every branch is paired with a member of our Community College Relations committee — regular check-ins, answers to any question, and support from founding through their first project.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="16.5" cy="10" r="2.5" />
        <path d="M3.5 19c.7-3 3-4.5 5.5-4.5s4.8 1.5 5.5 4.5M14.5 14.7c2 .2 3.6 1.4 4.2 3.3" />
      </svg>
    ),
  },
  {
    title: 'Real first projects',
    desc: 'We help branches land their first engagements with local businesses — small-scale, low-stakes projects built for learning, not pressure.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
        <path d="M12 3v4M12 3l3 3M12 3L9 6" />
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
  {
    title: 'Panels & workshops',
    desc: 'Intro-to-consulting panels, transfer panels with recent transfers, resume workshops, and case competitions — hosted virtually so every branch can join.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Transfer guidance',
    desc: 'Honest advice from people who made the jump — application strategy, GPA planning, and what actually helped us land at Berkeley.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'A statewide network',
    desc: 'Joint socials, branch mixers, and a growing community of consultants across California — plus the weight of an established name behind your club.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
      </svg>
    ),
  },
]

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

const eyebrow: React.CSSProperties = {
  fontFamily: poppins,
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#3B1878',
}

export default function Outreach() {
  useReveal()

  return (
    <div style={{ overflowX: 'clip' }}>
      <Nav active="Outreach" />

      {/* Hero */}
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
            padding: '120px 40px 80px',
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
            Community College Outreach
          </div>
          <h1
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 64,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: 0,
              maxWidth: 860,
              ...heroIn(0.12),
            }}
          >
            We came from community college.
            <br />
            <span style={{ color: '#C9B4F2' }}>Now we're giving back.</span>
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
            Many of us are transfers ourselves. We know how few doors are open to community college
            students who want a business career — so we're building them, one CCG branch at a time.
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 80, display: 'block', position: 'relative', pointerEvents: 'none' }}
        >
          <path d="M0,10 C400,90 1040,-20 1440,50 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,30 C420,104 1060,0 1440,66 L1440,100 L0,100 Z" fill="#FAF9FB" />
        </svg>
      </div>

      {/* Our story */}
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '96px 40px 104px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={eyebrow}>Our story</div>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 44,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Giving back to <span style={{ color: '#3B1878' }}>our roots</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            Over half of CCG is transfer students. Before Berkeley, we were at community colleges
            wondering how anyone breaks into consulting — no clubs, no case prep, no network. That
            gap is exactly why this program exists.
          </div>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            We partner with community colleges across California to found student-run CCG branches:
            real consulting clubs, run by their own students, backed by our training, materials, and
            mentorship.
          </div>
        </div>
        <div
          data-reveal
          style={{ height: 420, minWidth: 0, overflow: 'hidden', borderRadius: 14, transitionDelay: '0.15s' }}
        >
          <ImageSlot
            id="ccr-story-photo"
            src={withBase('/assets/photos/outreach-story.jpg')}
            placeholder="Drop a photo — transfer members or an outreach event"
            style={{ width: '100%', height: 420 }}
          />
        </div>
      </div>

      {/* Partner branches: violet band */}
      <div style={{ position: 'relative' }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 90, display: 'block', pointerEvents: 'none' }}
        >
          <path d="M0,80 C420,-20 1020,110 1440,30 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,92 C440,4 1040,116 1440,44 L1440,100 L0,100 Z" fill="#3B1878" />
        </svg>
        <div style={{ background: violetGrainLight }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 40px 88px' }}>
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
              <div style={{ ...eyebrow, color: '#C9B4F2' }}>Our network</div>
              <h2
                style={{
                  fontFamily: playfair,
                  fontWeight: 700,
                  fontSize: 48,
                  letterSpacing: '-0.01em',
                  margin: 0,
                  color: '#FFFFFF',
                }}
              >
                Partner <span style={{ color: '#C9B4F2' }}>branches</span>
              </h2>
              <div style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 560 }}>
                Student-founded CCG branches at community colleges across California — each one its
                own club, its own board, its own projects.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {BRANCHES.map((b) => (
                <div key={b.name} data-reveal className="branch-card">
                  <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 17, color: '#FFFFFF' }}>{b.name}</div>
                  <div style={{ fontSize: 14, color: '#C9B4F2' }}>{b.region}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 90, display: 'block', transform: 'scaleY(-1)', pointerEvents: 'none' }}
        >
          <path d="M0,80 C420,-20 1020,110 1440,30 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,92 C440,4 1040,116 1440,44 L1440,100 L0,100 Z" fill="#3B1878" />
        </svg>
      </div>

      {/* What branches get */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 40px 104px' }}>
        <div
          data-reveal
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: 52,
          }}
        >
          <div style={eyebrow}>The partnership</div>
          <h2 style={{ fontFamily: playfair, fontWeight: 700, fontSize: 44, letterSpacing: '-0.01em', margin: 0 }}>
            What every branch <span style={{ color: '#3B1878' }}>gets</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {PERKS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{
                background: '#FFFFFF',
                border: '1px solid #E6E1EE',
                borderRadius: 14,
                padding: '34px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: 13,
                transitionDelay: `${(i % 3) * 0.08}s`,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: '#F2EDFA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {p.icon}
              </div>
              <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 19 }}>{p.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: '#5C5468', marginTop: -5 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How a branch starts */}
      <div id="found" style={{ background: '#FFFFFF', borderTop: '1px solid #E6E1EE' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '96px 40px 112px',
            display: 'grid',
            gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)',
            gap: 72,
            alignItems: 'start',
          }}
        >
          <div data-reveal style={{ position: 'sticky', top: 110, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={eyebrow}>Start a branch</div>
            <h2
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 44,
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              From first email to first <span style={{ color: '#3B1878' }}>client</span>
            </h2>
            <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
              No consulting experience needed — most branch founders have never touched a case
              before. We walk you through every step.
            </div>
            <Link
              to="/contact"
              className="btn-violet"
              style={{ fontSize: 15, padding: '14px 28px', alignSelf: 'flex-start', marginTop: 8 }}
            >
              Start a branch at your college
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {STEPS.map((s) => (
              <div
                key={s.num}
                data-reveal
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 24,
                  padding: '26px 0',
                  borderBottom: '1px solid #E6E1EE',
                }}
              >
                <div style={{ fontFamily: playfair, fontWeight: 700, fontSize: 32, color: '#C9B4F2' }}>{s.num}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 20 }}>{s.title}</div>
                  <div style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5C5468' }}>{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ position: 'relative', background: violetGrain, overflow: 'hidden' }}>
        <RingMotif size={460} style={{ top: -140, left: -160, animation: 'drift 10s ease-in-out infinite' }} />
        <div
          style={{
            position: 'relative',
            maxWidth: 1180,
            margin: '0 auto',
            padding: '88px 40px 96px',
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
              Bring CCG to <span style={{ color: '#C9B4F2' }}>your campus</span>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: '#C9B4F2' }}>
              At a community college and interested in consulting? We want to hear from you.
            </div>
          </div>
          <Link to="/contact" className="btn-white" style={{ flexShrink: 0 }}>
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
