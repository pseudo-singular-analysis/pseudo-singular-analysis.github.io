function Button({ children, isActive = false, onClick, href }) {
  const baseStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
    borderRadius: '9999px',
    transition: 'all 0.15s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  }

  const activeStyle = {
    ...baseStyle,
    backgroundColor: 'white',
    color: '#2563eb',
    border: '1px solid #bfdbfe',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
  }

  const inactiveStyle = {
    ...baseStyle,
    backgroundColor: 'transparent',
    color: '#475569',
    border: '1px solid transparent'
  }

  const style = isActive ? activeStyle : inactiveStyle

  const handleMouseEnter = (e) => {
    if (!isActive) {
      e.target.style.backgroundColor = '#e2e8f0'
      e.target.style.color = '#1e293b'
    }
  }

  const handleMouseLeave = (e) => {
    if (!isActive) {
      e.target.style.backgroundColor = 'transparent'
      e.target.style.color = '#475569'
    }
  }

  if (href) {
    return (
      <a 
        href={href} 
        onClick={onClick} 
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      onClick={onClick} 
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}

export default Button
