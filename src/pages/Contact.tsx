import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import CompactFooter from '../components/CompactFooter'
import { useReveal } from '../hooks/useReveal'
import { poppins, playfair } from '../lib/fonts'
import { violetGrain } from '../lib/texture'

const TOPICS = ['Joining CCG', 'A question', 'Club collaboration', 'Something else']

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
  const mailtoHref = `mailto:Berkeleyccg@gmail.com?subject=${subject}&body=${body}`

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
              fontSize: 60,
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
            Curious about joining, want to grab a coffee chat, or just have a question? We'd love to
            hear from you — no consulting experience required.
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
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
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
              fontSize: 40,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            We're students <span style={{ color: '#3B1878' }}>too</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: '#5C5468' }}>
            Whether you're thinking about applying, want advice on breaking into consulting, or your
            club wants to collaborate — send us a note. A real member reads every message.
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, fontWeight: 500, color: '#191322' }}>
              {iconChip(
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B1878" strokeWidth="1.5">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>,
              )}
              UC Berkeley, Berkeley CA
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
              for this semester's dates — info sessions are the best place to meet us in person.
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
          <div style={{ fontSize: 13, color: '#9C93AC', textAlign: 'center' }}>
            Opens your email client — or DM us on Instagram, we're fast there.
          </div>
        </div>
      </div>

      <CompactFooter
        links={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Join', to: '/join' },
        ]}
      />
    </div>
  )
}
