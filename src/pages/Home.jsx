function Home() {
  const speakers = [
    { name: 'Clara Adana', affiliation: 'TBD' },
    { name: 'Bernd Ammann', affiliation: 'Universität Regensburg' },
    { name: 'Iakovos Androulidakis', affiliation: 'University of Athens' },
    { name: 'Abdou Oussama Benabida', affiliation: 'Université du Québec à Montréal' },
    { name: 'Karsten Bohlen', affiliation: 'Universität Regensburg' },
    { name: 'Alessandro Pietro Contini', affiliation: 'Universität Hannover' },
    { name: 'Ksenia Fedosova', affiliation: 'Universität Münster' },
    { name: 'Daniel Grieser', affiliation: 'Universität Oldenburg' },
    { name: 'Lucas Lemoine', affiliation: 'Université Paris Est Créteil' },
    { name: 'Jean-Marie Lescure', affiliation: 'Université Paris Est Créteil' },
    { name: 'Richard Melrose', affiliation: 'MIT' },
    { name: 'Omar Mohsen', affiliation: 'Paris-Cité University' },
    { name: 'Sergiu Moroianu', affiliation: 'Universitatea din București & IMAR' },
    { name: 'Victor Nistor', affiliation: 'Université de Lorraine' },
    { name: 'Paolo Piazza', affiliation: 'Università di Roma' },
    { name: 'Frédéric Rochon', affiliation: 'Université du Québec à Montréal' },
    { name: 'Julie Rowlett', affiliation: 'Chalmers University' },
    { name: 'Thomas Schick', affiliation: 'Universität Göttingen' },
    { name: 'Vito Felice Zenobi', affiliation: 'Istituto Nazionale di Alta Matematica' },
  ]

  const scientificOrganizers = [
    { name: 'Cipriana Anghel', affiliation: 'Universität Göttingen' },
    { name: 'Álvaro Sanchez Hernandez', affiliation: 'Universität Hannover' },
    { name: 'Clément Cren', affiliation: 'Universität Göttingen' },
    { name: 'Erfan Rezaei', affiliation: 'Universität Göttingen' },
    { name: 'Rareș Stan', affiliation: 'IMAR Bucharest' },
  ]

  const administration = [
    'Linda Haber',
    'Annalena Wendehorst',
  ]

  const sectionTitleStyle = {
    fontSize: '23px',
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
      <section className="section-speakers" style={{ marginBottom: '48px' }}>
        <h2 style={sectionTitleStyle}>Confirmed Speakers</h2>
        <div className="speakers-list">
          {speakers.map((speaker, index) => (
            <div key={index} style={{ ...listItemStyle, breakInside: 'avoid' }}>
              <span style={bulletStyle}>■</span>
              <span style={{ fontWeight: 500 }}>{speaker.name}</span>
              {/* <span style={{ color: '#666', marginLeft: '4px' }}>({speaker.affiliation})</span> */}
            </div>
          ))}
        </div>
      </section>

      {/* Organizers Section */}
      <section className="section-organizers">
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
                <span style={{ fontWeight: 500 }}>{organizer.name}</span>
                <span style={{ color: '#666', marginLeft: '4px' }}>({organizer.affiliation})</span>
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

      {/* Animations and responsive styles */}
      <style>{`
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .section-speakers {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .section-organizers {
          animation: slideFromRight 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
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
