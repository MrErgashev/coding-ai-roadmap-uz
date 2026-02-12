import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, dark, toggleTheme }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header dark={dark} toggleTheme={toggleTheme} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
