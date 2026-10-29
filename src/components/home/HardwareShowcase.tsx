import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FEATURED_DEVICES } from '@/data/devices';
import { ZASCO_CONTACT } from '@/lib/crm';
import { LeadCaptureModal } from '@/components/common/LeadCaptureModal';

export const HardwareShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedDeviceName, setSelectedDeviceName] = useState('');

  const categories = ['All', 'AIS-140', 'Fuel & Sensor', '4G Wire-In', 'OBD-II', 'Magnetic & Portable'];

  const filteredDevices = selectedCategory === 'All' 
    ? FEATURED_DEVICES.slice(0, 6)
    : FEATURED_DEVICES.filter(d => d.category === selectedCategory).slice(0, 6);

  const openQuoteForDevice = (deviceName: string) => {
    setSelectedDeviceName(deviceName);
    setLeadModalOpen(true);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Telematics Terminals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Pre-Configured, Tested & Ready to Deploy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
              Every unit arrives pre-flashed with Zasco high-frequency firmware, pre-activated 4G M2M SIMs, and backed by a comprehensive hardware replacement warranty.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <Link
              to="/supported-devices"
              className="inline-flex items-center space-x-1 text-sm font-bold text-slate-700 hover:text-emerald-600"
            >
              <span>View 650+ Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={ZASCO_CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Visit Online Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map((device) => (
            <div
              key={device.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition-all duration-200 p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {device.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Port: {device.port}</span>
                </div>

                <div className="h-44 w-full bg-slate-50 rounded-xl mb-4 p-4 flex items-center justify-center border border-slate-100 overflow-hidden group">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback placeholder if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                  {device.manufacturer}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-0.5 line-clamp-1">
                  {device.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {device.description}
                </p>

                {/* Key Spec Badges */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  {device.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-slate-600 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Actions: Buy Online & Wholesale Quote */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`${ZASCO_CONTACT.shopUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow transition"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>BUY NOW</span>
                </a>
                <button
                  onClick={() => openQuoteForDevice(device.name)}
                  className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
                >
                  Wholesale
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LeadCaptureModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        title={`Wholesale Pricing: ${selectedDeviceName}`}
        defaultMessage={`I would like wholesale pricing and availability for ${selectedDeviceName}.`}
        source="Hardware Showcase"
      />
    </section>
  );
};
