import Hero from '../components/home/Hero'
import MonthCard from '../components/home/MonthCard'
import Timeline from '../components/home/Timeline'
import ArchitectureDiagram from '../components/home/ArchitectureDiagram'

const howItWorks = [
  {
    step: '01',
    title: "Mavzuni o'rganing",
    desc: 'Har hafta yangi mavzu — video, maqola va hujjatlar orqali nazariy bilim oling.',
    iconClass: 'icon-3d-blue',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Amaliy loyiha qiling',
    desc: "Har haftada haqiqiy loyiha yaratasiz — kalkulyatordan to'liq veb-ilovagacha.",
    iconClass: 'icon-3d-violet',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: "AI bilan tekshiring",
    desc: "O'z kodingizni AI yordamida tekshiring, xatolarni tushunib, bilimingizni mustahkamlang.",
    iconClass: 'icon-3d-amber',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '12', label: 'Hafta', suffix: '' },
  { value: '48', label: 'Topshiriq', suffix: '+' },
  { value: '6', label: 'Texnologiya', suffix: '' },
  { value: '3', label: 'Oy', suffix: '' },
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

      {/* Stats bar */}
      <section className="relative py-16 -mt-16 z-20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[36px] sm:text-[44px] font-bold tracking-[-0.04em] leading-none mb-2 gradient-text-animated stat-number">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-surface-500 dark:text-surface-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Month Cards */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-primary-600 dark:text-primary-400 mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              BOSQICHLAR
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
              3 oy — 3 bosqich
            </h2>
            <p className="text-lg text-surface-500 dark:text-surface-400 max-w-xl mx-auto leading-relaxed">
              Har bir oy yangi bilim darajasiga olib chiqadi. Oxirida to'liq veb-ilova yaratasiz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {months.map((month, i) => (
              <div key={month.id} className={`fade-in-up fade-in-up-delay-${i + 1}`}>
                <MonthCard
                  month={month}
                  progress={getMonthProgress(month)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Apple style */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-50/80 via-white to-surface-50/80 dark:from-[#0a0a0f] dark:via-[#0f0f1a] dark:to-[#0a0a0f]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-primary-600 dark:text-primary-400 mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              JARAYON
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
              Qanday ishlaydi?
            </h2>
            <p className="text-lg text-surface-500 dark:text-surface-400 max-w-xl mx-auto leading-relaxed">
              Oddiy 3 bosqichli yondashuv — har hafta takrorlanadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            {howItWorks.map((item, i) => (
              <div key={item.step} className={`fade-in-up fade-in-up-delay-${i + 1}`}>
                <div className="glass-card rounded-3xl p-8 text-center group relative overflow-hidden h-full">
                  {/* Step number background */}
                  <div className="absolute top-4 right-5 text-[72px] font-black leading-none text-surface-100/60 dark:text-surface-800/30 select-none">
                    {item.step}
                  </div>

                  <div className="relative z-10">
                    {/* 3D Icon */}
                    <div className={`icon-3d ${item.iconClass} w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white float`} style={{ animationDelay: `${-i * 2}s` }}>
                      {item.icon}
                    </div>

                    <div className="text-xs font-bold text-primary-500 dark:text-primary-400 mb-3 uppercase tracking-widest">
                      {item.step}-qadam
                    </div>
                    <h3 className="font-bold text-xl tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting line between steps */}
          <div className="hidden md:flex justify-center mt-10">
            <div className="flex items-center gap-2 text-xs text-surface-400 dark:text-surface-500">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="w-16 h-[2px] bg-gradient-to-r from-blue-400/40 to-violet-400/40 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-violet-400" />
              <div className="w-16 h-[2px] bg-gradient-to-r from-violet-400/40 to-amber-400/40 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="ml-3 font-medium">Har hafta takrorlanadi</span>
            </div>
          </div>
        </div>
      </section>

      <ArchitectureDiagram />
      <Timeline months={months} getWeekProgress={getWeekProgress} />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="mesh-gradient">
          <div className="mesh-orb w-[400px] h-[400px] bg-gradient-to-br from-primary-400/20 to-purple-500/20 top-[-20%] left-[10%]" />
          <div className="mesh-orb w-[300px] h-[300px] bg-gradient-to-br from-pink-400/15 to-rose-500/15 bottom-[-10%] right-[10%]" style={{ animationDelay: '-8s' }} />
        </div>

        <div className="relative z-10 max-w-[700px] mx-auto px-5 sm:px-8 text-center">
          <div className="glass-card rounded-[32px] p-10 sm:p-14">
            <div className="icon-3d icon-3d-primary w-16 h-16 flex items-center justify-center mx-auto mb-8 text-white float">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-4">
              Hoziroq boshlang
            </h2>
            <p className="text-surface-500 dark:text-surface-400 mb-8 leading-relaxed max-w-md mx-auto">
              3 oyda dasturlash asoslarini o'rganing va AI bilan professional darajaga chiqing.
            </p>
            <a
              href="#/roadmap"
              className="group inline-flex items-center gap-3 px-9 py-4.5 rounded-2xl bg-surface-900 dark:bg-white text-white dark:text-surface-900 font-semibold text-[16px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-surface-900/20 dark:shadow-white/10 hover:shadow-xl shimmer"
            >
              Roadmap'ni boshlash
              <svg className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
