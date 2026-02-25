import { Fan, Lightbulb, ToggleLeft, Cable, Plug, Wrench } from 'lucide-react';
import { type ReactNode } from 'react';

interface Product {
  brand: string;
  name: string;
  description: string;
  icon: ReactNode;
}

interface Category {
  title: string;
  emoji: string;
  products: Product[];
}

const categories: Category[] = [
  {
    title: 'Ceiling Fans',
    emoji: '🌬️',
    products: [
      { brand: 'HAVELLS', name: 'Havells Steera', description: 'Premium BLDC Ceiling Fan', icon: <Fan className="w-8 h-8" /> },
      { brand: 'CROMPTON', name: 'Crompton Hi-Q', description: 'Energy Efficient Fan', icon: <Fan className="w-8 h-8" /> },
      { brand: 'BAJAJ', name: 'Bajaj Regal Gold', description: 'Durable & Stylish Fan', icon: <Fan className="w-8 h-8" /> },
      { brand: 'POLYMADE', name: 'Polymade Aura', description: 'Modern Design Fan', icon: <Fan className="w-8 h-8" /> },
      { brand: 'GOLDMEDAL', name: 'Goldmedal Crest', description: 'Super Silent Fan', icon: <Fan className="w-8 h-8" /> },
    ],
  },
  {
    title: 'LED Lights & Bulbs',
    emoji: '💡',
    products: [
      { brand: 'HAVELLS', name: 'Havells LED Bulb', description: '9W – 20W, Cool White', icon: <Lightbulb className="w-8 h-8" /> },
      { brand: 'SYSKA', name: 'Syska Smart LED', description: 'Smart LED Series', icon: <Lightbulb className="w-8 h-8" /> },
      { brand: 'BAJAJ', name: 'Bajaj Ledz', description: 'Energy Saver Bulb', icon: <Lightbulb className="w-8 h-8" /> },
      { brand: 'CROMPTON', name: 'Crompton Jyoti', description: 'Bright Lighting', icon: <Lightbulb className="w-8 h-8" /> },
      { brand: 'BPL', name: 'BPL LED Tube', description: 'T8 LED Tube Light', icon: <Lightbulb className="w-8 h-8" /> },
    ],
  },
  {
    title: 'Switches & Accessories',
    emoji: '🔌',
    products: [
      { brand: 'ANCHOR', name: 'Anchor Roma', description: 'Classic Modular Switch', icon: <ToggleLeft className="w-8 h-8" /> },
      { brand: 'HAVELLS', name: 'Havells Crabtree', description: 'Premium Modular Switch', icon: <ToggleLeft className="w-8 h-8" /> },
      { brand: 'GOLDMEDAL', name: 'Goldmedal Vantage', description: 'Designer Switch Plate', icon: <ToggleLeft className="w-8 h-8" /> },
      { brand: 'LEGRAND', name: 'Legrand Myrius', description: 'French Design Switch', icon: <ToggleLeft className="w-8 h-8" /> },
      { brand: 'WIPRO', name: 'Wipro North West', description: 'Affordable Modular', icon: <ToggleLeft className="w-8 h-8" /> },
    ],
  },
  {
    title: 'Wires & Cables',
    emoji: '🔗',
    products: [
      { brand: 'FINOLEX', name: 'Finolex FR Wire', description: 'Flame Retardant Wire', icon: <Cable className="w-8 h-8" /> },
      { brand: 'POLYCAB', name: 'Polycab FRLS', description: 'Fire Retardant LS', icon: <Cable className="w-8 h-8" /> },
      { brand: 'HAVELLS', name: 'Havells Lifeline', description: 'Premium House Wire', icon: <Cable className="w-8 h-8" /> },
      { brand: 'ANCHOR', name: 'Anchor Advance', description: 'Multi-strand Wire', icon: <Cable className="w-8 h-8" /> },
      { brand: 'CROMPTON', name: 'Crompton Wire', description: 'Industrial Grade', icon: <Cable className="w-8 h-8" /> },
    ],
  },
  {
    title: 'MCBs & Switchgear',
    emoji: '⚙️',
    products: [
      { brand: 'HAVELLS', name: 'Havells MCB', description: 'Single Pole MCB', icon: <Plug className="w-8 h-8" /> },
      { brand: 'LEGRAND', name: 'Legrand MCB', description: 'DX3 Series MCB', icon: <Plug className="w-8 h-8" /> },
      { brand: 'ANCHOR', name: 'Anchor MCB', description: 'Compact MCB', icon: <Plug className="w-8 h-8" /> },
      { brand: 'CROMPTON', name: 'Crompton RCCB', description: 'Residual Current Device', icon: <Plug className="w-8 h-8" /> },
      { brand: 'POLYCAB', name: 'Polycab DB Box', description: 'Distribution Board', icon: <Plug className="w-8 h-8" /> },
    ],
  },
  {
    title: 'Inverters & Batteries',
    emoji: '🔋',
    products: [
      { brand: 'LUMINOUS', name: 'Luminous Zelio', description: '1100VA Pure Sine Wave', icon: <Wrench className="w-8 h-8" /> },
      { brand: 'BAJAJ', name: 'Bajaj Inverter', description: 'Home UPS System', icon: <Wrench className="w-8 h-8" /> },
      { brand: 'LUMINOUS', name: 'Luminous Battery', description: '150Ah Tall Tubular', icon: <Wrench className="w-8 h-8" /> },
      { brand: 'BPL', name: 'BPL UPS', description: 'Online UPS 600VA', icon: <Wrench className="w-8 h-8" /> },
      { brand: 'CROMPTON', name: 'Crompton Inverter', description: 'Smart Inverter 800VA', icon: <Wrench className="w-8 h-8" /> },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 cursor-default group"
      style={{ boxShadow: '0 3px 15px rgba(0,51,102,0.07)' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-8px)';
        el.style.borderColor = '#f1c40f';
        el.style.boxShadow = '0 12px 30px rgba(0,51,102,0.15)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.borderColor = '#f3f4f6';
        el.style.boxShadow = '0 3px 15px rgba(0,51,102,0.07)';
      }}
    >
      <span
        className="text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide"
        style={{ backgroundColor: '#f1c40f', color: '#003366' }}
      >
        {product.brand}
      </span>
      <div style={{ color: '#003366' }} className="mb-3">
        {product.icon}
      </div>
      <h4 className="font-semibold text-sm mb-1" style={{ color: '#003366' }}>
        {product.name}
      </h4>
      <p className="text-xs text-gray-500">{product.description}</p>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#f1c40f' }}
          >
            What We Sell
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#003366' }}>
            Our Products
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded-full"
            style={{ backgroundColor: '#f1c40f' }}
          />
          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
            Wide range of electrical products for homes, offices, and industries
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3
                  className="text-xl font-bold pb-1 border-b-4"
                  style={{ color: '#003366', borderColor: '#f1c40f' }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
