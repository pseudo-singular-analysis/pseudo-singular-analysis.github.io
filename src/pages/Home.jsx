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
    'Rares Stan',
  ]

  const administration = [
    'Annalena',
    'Linda',
  ]

  const cardStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    border: '1px solid #e2e8f0'
  }

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '2px solid #e2e8f0'
  }

  const columnTitleStyle = {
    fontSize: '14px',
    fontWeight: 600,
    color: '#64748b',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const nameStyle = {
    fontSize: '15px',
    color: '#475569',
    padding: '6px 0',
    lineHeight: 1.4
  }

  return (
    <div>
      {/* Responsive styles */}
      <style>{`
        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px 24px;
        }
        @media (max-width: 700px) {
          .speakers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .speakers-grid {
            grid-template-columns: 1fr;
          }
        }
        .organizers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 500px) {
          .organizers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Confirmed Speakers Card */}
      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Confirmed Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} style={nameStyle}>
              {speaker}
            </div>
          ))}
        </div>
      </div>

      {/* Organizers Card */}
      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Organizers</h2>
        <div className="organizers-grid">
          {/* Scientific Column */}
          <div>
            <h3 style={columnTitleStyle}>Scientific</h3>
            {scientificOrganizers.map((organizer, index) => (
              <div key={index} style={nameStyle}>
                {organizer}
              </div>
            ))}
          </div>

          {/* Administration Column */}
          <div>
            <h3 style={columnTitleStyle}>Administration</h3>
            {administration.map((admin, index) => (
              <div key={index} style={nameStyle}>
                {admin}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
