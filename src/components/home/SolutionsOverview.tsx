import React from 'react';
import { Link } from 'react-router-dom';
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
import { SOLUTIONS_DATA } from '@/data/solutions';

export const SolutionsOverview: React.FC = () => {
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
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100/60 px-3 py-1 rounded-full">
              Industry Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Tailored Telematics for Every Transport Need
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
              From school student safety to multi-tank diesel logistics and cold chain pharmaceuticals, ZASCO GPS delivers purpose-built modules.
            </p>
          </div>

          <Link
            to="/software"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 shrink-0"
          >
            <span>Explore Fleet Software Suite</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => {
            const Icon = getIcon(s.slug);
            return (
              <Link
                key={s.slug}
                to={s.route}
                className="group bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-elevated hover:border-emerald-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Image / Graphic */}
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
                      <div className="p-2 bg-emerald-600 text-white rounded-lg shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {s.problemStatement}
                    </p>

                    <div className="space-y-1.5">
                      {s.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          <span className="font-semibold text-slate-800">{feat.title}:</span>
                          <span className="text-slate-500 truncate">{feat.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                  <span>View Full Solution & Hardware</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
