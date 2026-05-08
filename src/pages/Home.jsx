function Home() {
  const speakers = [
    { name: 'Clara Aldana', affiliation: 'TBD', website: 'https://claraaldana.com/' },
    { name: 'Bernd Ammann', affiliation: 'Universität Regensburg', website: 'https://ammann.app.uni-regensburg.de/' },
    { name: 'Iakovos Androulidakis', affiliation: 'University of Athens', website: 'http://scholar.uoa.gr/iandroul/biocv' },
    { name: 'Abdou Oussama Benabida', affiliation: 'Université du Québec à Montréal', website: 'https://abdou-oussama-benabida.vercel.app/' },
    { name: 'Karsten Bohlen', affiliation: 'Universität Regensburg', website: 'https://sites.google.com/view/kbohlen/start' },
    { name: 'Alessandro Pietro Contini', affiliation: 'Universität Hannover', website: 'https://www.analysis.uni-hannover.de/institut/personenverzeichnis/personen-detailansicht/institut-fuer-analysis/wissenschaftliche-mitarbeiterinnen-und-mitarbeiter-2/alessandro-pietro-contini' },
    { name: 'Ksenia Fedosova', affiliation: 'Universität Münster', website: 'https://www.uni-muenster.de/FB10/Service/show_perspage.shtml?id=1783' },
    { name: 'Daniel Grieser', affiliation: 'Universität Oldenburg', website: 'https://uol.de/daniel-grieser' },
    { name: 'Lucas Lemoine', affiliation: 'Université Paris Est Créteil', website: 'https://lama-umr8050.fr/membres/lemoine.lucas' },
    { name: 'Jean-Marie Lescure', affiliation: 'Université Paris Est Créteil', website: 'https://lama-umr8050.fr/membres/lescure.jean_marie' },
    { name: 'Jørgen Olsen Lye', affiliation: 'University of Köln', website: 'https://www.joergenolsenlye.com/' },
    { name: 'Richard Melrose', affiliation: 'MIT', website: 'https://math.mit.edu/~rbm/' },
    { name: 'Omar Mohsen', affiliation: 'Paris-Cité University', website: 'https://sites.google.com/view/omar-mohsen-webpage/home' },
    { name: 'Sergiu Moroianu', affiliation: 'Universitatea din București & IMAR', website: 'https://www.imar.ro/~sergium/' },
    { name: 'Victor Nistor', affiliation: 'Université de Lorraine', website: 'https://victor-nistor.apps.math.cnrs.fr/' },
    { name: 'Paolo Piazza', affiliation: 'Università di Roma', website: 'https://research.uniroma1.it/researcher/f92bef1a8f2f1066d80ce36539412fe083a105b7f1a73473875ba2f4' },
    { name: 'Frédéric Rochon', affiliation: 'Université du Québec à Montréal', website: 'http://profmath.uqam.ca/~rochon/' },
    { name: 'Julie Rowlett', affiliation: 'Chalmers University', website: 'https://www.math.chalmers.se/~rowlett/' },
    { name: 'Thomas Schick', affiliation: 'Universität Göttingen', website: 'https://topologie.math.uni-goettingen.de/tschick/index.html' },
    { name: 'Vito Felice Zenobi', affiliation: 'Istituto Nazionale di Alta Matematica', website: 'https://research.uniroma1.it/researcher/baaae8f5e2d25c8f732136be70ceb983a92bfc084144b274678da21f' },
  ]

  const scientificOrganizers = [
    { name: 'Cipriana Anghel', affiliation: 'Universität Göttingen', website: 'https://sites.google.com/view/anghelcipriana/home' },
    { name: 'Álvaro Sánchez Hernández', affiliation: 'Universität Hannover' },
    { name: 'Clément Cren', affiliation: 'Universität Göttingen', website: 'https://clementcren.github.io/' },
    { name: 'Erfan Rezaei', affiliation: 'Universität Göttingen' },
    { name: 'Rareș Stan', affiliation: 'IMAR Bucharest', website: 'https://www.rares-stan.ro/home' },
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

  const paragraphStyle = {
    fontSize: '15px',
    color: '#333',
    lineHeight: 1.7,
    marginBottom: '16px'
  }

  return (
    <div>
      {/* About Section */}
      <section className="section-about" style={{ marginBottom: '48px' }}>
        <p style={paragraphStyle}>
          Around 60 years ago, pseudodifferential operators were introduced as a tool for singular integral and elliptic problems in PDE. They quickly became relevant due to their usefulness, exemplified by their role in the Atiyah–Singer index theorem. In the subsequent years, the theory has found new depths and domains of application, and is today very much alive, in particular in the context of singular analytical and geometrical structures.
        </p>
        <p style={{ ...paragraphStyle, marginBottom: '24px' }}>
          The goal of this conference is to bring together experts and young researchers from various backgrounds who are interested in the use of pseudodifferential operators in singular settings to discuss their recent projects and results, and foster the communication between the diverse perspectives on the topic.
        </p>
        <p style={{ textAlign: 'center', margin: 0 }}>
          <a
            href="#registration"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              backgroundColor: '#1e3a5f',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#2d5a7b')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1e3a5f')}
          >
            Register for the conference →
          </a>
        </p>
      </section>

      {/* Confirmed Speakers Section */}
      <section className="section-speakers" style={{ marginBottom: '48px' }}>
        <h2 style={sectionTitleStyle}>Confirmed Speakers</h2>
        <div className="speakers-list">
          {speakers.map((speaker, index) => (
            <div key={index} style={{ ...listItemStyle, breakInside: 'avoid' }}>
              <span style={bulletStyle}>■</span>
              <span style={{ fontWeight: 500 }}>
                {speaker.website ? (
                  <a href={speaker.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    {speaker.name}
                  </a>
                ) : (
                  speaker.name
                )}
              </span>
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
                <span style={{ fontWeight: 500 }}>
                  {organizer.website ? (
                    <a href={organizer.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {organizer.name}
                    </a>
                  ) : (
                    organizer.name
                  )}
                </span>
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
        
        .section-about {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .section-speakers {
          animation: slideFromRight 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .section-organizers {
          animation: slideFromRight 0.6s ease-out 0.6s forwards;
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
