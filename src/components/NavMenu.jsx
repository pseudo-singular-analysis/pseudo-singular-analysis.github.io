import { useState } from 'react'

function NavMenu({ items, activePage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (item) => {
    onNavigate(item)
    setIsMenuOpen(false)
  }

  const linkStyle = (isActive) => ({
    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
    fontWeight: isActive ? 700 : 400,
    fontSize: '15px',
    textDecoration: 'none',
    padding: '8px 12px',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  })

  return (
    <>
      <nav style={{ 
        backgroundColor: '#1e3a5f',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '8px',
            height: '50px'
          }}>
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavigate(item)}
                style={linkStyle(activePage === item.name)}
                onMouseEnter={(e) => {
                  if (activePage !== item.name) {
                    e.target.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activePage !== item.name) {
                    e.target.style.color = 'rgba(255, 255, 255, 0.8)'
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-nav" style={{ 
            display: 'none',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '50px'
          }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                padding: '8px',
                color: 'white',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {!isMenuOpen ? (
                <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu" style={{
            backgroundColor: '#1e3a5f',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '12px 24px'
          }}>
            <div style={{ 
              maxWidth: '1200px', 
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavigate(item)}
                  style={{
                    ...linkStyle(activePage === item.name),
                    padding: '12px 0',
                    display: 'block'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 800px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default NavMenu
