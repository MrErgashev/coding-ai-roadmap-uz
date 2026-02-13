import ResourceList from '../components/resources/ResourceList'
import data from '../data/roadmap.json'

export default function Resources() {
  return (
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
          Foydali resurslar
        </h1>
        <p className="text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl text-[17px]">
          Dasturlashni o'rganish uchun eng yaxshi bepul va pullik manbalar — texnologiya bo'yicha tartiblangan.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-2xl bg-primary-50/40 dark:bg-primary-950/15 border border-primary-100/60 dark:border-primary-900/30">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h2 className="font-semibold text-sm mb-1.5 text-primary-700 dark:text-primary-300">Maslahat</h2>
            <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
              Bir vaqtda ko'p resurs o'rganmang — bitta tanlang va oxirigacha boring. Qolganlarini
              kerak bo'lganda qaytib ko'ring. Amaliy mashq eng muhim — faqat o'qish yetarli emas.
            </p>
          </div>
        </div>
      </div>

      <ResourceList resources={data.resources} />
    </div>
  )
}
