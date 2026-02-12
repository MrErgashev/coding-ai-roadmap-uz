import { useState } from 'react'

export default function WeekAccordion({ week, isChecked, toggleTask, weekProgress }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all hover:border-gray-300 dark:hover:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
        aria-expanded={open}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
          weekProgress === 100
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
            : weekProgress > 0
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300'
            : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
        }`}>
          {weekProgress === 100 ? '✓' : week.id}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-semibold text-sm sm:text-base truncate">{week.id}-hafta: {week.title}</h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{week.goal}</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {weekProgress > 0 && (
            <span className="hidden sm:inline text-xs font-medium text-primary-600 dark:text-primary-400">
              {weekProgress}%
            </span>
          )}
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div>
          <div className="px-4 sm:px-5 pb-5 space-y-5 border-t border-gray-100 dark:border-gray-800 pt-4">
            {/* Progress bar */}
            {weekProgress > 0 && (
              <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300"
                  style={{ width: `${weekProgress}%` }}
                />
              </div>
            )}

            {/* Maqsad */}
            <div className="p-3 rounded-lg bg-primary-50/50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900/30">
              <p className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-1">Maqsad</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{week.goal}</p>
            </div>

            {/* Topshiriqlar */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Topshiriqlar</h4>
              <div className="space-y-2">
                {week.tasks.map((task, idx) => (
                  <label
                    key={idx}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked(week.id, idx)}
                      onChange={() => toggleTask(week.id, idx)}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 shrink-0"
                    />
                    <span className={`text-sm leading-relaxed ${
                      isChecked(week.id, idx)
                        ? 'text-gray-400 line-through dark:text-gray-600'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {task}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Natija */}
            <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Natija (deliverable)</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{week.deliverable}</p>
            </div>

            {/* AI foydalanish */}
            {week.aiUsage && (
              <div className="p-3 rounded-lg bg-accent-50/50 dark:bg-accent-950/20 border border-accent-100 dark:border-accent-900/30">
                <p className="text-xs font-semibold text-accent-700 dark:text-accent-300 mb-1">AI'dan foydalanish</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{week.aiUsage}</p>
              </div>
            )}

            {/* Texnologiyalar */}
            <div className="flex flex-wrap gap-2">
              {week.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* Resurslar */}
            {week.resources && week.resources.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tavsiya resurslar</h4>
                <div className="space-y-1.5">
                  {week.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                    >
                      <span className="text-xs">
                        {res.type === 'course' ? '📚' : res.type === 'docs' ? '📖' : res.type === 'tool' ? '🔧' : res.type === 'practice' ? '💪' : res.type === 'video' ? '🎬' : res.type === 'book' ? '📕' : '🔗'}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 group-hover:underline">{res.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
