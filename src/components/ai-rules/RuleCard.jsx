import { useState } from 'react'

export default function RuleCard({ rule }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-surface-200/80 dark:border-surface-800/80 overflow-hidden bg-white dark:bg-surface-900/30 shadow-sm shadow-surface-900/[0.02] hover:shadow-md hover:shadow-surface-900/[0.06] dark:hover:shadow-surface-950/20 transition-all duration-200">
      <div className="p-6 sm:p-7">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/30 border border-primary-100/80 dark:border-primary-900/30 flex items-center justify-center text-2xl shrink-0">
            {rule.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-tight">{rule.title}</h3>
            <p className="text-xs text-surface-400 mt-0.5 font-medium">{rule.titleEn}</p>
          </div>
        </div>
        <p className="text-[15px] text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
          {rule.description}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1.5 transition-colors"
        >
          {open ? 'Yopish' : 'Batafsil va misollar'}
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div>
          <div className="px-6 sm:px-7 pb-7 space-y-5 border-t border-surface-100 dark:border-surface-800/80 pt-5">
            <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">
              {rule.details}
            </p>

            {rule.examples && rule.examples.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider">Misollar</h4>
                {rule.examples.map((ex, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/15 border border-red-100/80 dark:border-red-900/30">
                      <p className="text-[11px] font-semibold text-red-500 dark:text-red-400 uppercase mb-2 tracking-wider">Noto'g'ri</p>
                      <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{ex.bad}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/15 border border-emerald-100/80 dark:border-emerald-900/30">
                      <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-2 tracking-wider">To'g'ri</p>
                      <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{ex.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
