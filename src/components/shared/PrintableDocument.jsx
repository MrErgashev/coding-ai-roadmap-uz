import { createPortal } from 'react-dom'
import data from '../../data/roadmap.json'
import MappedIcon from './IconMap'
import { SiPython, SiJavascript, SiFlask } from 'react-icons/si'
import { LuCalendarDays, LuCircleCheck, LuZap, LuRocket, LuGlobe, LuSettings, LuDatabase, LuBot, LuMonitor } from 'react-icons/lu'

/* ============================================================
   PRINTABLE HOME
   ============================================================ */
function PrintableHome() {
  const { months } = data
  const stats = [
    { value: '12', label: 'Hafta', icon: <LuCalendarDays size={20} />, color: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Topshiriq', icon: <LuCircleCheck size={20} />, color: 'from-purple-500 to-pink-500' },
    { value: '6', label: 'Texnologiya', icon: <LuZap size={20} />, color: 'from-orange-500 to-red-500' },
    { value: '1', label: "To'liq loyiha", icon: <LuRocket size={20} />, color: 'from-emerald-500 to-teal-500' },
  ]

  const features = [
    { icon: <SiPython size={22} />, title: "Noldan Python", desc: "Dasturlash asoslarini Python tilida o'rganing", color: 'bg-blue-600' },
    { icon: <LuGlobe size={22} />, title: 'Web Development', desc: "HTML, CSS, JavaScript — veb-sahifalar yaratish", color: 'bg-cyan-600' },
    { icon: <LuSettings size={22} />, title: 'Backend (Flask)', desc: "Python Flask bilan API yarating", color: 'bg-purple-600' },
    { icon: <LuDatabase size={22} />, title: "Database & SQL", desc: "SQLite, CRUD operatsiyalari", color: 'bg-emerald-600' },
    { icon: <LuBot size={22} />, title: "AI Tools", desc: "AI vositalaridan to'g'ri foydalanish", color: 'bg-pink-600' },
    { icon: <LuRocket size={22} />, title: 'Deploy', desc: "Loyihani internetga chiqarish", color: 'bg-orange-600' },
  ]

  const techBadges = [
    { name: 'Python', iconColor: '#3776AB', icon: <SiPython size={14} /> },
    { name: 'JavaScript', iconColor: '#F7DF1E', icon: <SiJavascript size={14} /> },
    { name: 'Flask', iconColor: '#44a348', icon: <SiFlask size={14} /> },
    { name: 'SQL', iconColor: '#3b82f6', icon: <LuDatabase size={14} /> },
    { name: 'AI Tools', iconColor: '#a855f7', icon: <LuBot size={14} /> },
    { name: 'Deploy', iconColor: '#f97316', icon: <LuRocket size={14} /> },
  ]

  const monthStyles = {
    1: { gradient: 'from-blue-500 to-cyan-400', bg: 'bg-blue-600' },
    2: { gradient: 'from-purple-500 to-pink-400', bg: 'bg-purple-600' },
    3: { gradient: 'from-emerald-500 to-teal-400', bg: 'bg-emerald-600' },
  }

  return (
    <div className="px-8 py-8">
      {/* Hero — compact */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full print-card text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>3 oy | 12 hafta | Bosqichma-bosqich</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight mb-4 leading-[1.1]">
          <span className="block">Dasturlashni o'rganing,</span>
          <span className="gradient-text block mt-1">AI bilan yuksaling</span>
        </h1>

        <p className="text-sm text-surface-500 dark:text-surface-400 mb-6 leading-relaxed max-w-xl mx-auto">
          Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar orqali professional darajada o'rganing.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {techBadges.map((tech) => (
            <span key={tech.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg print-card text-xs font-medium">
              <span style={{ color: tech.iconColor }}>{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Stats — 4 columns forced */}
      <div className="print-grid-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 rounded-2xl print-card text-center">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-3`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-extrabold mb-0.5 gradient-text">{stat.value}</div>
            <div className="text-xs text-surface-500 dark:text-surface-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Month Cards — 3 columns forced */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold mb-1 text-center">3 oy — <span className="gradient-text">3 bosqich</span></h2>
        <p className="text-xs text-surface-500 dark:text-surface-400 text-center mb-4">Har bir oy yangi bilim darajasiga olib chiqadi.</p>
      </div>
      <div className="print-grid-3 gap-4 mb-8">
        {months.map(month => {
          const style = monthStyles[month.id] || monthStyles[1]
          return (
            <div key={month.id} className="p-5 rounded-2xl print-card">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center text-white`}>
                  <MappedIcon name={month.icon} size={20} />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${style.gradient} text-white`}>
                  {month.id}-oy
                </span>
              </div>
              <h3 className="font-bold text-base mb-1.5">{month.title}</h3>
              <p className="text-xs text-surface-500 dark:text-surface-400 mb-3 leading-relaxed">{month.description}</p>
              <div className="flex items-center gap-2 text-[10px] text-surface-400">
                <span>{month.weeks.length} hafta</span>
                <span className="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600" />
                <span>{month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Features — 3 columns forced */}
      <div className="mb-4">
        <h2 className="text-xl font-extrabold mb-1 text-center">Bitta roadmap — <span className="gradient-text">barcha ko'nikmalar</span></h2>
      </div>
      <div className="print-grid-3 gap-4 mb-8">
        {features.map((feat) => (
          <div key={feat.title} className="p-5 rounded-2xl print-card">
            <div className={`w-10 h-10 rounded-xl ${feat.color} flex items-center justify-center text-white mb-3`}>
              {feat.icon}
            </div>
            <h3 className="font-bold text-sm mb-1">{feat.title}</h3>
            <p className="text-xs text-surface-500 dark:text-surface-400 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Architecture — 3 columns forced */}
      <div className="mb-4">
        <h2 className="text-xl font-extrabold mb-1 text-center">Full-Stack <span className="gradient-text">arxitektura</span></h2>
        <p className="text-xs text-surface-500 dark:text-surface-400 text-center mb-4">Veb-ilova qanday ishlaydi: brauzerdan servergacha.</p>
      </div>
      <div className="print-grid-3 gap-4 mb-4">
        {[
          { icon: <LuMonitor size={22} />, title: 'Client (Brauzer)', subtitle: 'HTML, CSS, JavaScript', tags: ['DOM', 'Fetch API', 'UI'], color: 'bg-blue-600' },
          { icon: <LuSettings size={22} />, title: 'Server (Backend)', subtitle: 'Python, Flask', tags: ['Routes', 'API', 'Logic'], color: 'bg-purple-600' },
          { icon: <LuDatabase size={22} />, title: 'Database (Baza)', subtitle: 'SQLite, PostgreSQL', tags: ['Tables', 'CRUD', 'SQL'], color: 'bg-emerald-600' },
        ].map(node => (
          <div key={node.title} className="p-5 rounded-2xl print-card text-center">
            <div className={`w-10 h-10 rounded-xl ${node.color} flex items-center justify-center text-white mx-auto mb-3`}>{node.icon}</div>
            <h3 className="font-bold text-sm mb-0.5">{node.title}</h3>
            <p className="text-[10px] text-surface-500 dark:text-surface-400 mb-2">{node.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-1">
              {node.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-[9px] font-medium rounded bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 text-xs text-surface-500 dark:text-surface-400">
        {[
          { label: 'Frontend', desc: "foydalanuvchi ko'radi", color: 'bg-blue-500' },
          { label: 'Backend', desc: 'mantiq va hisob-kitob', color: 'bg-purple-500' },
          { label: 'Database', desc: "ma'lumotlar saqlanadi", color: 'bg-emerald-500' },
        ].map(item => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded ${item.color}`} />
            <span className="font-medium">{item.label}</span>
            <span className="text-surface-400 dark:text-surface-500">— {item.desc}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   PRINTABLE ROADMAP
   ============================================================ */
const monthColorMap = {
  blue: { border: 'border-l-blue-500', badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300' },
  purple: { border: 'border-l-violet-500', badge: 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-300' },
  green: { border: 'border-l-emerald-500', badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300' },
}

function PrintableRoadmap() {
  const { months } = data

  return (
    <div className="px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Yo'l xaritasi</h1>
        <p className="text-sm text-surface-500 dark:text-surface-400">
          12 hafta · 3 oy · Bosqichma-bosqich dasturlashni o'rganing
        </p>
      </div>

      {months.map(month => {
        const colors = monthColorMap[month.color] || monthColorMap.blue
        return (
          <section key={month.id} className="mb-8">
            <div className={`border-l-[3px] ${colors.border} pl-4 mb-4`}>
              <div className="flex items-center gap-2 mb-1">
                <MappedIcon name={month.icon} size={20} />
                <h2 className="text-lg font-bold tracking-tight">{month.id}-oy: {month.title}</h2>
              </div>
              <p className="text-xs text-surface-500 dark:text-surface-400">{month.subtitle}</p>
            </div>

            <div className="space-y-2">
              {month.weeks.map(week => (
                <div key={week.id} className="rounded-xl border border-surface-200 dark:border-surface-700 overflow-hidden print-card-solid pdf-no-break">
                  {/* Week header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-surface-100 dark:border-surface-800">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold bg-surface-100 text-surface-500 dark:bg-surface-800 dark:text-surface-400">
                      {week.id}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{week.id}-hafta: {week.title}</h3>
                      <p className="text-[10px] text-surface-500 dark:text-surface-400">{week.goal}</p>
                    </div>
                  </div>

                  {/* Week body */}
                  <div className="px-4 pb-4 space-y-3 pt-3">
                    {/* Maqsad */}
                    <div className="p-3 rounded-lg bg-primary-50/60 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900/30">
                      <p className="text-[10px] font-semibold text-primary-700 dark:text-primary-300 mb-1 uppercase tracking-wider">Maqsad</p>
                      <p className="text-xs text-surface-700 dark:text-surface-300 leading-relaxed">{week.goal}</p>
                    </div>

                    {/* Topshiriqlar */}
                    <div>
                      <h4 className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider mb-2">Topshiriqlar</h4>
                      <div className="space-y-0.5">
                        {week.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-start gap-2 py-1 px-2">
                            <span className="w-3 h-3 mt-0.5 shrink-0 rounded border border-surface-300 dark:border-surface-600" />
                            <span className="text-xs leading-relaxed text-surface-700 dark:text-surface-300">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Natija */}
                    <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                      <p className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 mb-1 uppercase tracking-wider">Natija</p>
                      <p className="text-xs text-surface-700 dark:text-surface-300 leading-relaxed">{week.deliverable}</p>
                    </div>

                    {/* AI foydalanish */}
                    {week.aiUsage && (
                      <div className="p-3 rounded-lg bg-violet-50/60 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/30">
                        <p className="text-[10px] font-semibold text-violet-700 dark:text-violet-300 mb-1 uppercase tracking-wider">AI'dan foydalanish</p>
                        <p className="text-xs text-surface-700 dark:text-surface-300 leading-relaxed">{week.aiUsage}</p>
                      </div>
                    )}

                    {/* Texnologiyalar */}
                    <div className="flex flex-wrap gap-1.5">
                      {week.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 text-[10px] rounded-md bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 font-medium border border-surface-200 dark:border-surface-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Resurslar */}
                    {week.resources && week.resources.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider mb-1.5">Tavsiya resurslar</h4>
                        {week.resources.map((res, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 py-0.5 px-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                            <span className="text-xs text-primary-600 dark:text-primary-400">{res.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

/* ============================================================
   PRINTABLE AI RULES
   ============================================================ */
const promptExamples = [
  { title: "Tushuntirish so'rash", bad: "Menga Flask ilovasi yoz", good: "Flask'da route qanday ishlaydi? app.route dekoratori nima qiladi — oddiy so'zlar bilan tushuntir" },
  { title: "Xatoni tushunish", bad: "Bu xatoni tuzat: TypeError: cannot unpack non-sequence NoneType", good: "Bu xato nimani anglatadi: TypeError: cannot unpack non-sequence NoneType? Qaysi holatlarda paydo bo'ladi va qanday oldini olaman?" },
  { title: "Kod tekshiruvi", bad: "Bu kodni yaxshila", good: "Mana mening login funksiyam. Xavfsizlik nuqtai nazaridan qanday muammolar bor? Har birini tushuntir" },
]

function PrintableAIRules() {
  const { aiRules } = data

  return (
    <div className="px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          AI'dan to'g'ri foydalanish qoidalari
        </h1>
        <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl">
          AI vositalari o'rganishni tezlashtiradi — lekin noto'g'ri ishlatilsa, bilimingiz yuzaki bo'lib qoladi.
        </p>
      </div>

      {/* Warning */}
      <div className="mb-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40">
        <h2 className="font-bold text-sm mb-1 flex items-center gap-2">
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Muhim eslatma
        </h2>
        <p className="text-xs text-surface-700 dark:text-surface-300 leading-relaxed">
          AI'ga to'liq tayanib kod yozganlar testlarda <strong>~17% past</strong> natija ko'rsatgan. Maqsad: AI sizni <strong>kuchaytirsin</strong>, almashtirib qo'ymasin.
        </p>
      </div>

      {/* Rules */}
      <div className="space-y-3 mb-8">
        {aiRules.map(rule => (
          <div key={rule.id} className="rounded-xl border border-surface-200 dark:border-surface-700 overflow-hidden print-card-solid pdf-no-break">
            <div className="p-4">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <MappedIcon name={rule.icon} size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{rule.title}</h3>
                  <p className="text-[10px] text-surface-400 font-medium">{rule.titleEn}</p>
                </div>
              </div>
              <p className="text-xs text-surface-600 dark:text-surface-400 leading-relaxed mb-3">{rule.description}</p>
            </div>

            <div className="px-4 pb-4 space-y-3 border-t border-surface-100 dark:border-surface-800 pt-3">
              <p className="text-xs text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">{rule.details}</p>
              {rule.examples && rule.examples.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider">Misollar</h4>
                  {rule.examples.map((ex, idx) => (
                    <div key={idx} className="print-grid-2 gap-2">
                      <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/15 border border-red-100 dark:border-red-900/30">
                        <p className="text-[9px] font-semibold text-red-500 uppercase mb-1 tracking-wider">Noto'g'ri</p>
                        <p className="text-xs text-surface-700 dark:text-surface-300">{ex.bad}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/15 border border-emerald-100 dark:border-emerald-900/30">
                        <p className="text-[9px] font-semibold text-emerald-600 uppercase mb-1 tracking-wider">To'g'ri</p>
                        <p className="text-xs text-surface-700 dark:text-surface-300">{ex.good}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Prompt Examples */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-tight mb-1">AI'ga qanday savol berish kerak?</h2>
        <p className="text-xs text-surface-500 dark:text-surface-400 mb-4">3 ta real misol — noto'g'ri va to'g'ri yondashuvlar.</p>
        <div className="print-grid-3 gap-3">
          {promptExamples.map((ex, idx) => (
            <div key={idx} className="rounded-xl border border-surface-200 dark:border-surface-700 print-card-solid overflow-hidden">
              <div className="p-3 pb-2">
                <div className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider mb-2">{ex.title}</div>
              </div>
              <div className="px-3 pb-3">
                <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/15 border border-red-100 dark:border-red-900/30 mb-2">
                  <p className="text-[9px] font-semibold text-red-500 uppercase mb-1">Noto'g'ri</p>
                  <p className="text-[11px] text-surface-700 dark:text-surface-300">{ex.bad}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/15 border border-emerald-100 dark:border-emerald-900/30">
                  <p className="text-[9px] font-semibold text-emerald-600 uppercase mb-1">To'g'ri</p>
                  <p className="text-[11px] text-surface-700 dark:text-surface-300">{ex.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Usage Table */}
      <div className="p-5 rounded-xl bg-surface-50 dark:bg-surface-900/40 border border-surface-200 dark:border-surface-700">
        <h2 className="font-bold text-base mb-4">Bosqichlar bo'yicha AI foydalanish</h2>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-surface-200 dark:border-surface-700">
              <th className="text-left py-2.5 pr-4 font-semibold">Bosqich</th>
              <th className="text-left py-2.5 pr-4 font-semibold">AI roli</th>
              <th className="text-left py-2.5 font-semibold">Ruxsat berilgan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
            <tr>
              <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /><span className="font-medium">1-oy</span></span></td>
              <td className="py-3 pr-4 text-surface-600 dark:text-surface-400">O'qituvchi</td>
              <td className="py-3 text-surface-600 dark:text-surface-400">Savol-javob, tushuntirish, xato izohi. Kod yozish YO'Q.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-violet-500" /><span className="font-medium">2-oy</span></span></td>
              <td className="py-3 pr-4 text-surface-600 dark:text-surface-400">Yordamchi</td>
              <td className="py-3 text-surface-600 dark:text-surface-400">Kod review, Copilot, debugging yordam.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /><span className="font-medium">3-oy</span></span></td>
              <td className="py-3 pr-4 text-surface-600 dark:text-surface-400">Sherik</td>
              <td className="py-3 text-surface-600 dark:text-surface-400">Boilerplate, refaktoring, test. Arxitektura — SIZ.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ============================================================
   PRINTABLE RESOURCES
   ============================================================ */
function PrintableResources() {
  const { resources } = data

  return (
    <div className="px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Foydali resurslar</h1>
        <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl">
          Dasturlashni o'rganish uchun eng yaxshi bepul va pullik manbalar.
        </p>
      </div>

      <div className="mb-6 p-4 rounded-xl bg-primary-50/60 dark:bg-primary-950/15 border border-primary-100 dark:border-primary-900/30">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h2 className="font-semibold text-xs mb-1 text-primary-700 dark:text-primary-300">Maslahat</h2>
            <p className="text-xs text-surface-700 dark:text-surface-300 leading-relaxed">
              Bir vaqtda ko'p resurs o'rganmang — bitta tanlang va oxirigacha boring.
            </p>
          </div>
        </div>
      </div>

      <div className="print-grid-2 gap-4">
        {resources.map(cat => (
          <div key={cat.category} className="p-5 rounded-xl border border-surface-200 dark:border-surface-700 print-card-solid pdf-no-break">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-300">
                <MappedIcon name={cat.icon} size={16} />
              </div>
              <h3 className="font-bold text-sm">{cat.category}</h3>
            </div>
            <div className="space-y-0.5">
              {cat.items.map((item, idx) => (
                <div key={idx} className="py-1.5 px-2">
                  <p className="text-xs font-medium text-primary-600 dark:text-primary-400 mb-0.5">{item.title}</p>
                  <p className="text-[10px] text-surface-500 dark:text-surface-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   MAIN PRINTABLE DOCUMENT
   ============================================================ */
function PrintableDocumentContent() {
  return (
    <div
      id="pdf-printable"
      className="printable-document bg-white dark:bg-[#0a0a0a] text-surface-900 dark:text-surface-100"
    >
      {/* Cover / Title */}
      <div className="px-8 pt-12 pb-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Coding + AI Roadmap</h1>
        <p className="text-sm text-surface-500 dark:text-surface-400">
          12 hafta · 3 oy · Bosqichma-bosqich dasturlashni o'rganing
        </p>
        <div className="mt-3 text-xs text-surface-400 dark:text-surface-500">
          {new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Page 1: Home */}
      <div className="pdf-page-break">
        <PrintableHome />
      </div>

      {/* Page 2: Roadmap */}
      <div className="pdf-page-break">
        <PrintableRoadmap />
      </div>

      {/* Page 3: AI Rules */}
      <div className="pdf-page-break">
        <PrintableAIRules />
      </div>

      {/* Page 4: Resources */}
      <div className="pdf-page-break">
        <PrintableResources />
      </div>

      {/* Footer */}
      <div className="mt-6 py-4 border-t border-surface-200/60 dark:border-surface-800/60 text-center text-xs text-surface-400 dark:text-surface-500">
        <p>Coding + AI Roadmap UZ — coding-ai-roadmap-uz</p>
      </div>
    </div>
  )
}

/* Portal wrapper — renders outside #root into #pdf-root */
function PrintableDocument() {
  const container = document.getElementById('pdf-root')
  if (!container) return null
  return createPortal(<PrintableDocumentContent />, container)
}

export default PrintableDocument
