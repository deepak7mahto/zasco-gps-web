import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DEVICE_MANUFACTURERS } from '@/data/devices';

export const TrustPartners: React.FC = () => {
  const vehicleBrands = [
    'Maruti Suzuki',
    'Tata Motors',
    'Mahindra & Mahindra',
    'Ashok Leyland',
    'BharatBenz',
    'Eicher Trucks',
    'Volvo Commercial',
    'Hyundai',
    'Toyota',
    'JCB India',
    'Force Motors',
    'Sonalika Tractors',
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Hardware Interoperability & Compatibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Integrated with Over 650+ Global Hardware Manufacturers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Never get locked into proprietary hardware. ZASCO GPS platform connects seamlessly with any TCP/UDP tracker.
          </p>
        </div>

        {/* Hardware Manufacturer Logos Carousel Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center mb-12">
          {DEVICE_MANUFACTURERS.slice(0, 16).map((m, idx) => (
            <div 
              key={idx}
              className="bg-white p-3 rounded-xl border border-slate-200 shadow-subtle hover:shadow-card transition flex flex-col items-center justify-center h-20 group"
              title={m.name}
            >
              <img 
                src={m.logo} 
                alt={m.name} 
                className="max-h-9 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-75 group-hover:opacity-100"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-[10px] font-bold text-slate-600 mt-1 truncate w-full text-center">
                {m.name}
              </span>
            </div>
          ))}
        </div>

        {/* Vehicle OEM Compatibility Badge Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center space-x-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Zero-Wire-Cut Warranty Safe</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Plug-and-Play & Coupler-to-Coupler Fitting for All Major Indian Vehicles
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {vehicleBrands.map((brand, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <Link
                to="/supported-devices"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow"
              >
                <span>Check Your Device Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
