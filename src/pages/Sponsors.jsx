function Sponsors() {
  const sectionTitleStyle = {
    fontSize: '23px',
    fontWeight: 700,
    color: '#1e3a5f',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #e0e0e0'
  }

  const paragraphStyle = {
    fontSize: '15px',
    color: '#333',
    lineHeight: 1.7,
    marginBottom: '16px'
  }

  const linkStyle = {
    color: '#2d5a7b',
    textDecoration: 'underline',
    fontWeight: 500
  }

  return (
    <div>
      <section className="section-funding">
        <h2 style={sectionTitleStyle}>Funding</h2>
        
        <div className="funding-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Text content */}
          <div>
            <p style={paragraphStyle}>
              Funded by a joint program of the{' '}
              <a 
                href="https://gsonet.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
              >
                GSO
              </a>
              {' '}and the{' '}
              <a 
                href="https://klaus-tschira-stiftung.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Klaus Tschira Stiftung
              </a>
              {' '}for the project <em>Von Neumann dimension of the Dirac operator on degenerating covering spaces</em> (No. GSO/KT 62). 
              More details can be found{' '}
              <a 
                href="https://gsonet.org/funding-programs/klaus-tschira-boost-fund/?lang=en/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
              >
                here
              </a>.
            </p>

            <p style={paragraphStyle}>
              We would also like to acknowledge the hospitality and support of the{' '}
              <a 
                href="https://www.uni-goettingen.de/de/20693.html" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Mathematisches Institut Göttingen
              </a>
              {' '}during the conference.
            </p>
          </div>

          {/* Image */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/klaus_tschira_boost_fund.jpg" 
              alt="Klaus Tschira Boost Fund" 
              style={{
                width: '100%',
                maxWidth: '280px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            />
          </div>
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
        
        .section-funding {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        @media (max-width: 700px) {
          .funding-content {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Sponsors
