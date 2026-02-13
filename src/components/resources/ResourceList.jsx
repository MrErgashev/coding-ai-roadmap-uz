import MappedIcon from '../shared/IconMap'

export default function ResourceList({ resources }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {resources.map(cat => (
        <div
          key={cat.category}
          className="p-6 sm:p-7 rounded-2xl border border-surface-200/80 dark:border-surface-800/80 bg-white dark:bg-surface-900/30 shadow-sm shadow-surface-900/[0.02] hover:shadow-md hover:shadow-surface-900/[0.06] dark:hover:shadow-surface-950/20 transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-800/80 flex items-center justify-center text-surface-600 dark:text-surface-300">
              <MappedIcon name={cat.icon} size={20} />
            </div>
            <h3 className="font-bold text-lg tracking-tight">{cat.category}</h3>
          </div>
          <div className="space-y-0.5">
            {cat.items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl hover:bg-surface-50/80 dark:hover:bg-surface-800/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline">
                    {item.title}
                  </p>
                  <svg className="w-3 h-3 text-surface-300 dark:text-surface-600 group-hover:text-primary-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-xs text-surface-500 dark:text-surface-400 leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
