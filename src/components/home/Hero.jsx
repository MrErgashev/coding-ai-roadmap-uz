import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Hero({ totalProgress }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      el.style.setProperty('--mouse-x', `${x}px`)
      el.style.setProperty('--mouse-y', `${y}px`)
    }
    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-[92vh] flex items-center" style={{ '--mouse-x': '0px', '--mouse-y': '0px' }}>
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-black dark:via-primary-950/20 dark:to-black" />
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary-400/20 dark:bg-primary-500/10 blur-[120px] animate-float" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-400/15 dark:bg-purple-500/8 blur-[100px] animate-float-delay" />
        <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-pink-400/10 dark:bg-pink-500/5 blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbiting code symbols */}
        <div className="absolute top-[15%] left-[8%] animate-float opacity-20 dark:opacity-10">
          <div className="text-6xl font-mono text-primary-500">&lt;/&gt;</div>
        </div>
        <div className="absolute top-[25%] right-[12%] animate-float-delay opacity-15 dark:opacity-8">
          <div className="text-5xl font-mono text-purple-500">&#123;&#125;</div>
        </div>
        <div className="absolute bottom-[20%] left-[5%] animate-float opacity-15 dark:opacity-8" style={{ animationDelay: '3s' }}>
          <div className="text-4xl font-mono text-cyan-500">fn()</div>
        </div>
        <div className="absolute bottom-[30%] right-[8%] animate-float opacity-15 dark:opacity-8" style={{ animationDelay: '1s' }}>
          <div className="text-5xl font-mono text-emerald-500">AI</div>
        </div>

        {/* Decorative orbs */}
        <div className="hidden lg:block absolute top-[12%] right-[20%] w-3 h-3 rounded-full bg-primary-400 animate-glow" />
        <div className="hidden lg:block absolute top-[40%] left-[12%] w-2 h-2 rounded-full bg-purple-400 animate-glow" style={{ animationDelay: '1s' }} />
        <div className="hidden lg:block absolute bottom-[25%] right-[25%] w-2.5 h-2.5 rounded-full bg-pink-400 animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Premium badge */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm font-medium mb-10 group cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-surface-600 dark:text-surface-300">
              3 oy <span className="text-surface-300 dark:text-surface-600 mx-1">|</span> 12 hafta <span className="text-surface-300 dark:text-surface-600 mx-1">|</span> Bosqichma-bosqich
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
            <span className="text-surface-900 dark:text-white block">
              Dasturlashni o'rganing,
            </span>
            <span className="gradient-text block mt-2">
              AI bilan kuchlaning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 text-lg sm:text-xl text-surface-500 dark:text-surface-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar
            orqali o'rganing. AI vositalaridan to'g'ri foydalanishni ham bilib oling.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/roadmap"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-lg shadow-[0_8px_32px_-4px_rgba(37,99,235,0.5)] transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(37,99,235,0.6)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Roadmap'ni boshlash</span>
              <svg className="relative w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/ai-rules"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass-card font-semibold text-lg hover:-translate-y-1 transition-all duration-300 text-surface-700 dark:text-surface-200 hover:shadow-lg"
            >
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI qoidalari
            </Link>
          </div>

          {/* Progress bar */}
          {totalProgress > 0 && (
            <div className="animate-fade-up delay-400 max-w-sm mx-auto glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-surface-500 dark:text-surface-400 font-medium">Umumiy progress</span>
                <span className="font-bold text-primary-600 dark:text-primary-400 text-lg">{totalProgress}%</span>
              </div>
              <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-600 via-purple-500 to-pink-500 rounded-full transition-all duration-700 progress-glow"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Tech stack badges */}
          <div className="animate-fade-up delay-500 mt-16 flex flex-wrap justify-center gap-3">
            {[
              { name: 'Python', color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
              { name: 'JavaScript', color: 'from-yellow-300 to-amber-500', icon: '⚡' },
              { name: 'Flask', color: 'from-gray-600 to-gray-800', icon: '🧪' },
              { name: 'SQL', color: 'from-blue-400 to-blue-600', icon: '🗄️' },
              { name: 'AI Tools', color: 'from-purple-400 to-purple-600', icon: '🤖' },
              { name: 'Deploy', color: 'from-emerald-400 to-emerald-600', icon: '🚀' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-medium text-surface-600 dark:text-surface-300 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span className="text-base">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </section>
  )
}
