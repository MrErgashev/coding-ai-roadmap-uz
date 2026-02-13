import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-surface-200/60 dark:border-surface-800/60 mt-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary-600 flex items-center justify-center text-white text-xs font-bold">
                C
              </div>
              <span className="font-semibold text-sm text-surface-900 dark:text-surface-100">Coding + AI</span>
            </div>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
              3 oyda dasturlash asoslarini o'rganing va AI bilan kuchlaning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-surface-400 mb-4">Sahifalar</h3>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-200 transition-colors">Bosh sahifa</Link>
              <Link to="/roadmap" className="text-sm text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-200 transition-colors">Roadmap</Link>
              <Link to="/ai-rules" className="text-sm text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-200 transition-colors">AI qoidalari</Link>
              <Link to="/resources" className="text-sm text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-200 transition-colors">Resurslar</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-surface-400 mb-4">Texnologiyalar</h3>
            <div className="flex flex-col gap-3 text-sm text-surface-500 dark:text-surface-400">
              <span>Python & Flask</span>
              <span>JavaScript & HTML/CSS</span>
              <span>SQLite & SQL</span>
              <span>Deployment & DevOps</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-surface-400 mb-4">Manba</h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
              Ushbu roadmap inglizcha darslik asosida o'zbek tiliga moslashtirilgan va soddalashtirilib tayyorlangan.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-surface-200/60 dark:border-surface-800/60 text-center text-xs text-surface-400">
          Coding + AI Roadmap UZ &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
