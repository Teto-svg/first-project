import { NavLink, Link } from 'react-router-dom'
import { Aperture } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <Link to="/" className="logo-area">
          <div className="logo-icon">
            <Aperture size={20} />
          </div>
          <div className="logo-text">
            <span className="logo-title">عدسة</span>
            <span className="logo-subtitle">عالم التصوير الفوتوغرافي</span>
          </div>
        </Link>

        <nav className="nav-menu">
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            المدونة
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            من نحن
          </NavLink>
        </nav>

        <Link to="/blog" className="btn-read">
          ابدأ القراءة
        </Link>
      </div>
    </header>
  )
}