import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import CompactFooter from '../components/CompactFooter'
import { useReveal } from '../hooks/useReveal'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain } from '../lib/texture'

const TOPICS = ['Joining CCG', 'Work with us', 'Club collaboration', 'A question', 'Something else']

const FAQS = [
  {
    q: 'Is payment required?',
    a: "We're a registered 501(c)(3) nonprofit. Reach out and we'll share more details with you directly.",
  },
  {
    q: "What's the timeline?",
    a: "We're flexible. We shape the engagement around whatever fits you and your company. A typical semester project runs about 10 weeks with regular check-ins, a midpoint presentation, and a final presentation.",
  },
  {
    q: 'Who will be working on my project?',
    a: 'A hand-picked team of a project leader, a senior consultant, and four consultants, backed by advisors in professional service industries. All are UC Berkeley students.',
  },
  {
    q: 'What do we get at the end?',
    a: 'Deliverables tailored to your problem: slide decks, written reports, quantitative models, or white papers, plus an implementation roadmap so you can move forward.',
  },
  {
    q: 'What kinds of problems do you take on?',
    a: "Market expansion, growth strategy, data & analytics, and operations, for startups, nonprofits, and established firms alike. If you're not sure your problem fits, ask.",
  },
  {
    q: 'How do we get started?',
    a: null, // rendered with an inline mailto link below
  },
]

function heroIn(delay: number): React.CSSProperties {
  return { animation: `heroIn 0.9s cubic-bezier(0.2,0.6,0.2,1) ${delay}s both` }
}

const label: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: '#191322' }
const fieldCol: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 }

const iconChip = (svg: React.ReactNode) => (
  <span
    style={{
      width: 40,
      height: 40,
      borderRadius: 10,
      background: '#F2EDFA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {svg}
  </span>
)

export const mailSvg = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const instaSvg = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17" cy="7" r="1" fill="#3B1878" stroke="none" />
  </svg>
)

export default function Contact() {
  useReveal()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [topic, setTopic] = useState('Joining CCG')

  const subject = encodeURIComponent(`${topic} — ${[firstName, lastName].filter(Boolean).join(' ')}`)
  const body = encodeURIComponent(`${message || ''}${email ? `\n\nReply to: ${email}` : ''}`)
  const mailtoHref = `mailto:berkeleyccg@gmail.com?subject=${subject}&body=${body}`

  return (
    <div style={{ overflowX: 'clip' }}>
      <Nav active="Contact" />

      {/* Hero */}
      <div style={{ position: 'relative', background: violetGrain }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '104px 40px 72px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
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
            Contact
          </div>
          <h1
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(34px, 6vw, 60px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: 0,
              ...heroIn(0.12),
            }}
          >
            Say <span style={{ color: '#C9B4F2' }}>hello</span>
          </h1>
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: 600,
              ...heroIn(0.24),
            }}
          >
            Curious about joining, have a project you'd like help with, or just have a question?
            We'd love to hear from you.
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 80, display: 'block', pointerEvents: 'none' }}
        >
          <path d="M0,10 C400,90 1040,-20 1440,50 L1440,100 L0,100 Z" fill="#C9B4F2" opacity="0.45" />
          <path d="M0,30 C420,104 1060,0 1440,66 L1440,100 L0,100 Z" fill="#FAF9FB" />
        </svg>
      </div>

      {/* Contact info + form */}
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '64px 40px 120px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 72,
          alignItems: 'start',
        }}
      >
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 16 }}>
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
            Get in touch
          </div>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 700,
              fontSize: 'clamp(28px, 4.2vw, 40px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            We're students <span style={{ color: '#3B1878' }}>too</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            Whether you're thinking about applying, have a project for us, or your club wants to
            collaborate, send us a note. A real member reads every message.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
            <a href="mailto:berkeleyccg@gmail.com" className="contact-line">
              {iconChip(mailSvg)}
              berkeleyccg@gmail.com
            </a>
            <a href="https://www.instagram.com/berkeleyccg/" className="contact-line">
              {iconChip(instaSvg)}
              @berkeleyccg
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, fontWeight: 500, color: '#191322' }}>
              {iconChip(
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>,
              )}
              University of California, Berkeley
            </div>
          </div>
          <div
            style={{
              background: '#F2EDFA',
              borderRadius: 12,
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              marginTop: 8,
            }}
          >
            <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 15, color: '#3B1878' }}>
              Thinking of applying?
            </div>
            <div style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5C5468' }}>
              Check the{' '}
              <Link to="/join" style={{ fontWeight: 600 }}>
                recruitment timeline
              </Link>{' '}
              for this semester's dates. Info sessions are the best place to meet us in person.
            </div>
          </div>
        </div>

        <div
          data-reveal
          style={{
            background: '#FFFFFF',
            border: '1px solid #E6E1EE',
            borderRadius: 14,
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            transitionDelay: '0.15s',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
            <div style={fieldCol}>
              <label style={label}>First name</label>
              <input className="form-field" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Oski" />
            </div>
            <div style={fieldCol}>
              <label style={label}>Last name</label>
              <input className="form-field" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Bear" />
            </div>
          </div>
          <div style={fieldCol}>
            <label style={label}>Email</label>
            <input className="form-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="oski@berkeley.edu" />
          </div>
          <div style={fieldCol}>
            <label style={label}>I'm reaching out about</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {TOPICS.map((t) => (
                <button key={t} className={`topic-chip${topic === t ? ' on' : ''}`} onClick={() => setTopic(t)}>
                  {t === 'A question' ? 'A question' : t}
                </button>
              ))}
            </div>
          </div>
          <div style={fieldCol}>
            <label style={label}>Message</label>
            <textarea
              className="form-field"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi CCG! I'm a sophomore studying…"
              style={{ resize: 'vertical' }}
            />
          </div>
          <a
            href={mailtoHref}
            className="btn-violet"
            style={{ fontSize: 15, padding: '15px 28px', textAlign: 'center', marginTop: 6 }}
          >
            Send message
          </a>
        </div>
      </div>

      {/* FAQs */}
      <div style={{ background: '#FFFFFF', borderTop: '1px solid #E6E1EE' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px 112px' }}>
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
              Before you reach out
            </div>
            <h2
              style={{
                fontFamily: playfair,
                fontWeight: 700,
                fontSize: 'clamp(28px, 4.4vw, 44px)',
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              Common project <span style={{ color: '#3B1878' }}>questions</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px 64px' }}>
            {FAQS.map((f, i) => (
              <div
                key={f.q}
                data-reveal
                style={{ display: 'flex', flexDirection: 'column', gap: 10, transitionDelay: `${i * 0.05}s` }}
              >
                <div style={{ fontFamily: poppins, fontWeight: 600, fontSize: 19, letterSpacing: '-0.01em' }}>{f.q}</div>
                <div style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5C5468' }}>
                  {f.a ?? (
                    <>
                      Send us a message above or email{' '}
                      <a href="mailto:berkeleyccg@gmail.com" style={{ fontWeight: 600 }}>
                        berkeleyccg@gmail.com
                      </a>
                      . We'll set up a short intro call to scope the engagement together.
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CompactFooter links={[]} />
    </div>
  )
}
