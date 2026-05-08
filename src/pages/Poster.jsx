function Poster() {
  const sectionTitleStyle = {
    fontSize: '23px',
    fontWeight: 700,
    color: '#1e3a5f',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #e0e0e0'
  }

  const linkStyle = {
    color: '#2d5a7b',
    textDecoration: 'underline',
    fontWeight: 500
  }

  const pdfHref = '/final_poster_cip_A3_without_borders.pdf'

  return (
    <div>
      <section className="section-poster">
        <h2 style={sectionTitleStyle}>Poster</h2>

        <div
          style={{
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            aspectRatio: '1 / 1.414',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            overflow: 'hidden',
            background: '#f5f5f5'
          }}
        >
          <iframe
            src={pdfHref}
            title="Conference poster"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        </div>

        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '15px' }}>
          <a href={pdfHref} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Open PDF in new tab
          </a>
        </p>
      </section>

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

        .section-poster {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Poster
