import FilterBar from '../components/roadmap/FilterBar'
import MonthSection from '../components/roadmap/MonthSection'

export default function Roadmap({
  months,
  searchProps,
  isChecked,
  toggleTask,
  getWeekProgress,
  totalProgress,
  resetProgress
}) {
  return (
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-3">
          Yo'l xaritasi
        </h1>
        <p className="text-surface-500 dark:text-surface-400 leading-relaxed">
          12 hafta &middot; 3 oy &middot; Bosqichma-bosqich dasturlashni o'rganing
        </p>
      </div>

      <FilterBar
        {...searchProps}
        totalProgress={totalProgress}
        resetProgress={resetProgress}
      />

      {searchProps.filtered.length === 0 ? (
        <div className="text-center py-24">
          <div className="w-12 h-12 rounded-2xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-surface-400 text-lg mb-3">Hech narsa topilmadi</p>
          <button
            onClick={searchProps.reset}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            Filterni tozalash
          </button>
        </div>
      ) : (
        searchProps.filtered.map(month => (
          <MonthSection
            key={month.id}
            month={month}
            isChecked={isChecked}
            toggleTask={toggleTask}
            getWeekProgress={getWeekProgress}
          />
        ))
      )}
    </div>
  )
}
