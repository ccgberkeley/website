import { Link } from 'react-router-dom'
import { withBase } from '../lib/withBase'
import { poppins } from '../lib/fonts'

export default function Footer() {
  return (
    <div id="contact" style={{ background: '#191322' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '80px 40px 48px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 64,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={withBase('/assets/logo.png')} alt="" style={{ width: 36, height: 36 }} />
            <span
              style={{
                fontFamily: poppins,
                fontWeight: 700,
                fontSize: 17,
                color: '#FFFFFF',
              }}
            >
              Core Consulting Group
            </span>
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.6, color: '#9C93AC', maxWidth: 380 }}>
            A student-run consulting organization at UC Berkeley. We are a student group acting
            independently of the University of California. We take full responsibility for our
            organization and this web site.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
            Explore
          </div>
          <Link to="/about" className="footer-link">
            About us
          </Link>
          <Link to="/work" className="footer-link">
            Our work
          </Link>
          <Link to="/join" className="footer-link">
            Join us
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
            Contact
          </div>
          <a href="mailto:berkeleyccg@gmail.com" className="footer-link">
            berkeleyccg@gmail.com
          </a>
          <a href="https://www.instagram.com/berkeleyccg/" className="footer-link">
            Instagram
          </a>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px 40px' }}>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 24,
            fontSize: 13,
            color: '#9C93AC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span>© 2026 Core Consulting Group</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <a
              href="https://www.ocf.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#9C93AC' }}
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
