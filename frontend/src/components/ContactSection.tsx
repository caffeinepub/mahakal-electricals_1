import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local form handling — no backend integration
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#f1c40f' }}
          >
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003366' }}>
            Contact Us
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded-full"
            style={{ backgroundColor: '#f1c40f' }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#003366' }}>
              Shop Details
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#e8f0fb' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#003366' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#003366' }}>
                    Address
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Near Giri Raj Marriage Garden,
                    <br />
                    Gwalior Bypass, Shivpuri,
                    <br />
                    Madhya Pradesh – 473551
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#e8f0fb' }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#003366' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#003366' }}>
                    Phone
                  </p>
                  <a
                    href="tel:+919630232599"
                    className="text-gray-600 text-sm mt-0.5 hover:underline block"
                  >
                    +91 96302 32599
                  </a>
                  <a
                    href="tel:+919179142549"
                    className="text-gray-600 text-sm hover:underline block"
                  >
                    +91 91791 42549
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#dcf5e7' }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: '#25D366' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#003366' }}>
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919630232599"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm mt-0.5 hover:underline block"
                    style={{ color: '#25D366' }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#e8f0fb' }}
                >
                  <Clock className="w-5 h-5" style={{ color: '#003366' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#003366' }}>
                    Business Hours
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Mon – Sat: 9:00 AM – 8:00 PM
                    <br />
                    Sunday: 10:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="mt-8 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                height: '180px',
                background: 'linear-gradient(135deg, #e8f0fb 0%, #d0e4f7 100%)',
                border: '2px dashed #b0c8e8',
              }}
            >
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: '#003366' }} />
                <p className="text-sm font-medium" style={{ color: '#003366' }}>
                  Gwalior Bypass, Shivpuri, MP
                </p>
                <a
                  href="https://maps.google.com/?q=Shivpuri+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-1 inline-block hover:underline"
                  style={{ color: '#1a73e8' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="w-full md:w-1/2">
            <div
              className="rounded-2xl p-8"
              style={{ boxShadow: '0 4px 25px rgba(0,51,102,0.1)', border: '1px solid #e8f0fb' }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: '#003366' }}>
                Send an Enquiry
              </h3>

              {submitted && (
                <div
                  className="mb-4 p-3 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: '#dcf5e7', color: '#1a7a4a' }}
                >
                  ✅ Thank you! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: '#003366' }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all"
                    style={{ borderColor: '#d0e4f7' }}
                    onFocus={(e) => (e.target.style.borderColor = '#003366')}
                    onBlur={(e) => (e.target.style.borderColor = '#d0e4f7')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                    style={{ color: '#003366' }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all"
                    style={{ borderColor: '#d0e4f7' }}
                    onFocus={(e) => (e.target.style.borderColor = '#003366')}
                    onBlur={(e) => (e.target.style.borderColor = '#d0e4f7')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                    style={{ color: '#003366' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all resize-none"
                    style={{ borderColor: '#d0e4f7' }}
                    onFocus={(e) => (e.target.style.borderColor = '#003366')}
                    onBlur={(e) => (e.target.style.borderColor = '#d0e4f7')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: '#003366', color: '#f1c40f' }}
                >
                  Send Enquiry ✉️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
