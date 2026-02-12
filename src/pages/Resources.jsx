import ResourceList from '../components/resources/ResourceList'
import data from '../data/roadmap.json'

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Foydali resurslar</h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
          Dasturlashni o'rganish uchun eng yaxshi bepul va pullik manbalar — texnologiya bo'yicha
          tartiblangan. Inglizcha resurslar ko'p, lekin ular eng sifatli manbalar hisoblanadi.
        </p>
      </div>

      <div className="mb-8 p-5 rounded-2xl bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900/30">
        <h2 className="font-semibold text-sm mb-2 text-primary-700 dark:text-primary-300">Maslahat</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Bir vaqtda ko'p resurs o'rganmang — bitta tanlang va oxirigacha boring. Qolganlarini
          kerak bo'lganda qaytib ko'ring. Amaliy mashq eng muhim — faqat o'qish yetarli emas.
        </p>
      </div>

      <ResourceList resources={data.resources} />
    </div>
  )
}
