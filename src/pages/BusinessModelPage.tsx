import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Truck, 
  Layers, 
  Store, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export const BusinessModelPage: React.FC = () => {
  const models = [
    {
      title: 'Dealer Distribution',
      slug: 'distribution',
      href: '/distribution',
      badge: 'Fastest Start',
      icon: Truck,
      description: 'Focus on sales, leave the rest to us. Provide your local customers with reliable ZASCO GPS hardware and access to our proven platform.',
      highlights: [
        'Wholesale hardware prices with high retail margins',
        'Ready-to-sell devices pre-configured with active SIMs',
        'Zero software hosting or server maintenance headaches',
        'Sales and technical collateral provided',
      ],
      idealFor: 'Auto accessory shops, car dealers, auto electricians, local telematics resellers.',
    },
    {
      title: 'White Label Platform',
      slug: 'white-label',
      href: '/white-label',
      badge: 'Your Own Brand',
      icon: Layers,
      description: 'Your brand, our system. Launch your own branded GPS tracking enterprise with custom Android/iOS apps, custom domain, and customized UI.',
      highlights: [
        'Branded iOS & Android mobile apps published under your name',
        'Custom web domain (e.g. track.yourcompany.com)',
        'Custom SMS gateway & SMTP email notification branding',
        'Full administrative sub-account management controls',
      ],
      idealFor: 'Established tracking providers, telecom agents, security agencies, fleet owners.',
    },
    {
      title: 'Zasco Franchising',
      slug: 'zasco-franchising',
      href: '/zasco-franchising',
      badge: 'Turnkey Franchise',
      icon: Store,
      description: 'An all-inclusive franchise solution. Hassle-free territory exclusivity under India’s leading vehicle tracking brand with recurring renewal income.',
      highlights: [
        'Official country/state franchise brand licensing & protected territory',
        'Turnkey website, marketing collateral, and custom CRM module',
        'Pre-configured hardware inventory delivered to your doorstep',
        'Substantial recurring revenue share on yearly SIM & platform renewals',
      ],
      idealFor: 'Entrepreneurs, regional logistics aggregators, master distributors.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="ZASCO GPS Business Models"
        badge="Partnership Ecosystem"
        description="Choose the ideal model to launch or scale your vehicle tracking business. From local distribution to custom white-label branding and turnkey regional franchising."
        breadcrumbs={[
          { label: 'Business Model' },
        ]}
      />

      {/* Overview Cards */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Three Powerful Ways to Build a High-Growth Telematics Business
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Vehicle tracking in India is experiencing exponential growth driven by AIS-140 compliance, e-commerce transport, and asset security. Partner with ZASCO GPS today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.slug}
                  className="bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-elevated hover:border-emerald-300 transition-all p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100/70 text-emerald-800 px-2.5 py-1 rounded-full">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {m.description}
                    </p>

                    <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Advantages
                      </div>
                      {m.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs mb-6">
                      <span className="font-bold text-slate-800">Ideal For: </span>
                      <span className="text-slate-600">{m.idealFor}</span>
                    </div>
                  </div>

                  <Link
                    to={m.href}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition shadow"
                  >
                    <span>Explore {m.title} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Side-by-Side Business Model Comparison
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Select the option that aligns with your capital, technical capability, and brand ambitions.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-4 px-6 font-bold">Feature / Capability</th>
                  <th className="py-4 px-6 font-bold text-emerald-400">Distribution</th>
                  <th className="py-4 px-6 font-bold text-emerald-400">White Label</th>
                  <th className="py-4 px-6 font-bold text-emerald-400">Zasco Franchising</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Branding & Logo</td>
                  <td className="py-3.5 px-6">ZASCO GPS Brand</td>
                  <td className="py-3.5 px-6 font-semibold text-slate-900">Your Own Company Brand</td>
                  <td className="py-3.5 px-6">ZASCO GPS Regional Franchise</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3.5 px-6 font-semibold">Custom Mobile Apps (Android/iOS)</td>
                  <td className="py-3.5 px-6">Standard ZASCO App</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Included (Your Brand)</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Custom Domain (track.yourbrand.com)</td>
                  <td className="py-3.5 px-6 text-slate-400">—</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3.5 px-6 font-semibold">Custom SMS Gateway & Sender ID</td>
                  <td className="py-3.5 px-6 text-slate-400">—</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Supported</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Supported</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Territory Exclusivity</td>
                  <td className="py-3.5 px-6">Non-Exclusive</td>
                  <td className="py-3.5 px-6">Open Global / Regional</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Protected Territory</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3.5 px-6 font-semibold">Hardware Wholesale Pricing Tier</td>
                  <td className="py-3.5 px-6">Dealer Wholesale</td>
                  <td className="py-3.5 px-6">Volume Tier</td>
                  <td className="py-3.5 px-6 font-bold text-emerald-700">Master Franchise Tier (Lowest)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Server & Cloud Maintenance</td>
                  <td className="py-3.5 px-6">100% Handled by Zasco</td>
                  <td className="py-3.5 px-6">100% Handled by Zasco</td>
                  <td className="py-3.5 px-6">100% Handled by Zasco</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3.5 px-6 font-semibold">CRM & Lead Log Module</td>
                  <td className="py-3.5 px-6 text-slate-400">—</td>
                  <td className="py-3.5 px-6">Optional Add-on</td>
                  <td className="py-3.5 px-6 text-emerald-600 font-bold">✓ Dedicated CRM Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryForm 
            source="Business Model Overview Page" 
            defaultMessage="I would like to discuss partnership options (Distribution / White Label / Franchise)."
          />
        </div>
      </section>
    </div>
  );
};
