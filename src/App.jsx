import { useEffect, useMemo, useState } from 'react'
import NavMenu from './components/NavMenu'
import Banner from './components/Banner'
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
      { name: 'Local Informations', href: '#local-info', id: 'local-info' },
      { name: 'Schedule', href: '#schedule', id: 'schedule' },
      { name: 'Poster', href: '#poster', id: 'poster' },
      { name: 'Funding', href: '#funding', id: 'funding' },
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
      case 'Local Informations':
        return <LocalInfo />
      case 'Schedule':
        return <Schedule />
      case 'Poster':
        return <Poster />
      case 'Funding':
        return <Sponsors />
      case 'Home':
      default:
        return <Home />
    }
  }

  // Placeholder links - replace with actual URLs
  const sponsorLinks = {
    logo1: 'https://www.uni-goettingen.de/de/20693.html',
    logoGso: 'https://gsonet.org/',
    logoKlausTschira: 'https://klaus-tschira-stiftung.de/',
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Sticky Navigation */}
      <NavMenu
        items={menuItems}
        activePage={activePage}
        onNavigate={handleNavClick}
      />

      {/* Banner - scrolls with content */}
      <Banner />

      {/* Main Content - grows to fill space */}
      <main style={{ 
        backgroundColor: 'white',
        flex: 1
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '48px 24px'
        }}>
          {renderActivePage()}
        </div>
      </main>

      {/* Footer - always at bottom */}
      <footer style={{
        backgroundColor: '#1e3a5f',
        color: 'rgba(255, 255, 255, 0.7)',
        padding: '32px 24px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {/* Sponsor Logos */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            marginBottom: '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>            
            <a 
              href={sponsorLinks.logoGso}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              <img 
                src="/logo_gso.png" 
                alt="GSO Logo" 
                style={{ 
                  height: '50px',
                  width: 'auto',
                  backgroundColor: 'white',
                  padding: '6px 10px',
                  borderRadius: '4px'
                }}
              />
            </a>
            
            <a 
              href={sponsorLinks.logoKlausTschira}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              <img 
                src="/logo_klaus_tschira.svg" 
                alt="Klaus Tschira Foundation" 
                style={{ 
                  height: '60px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.9'}
              />
            </a>
            <a 
              href={sponsorLinks.logo1}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              <img 
                src="/logo1.svg" 
                alt="University Logo" 
                style={{ 
                  height: '60px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.9'}
              />
            </a>
          </div>

          {/* Copyright */}
          <div style={{ textAlign: 'center', fontSize: '14px' }}>
            © 2026 Pseudodifferential Techniques in Singular Analysis
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
