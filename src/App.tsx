import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Team from './pages/Team'
import Outreach from './pages/Outreach'
import Join from './pages/Join'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/team" element={<Team />} />
      <Route path="/community-college" element={<Outreach />} />
      <Route path="/join" element={<Join />} />
      <Route path="/contact" element={<Contact />} />
      {/* Work-with-us was folded into the contact page; keep old links working */}
      <Route path="/work-with-us" element={<Navigate to="/contact" replace />} />
      {/* Remaining pages are built next; until then send unknown paths home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
