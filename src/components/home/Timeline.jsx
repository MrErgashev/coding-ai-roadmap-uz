export default function Timeline({ months, getWeekProgress }) {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
            12 haftalik yo'l xaritasi
          </h2>
          <p className="text-surface-500 dark:text-surface-400 max-w-lg mx-auto leading-relaxed">
            Har hafta yangi bilim va amaliy loyiha. Bosqichma-bosqich oldinga boring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {months.map(month => (
            <div key={month.id}>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl">{month.icon}</span>
                <h3 className="font-bold text-sm tracking-tight">{month.id}-oy: {month.title}</h3>
              </div>
              <div className="space-y-2.5">
                {month.weeks.map(week => {
                  const prog = getWeekProgress(week.id, week.tasks.length)
                  return (
                    <div
                      key={week.id}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface-50/80 dark:bg-surface-900/40 border border-transparent hover:border-surface-200/80 dark:hover:border-surface-700/60 transition-all duration-200"
                    >
                      <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        prog === 100
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                          : prog > 0
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
                          : 'bg-surface-200/80 text-surface-500 dark:bg-surface-800 dark:text-surface-400'
                      }`}>
                        {prog === 100 ? (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : week.id}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug">{week.title}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {week.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
