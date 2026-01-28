function LocalInfo() {
  const hotels = [
    { name: 'Leine Hotel', url: 'https://www.leinehotel-goe.de/' },
    { name: 'Eden Hotel', url: 'https://www.eden-hotel.de/Eden-Hotel-Gottingen-0527304550.html' },
    { name: 'Hotel Central', url: 'https://www.hotel-central.com/home.html' },
    { name: 'Hotel Stadt Hannover', url: 'https://www.hotelstadthannover.de/english/' },
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
    fontSize: '18px',
    fontWeight: 600,
    color: '#1e3a5f',
    marginBottom: '12px',
    marginTop: '24px'
  }

  const paragraphStyle = {
    fontSize: '15px',
    color: '#333',
    lineHeight: 1.7,
    marginBottom: '16px'
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
      {/* Arriving in Göttingen Section */}
      <section className="section-arriving" style={{ marginBottom: '48px' }}>
        <h2 style={sectionTitleStyle}>Arriving in Göttingen</h2>
        
        <h3 style={subSectionTitleStyle}>By Air</h3>
        <p style={paragraphStyle}>
          <strong>Closest airports:</strong> Frankfurt Main International, Hannover, Leipzig, Dortmund.
        </p>

        <h3 style={subSectionTitleStyle}>By Train</h3>
        <p style={paragraphStyle}>
          Göttingen is well connected by fast trains to most major cities in Germany. 
          The travel time from Frankfurt is approximately 2 hours, and from Hannover less than 1 hour.
        </p>

        <h3 style={subSectionTitleStyle}>Conference Venue</h3>
        <p style={paragraphStyle}>
          The talks will take place at the <strong>Mathematisches Institut</strong> (
          <a 
            href="https://maps.app.goo.gl/xbg9z7mzrb7ew9RK7" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#2d5a7b', textDecoration: 'underline', fontWeight: 500 }}
          >
            map
          </a>
          ) — Bunsenstraße 3–5, 37073 Göttingen, 
          which is about a 15-minute walk from the main train station.
        </p>
      </section>

      {/* Accommodation Section */}
      <section className="section-accommodation" style={{ marginBottom: '48px' }}>
        <h2 style={sectionTitleStyle}>Accommodation</h2>
        
        <p style={paragraphStyle}>
          Here are some hotels within walking distance of the Institute:
        </p>

        <div style={{ marginBottom: '24px' }}>
          {hotels.map((hotel, index) => (
            <div key={index} style={listItemStyle}>
              <span style={bulletStyle}>■</span>
              <a 
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2d5a7b', textDecoration: 'underline', fontWeight: 500 }}
              >
                {hotel.name}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '6px',
          padding: '16px 20px',
          marginTop: '24px'
        }}>
          <p style={{ 
            fontSize: '14px', 
            fontWeight: 600, 
            color: '#856404',
            marginBottom: '8px'
          }}>
            ⚠️ Important Notice
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#856404',
            lineHeight: 1.6,
            margin: 0
          }}>
            We do not work with any third-party companies to provide accommodation for the conference. 
            Speakers have already been contacted regarding accommodation. Participants are generally 
            expected to book their own accommodation. If you receive an email from anyone other than 
            the organizers offering to "facilitate accommodation arrangements," please be aware that 
            this is a scam.
          </p>
        </div>
      </section>

      {/* Animations */}
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
        
        .section-arriving {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .section-accommodation {
          animation: slideFromRight 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default LocalInfo
