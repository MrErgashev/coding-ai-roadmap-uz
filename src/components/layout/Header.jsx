import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../shared/ThemeToggle'

const navLinks = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/ai-rules', label: 'AI qoidalari' },
  { to: '/resources', label: 'Resurslar' },
]

export default function Header({ dark, toggleTheme }) {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('pointerdown', handler)
    return () => document.removeEventListener('pointerdown', handler)
  }, [mobileOpen])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass border-b border-surface-200/30 dark:border-surface-800/30 shadow-sm shadow-surface-900/[0.03]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="icon-3d icon-3d-primary w-9 h-9 flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110">
              C
            </div>
            <span className="hidden sm:inline font-bold text-[15px] tracking-tight text-surface-900 dark:text-surface-100">
              Coding + AI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 glass-card rounded-2xl px-1.5 py-1.5" role="navigation" aria-label="Asosiy navigatsiya">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                  pathname === link.to
                    ? 'bg-surface-900 dark:bg-white text-white dark:text-surface-900 shadow-sm'
                    : 'text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100 hover:bg-surface-100/50 dark:hover:bg-surface-800/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle dark={dark} toggle={toggleTheme} />
            <div className="md:hidden" ref={menuRef}>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menyu"
                aria-expanded={mobileOpen}
                className="p-2.5 rounded-xl glass-card transition-all duration-200 focus-ring"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
              {mobileOpen && (
                <div className="absolute right-4 top-full mt-3 w-64 glass-card rounded-3xl p-3 shadow-xl shadow-surface-900/[0.08] dark:shadow-surface-950/40">
                  {navLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                        pathname === link.to
                          ? 'bg-surface-900 dark:bg-white text-white dark:text-surface-900'
                          : 'text-surface-600 hover:bg-surface-100/50 dark:text-surface-300 dark:hover:bg-surface-800/30'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
