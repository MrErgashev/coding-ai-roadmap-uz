import WeekAccordion from './WeekAccordion'
import MermaidDiagram from '../shared/MermaidDiagram'

const colorMap = {
  blue: 'border-l-primary-500',
  purple: 'border-l-purple-500',
  green: 'border-l-emerald-500',
}

export default function MonthSection({ month, isChecked, toggleTask, getWeekProgress }) {
  return (
    <section className="mb-14" aria-label={`${month.id}-oy`}>
      <div className={`border-l-4 ${colorMap[month.color] || 'border-l-surface-400'} pl-5 mb-6`}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">{month.icon}</span>
          <h2 className="text-xl sm:text-2xl font-bold">{month.id}-oy: {month.title}</h2>
        </div>
        <p className="text-sm text-surface-500 dark:text-surface-400">{month.subtitle}</p>
      </div>

      <div className="space-y-3 mb-6">
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
        <div className="p-5 rounded-xl bg-surface-50 dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800">
          <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-3">{month.id}-oy xaritasi</h3>
          <MermaidDiagram chart={month.mindmap} />
        </div>
      )}
    </section>
  )
}
