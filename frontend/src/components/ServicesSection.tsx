import { Zap, Fan, ShieldCheck, Battery, Factory, Home } from 'lucide-react';
import { type ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Electrical Wiring & Installation',
    description:
      'Complete home and commercial wiring solutions using ISI-certified materials for safe and durable installations.',
  },
  {
    icon: <Fan className="w-10 h-10" />,
    title: 'Fan & Light Repair',
    description:
      'Expert repair and replacement of ceiling fans, exhaust fans, LED lights, and tube lights of all brands.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'MCB & Switchboard Repair',
    description:
      'Diagnosis and repair of MCBs, RCCBs, distribution boards, and modular switchboards.',
  },
  {
    icon: <Battery className="w-10 h-10" />,
    title: 'Inverter & Battery Service',
    description:
      'Installation, maintenance, and repair of home inverters, UPS systems, and tubular batteries.',
  },
  {
    icon: <Factory className="w-10 h-10" />,
    title: 'Industrial Wiring',
    description:
      'Heavy-duty industrial wiring, panel installation, and electrical maintenance for factories and workshops.',
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: 'Home Automation',
    description:
      'Smart switch installation, automated lighting controls, and energy-saving home automation solutions.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4" style={{ backgroundColor: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#f1c40f' }}
          >
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003366' }}>
            Our Services
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded-full"
            style={{ backgroundColor: '#f1c40f' }}
          />
          <p className="text-gray-500 mt-4 text-sm">
            Professional electrical services for homes and businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 cursor-default group"
              style={{ boxShadow: '0 3px 15px rgba(0,51,102,0.07)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 12px 30px rgba(0,51,102,0.15)';
                el.style.borderColor = '#f1c40f';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 3px 15px rgba(0,51,102,0.07)';
                el.style.borderColor = '#f3f4f6';
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#e8f0fb' }}
              >
                <div style={{ color: '#003366' }}>{service.icon}</div>
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#003366' }}>
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
