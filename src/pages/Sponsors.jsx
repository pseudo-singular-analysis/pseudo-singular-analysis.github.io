function Sponsors() {
  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1e3a5f',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #e0e0e0'
  }

  return (
    <div>
      <section>
        <h2 style={sectionTitleStyle}>Sponsors & Partners</h2>
        
        <p style={{ 
          fontSize: '15px', 
          color: '#333', 
          lineHeight: 1.6
        }}>
          We gratefully acknowledge the support of our sponsors and partners. 
          Their logos are displayed in the footer of this website.
        </p>
      </section>
    </div>
  )
}

export default Sponsors
