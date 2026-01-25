import { useState } from 'react'
import Button from './Button'

function NavMenu({ items, activePage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (item) => {
    onNavigate(item)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav style={{ 
        backgroundColor: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ padding: '16px 24px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
          }}>
            
            {/* Left side - Conference Info */}
            <div style={{ flexShrink: 1, minWidth: 0 }}>
              <h1 style={{ 
                fontSize: '16px', 
                fontWeight: 600, 
                color: '#1e293b',
                margin: 0,
                lineHeight: 1.4
              }}>
                Pseudodifferential Techniques in Singular Analysis
              </h1>
              <p style={{ 
                fontSize: '14px', 
                color: '#475569',
                margin: '4px 0 0 0'
              }}>
                Mathematisches Institut Georg-August-Universität Göttingen
              </p>
              <p style={{ 
                fontSize: '14px', 
                color: '#64748b',
                margin: '2px 0 0 0'
              }}>
                31 August - 4 September 2026
              </p>
            </div>

            {/* Right side - Desktop Navigation */}
            <div className="desktop-nav" style={{ 
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              marginLeft: '24px'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                backgroundColor: '#f1f5f9',
                borderRadius: '9999px',
                padding: '6px',
                border: '1px solid #e2e8f0'
              }}>
                {items.map((item) => (
                  <Button
                    key={item.name}
                    href={item.href}
                    isActive={activePage === item.name}
                    onClick={() => handleNavigate(item)}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn" style={{ 
              display: 'none',
              flexShrink: 0,
              marginLeft: '16px'
            }}>
              <button
                onClick={() => setIsMenuOpen(true)}
                style={{
                  padding: '10px',
                  borderRadius: '9999px',
                  color: '#475569',
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open menu</span>
                <svg style={{ height: '20px', width: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu Overlay */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 100
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div 
        id="mobile-menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          maxWidth: '80vw',
          backgroundColor: 'white',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
          zIndex: 101,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Menu Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <span style={{ 
            fontSize: '16px', 
            fontWeight: 600, 
            color: '#1e293b' 
          }}>
            Menu
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              padding: '8px',
              borderRadius: '9999px',
              color: '#475569',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div style={{ 
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {items.map((item) => {
            const isActive = activePage === item.name
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavigate(item)}
                style={{
                  padding: '12px 16px',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#2563eb' : '#475569',
                  backgroundColor: isActive ? '#eff6ff' : 'transparent',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = '#f1f5f9'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </div>

      {/* CSS for responsive behavior - direct jump from desktop to mobile */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default NavMenu
