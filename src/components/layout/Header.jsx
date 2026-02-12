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

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-2xl">🚀</span>
            <span className="hidden sm:inline bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Coding + AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Asosiy navigatsiya">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle dark={dark} toggle={toggleTheme} />
            <MobileMenu links={navLinks} pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu({ links, pathname }) {
  return (
    <div className="md:hidden group relative">
      <button
        aria-label="Menyu"
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`block px-4 py-2.5 text-sm ${
              pathname === link.to
                ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
