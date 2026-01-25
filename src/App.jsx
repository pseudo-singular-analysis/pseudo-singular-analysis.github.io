import { useEffect, useMemo, useState } from 'react'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import Registration from './pages/Registration'
import LocalInfo from './pages/LocalInfo'
import Schedule from './pages/Schedule'
import Poster from './pages/Poster'
import Sponsors from './pages/Sponsors'

function App() {
  const [activePage, setActivePage] = useState('Home')

  const menuItems = useMemo(
    () => [
      { name: 'Home', href: '#home', id: 'home' },
      { name: 'Registration', href: '#registration', id: 'registration' },
      { name: 'Local-Info', href: '#local-info', id: 'local-info' },
      { name: 'Schedule', href: '#schedule', id: 'schedule' },
      { name: 'Poster', href: '#poster', id: 'poster' },
      { name: 'Sponsors', href: '#sponsors', id: 'sponsors' },
    ],
    [],
  )

  useEffect(() => {
    const updateActivePage = () => {
      const hash = window.location.hash.slice(1) || 'home'
      const item = menuItems.find((item) => item.id === hash)
      if (item) {
        setActivePage(item.name)
      }
    }

    updateActivePage()
    window.addEventListener('hashchange', updateActivePage)
    return () => window.removeEventListener('hashchange', updateActivePage)
  }, [menuItems])

  const handleNavClick = (item) => {
    setActivePage(item.name)
  }

  const renderActivePage = () => {
    switch (activePage) {
      case 'Registration':
        return <Registration />
      case 'Local-Info':
        return <LocalInfo />
      case 'Schedule':
        return <Schedule />
      case 'Poster':
        return <Poster />
      case 'Sponsors':
        return <Sponsors />
      case 'Home':
      default:
        return <Home />
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#e2e8f0' }}>
      {/* Body wrapper - centers content with max-width */}
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: 'white', minHeight: '100vh', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <NavMenu
            items={menuItems}
            activePage={activePage}
            onNavigate={handleNavClick}
          />

          {/* Main Content */}
          <main style={{ padding: '40px 24px' }}>
            {renderActivePage()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
