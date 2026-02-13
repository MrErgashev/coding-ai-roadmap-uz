export default function ArchitectureDiagram() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50/80 via-white to-surface-50/80 dark:from-[#0a0a0f] dark:via-[#0f0f1a] dark:to-[#0a0a0f]" />
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-primary-600 dark:text-primary-400 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            ARXITEKTURA
          </div>
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
            Full-Stack arxitektura
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400 max-w-xl mx-auto leading-relaxed">
            Veb-ilova qanday ishlaydi: brauzerdan servergacha, serverdan bazagacha.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center">
            {/* Client */}
            <div className="fade-in-up relative">
              <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/3 dark:to-cyan-500/3 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="icon-3d icon-3d-blue w-16 h-16 flex items-center justify-center mx-auto mb-5 text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-1.5">Client</h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400 mb-4">Foydalanuvchi interfeysi</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'DOM', 'Fetch API'].map(tech => (
                      <span key={tech} className="px-3 py-1 text-[11px] font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows + Server */}
            <div className="fade-in-up fade-in-up-delay-2 relative md:mx-[-20px] z-10">
              {/* Connection lines — top */}
              <div className="hidden md:flex items-center justify-between absolute -left-6 -right-6 top-[38%]">
                <div className="w-6 h-[2px] flow-line" style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.3), rgba(124,58,237,0.3))' }} />
                <div className="w-6 h-[2px] flow-line" style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.3), rgba(16,185,129,0.3))' }} />
              </div>
              {/* Connection lines — bottom */}
              <div className="hidden md:flex items-center justify-between absolute -left-6 -right-6 bottom-[38%]">
                <div className="w-6 h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.3), rgba(59,130,246,0.3))' }} />
                <div className="w-6 h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.3), rgba(124,58,237,0.3))' }} />
              </div>

              {/* Mobile arrows */}
              <div className="md:hidden flex justify-center py-3">
                <div className="w-[2px] h-8 bg-gradient-to-b from-blue-400/40 to-violet-400/40 rounded-full" />
              </div>

              <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group" style={{ boxShadow: '0 0 40px rgba(124, 58, 237, 0.08), 0 0 80px rgba(124, 58, 237, 0.04)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 dark:from-violet-500/3 dark:to-purple-500/3 group-hover:from-violet-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="icon-3d icon-3d-violet w-16 h-16 flex items-center justify-center mx-auto mb-5 text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-1.5">Server</h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400 mb-4">Backend mantiq</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Python', 'Flask', 'REST API', 'Auth'].map(tech => (
                      <span key={tech} className="px-3 py-1 text-[11px] font-semibold rounded-lg bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border border-violet-100/50 dark:border-violet-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile arrows */}
              <div className="md:hidden flex justify-center py-3">
                <div className="w-[2px] h-8 bg-gradient-to-b from-violet-400/40 to-emerald-400/40 rounded-full" />
              </div>
            </div>

            {/* Database */}
            <div className="fade-in-up fade-in-up-delay-4">
              <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/3 dark:to-teal-500/3 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="icon-3d icon-3d-emerald w-16 h-16 flex items-center justify-center mx-auto mb-5 text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-1.5">Database</h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400 mb-4">Ma'lumotlar ombori</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['SQLite', 'SQL', 'CRUD', 'Tables'].map(tech => (
                      <span key={tech} className="px-3 py-1 text-[11px] font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data flow labels */}
          <div className="hidden md:flex justify-around mt-6 max-w-[700px] mx-auto">
            <div className="flex items-center gap-2 text-xs text-surface-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>HTTP Request</span>
              </div>
              <span className="text-surface-300 dark:text-surface-700 mx-1">/</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                <span>JSON Response</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-surface-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>SQL Query</span>
              </div>
              <span className="text-surface-300 dark:text-surface-700 mx-1">/</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                <span>Data</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <span className="flex items-center gap-2.5 text-surface-500 dark:text-surface-400">
              <span className="icon-3d icon-3d-blue w-6 h-6" /> Frontend
            </span>
            <span className="flex items-center gap-2.5 text-surface-500 dark:text-surface-400">
              <span className="icon-3d icon-3d-violet w-6 h-6" /> Backend
            </span>
            <span className="flex items-center gap-2.5 text-surface-500 dark:text-surface-400">
              <span className="icon-3d icon-3d-emerald w-6 h-6" /> Database
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
