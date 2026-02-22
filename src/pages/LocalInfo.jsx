function LocalInfo() {
  const hotels = [
    { name: 'Leine Hotel', url: 'https://www.leinehotel-goe.de/' },
    { name: 'Eden Hotel', url: 'https://www.eden-hotel.de/Eden-Hotel-Gottingen-0527304550.html' },
    { name: 'Hotel Central', url: 'https://www.hotel-central.com/home.html' },
    { name: 'Hotel Stadt Hannover', url: 'https://www.hotelstadthannover.de/english/' },
  ]

  const foodCategories = [
    {
      title: 'Quick Lunch & Bakeries',
      places: [
        { name: 'Zentralmensa', desc: 'Main campus cafeteria, about 20 min walk from the Institute. Alternatively, take bus lines 91/92 from Bürgerstraße to Auditorium (~14 min)', url: 'https://maps.app.goo.gl/2jNQ94AcJvNHK4Fy7' },
        { name: 'Bäckerei Küster', desc: 'Good option for a quick lunch, Weender Str. 106', url: 'https://maps.app.goo.gl/jfLpqAapovpMJsqq9' },
        { name: 'Göttinger Holzofenbäckerei', desc: 'Good option for a quick lunch, Böttingerstraße 21', url: 'https://maps.app.goo.gl/Q45f1tnH7PNwFSaA9' },
      ]
    },
    {
      title: 'German & European',
      places: [
        { name: 'Bullerjahn', desc: 'European cuisine, Markt 9', url: 'https://maps.app.goo.gl/i5DFY3CYcHw1i6dX9' },
        { name: 'Kartoffelhaus', desc: 'German cuisine, Goetheallee 8', url: 'https://maps.app.goo.gl/bALrXf2t96n75iSv5' },
        { name: 'Zum Szültenbürger', desc: 'German cuisine, Prinzenstraße 7', url: 'https://maps.app.goo.gl/DioPNKHXnLpVKVmn7' },
      ]
    },
    {
      title: 'Italian',
      places: [
        { name: 'Tante Giulia', desc: 'Theaterstraße 25', url: 'https://maps.app.goo.gl/TgU1jrCDnLtn8XfH7' },
        { name: 'Ristorante Fellini', desc: 'Groner-Tor-Straße 28', url: 'https://maps.app.goo.gl/NmkRd1B6tYS5xwdj8' },
        { name: 'Nudelhaus', desc: 'Rote Str. 13', url: 'https://maps.app.goo.gl/wjH32WYR6NsLPsTN9' },
      ]
    },
    {
      title: 'Asian',
      places: [
        { name: 'Sen Viet Cuisine Bistro', desc: 'Vietnamese, good vegetarian/vegan options, Rote Str. 18', url: 'https://maps.app.goo.gl/4UuZFDbU1mbb25xg8' },
        { name: 'Asian Fusion Gamie', desc: 'Sushi restaurant, Weender Str. 29', url: 'https://maps.app.goo.gl/VZ6jN9tEAxPJRxcA7' },
        { name: 'Nam Anh', desc: 'Asian cuisine, Groner Str. 12', url: 'https://maps.app.goo.gl/w3GadW82axqLyEnW7' },
        { name: 'Goa India', desc: 'Indian, good vegetarian/vegan options, Kurze-Geismar-Straße 43', url: 'https://maps.app.goo.gl/igDNvSgTv3m6UGUb8' },
        { name: 'India Haus', desc: 'Indian, good vegetarian/vegan options, Kurze-Geismar-Straße 41', url: 'https://maps.app.goo.gl/kxjechs5XsScL8wX6' },
      ]
    },
    {
      title: 'Middle Eastern, African & South American',
      places: [
        { name: 'Palmyra', desc: 'Syrian cuisine, good vegetarian/vegan options, Düstere Str. 10', url: 'https://maps.app.goo.gl/fmhPYTE3kcDQKzo46' },
        { name: 'Abessina', desc: 'Ethiopian restaurant, Ritterplan 2', url: 'https://maps.app.goo.gl/YWA2gXjx1GxBhyVT6' },
        { name: 'Empanadas Sabrosita', desc: 'South American cuisine, Karspüle 9', url: 'https://maps.app.goo.gl/RUzn8N9EEBpxDi568' },
      ]
    },
    {
      title: 'Vegan & Vegetarian',
      note: 'Several restaurants above also offer good vegetarian and vegan options. These are more specialized:',
      places: [
        { name: 'Gaia Garden', desc: 'Nikolaistraße 18', url: 'https://maps.app.goo.gl/BYNbigPzwigjn1us6' },
        { name: 'Chay Vegan Kitchen', desc: 'Goethe-Allee 4A', url: 'https://maps.app.goo.gl/DSw6j5LnHWMhyM797' },
      ]
    },
    {
      title: 'Cafés & Sweets',
      places: [
        { name: 'Cafe Cortes', desc: 'A delicious cake shop', url: 'https://maps.app.goo.gl/HWpPYp8HNCuaKAiF8' },
      ]
    },
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
        
        <div className="arriving-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Text content */}
          <div>
            <h3 style={{ ...subSectionTitleStyle, marginTop: 0 }}>By Air</h3>
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
          </div>

          {/* Image */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/gaenseliesel.jpg" 
              alt="Gänseliesel statue in Göttingen" 
              style={{
                width: '100%',
                maxWidth: '280px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            />
            <p style={{
              fontSize: '13px',
              color: '#666',
              marginTop: '12px',
              fontStyle: 'italic',
              lineHeight: 1.5
            }}>
              Gänseliesel statue, in front of the Old Town Hall.
            </p>
          </div>
        </div>
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

      {/* Food & Restaurants Section */}
      <section className="section-food" style={{ marginBottom: '48px' }}>
        <h2 style={sectionTitleStyle}>Food & Restaurants</h2>
        <p style={paragraphStyle}>
          Göttingen has plenty of good restaurants within walking distance of the Institute. Here are some recommendations:
        </p>

        <div className="food-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px'
        }}>
          {foodCategories.map((category) => (
            <div key={category.title} style={{
              background: '#f8f9fa',
              borderRadius: '8px',
              padding: '20px',
              borderLeft: '3px solid #1e3a5f'
            }}>
              <h3 style={{ ...subSectionTitleStyle, marginTop: 0, marginBottom: '8px' }}>
                {category.title}
              </h3>
              {category.note && (
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5, marginBottom: '8px' }}>
                  {category.note}
                </p>
              )}
              {category.places.map((place) => (
                <div key={place.name} style={listItemStyle}>
                  <span style={bulletStyle}>■</span>
                  {place.url ? (
                    <a
                      href={place.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#2d5a7b', textDecoration: 'underline', fontWeight: 500 }}
                    >
                      {place.name}
                    </a>
                  ) : (
                    <span style={{ fontWeight: 500 }}>{place.name}</span>
                  )}
                  <span style={{ color: '#666', marginLeft: '6px' }}>— {place.desc}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Animations and Responsive Styles */}
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

        .section-food {
          animation: slideFromRight 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        @media (max-width: 700px) {
          .arriving-content {
            grid-template-columns: 1fr !important;
          }
          .food-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default LocalInfo
