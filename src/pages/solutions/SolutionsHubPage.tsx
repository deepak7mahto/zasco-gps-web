import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/common/PageHeader';
import { SOLUTIONS_DATA } from '@/data/solutions';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  Bus, 
  Users, 
  BarChart3, 
  Route, 
  Thermometer, 
  Cpu, 
  Fuel, 
  ArrowRight 
} from 'lucide-react';

export const SolutionsHubPage: React.FC = () => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'school-bus': return Bus;
      case 'employee': return Users;
      case 'analytics': return BarChart3;
      case 'route': return Route;
      case 'temperature': return Thermometer;
      case 'sensor': return Cpu;
      case 'fuel': return Fuel;
      default: return Bus;
    }
  };

  const solutions = Object.values(SOLUTIONS_DATA);

  return (
    <div className="bg-white">
      <PageHeader
        title="Fleet Telematics & IoT Solutions"
        badge="Enterprise Verticals"
        description="Comprehensive vehicle tracking, sensor telemetry, and cold chain solutions engineered to address India’s most demanding transport logistics challenges."
        breadcrumbs={[
          { label: 'Solutions' },
        ]}
      />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Select Your Specialized Fleet Vertical
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every vertical includes pre-configured hardware, specialized mobile app interfaces, and customized alert triggers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => {
              const Icon = getIcon(s.slug);
              return (
                <Link
                  key={s.slug}
                  to={s.route}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-elevated hover:border-emerald-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                      <img 
                        src={s.heroImage} 
                        alt={s.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-emerald-400 text-[10px] font-bold uppercase tracking-wide border border-slate-700">
                          {s.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                        <div className="p-2 bg-emerald-600 text-white rounded-lg shadow">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {s.problemStatement}
                      </p>

                      <div className="space-y-1.5 border-t border-slate-100 pt-3">
                        {s.keyFeatures.slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                            <span className="font-semibold text-slate-800">{f.title}:</span>
                            <span className="truncate">{f.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:bg-emerald-50 transition">
                    <span>View Solution Architecture</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryForm
            source="Solutions Hub Page"
            defaultMessage="I want consultation on selecting the right GPS telemetry solutions for my fleet."
          />
        </div>
      </section>
    </div>
  );
};
