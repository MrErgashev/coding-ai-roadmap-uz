export default function ArchitectureDiagram() {
  return (
    <section className="py-20 bg-surface-50/50 dark:bg-surface-900/20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Full-Stack arxitektura
        </h2>
        <p className="text-surface-500 dark:text-surface-400 text-center mb-12 max-w-xl mx-auto">
          Veb-ilova qanday ishlaydi: brauzerdan (client) servergacha, serverdan bazagacha.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Client */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40 text-center">
              <div className="text-3xl mb-2">🖥️</div>
              <h3 className="font-bold text-sm mb-1">Client (Brauzer)</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400">HTML, CSS, JavaScript</p>
              <div className="mt-2.5 flex flex-wrap justify-center gap-1">
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">DOM</span>
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Fetch API</span>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="md:col-span-1 flex flex-col items-center py-2">
              <div className="hidden md:flex flex-col items-center w-full">
                <span className="text-[11px] text-surface-400 mb-1">HTTP Request</span>
                <div className="w-full h-px bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-purple-400 dark:border-l-purple-600 border-y-[3px] border-y-transparent" />
                </div>
                <div className="w-full h-px bg-gradient-to-l from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700 relative mt-3">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[5px] border-r-blue-400 dark:border-r-blue-600 border-y-[3px] border-y-transparent" />
                </div>
                <span className="text-[11px] text-surface-400 mt-1">HTTP Response</span>
              </div>
              <div className="md:hidden text-2xl text-surface-300 dark:text-surface-600">⇅</div>
            </div>

            {/* Server */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40 text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <h3 className="font-bold text-sm mb-1">Server (Backend)</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400">Python, Flask</p>
              <div className="mt-2.5 flex flex-wrap justify-center gap-1">
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Routes</span>
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">API</span>
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Logic</span>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="md:col-span-1 flex flex-col items-center py-2">
              <div className="hidden md:flex flex-col items-center w-full">
                <span className="text-[11px] text-surface-400 mb-1">SQL Query</span>
                <div className="w-full h-px bg-gradient-to-r from-purple-300 to-emerald-300 dark:from-purple-700 dark:to-emerald-700 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-emerald-400 dark:border-l-emerald-600 border-y-[3px] border-y-transparent" />
                </div>
                <div className="w-full h-px bg-gradient-to-l from-purple-300 to-emerald-300 dark:from-purple-700 dark:to-emerald-700 relative mt-3">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[5px] border-r-purple-400 dark:border-r-purple-600 border-y-[3px] border-y-transparent" />
                </div>
                <span className="text-[11px] text-surface-400 mt-1">Data / Rows</span>
              </div>
              <div className="md:hidden text-2xl text-surface-300 dark:text-surface-600">⇅</div>
            </div>

            {/* Database */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-center">
              <div className="text-3xl mb-2">🗄️</div>
              <h3 className="font-bold text-sm mb-1">Database (Baza)</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400">SQLite, PostgreSQL</p>
              <div className="mt-2.5 flex flex-wrap justify-center gap-1">
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Tables</span>
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">CRUD</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-surface-500 dark:text-surface-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-blue-200 dark:bg-blue-800" /> Frontend — foydalanuvchi ko'radi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-purple-200 dark:bg-purple-800" /> Backend — mantiq va hisob-kitob
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-200 dark:bg-emerald-800" /> Database — ma'lumotlar saqlanadi
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
