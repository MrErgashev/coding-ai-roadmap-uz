import { Link } from 'react-router-dom'
import { SiPython, SiJavascript } from 'react-icons/si'
import { LuDatabase, LuRocket } from 'react-icons/lu'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-surface-50/50 dark:bg-surface-950/50" />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full bg-primary-500/5 blur-[100px]" />
      <div className="absolute bottom-0 right-[10%] w-[250px] h-[250px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-surface-900 dark:text-white">Coding + AI</span>
            </div>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed max-w-xs">
              Dasturlashni noldan o'rganing va AI vositalaridan samarali foydalaning. 3 oylik yo'l xaritasi.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-sm text-surface-900 dark:text-white mb-4">Sahifalar</h3>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Bosh sahifa' },
                { to: '/roadmap', label: 'Roadmap' },
                { to: '/ai-rules', label: 'AI qoidalari' },
                { to: '/resources', label: 'Resurslar' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-bold text-sm text-surface-900 dark:text-white mb-4">Texnologiyalar</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Python & Flask', icon: <SiPython size={14} /> },
                { name: 'JavaScript & HTML/CSS', icon: <SiJavascript size={14} /> },
                { name: 'SQLite & SQL', icon: <LuDatabase size={14} /> },
                { name: 'Deployment & DevOps', icon: <LuRocket size={14} /> },
              ].map(tech => (
                <span key={tech.name} className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                  <span className="text-surface-400 dark:text-surface-500">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-sm text-surface-900 dark:text-white mb-4">Manba</h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
              Ushbu roadmap inglizcha darslik asosida o'zbek tiliga moslashtirilgan va soddalashtirilib tayyorlangan.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-surface-200/60 dark:border-surface-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-surface-400">
            Coding + AI Roadmap UZ &copy; {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-2 text-xs text-surface-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Barcha xizmatlar ishlayapti
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
