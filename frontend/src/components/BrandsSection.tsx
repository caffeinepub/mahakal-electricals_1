const brands = [
  { name: 'HAVELLS', emoji: '⚡', color: '#e63946' },
  { name: 'BAJAJ', emoji: '🔆', color: '#2196F3' },
  { name: 'BPL', emoji: '📺', color: '#6c3483' },
  { name: 'CROMPTON', emoji: '🌀', color: '#1a7a4a' },
  { name: 'POLYMADE', emoji: '🏠', color: '#e67e22' },
  { name: 'JAGUAR', emoji: '🐆', color: '#c0392b' },
  { name: 'GOLDMEDAL', emoji: '🏅', color: '#d4a800' },
  { name: 'FINOLEX', emoji: '🔗', color: '#1565C0' },
  { name: 'SYSKA', emoji: '💡', color: '#00897B' },
  { name: 'ANCHOR', emoji: '⚓', color: '#37474F' },
  { name: 'POLYCAB', emoji: '🔌', color: '#283593' },
  { name: 'LUMINOUS', emoji: '🔋', color: '#558B2F' },
];

export default function BrandsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#f1c40f' }}
          >
            Our Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003366' }}>
            Top Brands Available
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded-full"
            style={{ backgroundColor: '#f1c40f' }}
          />
          <p className="text-gray-500 mt-4 text-sm">
            Authorized dealer for all major electrical brands
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 border-2 border-transparent cursor-default transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 3px 15px rgba(0,51,102,0.08)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#f1c40f';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 6px 25px rgba(0,51,102,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 3px 15px rgba(0,51,102,0.08)';
              }}
            >
              <span className="text-2xl">{brand.emoji}</span>
              <span
                className="text-xs font-bold tracking-wide text-center"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
