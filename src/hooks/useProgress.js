import { useState, useCallback } from 'react'

const STORAGE_KEY = 'roadmap-progress'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(load)

  const toggle = useCallback((weekId, taskIndex) => {
    setProgress(prev => {
      const key = String(weekId)
      const tasks = prev[key] || []
      const next = tasks.includes(taskIndex)
        ? tasks.filter(i => i !== taskIndex)
        : [...tasks, taskIndex]
      const updated = { ...prev, [key]: next }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const isChecked = useCallback((weekId, taskIndex) => {
    return (progress[String(weekId)] || []).includes(taskIndex)
  }, [progress])

  const getWeekProgress = useCallback((weekId, totalTasks) => {
    const done = (progress[String(weekId)] || []).length
    return totalTasks > 0 ? Math.round((done / totalTasks) * 100) : 0
  }, [progress])

  const getTotalProgress = useCallback((months) => {
    let total = 0
    let done = 0
    for (const month of months) {
      for (const week of month.weeks) {
        total += week.tasks.length
        done += (progress[String(week.id)] || []).length
      }
    }
    return total > 0 ? Math.round((done / total) * 100) : 0
  }, [progress])

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setProgress({})
  }, [])

  return { progress, toggle, isChecked, getWeekProgress, getTotalProgress, resetAll }
}
