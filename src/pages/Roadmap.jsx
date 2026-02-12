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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Yo'l xaritasi</h1>
        <p className="text-gray-500 dark:text-gray-400">
          12 hafta &middot; 3 oy &middot; Bosqichma-bosqich dasturlashni o'rganing
        </p>
      </div>

      <FilterBar
        {...searchProps}
        totalProgress={totalProgress}
        resetProgress={resetProgress}
      />

      {searchProps.filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg mb-2">Hech narsa topilmadi</p>
          <button
            onClick={searchProps.reset}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
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
