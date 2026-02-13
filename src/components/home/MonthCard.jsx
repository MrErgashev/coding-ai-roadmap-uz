import { Link } from 'react-router-dom'

export default function MonthCard({ month, progress }) {
  return (
    <Link
      to="/roadmap"
      className="block p-6 rounded-2xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900/50 hover:shadow-lg hover:shadow-surface-900/5 dark:hover:shadow-surface-950/20 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{month.icon}</span>
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-100 text-surface-600 dark:bg-surface-800 dark:text-surface-300">
          {month.id}-oy
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {month.title}
      </h3>
      <p className="text-sm text-surface-500 dark:text-surface-400 mb-4 line-clamp-2">
        {month.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-surface-400 mb-4">
        <span>{month.weeks.length} hafta</span>
        <span>&middot;</span>
        <span>{month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq</span>
      </div>
      {progress > 0 && (
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-surface-400">Progress</span>
            <span className="font-medium text-primary-600 dark:text-primary-400">{progress}%</span>
          </div>
          <div className="h-1.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </Link>
  )
}
