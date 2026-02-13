import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import MappedIcon from '../shared/IconMap'

const monthStyles = {
  1: { gradient: 'from-blue-500 to-cyan-400', glow: 'rgba(59,130,246,0.15)', iconClass: 'icon-3d icon-3d-blue' },
  2: { gradient: 'from-purple-500 to-pink-400', glow: 'rgba(168,85,247,0.15)', iconClass: 'icon-3d icon-3d-purple' },
  3: { gradient: 'from-emerald-500 to-teal-400', glow: 'rgba(16,185,129,0.15)', iconClass: 'icon-3d icon-3d-emerald' },
}

export default function MonthCard({ month, progress }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -10, y: x * 10 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const style = monthStyles[month.id] || monthStyles[1]

  return (
    <Link
      ref={cardRef}
      to="/roadmap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="block p-7 rounded-3xl glass-card premium-card group relative overflow-hidden"
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.3s ease, box-shadow 0.5s ease',
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${style.glow}, transparent 70%)` }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className={style.iconClass}>
            <MappedIcon name={month.icon} size={28} />
          </div>
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${style.gradient} text-white shadow-lg`}>
            {month.id}-oy
          </span>
        </div>

        <h3 className="font-bold text-xl mb-2.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {month.title}
        </h3>

        <p className="text-sm text-surface-500 dark:text-surface-400 mb-5 line-clamp-2 leading-relaxed">
          {month.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-surface-400 dark:text-surface-500 mb-5">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {month.weeks.length} hafta
          </span>
          <span className="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600" />
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq
          </span>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-surface-400 dark:text-surface-500 font-medium">Progress</span>
            <span className={`font-bold ${progress > 0 ? 'text-primary-600 dark:text-primary-400' : 'text-surface-400'}`}>
              {progress}%
            </span>
          </div>
          <div className="h-2 bg-surface-100 dark:bg-surface-800/80 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${progress > 0 ? `bg-gradient-to-r ${style.gradient} progress-glow` : ''}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom arrow */}
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
          Boshlash
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
