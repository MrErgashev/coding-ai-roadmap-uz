import { forwardRef } from 'react'
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
    { value: '12', label: 'Hafta', icon: <LuCalendarDays size={24} />, color: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Topshiriq', icon: <LuCircleCheck size={24} />, color: 'from-purple-500 to-pink-500' },
    { value: '6', label: 'Texnologiya', icon: <LuZap size={24} />, color: 'from-orange-500 to-red-500' },
    { value: '1', label: "To'liq loyiha", icon: <LuRocket size={24} />, color: 'from-emerald-500 to-teal-500' },
  ]

  const features = [
    { icon: <SiPython size={28} />, title: "Noldan Python", desc: "Dasturlash asoslarini Python tilida o'rganing — o'zgaruvchilar, funksiyalar, OOP", iconClass: 'icon-3d icon-3d-blue' },
    { icon: <LuGlobe size={28} />, title: 'Web Development', desc: "HTML, CSS, JavaScript — interaktiv veb-sahifalar yaratish", iconClass: 'icon-3d icon-3d-cyan' },
    { icon: <LuSettings size={28} />, title: 'Backend (Flask)', desc: "Python Flask bilan API va server tomonni yarating", iconClass: 'icon-3d icon-3d-purple' },
    { icon: <LuDatabase size={28} />, title: "Database & SQL", desc: "Ma'lumotlar bazasi bilan ishlash — SQLite, CRUD operatsiyalari", iconClass: 'icon-3d icon-3d-emerald' },
    { icon: <LuBot size={28} />, title: "AI Tools", desc: "ChatGPT, Copilot va boshqa AI vositalaridan to'g'ri foydalanish", iconClass: 'icon-3d icon-3d-pink' },
    { icon: <LuRocket size={28} />, title: 'Deploy', desc: "Loyihangizni internetga chiqaring — hosting, domain, CI/CD", iconClass: 'icon-3d icon-3d-orange' },
  ]

  const techBadges = [
    { name: 'Python', iconColor: '#3776AB', icon: <SiPython size={16} /> },
    { name: 'JavaScript', iconColor: '#F7DF1E', icon: <SiJavascript size={16} /> },
    { name: 'Flask', iconColor: '#44a348', icon: <SiFlask size={16} /> },
    { name: 'SQL', iconColor: '#3b82f6', icon: <LuDatabase size={16} /> },
    { name: 'AI Tools', iconColor: '#a855f7', icon: <LuBot size={16} /> },
    { name: 'Deploy', iconColor: '#f97316', icon: <LuRocket size={16} /> },
  ]

  const monthStyles = {
    1: { gradient: 'from-blue-500 to-cyan-400', iconClass: 'icon-3d icon-3d-blue' },
    2: { gradient: 'from-purple-500 to-pink-400', iconClass: 'icon-3d icon-3d-purple' },
    3: { gradient: 'from-emerald-500 to-teal-400', iconClass: 'icon-3d icon-3d-emerald' },
  }

  return (
    <div className="px-5 sm:px-8 py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm font-medium mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-surface-600 dark:text-surface-300">
            3 oy <span className="text-surface-300 dark:text-surface-600 mx-1">|</span> 12 hafta <span className="text-surface-300 dark:text-surface-600 mx-1">|</span> Bosqichma-bosqich
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05]">
          <span className="text-surface-900 dark:text-white block">Dasturlashni o'rganing,</span>
          <span className="gradient-text block mt-2">AI bilan yuksaling</span>
        </h1>

        <p className="text-lg text-surface-500 dark:text-surface-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Python, JavaScript, Database va Deployment — barchasini amaliy loyihalar orqali professional darajada o'rganing.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {techBadges.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-medium text-surface-600 dark:text-surface-300">
              <span className="flex items-center" style={{ color: tech.iconColor }}>{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="relative p-6 rounded-3xl glass-card text-center">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-extrabold mb-1 gradient-text">{stat.value}</div>
            <div className="text-sm text-surface-500 dark:text-surface-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Month Cards */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold mb-4">3 oy — <span className="gradient-text">3 bosqich</span></h2>
        <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto text-lg">
          Har bir oy yangi bilim darajasiga olib chiqadi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
        {months.map(month => {
          const style = monthStyles[month.id] || monthStyles[1]
          return (
            <div key={month.id} className="p-7 rounded-3xl glass-card relative overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div className={style.iconClass}>
                  <MappedIcon name={month.icon} size={28} />
                </div>
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${style.gradient} text-white shadow-lg`}>
                  {month.id}-oy
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2.5">{month.title}</h3>
              <p className="text-sm text-surface-500 dark:text-surface-400 mb-5 leading-relaxed">{month.description}</p>
              <div className="flex items-center gap-3 text-xs text-surface-400 dark:text-surface-500">
                <span>{month.weeks.length} hafta</span>
                <span className="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-600" />
                <span>{month.weeks.reduce((a, w) => a + w.tasks.length, 0)} topshiriq</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Features */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold mb-4">Bitta roadmap — <span className="gradient-text">barcha ko'nikmalar</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feat) => (
          <div key={feat.title} className="p-7 rounded-3xl glass-card relative overflow-hidden">
            <div className={feat.iconClass + ' mb-5'}>{feat.icon}</div>
            <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold mb-4">Full-Stack <span className="gradient-text">arxitektura</span></h2>
        <p className="text-surface-500 dark:text-surface-400 max-w-xl mx-auto text-lg">
          Veb-ilova qanday ishlaydi: brauzerdan servergacha, serverdan bazagacha.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { icon: <LuMonitor size={28} />, title: 'Client (Brauzer)', subtitle: 'HTML, CSS, JavaScript', tags: ['DOM', 'Fetch API', 'UI'], gradient: 'icon-3d-blue' },
          { icon: <LuSettings size={28} />, title: 'Server (Backend)', subtitle: 'Python, Flask', tags: ['Routes', 'API', 'Logic'], gradient: 'icon-3d-purple' },
          { icon: <LuDatabase size={28} />, title: 'Database (Baza)', subtitle: 'SQLite, PostgreSQL', tags: ['Tables', 'CRUD', 'SQL'], gradient: 'icon-3d-emerald' },
        ].map(node => (
          <div key={node.title} className="p-6 rounded-3xl glass-card text-center">
            <div className={`icon-3d ${node.gradient} mx-auto mb-4`}>{node.icon}</div>
            <h3 className="font-bold text-base mb-1">{node.title}</h3>
            <p className="text-xs text-surface-500 dark:text-surface-400 mb-3">{node.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {node.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-surface-100/80 dark:bg-surface-800/60 text-surface-500 dark:text-surface-400">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm text-surface-500 dark:text-surface-400">
        {[
          { label: 'Frontend', desc: "foydalanuvchi ko'radi", color: 'bg-gradient-to-r from-blue-400 to-blue-500' },
          { label: 'Backend', desc: 'mantiq va hisob-kitob', color: 'bg-gradient-to-r from-purple-400 to-purple-500' },
          { label: 'Database', desc: "ma'lumotlar saqlanadi", color: 'bg-gradient-to-r from-emerald-400 to-emerald-500' },
        ].map(item => (
          <span key={item.label} className="flex items-center gap-2.5">
            <span className={`w-3.5 h-3.5 rounded-md ${item.color} shadow-sm`} />
            <span className="font-medium text-surface-700 dark:text-surface-300">{item.label}</span>
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
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-3">Yo'l xaritasi</h1>
        <p className="text-surface-500 dark:text-surface-400 leading-relaxed">
          12 hafta &middot; 3 oy &middot; Bosqichma-bosqich dasturlashni o'rganing
        </p>
      </div>

      {months.map(month => {
        const colors = monthColorMap[month.color] || monthColorMap.blue
        return (
          <section key={month.id} className="mb-16" aria-label={`${month.id}-oy`}>
            <div className={`border-l-[3px] ${colors.border} pl-5 mb-8`}>
              <div className="flex items-center gap-3 mb-1.5">
                <MappedIcon name={month.icon} size={24} />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{month.id}-oy: {month.title}</h2>
              </div>
              <p className="text-sm text-surface-500 dark:text-surface-400">{month.subtitle}</p>
            </div>

            <div className="space-y-3">
              {month.weeks.map(week => (
                <div key={week.id} className="rounded-2xl border border-surface-200/80 dark:border-surface-800/80 overflow-hidden bg-white dark:bg-surface-900/30 shadow-sm pdf-no-break">
                  {/* Week header */}
                  <div className="flex items-center gap-4 p-5 sm:p-6 border-b border-surface-100 dark:border-surface-800/80">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 bg-surface-100 text-surface-500 dark:bg-surface-800 dark:text-surface-400">
                      {week.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[15px]">{week.id}-hafta: {week.title}</h3>
                      <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{week.goal}</p>
                    </div>
                  </div>

                  {/* Week body — always expanded */}
                  <div className="px-5 sm:px-6 pb-6 space-y-5 pt-5">
                    {/* Maqsad */}
                    <div className="p-4 rounded-xl bg-primary-50/40 dark:bg-primary-950/20 border border-primary-100/80 dark:border-primary-900/30">
                      <p className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-1.5 uppercase tracking-wider">Maqsad</p>
                      <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{week.goal}</p>
                    </div>

                    {/* Topshiriqlar */}
                    <div>
                      <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">Topshiriqlar</h4>
                      <div className="space-y-1">
                        {week.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-xl">
                            <input type="checkbox" disabled className="mt-0.5 shrink-0" />
                            <span className="text-sm leading-relaxed text-surface-700 dark:text-surface-300">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Natija */}
                    <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/30">
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1.5 uppercase tracking-wider">Natija</p>
                      <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{week.deliverable}</p>
                    </div>

                    {/* AI foydalanish */}
                    {week.aiUsage && (
                      <div className="p-4 rounded-xl bg-violet-50/40 dark:bg-violet-950/20 border border-violet-100/80 dark:border-violet-900/30">
                        <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 mb-1.5 uppercase tracking-wider">AI'dan foydalanish</p>
                        <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{week.aiUsage}</p>
                      </div>
                    )}

                    {/* Texnologiyalar */}
                    <div className="flex flex-wrap gap-2">
                      {week.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-surface-100/80 dark:bg-surface-800/80 text-surface-600 dark:text-surface-400 font-medium border border-surface-200/50 dark:border-surface-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Resurslar */}
                    {week.resources && week.resources.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">Tavsiya resurslar</h4>
                        <div className="space-y-0.5">
                          {week.resources.map((res, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl">
                              <svg className="w-3.5 h-3.5 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              <span className="text-sm text-primary-600 dark:text-primary-400">{res.title}</span>
                            </div>
                          ))}
                        </div>
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
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">
          AI'dan to'g'ri foydalanish qoidalari
        </h1>
        <p className="text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl text-[17px]">
          AI vositalari o'rganishni tezlashtiradi — lekin noto'g'ri ishlatilsa, bilimingiz yuzaki bo'lib qoladi.
        </p>
      </div>

      {/* Warning */}
      <div className="mb-14 p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/15 border border-amber-200/50 dark:border-amber-800/40">
        <h2 className="font-bold text-lg mb-2 flex items-center gap-2.5">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Muhim eslatma
        </h2>
        <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
          Tadqiqotlar ko'rsatadiki, AI'ga to'liq tayanib kod yozganlar keyingi testlarda
          <strong> ~17% past</strong> natija ko'rsatgan. Maqsad: AI sizni <strong>kuchaytirsin</strong>, almashtirib qo'ymasin.
        </p>
      </div>

      {/* Rules — all expanded */}
      <div className="space-y-5 mb-16">
        {aiRules.map(rule => (
          <div key={rule.id} className="rounded-2xl border border-surface-200/80 dark:border-surface-800/80 overflow-hidden bg-white dark:bg-surface-900/30 shadow-sm pdf-no-break">
            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/30 border border-primary-100/80 dark:border-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <MappedIcon name={rule.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight">{rule.title}</h3>
                  <p className="text-xs text-surface-400 mt-0.5 font-medium">{rule.titleEn}</p>
                </div>
              </div>
              <p className="text-[15px] text-surface-600 dark:text-surface-400 leading-relaxed mb-5">{rule.description}</p>
            </div>

            {/* Details — always visible */}
            <div className="px-6 sm:px-7 pb-7 space-y-5 border-t border-surface-100 dark:border-surface-800/80 pt-5">
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">{rule.details}</p>
              {rule.examples && rule.examples.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider">Misollar</h4>
                  {rule.examples.map((ex, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/15 border border-red-100/80 dark:border-red-900/30">
                        <p className="text-[11px] font-semibold text-red-500 dark:text-red-400 uppercase mb-2 tracking-wider">Noto'g'ri</p>
                        <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{ex.bad}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/15 border border-emerald-100/80 dark:border-emerald-900/30">
                        <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-2 tracking-wider">To'g'ri</p>
                        <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">{ex.good}</p>
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
      <div className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-2">AI'ga qanday savol berish kerak?</h2>
        <p className="text-surface-500 dark:text-surface-400 mb-8">3 ta real misol — noto'g'ri va to'g'ri yondashuvlar.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {promptExamples.map((ex, idx) => (
            <div key={idx} className="rounded-2xl border border-surface-200/80 dark:border-surface-800/80 bg-white dark:bg-surface-900/30 overflow-hidden shadow-sm">
              <div className="p-5 pb-4">
                <div className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">{ex.title}</div>
              </div>
              <div className="px-5 pb-5">
                <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/15 border border-red-100/80 dark:border-red-900/30 mb-3">
                  <p className="text-[11px] font-semibold text-red-500 dark:text-red-400 uppercase mb-1.5 tracking-wider">Noto'g'ri</p>
                  <p className="text-sm text-surface-700 dark:text-surface-300">{ex.bad}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-100/80 dark:border-emerald-900/30">
                  <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-1.5 tracking-wider">To'g'ri</p>
                  <p className="text-sm text-surface-700 dark:text-surface-300">{ex.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Usage Table */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-50/80 dark:bg-surface-900/40 border border-surface-200/60 dark:border-surface-800/60">
        <h2 className="font-bold text-xl tracking-tight mb-6">Bosqichlar bo'yicha AI foydalanish</h2>
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
              <td className="py-4 pr-6"><span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" /><span className="font-medium">1-oy</span></span></td>
              <td className="py-4 pr-6 text-surface-600 dark:text-surface-400">O'qituvchi</td>
              <td className="py-4 text-surface-600 dark:text-surface-400">Savol-javob, tushuntirish, xato izohi. Kod yozish YO'Q.</td>
            </tr>
            <tr>
              <td className="py-4 pr-6"><span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-500" /><span className="font-medium">2-oy</span></span></td>
              <td className="py-4 pr-6 text-surface-600 dark:text-surface-400">Yordamchi</td>
              <td className="py-4 text-surface-600 dark:text-surface-400">Kod review, Copilot, debugging yordam.</td>
            </tr>
            <tr>
              <td className="py-4 pr-6"><span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /><span className="font-medium">3-oy</span></span></td>
              <td className="py-4 pr-6 text-surface-600 dark:text-surface-400">Sherik</td>
              <td className="py-4 text-surface-600 dark:text-surface-400">Boilerplate, refaktoring, test. Arxitektura — SIZ.</td>
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
    <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] mb-4">Foydali resurslar</h1>
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
              Bir vaqtda ko'p resurs o'rganmang — bitta tanlang va oxirigacha boring.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {resources.map(cat => (
          <div key={cat.category} className="p-6 sm:p-7 rounded-2xl border border-surface-200/80 dark:border-surface-800/80 bg-white dark:bg-surface-900/30 shadow-sm pdf-no-break">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-800/80 flex items-center justify-center text-surface-600 dark:text-surface-300">
                <MappedIcon name={cat.icon} size={20} />
              </div>
              <h3 className="font-bold text-lg tracking-tight">{cat.category}</h3>
            </div>
            <div className="space-y-0.5">
              {cat.items.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl">
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-0.5">{item.title}</p>
                  <p className="text-xs text-surface-500 dark:text-surface-400 leading-relaxed">{item.description}</p>
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
const PrintableDocumentContent = forwardRef(function PrintableDocumentContent({ theme }, ref) {
  const themeClass = theme === 'dark' ? 'dark' : ''

  return (
    <div
      ref={ref}
      id="pdf-printable"
      className={`printable-document ${themeClass} bg-white dark:bg-[#0a0a0a] text-surface-900 dark:text-surface-100`}
    >
      {/* Cover / Title */}
      <div className="px-8 pt-16 pb-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white shadow-lg mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">Coding + AI Roadmap</h1>
        <p className="text-lg text-surface-500 dark:text-surface-400">
          12 hafta &middot; 3 oy &middot; Bosqichma-bosqich dasturlashni o'rganing
        </p>
        <div className="mt-6 text-sm text-surface-400 dark:text-surface-500">
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
      <div className="mt-12 py-8 border-t border-surface-200/60 dark:border-surface-800/60 text-center text-sm text-surface-400 dark:text-surface-500">
        <p>Coding + AI Roadmap UZ — coding-ai-roadmap-uz</p>
        <p className="mt-1">{new Date().toLocaleDateString('uz-UZ')}</p>
      </div>
    </div>
  )
})

/* Portal wrapper — renders outside #root into #pdf-root */
function PrintableDocument(props) {
  const container = document.getElementById('pdf-root')
  if (!container) return null
  return createPortal(<PrintableDocumentContent {...props} />, container)
}

export default PrintableDocument
