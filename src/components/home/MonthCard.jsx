import { Link } from 'react-router-dom'

const colorMap = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    bar: 'bg-blue-500',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200 dark:border-purple-800',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
    bar: 'bg-purple-500',
  },
  green: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    bar: 'bg-emerald-500',
  },
}

export default function MonthCard({ month, progress }) {
  const c = colorMap[month.color] || colorMap.blue

  return (
    <Link
      to="/roadmap"
      className={`block p-6 rounded-2xl border ${c.border} ${c.bg} hover:shadow-lg transition-all group`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{month.icon}</span>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${c.badge}`}>
          {month.id}-oy
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {month.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {month.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <span>{month.weeks.length} hafta</span>
        <span>&middot;</span>
        <span>{month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq</span>
      </div>
      {progress > 0 && (
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full ${c.bar} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </Link>
  )
}
