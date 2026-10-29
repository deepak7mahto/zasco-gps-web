import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Smartphone, 
  Radio, 
  BellRing, 
  FileSpreadsheet, 
  Fuel, 
  MapPin, 
  Compass, 
  Download, 
  CheckCircle2
} from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';

export const SoftwarePage: React.FC = () => {
  const softwareModules = [
    {
      title: 'Real-Time Telemetry Tracking',
      desc: 'View the live position of all vehicles on Google Maps, OpenStreetMap, or Satellite layer. Inspect instantaneous speed, ignition state, battery voltage, and exact street address.',
      icon: Radio,
      badge: 'Live Stream',
    },
    {
      title: 'Instant Multi-Channel Alerts',
      desc: 'Get immediate notifications via smartphone push alarms, SMS, and email whenever an asset enters or exits a geofence, exceeds road speed limits, or triggers an SOS panic button.',
      icon: BellRing,
      badge: 'Sub-Second',
    },
    {
      title: 'History Scrubber & Automated Reports',
      desc: 'Export detailed audit reports in Excel (XLS), PDF, CSV, and TXT formats. Review 90-day trip paths, driver halt locations, working hours, and fuel consumption trends.',
      icon: FileSpreadsheet,
      badge: 'Audit Ready',
    },
    {
      title: 'Fuel Savings & Eco-Driving Scorecards',
      desc: 'Monitor fuel tank levels and catch unauthorized en-route drainage. Flag aggressive driving patterns such as rapid acceleration, harsh braking, and excessive stationary AC idling.',
      icon: Fuel,
      badge: '15% Savings',
    },
    {
      title: 'Dynamic Geofences & Restricted Zones',
      desc: 'Draw custom polygonal or circular virtual fences around client delivery hubs, ports, and state checkposts. Automatically trigger arrival and departure timestamps.',
      icon: Compass,
      badge: 'Geofencing',
    },
    {
      title: 'Points of Interest (POI) & Distance Tools',
      desc: 'Add custom map pins for petrol pumps, warehouses, service centers, and consignee docks. Utilize route measurement tools to calculate exact road distances.',
      icon: MapPin,
      badge: 'Custom Map',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="ZASCO Fleet Management Software"
        badge="Enterprise Web & Mobile Telematics"
        description="Affordable, battle-tested GPS fleet software successfully used by transport corporations, public transit sectors, and enterprise fleets across India."
        breadcrumbs={[
          { label: 'Software' },
        ]}
      />

      {/* Hero Overview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Start Tracking in Under 5 Minutes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Simplicity Meets Deep Telematics Engineering
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our GPS tracking software is compatible with virtually any GPS hardware terminal and smartphone. It is simple to use: just sign in, add your tracker credentials, and start monitoring your assets on high-resolution maps.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Installation Software:</strong> Runs seamlessly in modern web browsers (Chrome, Edge, Safari, Firefox) with no bulky desktop software installs.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Native Android & iOS Apps:</strong> Drivers and fleet managers enjoy blazing-fast native smartphone apps with push notification alerts.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Multi-Role Permissions:</strong> Grant customized sub-accounts for dispatchers, branch managers, drivers, and external auditing clients.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl('Hi, I want a live demo login to explore the ZASCO GPS software platform.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition"
                >
                  Request Live Software Demo
                </a>
                <a
                  href={ZASCO_CONTACT.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
                >
                  Purchase Software Licenses
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img
                  src="/images/SOFWERE.jpg"
                  alt="Zasco GPS Software Portal"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Software Features Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Complete Dispatcher & Fleet Telematics Arsenal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Every telemetry parameter—from speed curves to fuel levels and maintenance schedules—in a single command center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                        {mod.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                    Active on Cloud Platform
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile GPS Tracker App Highlight */}
      <section id="mobile-apps" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  Mobile Companion
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Turn Any Smartphone into an Enterprise GPS Tracker
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Download our free mobile tracker app on Android or iOS devices. Track lone workers, field sales teams, or personal family members with zero dedicated hardware cost.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition shadow"
                  >
                    <Download className="w-4 h-4 text-emerald-600" />
                    <span>Download Android APK</span>
                  </a>
                  <a
                    href="https://apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 border border-slate-700 transition"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download iOS App</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/20 text-center">
                  <Smartphone className="w-16 h-16 text-emerald-400 mb-2" />
                  <span className="text-xs font-bold text-white">Zasco Mobile Suite</span>
                  <span className="text-[11px] text-slate-400">iOS & Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryForm
            source="Software Page"
            defaultMessage="I want a demonstration and license quotation for ZASCO Fleet Software."
          />
        </div>
      </section>
    </div>
  );
};
