import { useState } from 'react'

export default function PDFDownloadModal({ isOpen, onClose, onDownload }) {
  const [selectedTheme, setSelectedTheme] = useState('light')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white dark:bg-surface-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-surface-200/50 dark:border-surface-800/50"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight">PDF yuklab olish</h2>
            <p className="text-xs text-surface-500 dark:text-surface-400">Barcha 4 sahifa &middot; To'liq roadmap</p>
          </div>
        </div>

        {/* Theme selector */}
        <p className="text-sm text-surface-500 dark:text-surface-400 mt-5 mb-4">
          Qaysi rejimda yuklab olmoqchisiz?
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Light mode */}
          <button
            onClick={() => setSelectedTheme('light')}
            className={`relative p-5 rounded-2xl border-2 transition-all duration-200 text-center cursor-pointer ${
              selectedTheme === 'light'
                ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/20 shadow-lg shadow-primary-500/10'
                : 'border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600'
            }`}
          >
            {selectedTheme === 'light' && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            {/* Sun icon */}
            <svg className="w-8 h-8 mx-auto mb-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="font-semibold text-sm">Yorug' rejim</p>
            <p className="text-[11px] text-surface-400 dark:text-surface-500 mt-1">Oq fon</p>
          </button>

          {/* Dark mode */}
          <button
            onClick={() => setSelectedTheme('dark')}
            className={`relative p-5 rounded-2xl border-2 transition-all duration-200 text-center cursor-pointer ${
              selectedTheme === 'dark'
                ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/20 shadow-lg shadow-primary-500/10'
                : 'border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600'
            }`}
          >
            {selectedTheme === 'dark' && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            {/* Moon icon */}
            <svg className="w-8 h-8 mx-auto mb-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <p className="font-semibold text-sm">Qorong'u rejim</p>
            <p className="text-[11px] text-surface-400 dark:text-surface-500 mt-1">Qora fon</p>
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-5 py-3 rounded-xl text-sm font-semibold text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer"
          >
            Bekor qilish
          </button>
          <button
            onClick={() => {
              onDownload(selectedTheme)
              onClose()
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors shadow-lg shadow-primary-600/25 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Yuklab olish
          </button>
        </div>
      </div>
    </div>
  )
}
