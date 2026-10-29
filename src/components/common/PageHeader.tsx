import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  badge?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  badge,
  description,
  breadcrumbs,
  actions,
}) => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden py-14 lg:py-20 border-b border-slate-800">
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
        style={{ backgroundImage: 'url(/images/pattern-2.png)' }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-emerald-400 flex items-center space-x-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {b.href ? (
                <Link to={b.href} className="hover:text-emerald-400">
                  {b.label}
                </Link>
              ) : (
                <span className="text-slate-300 font-medium">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {actions && (
            <div className="flex flex-wrap items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
