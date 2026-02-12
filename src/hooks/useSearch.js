import { useState, useMemo, useCallback } from 'react'

export function useSearch(months) {
  const [query, setQuery] = useState('')
  const [monthFilter, setMonthFilter] = useState('all')
  const [techFilter, setTechFilter] = useState('all')

  const allTechnologies = useMemo(() => {
    const set = new Set()
    for (const m of months) {
      for (const w of m.weeks) {
        for (const t of w.technologies) set.add(t)
      }
    }
    return Array.from(set).sort()
  }, [months])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return months.map(month => {
      if (monthFilter !== 'all' && month.id !== Number(monthFilter)) return null
      const weeks = month.weeks.filter(week => {
        if (techFilter !== 'all' && !week.technologies.includes(techFilter)) return false
        if (!q) return true
        return (
          week.title.toLowerCase().includes(q) ||
          week.goal.toLowerCase().includes(q) ||
          week.tasks.some(t => t.toLowerCase().includes(q)) ||
          week.technologies.some(t => t.toLowerCase().includes(q)) ||
          week.deliverable.toLowerCase().includes(q)
        )
      })
      if (weeks.length === 0) return null
      return { ...month, weeks }
    }).filter(Boolean)
  }, [months, query, monthFilter, techFilter])

  const reset = useCallback(() => {
    setQuery('')
    setMonthFilter('all')
    setTechFilter('all')
  }, [])

  return {
    query, setQuery,
    monthFilter, setMonthFilter,
    techFilter, setTechFilter,
    allTechnologies,
    filtered,
    reset,
    hasFilters: query !== '' || monthFilter !== 'all' || techFilter !== 'all'
  }
}
