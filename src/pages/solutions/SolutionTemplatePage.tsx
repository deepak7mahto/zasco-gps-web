import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { FleetRoiCalculator } from '@/components/common/FleetRoiCalculator';
import { SOLUTIONS_DATA, SolutionDetail } from '@/data/solutions';
import { ZASCO_CONTACT, getWhatsAppUrl, getContextualWhatsAppUrl } from '@/lib/crm';
import { 
  Bus, 
  Users, 
  BarChart3, 
  Route, 
  Thermometer, 
  Cpu, 
  Fuel,
  CheckCircle2, 
  ShoppingCart, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface SolutionPageProps {
  forcedSlug?: string;
}

export const SolutionTemplatePage: React.FC<SolutionPageProps> = ({ forcedSlug }) => {
  const params = useParams<{ slug?: string }>();
  const slug = forcedSlug || params.slug || 'school-bus';

  const data: SolutionDetail | undefined = SOLUTIONS_DATA[slug];

  if (!data) {
    return <Navigate to="/solutions" replace />;
  }

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Bus': return <Bus className="w-6 h-6 text-emerald-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-emerald-600" />;
      case 'Route': return <Route className="w-6 h-6 text-emerald-600" />;
      case 'Thermometer': return <Thermometer className="w-6 h-6 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'Fuel': return <Fuel className="w-6 h-6 text-emerald-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title={data.title} 
        description={data.subtitle} 
        path={data.route} 
        image={data.heroImage} 
      />
      <PageHeader
        title={data.title}
        badge={data.badge}
        description={data.subtitle}
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: data.title },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={ZASCO_CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition whitespace-nowrap"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Buy Hardware for {data.title}</span>
            </a>
            <a
              href={getContextualWhatsAppUrl(data.route)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs border border-slate-700 transition whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        }
      />

      {/* Problem & Solution Overview Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Operational Overview
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Solving Critical Fleet Vulnerabilities with Automated Precision
              </h2>
              
              <div className="bg-red-50/60 p-5 rounded-2xl border border-red-100 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-800">
                  The Problem Fleet Managers Face:
                </h4>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  {data.problemStatement}
                </p>
              </div>

              <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  The ZASCO Telematics Solution:
                </h4>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {data.solutionOverview}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl(`Hi, I am interested in the ${data.title} solution. Please share quotation and hardware options.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consult Solution Architect</span>
                </a>
                <a
                  href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition"
                >
                  <span>Hotline: {ZASCO_CONTACT.salesPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-slate-900">
                <img
                  src={data.heroImage}
                  alt={data.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                    Certified Hardware & Firmware Bundle
                  </div>
                  <div className="text-sm font-semibold mt-1">
                    Pre-configured telemetry sensors with plug-and-play vehicle harnesses.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Feature Cards */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Capabilities & Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Field-proven telemetry features engineered specifically for {data.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                  Built-in Capability
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Checklist & Advantages */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capabilities */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Our Capabilities</span>
              </h3>
              <div className="space-y-4">
                {data.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Significant Advantages */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Significant Advantages</span>
              </h3>
              <div className="space-y-4">
                {data.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fleet ROI Calculator for Operational / Fleet Solutions */}
      {['fuel', 'analytics', 'route', 'sensor'].includes(slug) && (
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FleetRoiCalculator sourceContext={`Solution: ${data.title}`} />
          </div>
        </section>
      )}

      {/* Target Industries Served */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Industries That Rely on This Solution
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Customized implementation architectures for specialized corporate environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.industries.map((ind, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle">
                <h4 className="font-bold text-sm text-slate-900 mb-1">{ind.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {data.faqs.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Inquiry Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryForm
            source={`Solution: ${data.title}`}
            defaultMessage={`I would like a customized quotation and hardware demo for ${data.title}.`}
          />
        </div>
      </section>
    </div>
  );
};
