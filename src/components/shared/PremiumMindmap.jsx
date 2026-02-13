import { useEffect, useRef, useState } from 'react'

const colorThemes = {
  blue: {
    centerGradient: 'from-blue-500 to-cyan-400',
    centerShadow: '0 8px 40px -8px rgba(59,130,246,0.4)',
    lineColor: 'from-blue-400/60 to-blue-200/10',
    iconClass: 'icon-3d-blue',
    tagBg: 'bg-blue-50/80 dark:bg-blue-950/30',
    tagText: 'text-blue-700 dark:text-blue-300',
    branchGlow: 'rgba(59,130,246,0.08)',
    dotColor: 'bg-blue-400',
  },
  purple: {
    centerGradient: 'from-violet-500 to-pink-400',
    centerShadow: '0 8px 40px -8px rgba(168,85,247,0.4)',
    lineColor: 'from-violet-400/60 to-violet-200/10',
    iconClass: 'icon-3d-purple',
    tagBg: 'bg-violet-50/80 dark:bg-violet-950/30',
    tagText: 'text-violet-700 dark:text-violet-300',
    branchGlow: 'rgba(168,85,247,0.08)',
    dotColor: 'bg-violet-400',
  },
  green: {
    centerGradient: 'from-emerald-500 to-teal-400',
    centerShadow: '0 8px 40px -8px rgba(16,185,129,0.4)',
    lineColor: 'from-emerald-400/60 to-emerald-200/10',
    iconClass: 'icon-3d-emerald',
    tagBg: 'bg-emerald-50/80 dark:bg-emerald-950/30',
    tagText: 'text-emerald-700 dark:text-emerald-300',
    branchGlow: 'rgba(16,185,129,0.08)',
    dotColor: 'bg-emerald-400',
  },
}

function BranchCard({ branch, theme, delay }) {
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
      className={`glass-card rounded-2xl p-4 mindmap-branch group relative overflow-hidden
        transition-all duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 30%, ${theme.branchGlow}, transparent 70%)` }}
      />
      <div className="relative">
        {/* Icon + Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`icon-3d icon-3d-sm ${theme.iconClass}`}>
            <span>{branch.icon}</span>
          </div>
          <h4 className="font-semibold text-sm tracking-tight">{branch.label}</h4>
        </div>
        {/* Items as tags */}
        <div className="flex flex-wrap gap-1.5">
          {branch.items.map((item) => (
            <span
              key={item}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-lg ${theme.tagBg} ${theme.tagText} transition-transform duration-200 hover:scale-105`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ConnectorDot({ theme }) {
  return (
    <div className="flex justify-center">
      <div className={`w-2 h-2 rounded-full ${theme.dotColor} opacity-60 animate-glow`} />
    </div>
  )
}

function ConnectorLine({ theme, className = '' }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`w-[2px] h-6 bg-gradient-to-b ${theme.lineColor}`} />
    </div>
  )
}

export default function PremiumMindmap({ data, color }) {
  const theme = colorThemes[color] || colorThemes.blue
  const topBranches = data.branches.slice(0, 3)
  const bottomBranches = data.branches.slice(3)

  return (
    <div className="w-full">
      {/* ===== Desktop layout (md+) ===== */}
      <div className="hidden md:block">
        {/* Top row: 3 branches */}
        <div className="grid grid-cols-3 gap-4">
          {topBranches.map((branch, i) => (
            <BranchCard key={branch.label} branch={branch} theme={theme} delay={i * 120} />
          ))}
        </div>

        {/* Connectors from top to center */}
        <div className="flex justify-around px-16 py-1">
          {topBranches.map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <ConnectorLine theme={theme} />
              <ConnectorDot theme={theme} />
            </div>
          ))}
        </div>

        {/* Center node */}
        <div className="flex justify-center py-3">
          <div
            className={`mindmap-center bg-gradient-to-br ${theme.centerGradient}`}
            style={{ boxShadow: theme.centerShadow }}
          >
            <span className="px-4 leading-tight">{data.center}</span>
          </div>
        </div>

        {/* Connectors from center to bottom */}
        <div className={`flex ${bottomBranches.length === 2 ? 'justify-around px-48' : 'justify-around px-16'} py-1`}>
          {bottomBranches.map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <ConnectorDot theme={theme} />
              <ConnectorLine theme={theme} />
            </div>
          ))}
        </div>

        {/* Bottom row: remaining branches */}
        <div className={`grid gap-4 ${bottomBranches.length === 2 ? 'grid-cols-2 max-w-2xl mx-auto' : `grid-cols-${bottomBranches.length}`}`}>
          {bottomBranches.map((branch, i) => (
            <BranchCard key={branch.label} branch={branch} theme={theme} delay={(i + 3) * 120} />
          ))}
        </div>
      </div>

      {/* ===== Mobile layout (<md) ===== */}
      <div className="md:hidden">
        {/* Center node at top */}
        <div className="flex justify-center mb-4">
          <div
            className={`mindmap-center bg-gradient-to-br ${theme.centerGradient}`}
            style={{ boxShadow: theme.centerShadow }}
          >
            <span className="px-4 leading-tight">{data.center}</span>
          </div>
        </div>

        {/* All branches stacked */}
        <div className="space-y-3">
          {data.branches.map((branch, i) => (
            <div key={branch.label}>
              <ConnectorLine theme={theme} />
              <BranchCard branch={branch} theme={theme} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
