import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-navy' : ''
      }`}
      style={{ backgroundColor: '#003366' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#f1c40f' }}
            >
              <Zap className="w-5 h-5" style={{ color: '#003366' }} />
            </div>
            <span className="text-lg font-bold tracking-wide">
              <span style={{ color: '#f1c40f' }}>MAHAKAL</span>
              <span className="text-white"> ELECTRICALS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white text-sm font-medium hover:text-yellow-300 transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: '#f1c40f', color: '#003366' }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-1 rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: '#002244', borderColor: '#004080' }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white text-sm font-medium py-2 px-3 rounded hover:bg-blue-900 text-left transition-colors bg-transparent border-none cursor-pointer w-full"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 text-sm font-semibold px-5 py-2 rounded-md w-full transition-all duration-200"
              style={{ backgroundColor: '#f1c40f', color: '#003366' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
