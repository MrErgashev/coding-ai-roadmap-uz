import RuleCard from '../components/ai-rules/RuleCard'
import data from '../data/roadmap.json'

const promptExamples = [
  {
    title: "Tushuntirish so'rash",
    bad: "Menga Flask ilovasi yoz",
    good: "Flask'da route qanday ishlaydi? app.route dekoratori nima qiladi — oddiy so'zlar bilan tushuntir",
  },
  {
    title: "Xatoni tushunish",
    bad: "Bu xatoni tuzat: TypeError: cannot unpack non-sequence NoneType",
    good: "Bu xato nimani anglatadi: TypeError: cannot unpack non-sequence NoneType? Qaysi holatlarda paydo bo'ladi va qanday oldini olaman?",
  },
  {
    title: "Kod tekshiruvi",
    bad: "Bu kodni yaxshila",
    good: "Mana mening login funksiyam. Xavfsizlik nuqtai nazaridan qanday muammolar bor? Har birini tushuntir",
  },
]

export default function AIRules() {
  return (
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
          AI'dan to'g'ri foydalanish qoidalari
        </h1>
        <p className="text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl text-[17px]">
          AI vositalari o'rganishni tezlashtiradi — lekin noto'g'ri
          ishlatilsa, bilimingiz yuzaki bo'lib qoladi. Quyidagi 5 ta qoidaga rioya qiling.
        </p>
      </div>

      {/* Warning banner */}
      <div className="mb-14 p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/15 border border-amber-200/50 dark:border-amber-800/40">
        <h2 className="font-bold text-lg mb-2 flex items-center gap-2.5">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Muhim eslatma
        </h2>
        <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
          Tadqiqotlar ko'rsatadiki, AI'ga to'liq tayanib kod yozganlar keyingi testlarda
          <strong> ~17% past</strong> natija ko'rsatgan, ayniqsa debugging ko'nikmalarida.
          Lekin AI'ni o'qituvchi sifatida ishlatganlar — bilimlarini saqlab qolgan va hatto oshirgan.
          Maqsad: AI sizni <strong>kuchaytirsin</strong>, almashtirib qo'ymasin.
        </p>
      </div>

      {/* Rules */}
      <div className="space-y-5 mb-16">
        {data.aiRules.map(rule => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>

      {/* Prompt Examples */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-2">AI'ga qanday savol berish kerak?</h2>
        <p className="text-surface-500 dark:text-surface-400 mb-8">
          3 ta real misol — noto'g'ri va to'g'ri yondashuvlar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {promptExamples.map((ex, idx) => (
            <div key={idx} className="rounded-2xl border border-surface-200/80 dark:border-surface-800/80 bg-white dark:bg-surface-900/30 overflow-hidden shadow-sm shadow-surface-900/[0.02]">
              <div className="p-5 pb-4">
                <div className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">{ex.title}</div>
              </div>
              <div className="px-5 pb-3">
                <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/15 border border-red-100/80 dark:border-red-900/30 mb-3">
                  <p className="text-[11px] font-semibold text-red-500 dark:text-red-400 uppercase mb-1.5 tracking-wider">Noto'g'ri</p>
                  <p className="text-sm text-surface-700 dark:text-surface-300">{ex.bad}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-100/80 dark:border-emerald-900/30">
                  <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-1.5 tracking-wider">To'g'ri</p>
                  <p className="text-sm text-surface-700 dark:text-surface-300">{ex.good}</p>
                </div>
              </div>
              <div className="h-4" />
            </div>
          ))}
        </div>
      </div>

      {/* AI Usage Table */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-50/80 dark:bg-surface-900/40 border border-surface-200/60 dark:border-surface-800/60">
        <h2 className="font-bold text-xl tracking-tight mb-6">Bosqichlar bo'yicha AI foydalanish</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200/80 dark:border-surface-700/80">
                <th className="text-left py-3.5 pr-6 font-semibold text-surface-900 dark:text-surface-100">Bosqich</th>
                <th className="text-left py-3.5 pr-6 font-semibold text-surface-900 dark:text-surface-100">AI roli</th>
                <th className="text-left py-3.5 font-semibold text-surface-900 dark:text-surface-100">Ruxsat berilgan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-surface-800/80">
              <tr>
                <td className="py-4 pr-6">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-medium">1-oy</span>
                  </span>
                </td>
                <td className="py-4 pr-6 text-surface-600 dark:text-surface-400">O'qituvchi</td>
                <td className="py-4 text-surface-600 dark:text-surface-400">Savol-javob, tushuntirish, xato izohi. Kod yozish YO'Q.</td>
              </tr>
              <tr>
                <td className="py-4 pr-6">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500" />
                    <span className="font-medium">2-oy</span>
                  </span>
                </td>
                <td className="py-4 pr-6 text-surface-600 dark:text-surface-400">Yordamchi</td>
                <td className="py-4 text-surface-600 dark:text-surface-400">Kod review, Copilot, debugging yordam.</td>
              </tr>
              <tr>
                <td className="py-4 pr-6">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium">3-oy</span>
                  </span>
                </td>
                <td className="py-4 pr-6 text-surface-600 dark:text-surface-400">Sherik</td>
                <td className="py-4 text-surface-600 dark:text-surface-400">Boilerplate, refaktoring, test. Arxitektura — SIZ.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
