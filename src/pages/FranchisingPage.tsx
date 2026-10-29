import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Store, 
  Award, 
  Headphones, 
  Package, 
  Globe, 
  MessageSquare, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/crm';

export const FranchisingPage: React.FC = () => {
  const franchisePerks = [
    {
      title: 'Ready-Made All-Inclusive Franchise',
      desc: 'Everything is taken care of: from branded localized website to high-converting marketing materials, you are completely equipped to sell from day one.',
      icon: Store,
    },
    {
      title: 'Unique Identity Under a Strong Brand',
      desc: 'Harness the credibility of ZASCO GPS—India’s top telematics provider. Receive localized territorial branding rights and official certification.',
      icon: Award,
    },
    {
      title: 'Full 24/7 Technical & Marketing Support',
      desc: 'Enjoy direct access to our tier-3 hardware technicians, customer relations coordinators, and digital marketing strategists.',
      icon: Headphones,
    },
    {
      title: 'Pre-Configured, Pre-Tested Devices',
      desc: 'Every tracker arrives pre-configured with active M2M SIM cards, branded franchise packaging, and zero manual firmware hassle.',
      icon: Package,
    },
    {
      title: 'Turnkey Website & Marketing Stories',
      desc: 'Flawless web experience tailored for your local region, complete with search engine optimized content, case studies, and marketing blog stories.',
      icon: Globe,
    },
    {
      title: 'Custom-Built CRM Module for Leads',
      desc: 'Never let a client slip through the cracks. Every franchise partner receives access to our custom CRM module, visitor radar, and lead log book.',
      icon: MessageSquare,
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="ZASCO GPS Franchising Program"
        badge="An All-Inclusive Franchise Solution. Hassle-Free."
        description="Don’t miss the opportunity to franchise the most user-friendly GPS tracking platform on the market. Start making money from day one with territorial exclusivity."
        breadcrumbs={[
          { label: 'Business Model', href: '/business-model' },
          { label: 'Franchising' },
        ]}
      />

      {/* Main Pitch */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Turnkey Regional Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Provide Your Customers With the Most Useful Telematics Platform
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Most users don’t need convoluted technical data sheets. They need a high-altitude outlook, instant real-time vehicle status, and quick reference—we got that covered with our ergonomic web interface, interactive log book, and live calendar views.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>The Perpetual Recurring Renewal Model</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unlike traditional one-time retail sales, GPS telematics generates substantial recurring income. As your vehicle subscriber base grows in your franchise territory, you receive guaranteed annual platform and SIM renewal shares every year.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protected territorial boundaries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Showroom & Godown layout blueprint</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Factory-direct hardware rate tiers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full training for sales and technicians</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <QuickInquiryForm
                source="Franchising Page"
                defaultMessage="I want to apply for a territorial ZASCO GPS Regional Franchise."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Deliverables Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why You Will Love Franchising with ZASCO
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              A complete turnkey enterprise package designed for rapid break-even and sustainable long-term cash flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchisePerks.map((p, idx) => {
              const Icon = p.icon;
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
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                    Included with Franchise Agreement
                  </div>
                </div>
              );
            })}
          </div>

          {/* Territory Inquiry Box */}
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Check Franchise Territory Availability</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
                Exclusive territories are allocated on a first-come, first-served basis across state capitals and industrial transport hubs.
              </p>
            </div>
            <a
              href={getWhatsAppUrl('Hi, I want to check franchise territory availability for my region.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition shrink-0"
            >
              Check Territory via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
