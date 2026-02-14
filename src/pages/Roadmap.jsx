import { useState } from 'react'
import FilterBar from '../components/roadmap/FilterBar'
import MonthSection from '../components/roadmap/MonthSection'
import generatePDF from '../utils/generatePDF'

export default function Roadmap({
  months,
  searchProps,
  isChecked,
  toggleTask,
  getWeekProgress,
  totalProgress,
  resetProgress
}) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = () => {
    setIsGenerating(true)
    try {
      generatePDF()
    } finally {
      setTimeout(() => setIsGenerating(false), 1000)
    }
  }

  return (
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-3">
            Yo'l xaritasi
          </h1>
          <p className="text-surface-500 dark:text-surface-400 leading-relaxed">
            12 hafta &middot; 3 oy &middot; Bosqichma-bosqich dasturlashni o'rganing
          </p>
        </div>
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed shrink-0 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {isGenerating ? 'Tayyorlanmoqda...' : 'PDF yuklab olish'}
        </button>
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
