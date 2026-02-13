import { Link } from 'react-router-dom'

const monthConfig = {
  1: {
    iconClass: 'icon-3d-blue',
    gradient: 'from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5',
    accentText: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-500/10 dark:bg-blue-500/15',
    badgeText: 'text-blue-700 dark:text-blue-300',
    progressGradient: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
    glowClass: 'glow-blue',
  },
  2: {
    iconClass: 'icon-3d-violet',
    gradient: 'from-violet-500/10 to-purple-500/10 dark:from-violet-500/5 dark:to-purple-500/5',
    accentText: 'text-violet-600 dark:text-violet-400',
    badgeBg: 'bg-violet-500/10 dark:bg-violet-500/15',
    badgeText: 'text-violet-700 dark:text-violet-300',
    progressGradient: 'linear-gradient(90deg, #8b5cf6, #a855f7)',
    glowClass: 'glow-violet',
  },
  3: {
    iconClass: 'icon-3d-emerald',
    gradient: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    progressGradient: 'linear-gradient(90deg, #059669, #14b8a6)',
    glowClass: 'glow-emerald',
  },
}

const monthIcons = {
  1: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z"/>
      <path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l.23-.33.08-.41-.08-.42-.23-.33-.33-.23-.41-.08-.41.08-.33.23-.23.33-.08.42.08.41.23.33.33.23.41.08.41-.08.33-.23z"/>
    </svg>
  ),
  2: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  3: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
}

export default function MonthCard({ month, progress }) {
  const config = monthConfig[month.id] || monthConfig[1]

  return (
    <Link
      to="/roadmap"
      className="group block glass-card rounded-3xl p-8 sm:p-9 relative overflow-hidden tilt-card"
    >
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          {/* 3D Icon */}
          <div className={`icon-3d ${config.iconClass} w-14 h-14 flex items-center justify-center text-white`}>
            {monthIcons[month.id]}
          </div>
          {/* Badge */}
          <span className={`px-3.5 py-1.5 rounded-xl text-xs font-bold ${config.badgeBg} ${config.badgeText} backdrop-blur-sm`}>
            {month.id}-oy
          </span>
        </div>

        <h3 className="font-bold text-xl tracking-tight mb-2.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {month.title}
        </h3>
        <p className="text-sm text-surface-500 dark:text-surface-400 mb-6 leading-relaxed line-clamp-2">
          {month.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-surface-400 dark:text-surface-500 mb-6">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{month.weeks.length} hafta</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600" />
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="font-medium">{month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq</span>
          </span>
        </div>

        {/* Progress */}
        {progress > 0 ? (
          <div>
            <div className="flex items-center justify-between text-xs mb-2.5">
              <span className="text-surface-400 dark:text-surface-500 font-medium">Progress</span>
              <span className={`font-bold ${config.accentText} stat-number`}>{progress}%</span>
            </div>
            <div className="h-2 bg-surface-100/80 dark:bg-surface-800/40 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out shimmer"
                style={{ width: `${progress}%`, background: config.progressGradient }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-medium text-surface-400 dark:text-surface-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            <span>Boshlash</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </Link>
  )
}
