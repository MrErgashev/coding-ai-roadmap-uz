# Coding + AI Roadmap UZ

3 oyda dasturlash asoslarini o'rganing va AI vositalaridan samarali foydalaning — to'liq **o'zbek tilida**.

## Loyiha haqida

Bu loyiha inglizcha "Master Coding Foundations and Leverage AI: 3-Month Roadmap" hujjati asosida yaratilgan interaktiv veb-sayt. Barcha kontent o'zbek tiliga tarjima qilingan va soddalashtirilib tayyorlangan.

### Xususiyatlar

- 12 haftalik bosqichma-bosqich yo'l xaritasi (roadmap)
- Interaktiv timeline va arxitektura diagrammasi
- Har hafta uchun accordion — maqsad, topshiriqlar, natija, resurslar
- Progress tracking — checkbox bilan, localStorage'da saqlanadi
- Qidiruv va filterlash — oy, texnologiya, kalit so'z bo'yicha
- Dark/Light mode
- Responsive dizayn — mobil va desktop
- AI'dan to'g'ri foydalanish qoidalari sahifasi
- Foydali resurslar ro'yxati
- Mermaid.js diagrammalar (mindmap)
- SEO optimizatsiya + OpenGraph meta teglar

### Texnologiyalar

- React 19 + Vite 7
- Tailwind CSS v4
- React Router (HashRouter)
- Mermaid.js (diagrammalar)

## Ishga tushirish

```bash
# Reponi klonlash
git clone https://github.com/MrErgashev/coding-ai-roadmap-uz.git
cd coding-ai-roadmap-uz

# Paketlarni o'rnatish
npm install

# Lokal server (development)
npm run dev

# Production build
npm run build

# Build'ni oldindan ko'rish
npm run preview
```

## GitHub Pages deploy

1. GitHub'da yangi repo yarating: `coding-ai-roadmap-uz`
2. Kodni push qiling
3. GitHub repo sozlamalarida: **Settings** > **Pages** > **Source** > `gh-pages` branch tanlang
4. Yoki quyidagi buyruqni ishlating:

```bash
npm run build
npx gh-pages -d dist
```

## Loyiha tuzilmasi

```
src/
  data/roadmap.json     — Barcha kontent (12 hafta, AI qoidalar, resurslar)
  hooks/                — useTheme, useProgress, useSearch
  components/
    layout/             — Header, Footer, Layout
    home/               — Hero, MonthCard, Timeline, ArchitectureDiagram
    roadmap/            — WeekAccordion, FilterBar, MonthSection
    ai-rules/           — RuleCard
    resources/          — ResourceList
    shared/             — ThemeToggle, SearchInput, MermaidDiagram
  pages/                — Home, Roadmap, AIRules, Resources
```

## Kontent

Barcha kontent `src/data/roadmap.json` faylida saqlanadi. Yangi hafta, resurs yoki qoida qo'shmoqchi bo'lsangiz — shu faylni tahrirlang.

## Litsenziya

MIT
