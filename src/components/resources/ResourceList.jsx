export default function ResourceList({ resources }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map(cat => (
        <div
          key={cat.category}
          className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{cat.icon}</span>
            <h3 className="font-bold text-lg">{cat.category}</h3>
          </div>
          <div className="space-y-2">
            {cat.items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline mb-0.5">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
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
