import { Link } from 'react-router-dom'

export default function Hero({ totalProgress }) {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white dark:from-primary-950/20 dark:via-surface-950 dark:to-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/30 via-transparent to-transparent dark:from-primary-900/10" />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="text-center max-w-[680px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-surface-800/50 text-primary-600 dark:text-primary-300 text-xs font-medium mb-8 border border-primary-100/80 dark:border-primary-800/40 shadow-sm shadow-primary-600/[0.06] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            3 oy &middot; 12 hafta &middot; Bosqichma-bosqich
          </div>

          {/* Headline */}
          <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold tracking-[-0.035em] leading-[1.08] mb-6">
            <span className="text-surface-900 dark:text-white">
              Dasturlashni o'rganing,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
              AI bilan kuchlaning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-surface-500 dark:text-surface-400 mb-12 leading-relaxed max-w-[540px] mx-auto">
            Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar
            orqali o'rganing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-600/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md text-[15px]"
            >
              Roadmap'ni boshlash
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/ai-rules"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600 bg-white/50 dark:bg-surface-900/50 backdrop-blur-sm font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
            >
              AI qoidalari
            </Link>
          </div>

          {/* Progress */}
          {totalProgress > 0 && (
            <div className="max-w-xs mx-auto">
              <div className="flex items-center justify-between text-sm mb-2.5">
                <span className="text-surface-400 font-medium">Umumiy progress</span>
                <span className="font-semibold text-primary-600 dark:text-primary-400">{totalProgress}%</span>
              </div>
              <div className="h-2 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-500"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
