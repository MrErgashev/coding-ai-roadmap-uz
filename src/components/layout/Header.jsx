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
  const menuRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-surface-950/80 border-b border-surface-200/50 dark:border-surface-800/50">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white text-sm font-bold shadow-sm shadow-primary-600/25 group-hover:shadow-md group-hover:shadow-primary-600/30 transition-all duration-200">
              C
            </div>
            <span className="hidden sm:inline font-semibold text-[15px] tracking-tight text-surface-900 dark:text-surface-100">
              Coding + AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Asosiy navigatsiya">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  pathname === link.to
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                    : 'text-surface-500 hover:text-surface-900 hover:bg-surface-50 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle dark={dark} toggle={toggleTheme} />
            <div className="md:hidden" ref={menuRef}>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menyu"
                aria-expanded={mobileOpen}
                className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors focus-ring"
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
                <div className="absolute right-4 top-full mt-2 w-56 py-2 bg-white dark:bg-surface-900 rounded-2xl shadow-lg shadow-surface-900/[0.08] border border-surface-200/80 dark:border-surface-700/80 dark:shadow-surface-950/40">
                  {navLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === link.to
                          ? 'text-primary-600 bg-primary-50/80 dark:bg-primary-900/20 dark:text-primary-400'
                          : 'text-surface-600 hover:bg-surface-50 dark:text-surface-300 dark:hover:bg-surface-800'
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
