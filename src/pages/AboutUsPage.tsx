import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Building2, 
  Lightbulb, 
  Wrench, 
  Headphones, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { ZASCO_CONTACT } from '@/lib/crm';

export const AboutUsPage: React.FC = () => {
  const values = [
    {
      title: 'A True Telematics IT Company',
      desc: 'We are a specialized technology firm possessing deep domain engineering expertise in GPS, GNSS, NavIC, and IoT telematics protocols.',
      icon: Building2,
    },
    {
      title: 'Forward Thinking Innovation',
      desc: 'We engineer ahead of curve, integrating 4G LTE-M, AI driver vision, and cloud analytics before market obsolescence hits legacy 2G gear.',
      icon: Lightbulb,
    },
    {
      title: 'Real Problem Solvers',
      desc: 'We tackle the toughest logistics headaches—diesel siphoning, erratic driver detours, and temperature breaches—delivering tangible ROI.',
      icon: Wrench,
    },
    {
      title: '24×7×365 Customer Support',
      desc: 'Our relentless focus is on client uptime. Live human technicians support fleet operators every hour of every day throughout the year.',
      icon: Headphones,
    },
  ];

  const states = [
    'Delhi NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan', 'Karnataka (Bangalore)',
    'Maharashtra', 'Gujarat', 'Punjab', 'Bihar', 'West Bengal', 'Madhya Pradesh',
    'Tamil Nadu', 'Telangana', 'Andhra Pradesh', 'Kerala', 'Odisha', 'Assam',
    'Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir', 'Jharkhand', 'Chhattisgarh',
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="About ZASCO GPS"
        badge="Pure Telematics Engineering"
        description="A leading Indian provider of GPS vehicle tracking systems, offering innovative and cost-effective solutions comprising certified hardware and cloud telematics."
        breadcrumbs={[
          { label: 'About Us' },
        ]}
      />

      {/* Brand Story */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Our Mission & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Empowering Fleet Operators with Absolute Precision & Cost Control
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                ZASCO GPS (operated under <strong>{ZASCO_CONTACT.companyName}</strong>, GSTIN: <strong>{ZASCO_CONTACT.gstin}</strong>) is a pioneer in telematics innovation. Whether you own one private vehicle or manage an enterprise fleet of thousands of commercial multi-axle trailers, our highly skilled GPS fleet consultants assist you in selecting the exact telemetry architecture to maximize profitability.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our tracking solutions provide a unique way for companies and individuals to monitor and control their cars, jeeps, trucks, buses, and heavy machinery to their precise details right from their smartphone or desktop.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>MoRTH AIS-140 Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 Standards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="/images/About-us-Single-image-1.jpg"
                  alt="Zasco Team & Hardware Lab"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Fleets Choose ZASCO
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Four cornerstones that set our engineering apart from generic import resellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                    Enterprise Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pan-India Footprint */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Pan-India Distribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Serving Fleet Operators Across All States & Union Territories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              With sales offices, godowns, and certified installation technician networks stationed across all primary transport junctions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {states.map((st, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {st}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryForm
            source="About Us Page"
            defaultMessage="I would like to inquire about ZASCO GPS company background and fleet deployment options."
          />
        </div>
      </section>
    </div>
  );
};
