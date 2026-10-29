import React from 'react';
import { Truck, Cpu, CheckCircle2, Users, Fuel, Globe } from 'lucide-react';

export const MetricsCounter: React.FC = () => {
  const metrics = [
    {
      value: '100,000+',
      label: 'Vehicles Monitored',
      description: 'Active commercial trucks, buses, cabs & earthmovers',
      icon: Truck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      value: '650+',
      label: 'Supported GPS Devices',
      description: 'Pre-integrated protocols from Teltonika, Concox, Coban',
      icon: Cpu,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      value: '99.98%',
      label: 'Server Uptime SLA',
      description: 'High-availability cloud infrastructure with instant failover',
      icon: CheckCircle2,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      value: '98%',
      label: 'Fuel Sensor Precision',
      description: 'Digital capacitive fuel rods catching diesel theft instantly',
      icon: Fuel,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      value: '500+',
      label: 'Pan-India Dealers',
      description: 'Authorized installers across Delhi NCR, UP, Haryana, Jaipur',
      icon: Users,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      value: '28 States',
      label: 'National Reach',
      description: 'Dedicated field support network across all Indian regions',
      icon: Globe,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition-shadow text-center flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-xl ${m.bg} ${m.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 uppercase tracking-wide">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {m.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
