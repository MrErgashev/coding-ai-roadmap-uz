export default function Timeline({ months, getWeekProgress }) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          12 haftalik yo'l xaritasi
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Har hafta yangi bilim va amaliy loyiha. Bosqichma-bosqich oldinga boring.
        </p>

        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {months.map(month => (
              <div key={month.id} className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{month.icon}</span>
                  <h3 className="font-semibold text-sm">{month.id}-oy</h3>
                </div>
                {month.weeks.map(week => {
                  const prog = getWeekProgress(week.id, week.tasks.length)
                  return (
                    <div
                      key={week.id}
                      className="relative flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        prog === 100
                          ? 'bg-emerald-500 text-white'
                          : prog > 0
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                          : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                      }`}>
                        {prog === 100 ? '✓' : week.id}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug">{week.title}</p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {week.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="px-1.5 py-0.5 text-[10px] rounded-md bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
