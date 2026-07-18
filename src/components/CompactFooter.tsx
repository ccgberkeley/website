import { Link } from 'react-router-dom'

const sora = "'Sora', sans-serif"

// One-row footer used by the interior pages; `links` matches each design file.
export default function CompactFooter({ links }: { links: { label: string; to: string }[] }) {
  return (
    <div style={{ background: '#191322' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '56px 40px 40px',
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
          {links.map((l) => (
            <Link key={l.label} to={l.to} className="footer-link-muted">
              {l.label}
            </Link>
          ))}
          <a href="mailto:Berkeleyccg@gmail.com" className="footer-link-muted">
            Berkeleyccg@gmail.com
          </a>
          <span style={{ fontSize: 13, color: '#5C5468' }}>© 2026 CCG</span>
        </div>
      </div>
    </div>
  )
}
