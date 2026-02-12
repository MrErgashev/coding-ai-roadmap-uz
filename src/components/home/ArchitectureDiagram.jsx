export default function ArchitectureDiagram() {
  return (
    <section className="py-16 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Full-Stack arxitektura
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Veb-ilova qanday ishlaydi: brauzerdan (client) servergacha, serverdan bazagacha.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Client */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-3xl mb-2">🖥️</div>
              <h3 className="font-bold text-sm mb-1">Client (Brauzer)</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">HTML, CSS, JavaScript</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                <span className="px-2 py-0.5 text-[10px] rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">DOM</span>
                <span className="px-2 py-0.5 text-[10px] rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">Fetch API</span>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="md:col-span-1 flex flex-col items-center py-2">
              <div className="hidden md:flex flex-col items-center w-full">
                <span className="text-[10px] text-gray-400 mb-1">HTTP Request</span>
                <div className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-purple-400 border-y-[4px] border-y-transparent" />
                </div>
                <div className="w-full h-0.5 bg-gradient-to-l from-blue-400 to-purple-400 relative mt-2">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[6px] border-r-blue-400 border-y-[4px] border-y-transparent" />
                </div>
                <span className="text-[10px] text-gray-400 mt-1">HTTP Response</span>
              </div>
              <div className="md:hidden text-2xl text-gray-300">⇅</div>
            </div>

            {/* Server */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <h3 className="font-bold text-sm mb-1">Server (Backend)</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Python, Flask</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                <span className="px-2 py-0.5 text-[10px] rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">Routes</span>
                <span className="px-2 py-0.5 text-[10px] rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">API</span>
                <span className="px-2 py-0.5 text-[10px] rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">Logic</span>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="md:col-span-1 flex flex-col items-center py-2">
              <div className="hidden md:flex flex-col items-center w-full">
                <span className="text-[10px] text-gray-400 mb-1">SQL Query</span>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-emerald-400 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-emerald-400 border-y-[4px] border-y-transparent" />
                </div>
                <div className="w-full h-0.5 bg-gradient-to-l from-purple-400 to-emerald-400 relative mt-2">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[6px] border-r-purple-400 border-y-[4px] border-y-transparent" />
                </div>
                <span className="text-[10px] text-gray-400 mt-1">Data / Rows</span>
              </div>
              <div className="md:hidden text-2xl text-gray-300">⇅</div>
            </div>

            {/* Database */}
            <div className="md:col-span-1 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
              <div className="text-3xl mb-2">🗄️</div>
              <h3 className="font-bold text-sm mb-1">Database (Baza)</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">SQLite, PostgreSQL</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                <span className="px-2 py-0.5 text-[10px] rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">Tables</span>
                <span className="px-2 py-0.5 text-[10px] rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">CRUD</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
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
