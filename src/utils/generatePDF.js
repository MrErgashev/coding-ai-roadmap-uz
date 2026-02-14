import roadmapData from '../data/roadmap.json'

const monthColors = {
  1: { primary: '#2563eb', light: '#eff6ff', border: '#bfdbfe' },
  2: { primary: '#7c3aed', light: '#f5f3ff', border: '#ddd6fe' },
  3: { primary: '#059669', light: '#ecfdf5', border: '#a7f3d0' },
}

export default function generatePDF() {
  const { months } = roadmapData

  const html = `<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<title>Coding + AI Roadmap — 12 haftalik dastur</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    color: #1a1a1a;
    line-height: 1.6;
    padding: 32px;
    font-size: 11px;
  }
  h1 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
  .subtitle { color: #737373; font-size: 12px; margin-bottom: 24px; }
  .month {
    margin-bottom: 28px;
    page-break-inside: avoid;
  }
  .month-header {
    padding: 10px 16px;
    border-radius: 8px;
    margin-bottom: 12px;
    color: white;
    font-weight: 700;
    font-size: 14px;
  }
  .month-desc {
    font-size: 11px;
    color: #525252;
    margin-bottom: 12px;
    padding: 0 4px;
  }
  .week {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    margin-bottom: 10px;
    page-break-inside: avoid;
    overflow: hidden;
  }
  .week-header {
    padding: 8px 14px;
    font-weight: 700;
    font-size: 12px;
    border-bottom: 1px solid #e5e5e5;
    background: #fafafa;
  }
  .week-body { padding: 10px 14px; }
  .goal-box {
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 10.5px;
  }
  .goal-label {
    font-weight: 700;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }
  .tasks-title {
    font-weight: 700;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #a3a3a3;
    margin-bottom: 6px;
  }
  .task {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 4px;
    font-size: 10.5px;
  }
  .checkbox {
    width: 12px;
    height: 12px;
    border: 1.5px solid #d4d4d4;
    border-radius: 3px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .deliverable-box {
    padding: 8px 12px;
    border-radius: 6px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    margin-top: 10px;
    font-size: 10.5px;
  }
  .deliverable-label {
    font-weight: 700;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #059669;
    margin-bottom: 2px;
  }
  .ai-box {
    padding: 8px 12px;
    border-radius: 6px;
    background: #f5f3ff;
    border: 1px solid #ddd6fe;
    margin-top: 8px;
    font-size: 10.5px;
  }
  .ai-label {
    font-weight: 700;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #7c3aed;
    margin-bottom: 2px;
  }
  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 8px;
  }
  .tech-tag {
    padding: 2px 8px;
    border-radius: 4px;
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    font-size: 9px;
    font-weight: 600;
    color: #525252;
  }
  .resources {
    margin-top: 8px;
  }
  .resources-title {
    font-weight: 700;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #a3a3a3;
    margin-bottom: 4px;
  }
  .resource {
    font-size: 10px;
    color: #2563eb;
    margin-bottom: 2px;
  }
  .footer {
    margin-top: 32px;
    padding-top: 16px;
    border-top: 1px solid #e5e5e5;
    font-size: 10px;
    color: #a3a3a3;
    text-align: center;
  }
  @media print {
    body { padding: 20px; }
    .week { page-break-inside: avoid; }
    .month { page-break-inside: avoid; }
  }
</style>
</head>
<body>
<h1>Coding + AI Roadmap</h1>
<p class="subtitle">12 hafta · 3 oy · Bosqichma-bosqich dasturlashni o'rganing</p>

${months.map(month => {
  const colors = monthColors[month.id]
  return `
<div class="month">
  <div class="month-header" style="background: ${colors.primary};">
    ${month.id}-oy: ${month.title}
  </div>
  <p class="month-desc">${month.description}</p>
  ${month.weeks.map(week => `
  <div class="week">
    <div class="week-header">${week.id}-hafta: ${week.title}</div>
    <div class="week-body">
      <div class="goal-box" style="background: ${colors.light}; border: 1px solid ${colors.border};">
        <div class="goal-label" style="color: ${colors.primary};">Maqsad</div>
        ${week.goal}
      </div>
      <div class="tasks-title">Topshiriqlar</div>
      ${week.tasks.map(task => `
      <div class="task">
        <div class="checkbox"></div>
        <span>${task}</span>
      </div>`).join('')}
      <div class="deliverable-box">
        <div class="deliverable-label">Natija</div>
        ${week.deliverable}
      </div>
      ${week.aiUsage ? `
      <div class="ai-box">
        <div class="ai-label">AI'dan foydalanish</div>
        ${week.aiUsage}
      </div>` : ''}
      <div class="techs">
        ${week.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      ${week.resources && week.resources.length > 0 ? `
      <div class="resources">
        <div class="resources-title">Resurslar</div>
        ${week.resources.map(r => `<div class="resource">• ${r.title}</div>`).join('')}
      </div>` : ''}
    </div>
  </div>`).join('')}
</div>`
}).join('')}

<div class="footer">
  Coding + AI Roadmap UZ — coding-ai-roadmap-uz · ${new Date().toLocaleDateString('uz-UZ')}
</div>
</body>
</html>`

  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('Iltimos, popup blokirovkasini o\'chiring va qaytadan urinib ko\'ring.')
    return
  }
  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.onload = () => {
    printWindow.print()
  }
}
