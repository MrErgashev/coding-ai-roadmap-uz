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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="relative max-w-[700px] mx-auto px-5 sm:px-8 text-center">
          <div className="glass-card rounded-3xl p-10 sm:p-14">
            <div className="icon-3d icon-3d-blue w-16 h-16 flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Hoziroq boshlang
            </h2>
            <p className="text-surface-500 dark:text-surface-400 mb-8 leading-relaxed max-w-md mx-auto">
              3 oyda dasturlash asoslarini o'rganing va AI bilan professional darajaga chiqing.
            </p>
            <a
              href="#/roadmap"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-lg shadow-[0_8px_32px_-4px_rgba(37,99,235,0.5)] transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              Roadmap'ni boshlash
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
