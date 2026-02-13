import { useState } from 'react'

const resourceIcons = {
  course: (
    <svg className="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  docs: (
    <svg className="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  tool: (
    <svg className="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

function getResourceIcon(type) {
  return resourceIcons[type] || (
    <svg className="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
}

export default function WeekAccordion({ week, isChecked, toggleTask, weekProgress }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-surface-200/80 dark:border-surface-800/80 overflow-hidden transition-all duration-200 hover:border-surface-300/80 dark:hover:border-surface-700/80 bg-white dark:bg-surface-900/30 shadow-sm shadow-surface-900/[0.02]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-surface-50/50 dark:hover:bg-surface-800/20 transition-colors"
        aria-expanded={open}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
          weekProgress === 100
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
            : weekProgress > 0
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
            : 'bg-surface-100 text-surface-500 dark:bg-surface-800 dark:text-surface-400'
        }`}>
          {weekProgress === 100 ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : week.id}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[15px] truncate">{week.id}-hafta: {week.title}</h3>
          <p className="text-xs text-surface-500 dark:text-surface-400 truncate mt-0.5">{week.goal}</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {weekProgress > 0 && weekProgress < 100 && (
            <span className="hidden sm:inline text-xs font-semibold text-primary-600 dark:text-primary-400 tabular-nums">
              {weekProgress}%
            </span>
          )}
          <svg
            className={`w-5 h-5 text-surface-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div>
          <div className="px-5 sm:px-6 pb-6 space-y-5 border-t border-surface-100 dark:border-surface-800/80 pt-5">
            {/* Progress bar */}
            {weekProgress > 0 && (
              <div className="h-1 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-300"
                  style={{ width: `${weekProgress}%` }}
                />
              </div>
            )}

            {/* Maqsad */}
            <div className="p-4 rounded-xl bg-primary-50/40 dark:bg-primary-950/20 border border-primary-100/80 dark:border-primary-900/30">
              <p className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-1.5 uppercase tracking-wider">Maqsad</p>
              <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{week.goal}</p>
            </div>

            {/* Topshiriqlar */}
            <div>
              <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">Topshiriqlar</h4>
              <div className="space-y-1">
                {week.tasks.map((task, idx) => (
                  <label
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-50/80 dark:hover:bg-surface-800/30 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked(week.id, idx)}
                      onChange={() => toggleTask(week.id, idx)}
                      className="mt-0.5 shrink-0"
                    />
                    <span className={`text-sm leading-relaxed transition-colors ${
                      isChecked(week.id, idx)
                        ? 'text-surface-400 line-through dark:text-surface-600'
                        : 'text-surface-700 dark:text-surface-300'
                    }`}>
                      {task}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Natija */}
            <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/30">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1.5 uppercase tracking-wider">Natija</p>
              <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{week.deliverable}</p>
            </div>

            {/* AI foydalanish */}
            {week.aiUsage && (
              <div className="p-4 rounded-xl bg-violet-50/40 dark:bg-violet-950/20 border border-violet-100/80 dark:border-violet-900/30">
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 mb-1.5 uppercase tracking-wider">AI'dan foydalanish</p>
                <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{week.aiUsage}</p>
              </div>
            )}

            {/* Texnologiyalar */}
            <div className="flex flex-wrap gap-2">
              {week.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-surface-100/80 dark:bg-surface-800/80 text-surface-600 dark:text-surface-400 font-medium border border-surface-200/50 dark:border-surface-700/50">
                  {tech}
                </span>
              ))}
            </div>

            {/* Resurslar */}
            {week.resources && week.resources.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">Tavsiya resurslar</h4>
                <div className="space-y-0.5">
                  {week.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-surface-50/80 dark:hover:bg-surface-800/30 transition-colors group"
                    >
                      {getResourceIcon(res.type)}
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
