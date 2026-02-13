import Hero from '../components/home/Hero'
import MonthCard from '../components/home/MonthCard'
import Timeline from '../components/home/Timeline'
import ArchitectureDiagram from '../components/home/ArchitectureDiagram'
import { useEffect, useRef, useState } from 'react'

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function StatsSection() {
  const [ref, visible] = useReveal()
  const stats = [
    { value: '12', label: 'Hafta', icon: '📅', color: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Topshiriq', icon: '✅', color: 'from-purple-500 to-pink-500' },
    { value: '6', label: 'Texnologiya', icon: '⚡', color: 'from-orange-500 to-red-500' },
    { value: '1', label: "To'liq loyiha", icon: '🚀', color: 'from-emerald-500 to-teal-500' },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-3xl glass-card group premium-card text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold mb-1 gradient-text">{stat.value}</div>
              <div className="text-sm text-surface-500 dark:text-surface-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const [ref, visible] = useReveal()
  const features = [
    {
      icon: '🐍',
      title: "Noldan Python",
      desc: "Dasturlash asoslarini Python tilida o'rganing — o'zgaruvchilar, funksiyalar, OOP",
      iconClass: 'icon-3d icon-3d-blue',
    },
    {
      icon: '🌐',
      title: 'Web Development',
      desc: "HTML, CSS, JavaScript — interaktiv veb-sahifalar yaratish",
      iconClass: 'icon-3d icon-3d-cyan',
    },
    {
      icon: '⚙️',
      title: 'Backend (Flask)',
      desc: "Python Flask bilan API va server tomonni yarating",
      iconClass: 'icon-3d icon-3d-purple',
    },
    {
      icon: '🗄️',
      title: "Database & SQL",
      desc: "Ma'lumotlar bazasi bilan ishlash — SQLite, CRUD operatsiyalari",
      iconClass: 'icon-3d icon-3d-emerald',
    },
    {
      icon: '🤖',
      title: "AI Tools",
      desc: "ChatGPT, Copilot va boshqa AI vositalaridan to'g'ri foydalanish",
      iconClass: 'icon-3d icon-3d-pink',
    },
    {
      icon: '🚀',
      title: 'Deploy',
      desc: "Loyihangizni internetga chiqaring — hosting, domain, CI/CD",
      iconClass: 'icon-3d icon-3d-orange',
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-200 dark:via-surface-800 to-transparent" />

      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-surface-500 dark:text-surface-400 mb-6">
            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Nimalarni o'rganasiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Bitta roadmap — <span className="gradient-text">barcha ko'nikmalar</span>
          </h2>
          <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto text-lg">
            3 oy ichida full-stack dasturchi bo'lish yo'lida kerakli barcha texnologiyalarni o'zlashtiring.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="p-7 rounded-3xl glass-card premium-card group relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className={feat.iconClass + ' mb-5'}>
                  <span>{feat.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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

  const [monthsRef, monthsVisible] = useReveal()

  return (
    <>
      <Hero totalProgress={totalProgress} />

      {/* Stats */}
      <StatsSection />

      {/* Month cards */}
      <section ref={monthsRef} className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-200 dark:via-surface-800 to-transparent" />

        <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-surface-500 dark:text-surface-400 mb-6">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              3 bosqich
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              3 oy — <span className="gradient-text">3 bosqich</span>
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto text-lg">
              Har bir oy yangi bilim darajasiga olib chiqadi. Oxirida to'liq veb-ilova yaratasiz.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-7 transition-all duration-700 ${monthsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

      {/* Features */}
      <FeaturesSection />

      {/* Architecture */}
      <ArchitectureDiagram />

      {/* Timeline */}
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
