import { useState, useEffect } from 'react'

function Registration() {
  const deadline = new Date('2026-07-01T23:59:59')

  function calculateTimeLeft() {
    const diff = deadline - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

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

  const isExpired = deadline - new Date() <= 0

  const countdownUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div>
      <section className="section-registration">
        {isExpired ? (
          <h2 style={sectionTitleStyle}>Registration is Closed</h2>
        ) : (
          <>
            <h2 style={sectionTitleStyle}>Registration is Open</h2>

            <div className="registration-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '40px',
              alignItems: 'start'
            }}>
              {/* Left column — info */}
              <div>
                <p style={paragraphStyle}>
                  Registration is handled through the website of the University of Göttingen.{' '}
                  <a
                    href="https://www.uni-goettingen.de/en/705778.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#2d5a7b', textDecoration: 'underline', fontWeight: 500 }}
                  >
                    Click here to register
                  </a>
                  . You will be redirected to the university's registration page.
                </p>
                <p style={paragraphStyle}>
                  Please note that all participants are required to register in order to attend the conference.
                </p>
              </div>

              {/* Right column — countdown card */}
              <div className="countdown-card" style={{
                background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%)',
                borderRadius: '12px',
                padding: '28px 24px',
                color: '#fff',
                boxShadow: '0 8px 24px rgba(30, 58, 95, 0.25)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', opacity: 0.85 }}>
                  Registration deadline
                </p>
                <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>
                  July 1, 2026
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  {countdownUnits.map((unit) => (
                    <div key={unit.label} style={{
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      padding: '12px 0',
                      minWidth: '68px',
                      backdropFilter: 'blur(4px)'
                    }}>
                      <span className="countdown-value" style={{
                        display: 'block',
                        fontSize: '28px',
                        fontWeight: 700,
                        fontVariantNumeric: 'tabular-nums',
                        lineHeight: 1.2
                      }}>
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
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

        .section-registration {
          animation: slideFromRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .countdown-value {
          transition: transform 0.3s ease;
        }

        @media (max-width: 750px) {
          .registration-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}


export default Registration
