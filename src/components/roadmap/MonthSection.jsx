import WeekAccordion from './WeekAccordion'
import MermaidDiagram from '../shared/MermaidDiagram'

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

      {month.mindmap && (
        <div className="p-6 rounded-2xl bg-surface-50/80 dark:bg-surface-900/40 border border-surface-200/60 dark:border-surface-800/60">
          <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-4">{month.id}-oy xaritasi</h3>
          <MermaidDiagram chart={month.mindmap} />
        </div>
      )}
    </section>
  )
}
