import Hero from '../components/home/Hero'
import MonthCard from '../components/home/MonthCard'
import Timeline from '../components/home/Timeline'
import ArchitectureDiagram from '../components/home/ArchitectureDiagram'

export default function Home({ months, totalProgress, getWeekProgress }) {
  const getMonthProgress = (month) => {
    let total = 0, done = 0
    for (const w of month.weeks) {
      total += w.tasks.length
      done += getWeekProgress(w.id, w.tasks.length) * w.tasks.length / 100
    }
    return total > 0 ? Math.round((done / total) * 100) : 0
  }

  return (
    <>
      <Hero totalProgress={totalProgress} />

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">3 oy — 3 bosqich</h2>
          <p className="text-surface-500 dark:text-surface-400 text-center mb-12 max-w-xl mx-auto">
            Har bir oy yangi bilim darajasiga olib chiqadi. Oxirida to'liq veb-ilova yaratasiz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {months.map(month => (
              <MonthCard
                key={month.id}
                month={month}
                progress={getMonthProgress(month)}
              />
            ))}
          </div>
        </div>
      </section>

      <ArchitectureDiagram />
      <Timeline months={months} getWeekProgress={getWeekProgress} />
    </>
  )
}
