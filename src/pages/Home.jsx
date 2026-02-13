import Hero from '../components/home/Hero'
import MonthCard from '../components/home/MonthCard'
import Timeline from '../components/home/Timeline'
import ArchitectureDiagram from '../components/home/ArchitectureDiagram'

const howItWorks = [
  {
    step: '01',
    title: "Mavzuni o'rganing",
    desc: 'Har hafta yangi mavzu — video, maqola va hujjatlar orqali nazariy bilim oling.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Amaliy loyiha qiling',
    desc: "Har haftada haqiqiy loyiha yaratasiz — kalkulyatordan to'liq veb-ilovagacha.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: "AI bilan tekshiring",
    desc: "O'z kodingizni AI yordamida tekshiring, xatolarni tushunib, bilimingizni mustahkamlang.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

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

      {/* 3 Month Cards */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
              3 oy — 3 bosqich
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-lg mx-auto leading-relaxed">
              Har bir oy yangi bilim darajasiga olib chiqadi. Oxirida to'liq veb-ilova yaratasiz.
            </p>
          </div>
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

      {/* How It Works */}
      <section className="py-24 bg-surface-50/50 dark:bg-surface-900/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
              Qanday ishlaydi?
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-lg mx-auto leading-relaxed">
              Oddiy 3 bosqichli yondashuv — har hafta takrorlanadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950/30 border border-primary-100/80 dark:border-primary-900/30 flex items-center justify-center mx-auto mb-5 text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wider">
                  {item.step}-qadam
                </div>
                <h3 className="font-bold text-lg tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ArchitectureDiagram />
      <Timeline months={months} getWeekProgress={getWeekProgress} />
    </>
  )
}
