function Home() {
  const speakers = [
    'Bernd Ammann',
    'Iakovos Androulidakis',
    'Abdou Oussama Benabida',
    'Karsten Bohlen',
    'Ksenia Fedosova',
    'Daniel Grieser',
    'Lucas Lemoine',
    'Jean-Marie Lescure',
    'Richard Melrose',
    'Omar Mohsen',
    'Sergiu Moroianu',
    'Victor Nistor',
    'Paolo Piazza',
    'Frédéric Rochon',
    'Julie Rowlett',
    'Thomas Schick',
    'Vito Felice Zenobi',
  ]

  const scientificOrganizers = [
    'Cipriana Anghel',
    'Álvaro Sanchez Hernandez',
    'Clément Cren',
    'Erfan Rezaei',
    'Rareș Stan',
  ]

  const administration = [
    'Annalena',
    'Linda',
  ]

  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1e3a5f',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #e0e0e0'
  }

  const subSectionTitleStyle = {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1e3a5f',
    marginBottom: '12px',
    marginTop: '24px'
  }

  const listItemStyle = {
    fontSize: '15px',
    color: '#333',
    padding: '4px 0',
    paddingLeft: '16px',
    position: 'relative',
    lineHeight: 1.6
  }

  const bulletStyle = {
    position: 'absolute',
    left: 0,
    color: '#1e3a5f'
  }

  return (
    <div>
      {/* Confirmed Speakers Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={sectionTitleStyle}>Confirmed Speakers</h2>
        <div className="speakers-list">
          {speakers.map((speaker, index) => (
            <div key={index} style={listItemStyle}>
              <span style={bulletStyle}>■</span>
              {speaker}
            </div>
          ))}
        </div>
      </section>

      {/* Organizers Section */}
      <section>
        <h2 style={sectionTitleStyle}>Organizers</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px'
        }} className="organizers-grid">
          {/* Scientific Column */}
          <div>
            <h3 style={subSectionTitleStyle}>Scientific</h3>
            {scientificOrganizers.map((organizer, index) => (
              <div key={index} style={listItemStyle}>
                <span style={bulletStyle}>■</span>
                {organizer}
              </div>
            ))}
          </div>

          {/* Administration Column */}
          <div>
            <h3 style={subSectionTitleStyle}>Administration</h3>
            {administration.map((admin, index) => (
              <div key={index} style={listItemStyle}>
                <span style={bulletStyle}>■</span>
                {admin}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        .speakers-list {
          column-count: 3;
          column-gap: 32px;
        }
        @media (max-width: 800px) {
          .speakers-list {
            column-count: 2;
          }
          .organizers-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .speakers-list {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
