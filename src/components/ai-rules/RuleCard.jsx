import { useState } from 'react'

export default function RuleCard({ rule }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-surface-200 dark:border-surface-800 overflow-hidden hover:shadow-md hover:shadow-surface-900/5 dark:hover:shadow-surface-950/10 transition-all">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-3xl">{rule.icon}</span>
          <div>
            <h3 className="font-bold text-lg">{rule.title}</h3>
            <p className="text-xs text-surface-400 mt-0.5">{rule.titleEn}</p>
          </div>
        </div>
        <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-4">
          {rule.description}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
        >
          {open ? 'Yopish' : 'Batafsil va misollar'}
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div>
          <div className="px-6 pb-6 space-y-4 border-t border-surface-100 dark:border-surface-800 pt-4">
            <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">
              {rule.details}
            </p>

            {rule.examples && rule.examples.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider">Misollar</h4>
                {rule.examples.map((ex, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                      <p className="text-[11px] font-semibold text-red-500 uppercase mb-1.5">Noto'g'ri</p>
                      <p className="text-sm text-surface-700 dark:text-surface-300">{ex.bad}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                      <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-1.5">To'g'ri</p>
                      <p className="text-sm text-surface-700 dark:text-surface-300">{ex.good}</p>
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
