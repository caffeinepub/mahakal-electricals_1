import { CheckCircle } from 'lucide-react';

const highlights = [
  'Authorized dealer for 12+ top electrical brands',
  'Expert installation and repair services',
  'Genuine products with manufacturer warranty',
  'Serving Shivpuri and surrounding areas',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#f1c40f' }}
          >
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003366' }}>
            About Us
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded-full"
            style={{ backgroundColor: '#f1c40f' }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/assets/generated/about-shop.dim_800x600.png"
                alt="Mahakal Electricals Shop"
                className="w-full h-72 md:h-96 object-cover"
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-4 left-4 px-4 py-2 rounded-lg shadow-lg"
                style={{ backgroundColor: '#003366' }}
              >
                <p className="text-white text-xs font-medium">📍 Gwalior Bypass, Shivpuri</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#003366' }}>
              Welcome to Mahakal Electricals
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Located near <strong>Giri Raj Marriage Garden, Gwalior Bypass, Shivpuri,
              Madhya Pradesh</strong>, Mahakal Electricals has been serving the community
              with top-notch electrical products and repair services.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are dedicated to providing safety, quality, and efficiency. Whether you
              are building a new home or need urgent repairs, we are just a call away.
            </p>

            {/* Owners */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl mb-6"
              style={{ backgroundColor: '#f0f6ff', borderLeft: '4px solid #003366' }}
            >
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Owned by</p>
                <p className="font-bold text-lg" style={{ color: '#003366' }}>
                  Neeraj Verma &amp; Dheeraj Dhakad
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ backgroundColor: '#f1c40f', color: '#003366' }}
            >
              ⚡ 2+ Years of Experience
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: '#f1c40f' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
