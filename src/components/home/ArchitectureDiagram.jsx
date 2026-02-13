export default function ArchitectureDiagram() {
  return (
    <section className="py-24 bg-surface-50/50 dark:bg-surface-900/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
            Full-Stack arxitektura
          </h2>
          <p className="text-surface-500 dark:text-surface-400 max-w-lg mx-auto leading-relaxed">
            Veb-ilova qanday ishlaydi: brauzerdan servergacha, serverdan bazagacha.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Client */}
            <div className="md:col-span-1 p-6 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1">Client</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">HTML, CSS, JS</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">DOM</span>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Fetch</span>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="md:col-span-1 flex flex-col items-center py-2">
              <div className="hidden md:flex flex-col items-center w-full gap-2.5">
                <span className="text-[11px] font-medium text-surface-400">Request</span>
                <div className="w-full h-px bg-gradient-to-r from-blue-300/60 to-purple-300/60 dark:from-blue-700/40 dark:to-purple-700/40 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-purple-400/60 dark:border-l-purple-600/40 border-y-[3px] border-y-transparent" />
                </div>
                <div className="w-full h-px bg-gradient-to-l from-blue-300/60 to-purple-300/60 dark:from-blue-700/40 dark:to-purple-700/40 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[5px] border-r-blue-400/60 dark:border-r-blue-600/40 border-y-[3px] border-y-transparent" />
                </div>
                <span className="text-[11px] font-medium text-surface-400">Response</span>
              </div>
              <div className="md:hidden text-lg text-surface-300 dark:text-surface-600 rotate-90">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </div>

            {/* Server */}
            <div className="md:col-span-1 p-6 rounded-2xl bg-violet-50/80 dark:bg-violet-950/20 border border-violet-200/50 dark:border-violet-800/30 text-center">
              <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1">Server</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">Python, Flask</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">API</span>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">Logic</span>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="md:col-span-1 flex flex-col items-center py-2">
              <div className="hidden md:flex flex-col items-center w-full gap-2.5">
                <span className="text-[11px] font-medium text-surface-400">SQL</span>
                <div className="w-full h-px bg-gradient-to-r from-purple-300/60 to-emerald-300/60 dark:from-purple-700/40 dark:to-emerald-700/40 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-emerald-400/60 dark:border-l-emerald-600/40 border-y-[3px] border-y-transparent" />
                </div>
                <div className="w-full h-px bg-gradient-to-l from-purple-300/60 to-emerald-300/60 dark:from-purple-700/40 dark:to-emerald-700/40 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[5px] border-r-purple-400/60 dark:border-r-purple-600/40 border-y-[3px] border-y-transparent" />
                </div>
                <span className="text-[11px] font-medium text-surface-400">Data</span>
              </div>
              <div className="md:hidden text-lg text-surface-300 dark:text-surface-600 rotate-90">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </div>

            {/* Database */}
            <div className="md:col-span-1 p-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1">Database</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">SQLite, SQL</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Tables</span>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">CRUD</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-surface-500 dark:text-surface-400">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-200/80 dark:bg-blue-800/60" /> Frontend
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-violet-200/80 dark:bg-violet-800/60" /> Backend
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-emerald-200/80 dark:bg-emerald-800/60" /> Database
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
