import { Link } from 'react-router-dom'

export default function Hero({ totalProgress }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            3 oy &middot; 12 hafta &middot; Bosqichma-bosqich
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-accent-700 dark:from-white dark:via-primary-200 dark:to-accent-300 bg-clip-text text-transparent">
              Dasturlashni o'rganing,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              AI bilan kuchlaning
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar
            orqali o'rganing. AI vositalaridan to'g'ri foydalanishni ham bilib oling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/30"
            >
              Roadmap'ni boshlash
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/ai-rules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-all"
            >
              AI qoidalari
            </Link>
          </div>

          {totalProgress > 0 && (
            <div className="max-w-xs mx-auto">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-gray-500">Umumiy progress</span>
                <span className="font-semibold text-primary-600">{totalProgress}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
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
