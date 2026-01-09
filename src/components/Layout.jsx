import { Outlet, NavLink } from 'react-router-dom'
import { Home, BookOpen, Scroll, Heart, BookMarked, Clock, GitCompare, Search } from 'lucide-react'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <main className="main-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/verses" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={20} />
          <span>Verses</span>
        </NavLink>
        <NavLink to="/stories" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Scroll size={20} />
          <span>Stories</span>
        </NavLink>
        <NavLink to="/maryam" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Heart size={20} />
          <span>Maryam</span>
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Search size={20} />
          <span>Search</span>
        </NavLink>
      </nav>
    </div>
  )
}
