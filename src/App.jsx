import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import AIRules from './pages/AIRules'
import Resources from './pages/Resources'
import { useTheme } from './hooks/useTheme'
import { useProgress } from './hooks/useProgress'
import { useSearch } from './hooks/useSearch'
import data from './data/roadmap.json'

export default function App() {
  const { dark, toggle } = useTheme()
  const { isChecked, toggle: toggleTask, getWeekProgress, getTotalProgress, resetAll } = useProgress()
  const searchProps = useSearch(data.months)
  const totalProgress = getTotalProgress(data.months)

  return (
    <HashRouter>
      <Layout dark={dark} toggleTheme={toggle}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                months={data.months}
                totalProgress={totalProgress}
                getWeekProgress={getWeekProgress}
              />
            }
          />
          <Route
            path="/roadmap"
            element={
              <Roadmap
                months={data.months}
                searchProps={searchProps}
                isChecked={isChecked}
                toggleTask={toggleTask}
                getWeekProgress={getWeekProgress}
                totalProgress={totalProgress}
                resetProgress={resetAll}
              />
            }
          />
          <Route path="/ai-rules" element={<AIRules />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
