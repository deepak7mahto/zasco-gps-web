import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  ShoppingCart, 
  MapPin, 
  Radio, 
  CheckCircle,
  Play
} from 'lucide-react';
import { ZASCO_CONTACT } from '@/lib/crm';
import { LeadCaptureModal } from '@/components/common/LeadCaptureModal';

export const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative Glow & Grid */}
      <div 
        className="absolute inset-0 opacity-15 bg-repeat pointer-events-none" 
        style={{ backgroundImage: 'url(/images/pattern-2.png)' }} 
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>No. 1 GPS Tracking & Telematics Platform in India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Real-Time Vehicle Tracking & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Fleet Intelligence</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Cut fleet fuel bills by up to 25%, eliminate driver side-jobs, prevent midnight diesel theft, and comply with government <strong>AIS-140</strong> safety mandates. Enterprise-grade telematics with zero server hassle.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt MoRTH AIS-140 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>98% High-Precision Fuel Sensors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>650+ Supported Hardware Devices</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Remote Engine Cut-Off Relay</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={ZASCO_CONTACT.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-900/60 transition-all transform hover:-translate-y-0.5 group"
              >
                <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>BUY NOW / SHOP ONLINE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base transition-all"
              >
                <span>Request Fleet Quote</span>
              </button>
            </div>

            {/* Trust counter */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div>
                <span className="font-bold text-white text-base">100,000+</span> Vehicles Active
              </div>
              <div className="h-4 w-px bg-slate-700"></div>
              <div>
                <span className="font-bold text-white text-base">500+</span> Pan-India Dealers
              </div>
              <div className="h-4 w-px bg-slate-700"></div>
              <div>
                <span className="font-bold text-white text-base">28</span> States Covered
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Platform & Hardware Visual Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glassmorphic Live Card Container */}
              <div className="relative rounded-2xl bg-slate-800/90 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/60 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                    <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
                    <span>ZASCO FLEET LIVE CLOUD</span>
                  </span>
                </div>

                {/* Platform Graphic */}
                <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 group">
                  <img 
                    src="/images/tracking-platform-and-apps.jpg" 
                    alt="ZASCO GPS Fleet Tracking Interface" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 rounded-lg border border-slate-700/70 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">Truck #HR-55-AJ-9812</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                        SPEED: 58 KM/H
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-300">
                      <span>Fuel Tank: <strong>84% (210 L)</strong></span>
                      <span className="text-emerald-400 font-medium">Ignition: ON</span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3 shadow-xl border border-slate-200 hidden sm:flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">AIS-140 Compliant</div>
                    <div className="text-[11px] text-slate-500">Dual IP + NavIC Satellites</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-emerald-600 text-white rounded-xl p-2.5 shadow-xl hidden sm:flex items-center space-x-2 text-xs font-bold">
                  <Play className="w-4 h-4 fill-white" />
                  <span>5-Min Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Get Wholesale Fleet Pricing & Live Demo"
        source="Home Hero Banner"
      />
    </section>
  );
};
