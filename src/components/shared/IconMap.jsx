import { SiPython, SiJavascript, SiFlask } from 'react-icons/si'
import {
  LuDatabase, LuBot, LuRocket, LuGlobe, LuSettings, LuMonitor,
  LuCalendarDays, LuCheckCircle, LuZap, LuWrench, LuBookOpen,
  LuBlocks, LuClipboardList, LuLaptop, LuPalette, LuFlag,
  LuGraduationCap, LuSearch, LuDumbbell, LuBarChart3, LuTrophy,
  LuTriangleAlert,
} from 'react-icons/lu'

const iconMap = {
  // Technology brands
  'python': SiPython,
  'javascript': SiJavascript,
  'flask': SiFlask,
  // Generic / concept
  'database': LuDatabase,
  'robot': LuBot,
  'rocket': LuRocket,
  'globe': LuGlobe,
  'settings': LuSettings,
  'monitor': LuMonitor,
  'calendar': LuCalendarDays,
  'check-circle': LuCheckCircle,
  'zap': LuZap,
  'wrench': LuWrench,
  'book-open': LuBookOpen,
  'blocks': LuBlocks,
  'clipboard': LuClipboardList,
  'laptop': LuLaptop,
  'palette': LuPalette,
  'flag': LuFlag,
  'graduation': LuGraduationCap,
  'search': LuSearch,
  'dumbbell': LuDumbbell,
  'bar-chart': LuBarChart3,
  'trophy': LuTrophy,
  'alert': LuTriangleAlert,
}

export default function MappedIcon({ name, size = 28, className = '' }) {
  const IconComponent = iconMap[name]
  if (!IconComponent) return <span>{name}</span>
  return <IconComponent size={size} className={className} />
}
