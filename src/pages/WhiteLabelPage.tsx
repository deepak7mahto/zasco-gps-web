import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Smartphone, 
  Globe, 
  Server, 
  ShieldCheck, 
  Coins, 
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';

export const WhiteLabelPage: React.FC = () => {
  const whiteLabelFeatures = [
    {
      title: 'Branded Android & iOS Mobile Apps',
      desc: 'Published in the Google Play Store & Apple App Store under your company legal name with your custom splash screen, icons, and color schemes.',
      icon: Smartphone,
    },
    {
      title: 'Custom Web Tracking Domain & SSL',
      desc: 'Point your own domain (e.g. track.yourcompany.com) with automated SSL certificate provisioning and custom favicon/login branding.',
      icon: Globe,
    },
    {
      title: 'Custom SMS Gateway & Sender ID',
      desc: 'Plug in your own SMS gateway API (e.g. Twilio, MSG91, Textlocal) so all speeding and geofence alerts arrive with your company 6-character sender ID.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Enterprise Multi-Tier Billing Portal',
      desc: 'Create reseller accounts, assign device quotas, manage client subscription renewals, and set distinct permission tiers for dispatchers.',
      icon: Server,
    },
    {
      title: 'Wholesale Hardware Direct from Factory',
      desc: 'Access preferential wholesale hardware tariffs across Teltonika, Concox, Coban, and ZT-22 Fuel sensors without minimum order restrictions.',
      icon: Coins,
    },
    {
      title: '100% Server Uptime & High Availability',
      desc: 'Zero infrastructure headaches. Our cloud engineers manage server load balancing, database backups, and protocol upgrades 24×7.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="ZASCO GPS White Label Platform"
        badge="Your Brand. Our System."
        description="Launch your own branded vehicle tracking enterprise in days. Customized mobile apps, custom domain tracking, and dedicated cloud telematics."
        breadcrumbs={[
          { label: 'Business Model', href: '/business-model' },
          { label: 'White Label' },
        ]}
      />

      {/* Main Pitch */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                A Business Opportunity in GPS Tracking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Solution to Get Your Clients Up and Running in Minutes
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Are you already in the vehicle tracking business or running an IT/security firm, but want to offer the best telematics experience to your clients? ZASCO white label platform is crafted for you. 
              </p>
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-sm text-emerald-900 leading-relaxed font-medium">
                "The average user needs only 20% of the features in daily use – we crafted these core features (real-time map, interactive log book, calendar trip review, fuel alerts) to absolute perfection."
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>Zero Development Costs:</strong> Save millions in app and backend development expenses.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>Rapid 72-Hour Deployment:</strong> Your branded platform goes live in under 3 business days.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>Complete Client Ownership:</strong> You retain 100% direct relationship and recurring billing with your clients.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <QuickInquiryForm
                source="White Label Page"
                defaultMessage="I want a demo and quotation for the ZASCO White Label Telematics Platform."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of White Label Modules */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Everything Your Brand Needs to Dominate Telematics
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Enterprise grade infrastructure, fully re-skinned with your visual identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whiteLabelFeatures.map((feat, idx) => {
              const Icon = feat.icon;
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
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                    Included in White Label License
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct CTA */}
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Want to See a White-Label Demo under a Sample Brand?</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
              Our partner technical director will walk you through the admin console, sub-account setup, and app re-skinning process live.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl('Hi, I want a live demo of the ZASCO White-Label GPS software platform.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition"
              >
                Schedule WhatsApp Demo
              </a>
              <a
                href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition"
              >
                Call: {ZASCO_CONTACT.salesPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
