import { Link } from 'react-router-dom'

const monthColors = {
  1: { bg: 'bg-blue-50 dark:bg-blue-950/20', border: 'border-blue-100/80 dark:border-blue-900/30', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' },
  2: { bg: 'bg-violet-50 dark:bg-violet-950/20', border: 'border-violet-100/80 dark:border-violet-900/30', text: 'text-violet-600 dark:text-violet-400', badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300' },
  3: { bg: 'bg-emerald-50 dark:bg-emerald-950/20', border: 'border-emerald-100/80 dark:border-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' },
}

export default function MonthCard({ month, progress }) {
  const colors = monthColors[month.id] || monthColors[1]

  return (
    <Link
      to="/roadmap"
      className="group block p-7 sm:p-8 rounded-2xl border border-surface-200/80 dark:border-surface-800/80 bg-white dark:bg-surface-900/50 shadow-sm shadow-surface-900/[0.04] hover:shadow-md hover:shadow-surface-900/[0.08] dark:shadow-surface-950/10 dark:hover:shadow-surface-950/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
          <span className="text-2xl">{month.icon}</span>
        </div>
        <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${colors.badge}`}>
          {month.id}-oy
        </span>
      </div>
      <h3 className="font-bold text-lg tracking-tight mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {month.title}
      </h3>
      <p className="text-sm text-surface-500 dark:text-surface-400 mb-5 leading-relaxed line-clamp-2">
        {month.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-surface-400 mb-5">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {month.weeks.length} hafta
        </span>
        <span className="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600" />
        <span>{month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq</span>
      </div>
      {progress > 0 && (
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-surface-400 font-medium">Progress</span>
            <span className="font-semibold text-primary-600 dark:text-primary-400">{progress}%</span>
          </div>
          <div className="h-1.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </Link>
  )
}
