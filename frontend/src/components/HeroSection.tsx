export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center text-white px-4"
      style={{ minHeight: '80vh' }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/generated/hero-banner.dim_1600x800.png')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 33, 80, 0.82)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="inline-block text-xs font-semibold px-4 py-1 rounded-full mb-6 tracking-widest uppercase"
          style={{ backgroundColor: '#f1c40f', color: '#003366' }}
        >
          ⚡ Shivpuri's Trusted Electrical Store
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
          Powering Your Home
          <br />
          <span style={{ color: '#f1c40f' }}>in Shivpuri</span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
          Best quality wires, switches, fans, lights, and electrical repair
          services in Madhya Pradesh. Authorized dealer for all top brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('#products')}
            className="px-8 py-3 rounded-md font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: '#f1c40f', color: '#003366' }}
          >
            View Products
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3 rounded-md font-semibold text-base border-2 border-white text-white transition-all duration-200 hover:bg-white"
            style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = '#003366';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'white';
            }}
          >
            Get Directions
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: '12+', label: 'Top Brands' },
            { value: '500+', label: 'Products' },
            { value: '2+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#f1c40f' }}>
                {stat.value}
              </div>
              <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
