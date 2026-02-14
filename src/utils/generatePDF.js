export default function triggerPrint(theme) {
  const printEl = document.getElementById('pdf-printable')
  if (!printEl) {
    console.error('Printable document not found')
    return
  }

  // Apply selected theme
  if (theme === 'dark') {
    printEl.classList.add('dark')
  } else {
    printEl.classList.remove('dark')
  }

  // Temporarily make printable doc visible and in-flow so browser
  // computes correct layout before generating print preview
  const root = document.getElementById('root')

  // Hide app, show print doc
  root.style.display = 'none'
  printEl.style.position = 'static'
  printEl.style.left = 'auto'
  printEl.style.overflow = 'visible'
  printEl.style.width = '100%'

  // Let browser render one frame, then print
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.print()

      // Restore after print dialog closes
      root.style.display = ''
      printEl.style.position = ''
      printEl.style.left = ''
      printEl.style.overflow = ''
      printEl.style.width = ''
    })
  })
}
