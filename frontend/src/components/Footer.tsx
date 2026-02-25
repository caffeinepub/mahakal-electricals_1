import { Zap, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'mahakal-electricals'
  );

  return (
    <footer style={{ backgroundColor: '#002244' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#f1c40f' }}
              >
                <Zap className="w-4 h-4" style={{ color: '#003366' }} />
              </div>
              <span className="font-bold text-base">
                <span style={{ color: '#f1c40f' }}>MAHAKAL</span> ELECTRICALS
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your trusted electrical partner in Shivpuri, Madhya Pradesh. Quality
              products, expert services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm" style={{ color: '#f1c40f' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200 text-sm hover:text-yellow-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm" style={{ color: '#f1c40f' }}>
              Contact Info
            </h4>
            <div className="space-y-2 text-blue-200 text-sm">
              <p>📍 Near Giri Raj Marriage Garden,</p>
              <p className="pl-5">Gwalior Bypass, Shivpuri, MP</p>
              <p>
                📞{' '}
                <a href="tel:+919630232599" className="hover:text-yellow-300 transition-colors">
                  +91 96302 32599
                </a>
              </p>
              <p>
                📞{' '}
                <a href="tel:+919179142549" className="hover:text-yellow-300 transition-colors">
                  +91 91791 42549
                </a>
              </p>
              <p>
                💬{' '}
                <a
                  href="https://wa.me/919630232599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© {year} Mahakal Electricals. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 fill-current" style={{ color: '#f1c40f' }} />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors font-medium"
              style={{ color: '#f1c40f' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
