import WeekAccordion from './WeekAccordion'
import PremiumMindmap from '../shared/PremiumMindmap'

const colorMap = {
  blue: {
    border: 'border-l-blue-500',
    badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300',
  },
  purple: {
    border: 'border-l-violet-500',
    badge: 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-300',
  },
  green: {
    border: 'border-l-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300',
  },
}

export default function MonthSection({ month, isChecked, toggleTask, getWeekProgress }) {
  const colors = colorMap[month.color] || colorMap.blue

  return (
    <section className="mb-16" aria-label={`${month.id}-oy`}>
      <div className={`border-l-[3px] ${colors.border} pl-5 mb-8`}>
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-2xl">{month.icon}</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{month.id}-oy: {month.title}</h2>
        </div>
        <p className="text-sm text-surface-500 dark:text-surface-400">{month.subtitle}</p>
      </div>

      <div className="space-y-3 mb-8">
        {month.weeks.map(week => (
          <WeekAccordion
            key={week.id}
            week={week}
            isChecked={isChecked}
            toggleTask={toggleTask}
            weekProgress={getWeekProgress(week.id, week.tasks.length)}
          />
        ))}
      </div>

      {month.mindmapData && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card overflow-hidden relative">
          <div className="absolute inset-0 mesh-gradient opacity-30" />
          <div className="relative">
            <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-6 flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {month.id}-oy xaritasi
            </h3>
            <PremiumMindmap data={month.mindmapData} color={month.color} />
          </div>
        </div>
      )}
    </section>
  )
}
