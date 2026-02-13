import { Link } from 'react-router-dom'

export default function Hero({ totalProgress }) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient">
        <div className="mesh-orb w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/20 to-purple-500/20 top-[-10%] left-[-5%]" />
        <div className="mesh-orb w-[400px] h-[400px] bg-gradient-to-br from-pink-400/15 to-rose-500/15 top-[20%] right-[-5%]" style={{ animationDelay: '-5s' }} />
        <div className="mesh-orb w-[350px] h-[350px] bg-gradient-to-br from-cyan-400/10 to-blue-500/10 bottom-[5%] left-[20%]" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 w-full">
        <div className="text-center max-w-[740px] mx-auto">
          {/* Floating 3D badge */}
          <div className="fade-in-up inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card mb-10 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-surface-600 dark:text-surface-300">
              3 oy &middot; 12 hafta &middot; Bosqichma-bosqich
            </span>
          </div>

          {/* Apple-style large headline */}
          <h1 className="fade-in-up fade-in-up-delay-1 text-[44px] sm:text-[60px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.05] mb-7">
            <span className="text-surface-900 dark:text-white">
              Dasturlashni
            </span>
            <br />
            <span className="text-surface-900 dark:text-white">
              o'rganing,{' '}
            </span>
            <span className="gradient-text-animated">
              AI bilan kuchlaning
            </span>
          </h1>

          {/* Subtitle with premium spacing */}
          <p className="fade-in-up fade-in-up-delay-2 text-lg sm:text-xl text-surface-500 dark:text-surface-400 mb-14 leading-relaxed max-w-[560px] mx-auto">
            Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar
            orqali professional darajada o'rganing.
          </p>

          {/* Apple-style CTA buttons */}
          <div className="fade-in-up fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/roadmap"
              className="group relative inline-flex items-center gap-3 px-9 py-4.5 rounded-2xl bg-surface-900 dark:bg-white text-white dark:text-surface-900 font-semibold text-[16px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-surface-900/20 dark:shadow-white/10 hover:shadow-xl hover:shadow-surface-900/30 dark:hover:shadow-white/20 shimmer"
            >
              Roadmap'ni boshlash
              <svg className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/ai-rules"
              className="inline-flex items-center gap-2.5 px-9 py-4.5 rounded-2xl glass-card font-semibold text-[16px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-surface-700 dark:text-surface-200"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI qoidalari
            </Link>
          </div>

          {/* Floating tech icons around hero */}
          <div className="fade-in-up fade-in-up-delay-4 hidden lg:block">
            <div className="relative max-w-[700px] mx-auto h-16">
              {/* Python */}
              <div className="absolute left-0 top-0 float">
                <div className="icon-3d icon-3d-blue w-14 h-14 flex items-center justify-center text-white text-xl">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z"/>
                    <path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l.23-.33.08-.41-.08-.42-.23-.33-.33-.23-.41-.08-.41.08-.33.23-.23.33-.08.42.08.41.23.33.33.23.41.08.41-.08.33-.23z"/>
                  </svg>
                </div>
              </div>
              {/* JavaScript */}
              <div className="absolute left-[18%] -top-4 float-delay-1">
                <div className="icon-3d icon-3d-amber w-12 h-12 flex items-center justify-center text-white text-lg font-bold">
                  JS
                </div>
              </div>
              {/* Database */}
              <div className="absolute left-[36%] top-1 float-delay-2">
                <div className="icon-3d icon-3d-emerald w-11 h-11 flex items-center justify-center text-white">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>
              {/* AI/Brain */}
              <div className="absolute right-[36%] -top-2 float">
                <div className="icon-3d icon-3d-violet w-12 h-12 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              {/* HTML */}
              <div className="absolute right-[18%] top-0 float-delay-2">
                <div className="icon-3d icon-3d-rose w-11 h-11 flex items-center justify-center text-white text-sm font-bold">
                  {'</>'}
                </div>
              </div>
              {/* Deploy */}
              <div className="absolute right-0 -top-3 float-delay-1">
                <div className="icon-3d icon-3d-primary w-13 h-13 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar — Apple style */}
          {totalProgress > 0 && (
            <div className="fade-in-up fade-in-up-delay-5 max-w-sm mx-auto mt-10 glass-card rounded-2xl px-6 py-4">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-surface-500 dark:text-surface-400 font-medium">Umumiy progress</span>
                <span className="font-bold text-surface-900 dark:text-white stat-number">{totalProgress}%</span>
              </div>
              <div className="h-2.5 bg-surface-100 dark:bg-surface-800/60 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out relative shimmer"
                  style={{
                    width: `${totalProgress}%`,
                    background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899)'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0a0a0f] to-transparent z-10" />
    </section>
  )
}
