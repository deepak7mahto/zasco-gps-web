import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MetricsCounter } from '@/components/home/MetricsCounter';
import { CoreFeatures } from '@/components/home/CoreFeatures';
import { SolutionsOverview } from '@/components/home/SolutionsOverview';
import { HardwareShowcase } from '@/components/home/HardwareShowcase';
import { TrustPartners } from '@/components/home/TrustPartners';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { FleetRoiCalculator } from '@/components/common/FleetRoiCalculator';
import { ShieldCheck, Award, Zap, PhoneCall, Headphones } from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section with Platform Preview */}
      <HeroSection />

      {/* 2. Core Operational Metrics (100k+ Vehicles) */}
      <MetricsCounter />

      {/* 3. Core Features (Engine Block, Fuel, Realtime, Geofencing) */}
      <CoreFeatures />

      {/* 4. Solutions Grid (All 7 Verticals) */}
      <SolutionsOverview />

      {/* 5. Interactive Fleet ROI & Fuel Savings Calculator */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FleetRoiCalculator />
        </div>
      </section>

      {/* 6. Hardware Showcase (ZT-22, Teltonika, Concox, AIS-140) */}
      <HardwareShowcase />

      {/* 7. Manufacturer & Vehicle Compatibility Bar */}
      <TrustPartners />

      {/* 8. Why ZASCO Enterprise Advantage Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-repeat pointer-events-none" 
          style={{ backgroundImage: 'url(/images/pattern-2.png)' }} 
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                The ZASCO Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Designed and Engineered by India’s Premier Telematics Pioneers
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Having our own team of product designers and firmware engineers gives you something extra. We strive to bring forward new innovations that withstand extreme Indian road conditions, voltage spikes, and harsh temperatures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
                  <div className="flex items-center space-x-3 text-emerald-400 mb-2">
                    <Zap className="w-5 h-5" />
                    <h4 className="font-bold text-white text-sm">Extreme Voltage Protection</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Withstands surges up to 100V DC common during truck jump-starts and alternator spikes.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
                  <div className="flex items-center space-x-3 text-emerald-400 mb-2">
                    <ShieldCheck className="w-5 h-5" />
                    <h4 className="font-bold text-white text-sm">Anti-Theft Geofence Sentry</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Immediate SMS triggers if vehicle moves without ignition or leaves designated compound.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
                  <div className="flex items-center space-x-3 text-emerald-400 mb-2">
                    <Headphones className="w-5 h-5" />
                    <h4 className="font-bold text-white text-sm">24×7×365 Live Indian Support</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Real, live human technical support desk ready to assist with wiring, server setup, and sim renewal.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
                  <div className="flex items-center space-x-3 text-emerald-400 mb-2">
                    <Award className="w-5 h-5" />
                    <h4 className="font-bold text-white text-sm">Zero Monthly Fee Option</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Affordable perpetual hardware pricing with zero mandatory monthly cloud costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Lead Card */}
            <div className="lg:col-span-5">
              <QuickInquiryForm source="Home Page Advantage Block" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom Emergency & Sales Hotline Callout */}
      <section className="py-12 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold">Have Questions? Talk to a Fleet Specialist Now</h3>
            <p className="text-emerald-100 text-sm mt-1">
              Direct hotline for wholesale dealership, fleet pricing, and AIS-140 compliance queries.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow hover:bg-slate-800 transition"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call: {ZASCO_CONTACT.salesPhone}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white text-emerald-800 font-bold text-sm shadow hover:bg-emerald-50 transition"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
