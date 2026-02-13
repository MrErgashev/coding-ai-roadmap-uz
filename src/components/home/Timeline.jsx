import { useEffect, useRef, useState } from 'react'

function WeekItem({ week, prog, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-3.5 p-4 rounded-2xl glass-card group hover:scale-[1.02] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
        prog === 100
          ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30'
          : prog > 0
          ? 'bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg shadow-primary-500/20'
          : 'bg-surface-100 text-surface-500 dark:bg-surface-800 dark:text-surface-400'
      }`}>
        {prog === 100 ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : week.id}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {week.title}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {week.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-surface-100/80 dark:bg-surface-800/60 text-surface-500 dark:text-surface-400">
              {tech}
            </span>
          ))}
        </div>
        {/* Mini progress */}
        {prog > 0 && prog < 100 && (
          <div className="mt-2 h-1 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" style={{ width: `${prog}%` }} />
          </div>
        )}
      </div>
    </div>
  )
}

const monthColors = {
  1: { accent: 'from-blue-500 to-cyan-400', dot: 'bg-blue-500' },
  2: { accent: 'from-purple-500 to-pink-400', dot: 'bg-purple-500' },
  3: { accent: 'from-emerald-500 to-teal-400', dot: 'bg-emerald-500' },
}

export default function Timeline({ months, getWeekProgress }) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-surface-500 dark:text-surface-400 mb-6">
            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Yo'l xaritasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            12 haftalik <span className="gradient-text">yo'l xaritasi</span>
          </h2>
          <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto text-lg">
            Har hafta yangi bilim va amaliy loyiha. Bosqichma-bosqich oldinga boring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {months.map(month => {
            const colors = monthColors[month.id] || monthColors[1]
            return (
              <div key={month.id} className="space-y-3">
                {/* Month header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-surface-200/60 dark:border-surface-800/60">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.accent} flex items-center justify-center text-white text-lg shadow-lg`}>
                    {month.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{month.id}-oy</h3>
                    <p className="text-xs text-surface-400 dark:text-surface-500">{month.weeks.length} hafta</p>
                  </div>
                </div>

                {/* Weeks */}
                <div className="space-y-2.5">
                  {month.weeks.map((week, i) => {
                    const prog = getWeekProgress(week.id, week.tasks.length)
                    return <WeekItem key={week.id} week={week} prog={prog} index={i} />
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
