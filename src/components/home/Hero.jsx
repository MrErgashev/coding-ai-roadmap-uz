import { Link } from 'react-router-dom'

export default function Hero({ totalProgress }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-white to-white dark:from-surface-900 dark:via-surface-950 dark:to-surface-950" />
      <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 text-xs font-medium mb-8 border border-primary-100 dark:border-primary-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            3 oy &middot; 12 hafta &middot; Bosqichma-bosqich
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="text-surface-900 dark:text-white">
              Dasturlashni o'rganing,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              AI bilan kuchlaning
            </span>
          </h1>

          <p className="text-lg text-surface-500 dark:text-surface-400 mb-10 leading-relaxed max-w-xl mx-auto">
            Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar
            orqali o'rganing. AI vositalaridan to'g'ri foydalanishni ham bilib oling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5"
            >
              Roadmap'ni boshlash
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/ai-rules"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800/50 font-medium transition-all hover:-translate-y-0.5"
            >
              AI qoidalari
            </Link>
          </div>

          {totalProgress > 0 && (
            <div className="max-w-xs mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-surface-400">Umumiy progress</span>
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
