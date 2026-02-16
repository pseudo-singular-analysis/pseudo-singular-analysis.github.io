function Poster() {
  return (
    <div>
      <section className="section-poster text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Poster</h2>
        <p className="text-gray-600">TBA</p>
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
