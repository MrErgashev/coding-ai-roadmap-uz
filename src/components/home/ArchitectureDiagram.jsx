import { useEffect, useRef, useState } from 'react'

function AnimatedArrow({ label1, label2, colorFrom, colorTo }) {
  return (
    <div className="hidden md:flex flex-col items-center w-full py-4 gap-2">
      <span className="text-[11px] font-medium text-surface-400 dark:text-surface-500">{label1}</span>
      <div className="relative w-full">
        <div className={`w-full h-[2px] bg-gradient-to-r ${colorFrom} ${colorTo}`} />
        <div className={`absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-y-[4px] border-y-transparent`}
          style={{ borderLeftColor: 'currentColor' }}
        />
        {/* Animated dot */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg`}
          style={{ animation: 'flowDot 2s ease-in-out infinite' }}
        />
      </div>
      <div className="relative w-full">
        <div className={`w-full h-[2px] bg-gradient-to-l ${colorFrom} ${colorTo}`} />
        <div className={`absolute -left-1 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[6px] border-y-[4px] border-y-transparent`}
          style={{ borderRightColor: 'currentColor' }}
        />
      </div>
      <span className="text-[11px] font-medium text-surface-400 dark:text-surface-500">{label2}</span>
    </div>
  )
}

function DiagramNode({ icon, title, subtitle, tags, gradient, glowColor, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative md:col-span-1 p-6 rounded-3xl glass-card group premium-card text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 30%, ${glowColor}, transparent 70%)` }}
      />

      <div className="relative">
        {/* 3D icon */}
        <div className={`icon-3d ${gradient} mx-auto mb-4`}>
          <span>{icon}</span>
        </div>

        <h3 className="font-bold text-base mb-1">{title}</h3>
        <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-1.5">
          {tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-surface-100/80 dark:bg-surface-800/60 text-surface-500 dark:text-surface-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ArchitectureDiagram() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-200 dark:via-surface-800 to-transparent" />

      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-surface-500 dark:text-surface-400 mb-6">
            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Arxitektura
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Full-Stack <span className="gradient-text">arxitektura</span>
          </h2>
          <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto text-lg">
            Veb-ilova qanday ishlaydi: brauzerdan servergacha, serverdan bazagacha.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-center">
            {/* Client */}
            <div className="md:col-span-2">
              <DiagramNode
                icon="🖥️"
                title="Client (Brauzer)"
                subtitle="HTML, CSS, JavaScript"
                tags={['DOM', 'Fetch API', 'UI']}
                gradient="icon-3d-blue"
                glowColor="rgba(59,130,246,0.1)"
                delay={0}
              />
            </div>

            {/* Arrow 1 */}
            <div className="md:col-span-1 flex flex-col items-center text-blue-400 dark:text-blue-500">
              <AnimatedArrow
                label1="HTTP Request"
                label2="Response"
                colorFrom="from-blue-300 dark:from-blue-700"
                colorTo="to-purple-300 dark:to-purple-700"
              />
              <div className="md:hidden text-3xl text-surface-300 dark:text-surface-600 my-2">⇅</div>
            </div>

            {/* Server */}
            <div className="md:col-span-2">
              <DiagramNode
                icon="⚙️"
                title="Server (Backend)"
                subtitle="Python, Flask"
                tags={['Routes', 'API', 'Logic']}
                gradient="icon-3d-purple"
                glowColor="rgba(168,85,247,0.1)"
                delay={200}
              />
            </div>

            {/* Arrow 2 */}
            <div className="md:col-span-1 flex flex-col items-center text-emerald-400 dark:text-emerald-500">
              <AnimatedArrow
                label1="SQL Query"
                label2="Data / Rows"
                colorFrom="from-purple-300 dark:from-purple-700"
                colorTo="to-emerald-300 dark:to-emerald-700"
              />
              <div className="md:hidden text-3xl text-surface-300 dark:text-surface-600 my-2">⇅</div>
            </div>
          </div>

            {/* Database */}
            <div className="md:col-span-2">
              <DiagramNode
                icon="🗄️"
                title="Database (Baza)"
                subtitle="SQLite, PostgreSQL"
                tags={['Tables', 'CRUD', 'SQL']}
                gradient="icon-3d-emerald"
                glowColor="rgba(16,185,129,0.1)"
                delay={400}
              />
            </div>
          </div>

          {/* Legend */}
          <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-surface-500 dark:text-surface-400">
            {[
              { label: 'Frontend', desc: 'foydalanuvchi ko\'radi', color: 'bg-gradient-to-r from-blue-400 to-blue-500' },
              { label: 'Backend', desc: 'mantiq va hisob-kitob', color: 'bg-gradient-to-r from-purple-400 to-purple-500' },
              { label: 'Database', desc: 'ma\'lumotlar saqlanadi', color: 'bg-gradient-to-r from-emerald-400 to-emerald-500' },
            ].map(item => (
              <span key={item.label} className="flex items-center gap-2.5">
                <span className={`w-3.5 h-3.5 rounded-md ${item.color} shadow-sm`} />
                <span className="font-medium text-surface-700 dark:text-surface-300">{item.label}</span>
                <span className="text-surface-400 dark:text-surface-500">— {item.desc}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
