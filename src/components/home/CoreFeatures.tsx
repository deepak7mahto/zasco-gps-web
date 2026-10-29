import React from 'react';
import { 
  Radio, 
  MapPin, 
  PowerOff, 
  Fuel, 
  ShieldAlert, 
  Compass, 
  Smartphone, 
  TrendingDown 
} from 'lucide-react';

export const CoreFeatures: React.FC = () => {
  const features = [
    {
      title: 'Real-Time 24×7 Tracking',
      desc: 'Check live vehicle positions on Google Maps & OpenStreetMap with instantaneous sub-second refresh rates.',
      icon: Radio,
      badge: 'Continuous',
    },
    {
      title: '60-Day Path History & Playback',
      desc: 'Replay complete historical routes, driving hours, stopovers, speeds, and idle locations with timeline scrubber.',
      icon: MapPin,
      badge: 'Audit Trail',
    },
    {
      title: 'Remote Engine Immobilizer',
      desc: 'Shut down engine ignition remotely via app or SMS relay if driver behaves erratically or vehicle is stolen.',
      icon: PowerOff,
      badge: 'Anti-Theft',
    },
    {
      title: 'Fuel & Mileage Telematics',
      desc: 'Detect instant fuel draining, track refuel volume, and eliminate bogus paper fuel voucher reimbursements.',
      icon: Fuel,
      badge: '98% Accuracy',
    },
    {
      title: 'Geofencing & Auto-Fencing',
      desc: 'Set virtual boundaries around client sites, loading docks, and state borders with instant breach alarms.',
      icon: Compass,
      badge: 'Automated',
    },
    {
      title: 'Accident & Crash Telemetry',
      desc: 'Built-in 3-axis accelerometer detects rollover, high-G collision impacts, and triggers emergency alerts.',
      icon: ShieldAlert,
      badge: 'Driver Safety',
    },
    {
      title: 'Native Android & iOS Apps',
      desc: 'Intuitive mobile apps for fleet managers and drivers. Transform any smartphone into a personal tracker.',
      icon: Smartphone,
      badge: 'Free Mobile App',
    },
    {
      title: 'Eliminate Fuel Waste & Overtime',
      desc: 'Slash unnecessary vehicle idling, curtail driver side-gigs, and reduce monthly fleet operational expenses.',
      icon: TrendingDown,
      badge: 'High ROI',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Intelligent Fleet Automation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Engineered for Flawless Reliability & Unmatched Control
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From single personal cars to nationwide enterprise fleets with thousands of haulers, ZASCO GPS delivers the exact telematics tools required to maximize uptime and profits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-200 flex items-center justify-center text-slate-700 group-hover:text-emerald-600 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-700 transition">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {f.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center space-x-1">
                  <span>Explore Feature</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
