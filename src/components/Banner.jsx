function Banner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 50%, #3d7a9a 100%)',
      padding: '60px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animation keyframes */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .banner-title {
          animation: slideDown 0.6s ease-out forwards;
        }
        .banner-institution {
          animation: slideDown 0.6s ease-out 0.15s forwards;
          opacity: 0;
        }
        .banner-date {
          animation: slideDown 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Subtle pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 
          className="banner-title"
          style={{
            fontSize: '42px',
            fontWeight: 400,
            color: '#ffffff',
            marginBottom: '16px',
            lineHeight: 1.2,
            fontFamily: 'Georgia, "Times New Roman", serif'
          }}
        >
          Pseudodifferential Techniques in Singular Analysis
        </h1>
        
        <p 
          className="banner-institution"
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '8px',
            fontStyle: 'italic'
          }}
        >
          Mathematisches Institut Georg-August-Universität Göttingen
        </p>
        
        <p 
          className="banner-date"
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: 500
          }}
        >
          Göttingen, Germany, August 31 – September 4, 2026
        </p>
      </div>
    </div>
  )
}

export default Banner
