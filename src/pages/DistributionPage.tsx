import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Award, 
  Package, 
  Headphones, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';

export const DistributionPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'CALL & CONSULT',
      desc: 'Speak with our Dealer Relationship Director to discuss your local city territory, vehicle volume, and initial stock.',
    },
    {
      number: '02',
      title: 'TRY SYSTEM',
      desc: 'Get an instant live dealer demo login. Experience the web platform, mobile apps, and dispatch portal firsthand.',
    },
    {
      number: '03',
      title: 'ORDER HARDWARE',
      desc: 'Order your initial starter pack at discounted wholesale dealer prices. Devices arrive pre-configured with active SIMs.',
    },
    {
      number: '04',
      title: 'RESELL & PROFIT',
      desc: 'Install for local commercial fleets, car owners, or schools. Earn high upfront hardware margins plus recurring yearly renewals.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="ZASCO GPS Dealer Distribution"
        badge="Focus on Sales, Leave the Rest to Us"
        description="The easiest way to start a lucrative vehicle tracking business in your city. Become an authorized local distributor of the ZASCO GPS platform."
        breadcrumbs={[
          { label: 'Business Model', href: '/business-model' },
          { label: 'Distribution' },
        ]}
      />

      {/* Main Pitch */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Authorized City Partnership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Get Your GPS Business Up and Running in No Time
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We provide everything you need to start business in vehicle tracking. Become a certified partner of ZASCO GPS and gain all the advantages of an established brand and modern telematics technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Package className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Wholesale Pricing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Top-tier hardware rates allowing you to compete against anyone in your region.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Pre-Configured SIMs</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Devices come pre-flashed and tested with multi-network M2M SIM cards.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Headphones className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dedicated Tech Desk</h4>
                    <p className="text-xs text-slate-500 mt-0.5">24×7 installer technical guidance for sensor calibration and wiring.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Marketing Assets</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Brochures, catalog sheets, demo videos, and certificates provided.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <QuickInquiryForm
                source="Dealer Distribution Page"
                defaultMessage="I want to apply for authorized ZASCO GPS dealership in my district/city."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Onboarding Workflow */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Easy Way to Make a GPS Tracking Business
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Follow our proven 4-step dealer onboarding blueprint to generate income from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-emerald-600 font-mono">
                    {st.number}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs text-emerald-600 font-bold">
                  <span>Step {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Ribbon */}
          <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">Ready to Start Dealership in Your City?</h4>
              <p className="text-xs text-slate-300">Call our Distribution Onboarding Head: {ZASCO_CONTACT.salesPhone}</p>
            </div>
            <a
              href={getWhatsAppUrl('Hi, I want to become a ZASCO GPS authorized distributor in my city.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition shrink-0"
            >
              Apply via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
