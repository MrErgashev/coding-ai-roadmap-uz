const monthGradients = {
  1: 'from-blue-500 to-cyan-500',
  2: 'from-violet-500 to-purple-500',
  3: 'from-emerald-500 to-teal-500',
}

const monthIconClasses = {
  1: 'icon-3d-blue',
  2: 'icon-3d-violet',
  3: 'icon-3d-emerald',
}

export default function Timeline({ months, getWeekProgress }) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-50/50 to-white dark:from-[#0a0a0f] dark:via-[#0d0d16] dark:to-[#0a0a0f]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-primary-600 dark:text-primary-400 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            YO'L XARITASI
          </div>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
            12 haftalik yo'l xaritasi
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400 max-w-xl mx-auto leading-relaxed">
            Har hafta yangi bilim va amaliy loyiha. Bosqichma-bosqich oldinga boring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {months.map((month, monthIdx) => (
            <div key={month.id} className={`fade-in-up fade-in-up-delay-${monthIdx + 1}`}>
              {/* Month header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`icon-3d ${monthIconClasses[month.id]} w-10 h-10 flex items-center justify-center text-white text-sm font-bold`}>
                  {month.id}
                </div>
                <div>
                  <h3 className="font-bold text-[15px] tracking-tight">{month.title}</h3>
                  <p className="text-xs text-surface-400 dark:text-surface-500">{month.id}-oy &middot; {month.weeks.length} hafta</p>
                </div>
              </div>

              {/* Weeks */}
              <div className="space-y-2.5">
                {month.weeks.map(week => {
                  const prog = getWeekProgress(week.id, week.tasks.length)
                  return (
                    <div
                      key={week.id}
                      className="group glass-card rounded-2xl p-4 flex items-start gap-3.5 cursor-default"
                    >
                      {/* Week number / check */}
                      <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
                        prog === 100
                          ? 'icon-3d icon-3d-emerald text-white'
                          : prog > 0
                          ? `bg-gradient-to-br ${monthGradients[month.id]} text-white shadow-sm`
                          : 'bg-surface-100 dark:bg-surface-800/60 text-surface-400 dark:text-surface-500'
                      }`}>
                        {prog === 100 ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="stat-number">{week.id}</span>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold leading-snug mb-2 text-surface-800 dark:text-surface-200">
                          {week.title}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {week.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="px-2.5 py-0.5 text-[10px] font-semibold rounded-md bg-surface-100/80 dark:bg-surface-800/40 text-surface-500 dark:text-surface-400 border border-surface-200/50 dark:border-surface-700/30">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Progress bar for in-progress weeks */}
                        {prog > 0 && prog < 100 && (
                          <div className="mt-2.5 h-1 bg-surface-100 dark:bg-surface-800/40 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${prog}%`,
                                background: `linear-gradient(90deg, ${month.id === 1 ? '#3b82f6, #06b6d4' : month.id === 2 ? '#8b5cf6, #a855f7' : '#059669, #14b8a6'})`
                              }}
                            />
                          </div>
                        )}
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
