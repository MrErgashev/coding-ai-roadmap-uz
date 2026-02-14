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

  // Small delay so styles settle, then trigger print
  requestAnimationFrame(() => {
    window.print()
  })
}
