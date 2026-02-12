import SearchInput from '../shared/SearchInput'

export default function FilterBar({
  query, setQuery,
  monthFilter, setMonthFilter,
  techFilter, setTechFilter,
  allTechnologies,
  hasFilters, reset,
  totalProgress,
  resetProgress
}) {
  return (
    <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 bg-white/80 dark:bg-surface-950/80 backdrop-blur-xl border-b border-surface-200/40 dark:border-surface-800/40 mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Mavzu, texnologiya yoki topshiriq izlang..."
          />
        </div>
        <div className="flex gap-2">
          <select
            value={monthFilter}
            onChange={e => setMonthFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
            aria-label="Oy bo'yicha filter"
          >
            <option value="all">Barcha oylar</option>
            <option value="1">1-oy: Python</option>
            <option value="2">2-oy: Veb</option>
            <option value="3">3-oy: Mahorat</option>
          </select>
          <select
            value={techFilter}
            onChange={e => setTechFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
            aria-label="Texnologiya bo'yicha filter"
          >
            <option value="all">Barcha texnologiyalar</option>
            {allTechnologies.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-4">
          {totalProgress > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="w-32 h-1.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-500"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
              <span className="text-xs font-medium text-surface-500">{totalProgress}%</span>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          {hasFilters && (
            <button
              onClick={reset}
              className="text-xs text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Filterni tozalash
            </button>
          )}
          {totalProgress > 0 && (
            <button
              onClick={resetProgress}
              className="text-xs text-surface-400 hover:text-red-500 transition-colors"
            >
              Progressni tozalash
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
