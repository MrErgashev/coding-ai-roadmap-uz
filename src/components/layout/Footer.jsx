import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-surface-200 dark:border-surface-800 mt-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-surface-400 mb-3">Sahifalar</h3>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors">Bosh sahifa</Link>
              <Link to="/roadmap" className="text-sm text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors">Roadmap</Link>
              <Link to="/ai-rules" className="text-sm text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors">AI qoidalari</Link>
              <Link to="/resources" className="text-sm text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors">Resurslar</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-surface-400 mb-3">Texnologiyalar</h3>
            <div className="flex flex-col gap-2.5 text-sm text-surface-500 dark:text-surface-400">
              <span>Python & Flask</span>
              <span>JavaScript & HTML/CSS</span>
              <span>SQLite & SQL</span>
              <span>Deployment & DevOps</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-surface-400 mb-3">Manba</h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
              Ushbu roadmap inglizcha darslik asosida o'zbek tiliga moslashtirilgan va soddalashtirilib tayyorlangan.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-surface-200 dark:border-surface-800 text-center text-xs text-surface-400">
          Coding + AI Roadmap UZ &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
