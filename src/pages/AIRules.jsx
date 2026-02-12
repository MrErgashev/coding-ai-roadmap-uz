import RuleCard from '../components/ai-rules/RuleCard'
import data from '../data/roadmap.json'

export default function AIRules() {
  return (
    <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          AI'dan to'g'ri foydalanish qoidalari
        </h1>
        <p className="text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl">
          AI vositalari (ChatGPT, Copilot, Claude) o'rganishni tezlashtiradi — lekin noto'g'ri
          ishlatilsa, bilimingiz yuzaki bo'lib qoladi. Quyidagi 5 ta qoidaga rioya qiling.
        </p>
      </div>

      <div className="mb-12 p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/15 border border-amber-200/60 dark:border-amber-800/40">
        <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
          <span>⚠️</span> Muhim eslatma
        </h2>
        <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
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

      <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800">
        <h2 className="font-bold text-lg mb-5">Bosqichlar bo'yicha AI foydalanish jadvali</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700">
                <th className="text-left py-3 pr-4 font-semibold text-surface-900 dark:text-surface-100">Bosqich</th>
                <th className="text-left py-3 pr-4 font-semibold text-surface-900 dark:text-surface-100">AI roli</th>
                <th className="text-left py-3 font-semibold text-surface-900 dark:text-surface-100">Ruxsat berilgan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
              <tr>
                <td className="py-3.5 pr-4 font-medium">1-oy</td>
                <td className="py-3.5 pr-4 text-surface-600 dark:text-surface-400">O'qituvchi</td>
                <td className="py-3.5 text-surface-600 dark:text-surface-400">Savol-javob, tushuntirish, xato izohi. Kod yozish YO'Q.</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-medium">2-oy</td>
                <td className="py-3.5 pr-4 text-surface-600 dark:text-surface-400">Yordamchi</td>
                <td className="py-3.5 text-surface-600 dark:text-surface-400">Kod review, Copilot (ehtiyotkorlik bilan), debugging yordam.</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-medium">3-oy</td>
                <td className="py-3.5 pr-4 text-surface-600 dark:text-surface-400">Sherik</td>
                <td className="py-3.5 text-surface-600 dark:text-surface-400">Boilerplate, refaktoring, test yaratish. Arxitektura — SIZ.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
