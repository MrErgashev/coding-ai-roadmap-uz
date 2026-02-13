import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-surface-200/30 dark:border-surface-800/30">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-50/50 via-white to-white dark:from-[#08080d] dark:via-[#0a0a0f] dark:to-[#0a0a0f]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-3d icon-3d-primary w-9 h-9 flex items-center justify-center text-white text-xs font-bold">
                C
              </div>
              <span className="font-bold text-[15px] text-surface-900 dark:text-surface-100">Coding + AI</span>
            </div>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
              3 oyda dasturlash asoslarini o'rganing va AI bilan kuchlaning.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-5">Sahifalar</h3>
            <div className="flex flex-col gap-3.5">
              {[
                { to: '/', label: 'Bosh sahifa' },
                { to: '/roadmap', label: 'Roadmap' },
                { to: '/ai-rules', label: 'AI qoidalari' },
                { to: '/resources', label: 'Resurslar' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-200 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-5">Texnologiyalar</h3>
            <div className="flex flex-col gap-3.5">
              {['Python & Flask', 'JavaScript & HTML/CSS', 'SQLite & SQL', 'Deployment & DevOps'].map(tech => (
                <span key={tech} className="text-sm text-surface-500 dark:text-surface-400 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Source */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-5">Manba</h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed font-medium">
              Ushbu roadmap inglizcha darslik asosida o'zbek tiliga moslashtirilgan va soddalashtirilib tayyorlangan.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-surface-200/30 dark:border-surface-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-surface-400 dark:text-surface-500 font-medium">
            Coding + AI Roadmap UZ &copy; {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-2 text-xs text-surface-400 dark:text-surface-500">
            <span className="font-medium">Built with</span>
            <div className="flex items-center gap-1.5">
              <span className="icon-3d icon-3d-blue w-5 h-5" title="React" />
              <span className="icon-3d icon-3d-violet w-5 h-5" title="Vite" />
              <span className="icon-3d icon-3d-emerald w-5 h-5" title="Tailwind" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
