import { useState } from 'react'
import Nav from '../components/Nav'
import CompactFooter from '../components/CompactFooter'
import { useReveal } from '../hooks/useReveal'
import { mailSvg, instaSvg } from './Contact'

const sora = "'Sora', sans-serif"

const FAQS = [
  {
    q: 'Is payment required?',
    a: 'No — our engagements are free. We do this for the experience: real problems make our members better consultants, and your results are the payoff.',
  },
  {
    q: "What's the timeline?",
    a: "We're flexible — we shape the engagement around whatever fits you and your company. A typical semester project runs about 10 weeks with regular check-ins, a midpoint presentation, and a final presentation.",
  },
  {
    q: 'Who will be working on my project?',
    a: 'A hand-picked team of a project leader, a senior consultant, and four consultants — backed by advisors in professional service industries. All are UC Berkeley students.',
  },
  {
    q: 'What do we get at the end?',
    a: 'Deliverables tailored to your problem — slide decks, written reports, quantitative models, or white papers — plus an implementation roadmap so you can move forward.',
  },
  {
    q: 'What kinds of problems do you take on?',
    a: "Market expansion, growth strategy, data & analytics, and operations — for startups, nonprofits, and established firms alike. If you're not sure your problem fits, ask.",
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

export default function WorkWithUs() {
  useReveal()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const subject = encodeURIComponent(`Client inquiry — ${[firstName, lastName].filter(Boolean).join(' ')}`)
  const body = encodeURIComponent(`${message || ''}${email ? `\n\nReply to: ${email}` : ''}`)
  const mailtoHref = `mailto:Berkeleyccg@gmail.com?subject=${subject}&body=${body}`

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav />

      {/* Hero */}
      <div style={{ position: 'relative', background: '#2A1057' }}>
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
              fontFamily: sora,
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
              fontFamily: sora,
              fontWeight: 800,
              fontSize: 60,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: 0,
              ...heroIn(0.12),
            }}
          >
            Let's work <span style={{ color: '#C9B4F2' }}>together</span>
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
            Questions about a project, recruitment, or a partnership? Reach out — we'll get back to
            you as soon as possible.
          </div>
        </div>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 80, display: 'block' }}>
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
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
          gap: 72,
          alignItems: 'start',
        }}
      >
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 16 }}>
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
            Get in touch
          </div>
          <h2
            style={{
              fontFamily: sora,
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Tell us about your <span style={{ color: '#3B1878' }}>problem</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            A few sentences about your organization and what you're trying to figure out is plenty.
            We'll follow up with next steps and a short intro call.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
            <a href="mailto:Berkeleyccg@gmail.com" className="contact-line">
              {iconChip(mailSvg)}
              Berkeleyccg@gmail.com
            </a>
            <a href="https://www.instagram.com/berkeleyccg/" className="contact-line">
              {iconChip(instaSvg)}
              @berkeleyccg
            </a>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={fieldCol}>
              <label style={label}>First name</label>
              <input className="form-field" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" />
            </div>
            <div style={fieldCol}>
              <label style={label}>Last name</label>
              <input className="form-field" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" />
            </div>
          </div>
          <div style={fieldCol}>
            <label style={label}>Email</label>
            <input className="form-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" />
          </div>
          <div style={fieldCol}>
            <label style={label}>Message</label>
            <textarea
              className="form-field"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your organization and what you'd like help with…"
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
          <div style={{ fontSize: 13, color: '#9C93AC', textAlign: 'center' }}>
            Opens your email client — or write to us directly anytime.
          </div>
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
                fontFamily: sora,
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3B1878',
              }}
            >
              Before you ask
            </div>
            <h2 style={{ fontFamily: sora, fontWeight: 800, fontSize: 44, letterSpacing: '-0.03em', margin: 0 }}>
              Common <span style={{ color: '#3B1878' }}>questions</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 64px' }}>
            {FAQS.map((f, i) => (
              <div
                key={f.q}
                data-reveal
                style={{ display: 'flex', flexDirection: 'column', gap: 10, transitionDelay: `${i * 0.05}s` }}
              >
                <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 19, letterSpacing: '-0.01em' }}>{f.q}</div>
                <div style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5C5468' }}>
                  {f.a ?? (
                    <>
                      Send us a message above or email{' '}
                      <a href="mailto:Berkeleyccg@gmail.com" style={{ fontWeight: 600 }}>
                        Berkeleyccg@gmail.com
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

      <CompactFooter
        links={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Our work', to: '/work' },
        ]}
      />
    </div>
  )
}
