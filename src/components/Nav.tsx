import { Link } from 'react-router-dom'
import { withBase } from '../lib/withBase'
import { poppins } from '../lib/fonts'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Team', to: '/team' },
  { label: 'Outreach', to: '/community-college' },
  { label: 'Join', to: '/join' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav({ active }: { active?: string }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,249,251,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E6E1EE',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" className="nav-brand">
          <img src={withBase('/assets/logo.png')} alt="Core Consulting Group" style={{ width: 36, height: 36 }} />
          <span
            style={{
              fontFamily: poppins,
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: '-0.01em',
            }}
          >
            Core Consulting Group
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links
            .filter((l) => l.label !== 'Contact')
            .map((l) =>
              l.label === active ? (
                <Link key={l.to} to={l.to} className="nav-link-active">
                  {l.label}
                </Link>
              ) : (
                <Link key={l.to} to={l.to} className="nav-link">
                  {l.label}
                </Link>
              ),
            )}
          <Link to="/contact" className="btn-violet" style={{ fontSize: 14, padding: '10px 20px' }}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
