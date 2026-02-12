import { useEffect, useRef, useId } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
  fontFamily: 'Inter, sans-serif',
})

export default function MermaidDiagram({ chart, className = '' }) {
  const ref = useRef(null)
  const id = useId().replace(/:/g, '_')

  useEffect(() => {
    if (!ref.current || !chart) return
    const render = async () => {
      try {
        const { svg } = await mermaid.render(`mermaid${id}`, chart)
        ref.current.innerHTML = svg
      } catch {
        ref.current.innerHTML = '<p class="text-sm text-gray-500">Diagramma yuklanmadi</p>'
      }
    }
    render()
  }, [chart, id])

  return (
    <div
      ref={ref}
      className={`flex justify-center overflow-x-auto ${className}`}
    />
  )
}
