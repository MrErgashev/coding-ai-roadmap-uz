import RuleCard from '../components/ai-rules/RuleCard'
import data from '../data/roadmap.json'

export default function AIRules() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          AI'dan to'g'ri foydalanish qoidalari
        </h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
          AI vositalari (ChatGPT, Copilot, Claude) o'rganishni tezlashtiradi — lekin noto'g'ri
          ishlatilsa, bilimingiz yuzaki bo'lib qoladi. Quyidagi 5 ta qoidaga rioya qiling.
        </p>
      </div>

      <div className="mb-12 p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
        <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
          <span>⚠️</span> Muhim eslatma
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Tadqiqotlar ko'rsatadiki, AI'ga to'liq tayanib kod yozganlar keyingi testlarda
          <strong> ~17% past</strong> natija ko'rsatgan, ayniqsa debugging ko'nikmalarida.
          Lekin AI'ni o'qituvchi sifatida ishlatganlar — bilimlarini saqlab qolgan va hatto oshirgan.
          Maqsad: AI sizni <strong>kuchaytirsin</strong>, almashtirib qo'ymasin.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {data.aiRules.map(rule => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
        <h2 className="font-bold text-lg mb-4">Bosqichlar bo'yicha AI foydalanish jadvali</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 pr-4 font-semibold">Bosqich</th>
                <th className="text-left py-3 pr-4 font-semibold">AI roli</th>
                <th className="text-left py-3 font-semibold">Ruxsat berilgan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              <tr>
                <td className="py-3 pr-4 font-medium">1-oy</td>
                <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">O'qituvchi</td>
                <td className="py-3 text-gray-600 dark:text-gray-400">Savol-javob, tushuntirish, xato izohi. Kod yozish YO'Q.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">2-oy</td>
                <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">Yordamchi</td>
                <td className="py-3 text-gray-600 dark:text-gray-400">Kod review, Copilot (ehtiyotkorlik bilan), debugging yordam.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">3-oy</td>
                <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">Sherik</td>
                <td className="py-3 text-gray-600 dark:text-gray-400">Boilerplate, refaktoring, test yaratish. Arxitektura — SIZ.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
