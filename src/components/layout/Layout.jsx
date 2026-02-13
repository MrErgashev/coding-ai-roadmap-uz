import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, dark, toggleTheme }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-surface-950 transition-colors duration-200">
      <Header dark={dark} toggleTheme={toggleTheme} />
      <main className="flex-1 page-enter">{children}</main>
      <Footer />
    </div>
  )
}
