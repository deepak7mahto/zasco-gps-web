import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  Bus, 
  Users, 
  BarChart3, 
  Route, 
  Thermometer, 
  Cpu, 
  Fuel,
  Truck,
  Layers,
  Store,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';
import { SOLUTIONS_NAV, BUSINESS_MODEL_NAV } from '@/data/navigation';
import { LeadCaptureModal } from '@/components/common/LeadCaptureModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setBusinessOpen(false);
  }, [location.pathname]);

  const getSolutionIcon = (name?: string) => {
    switch (name) {
      case 'Bus': return <Bus className="w-5 h-5 text-emerald-600" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case 'Route': return <Route className="w-5 h-5 text-emerald-600" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'Fuel': return <Fuel className="w-5 h-5 text-emerald-600" />;
      default: return <Bus className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getBusinessIcon = (name?: string) => {
    switch (name) {
      case 'Truck': return <Truck className="w-5 h-5 text-emerald-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'Store': return <Store className="w-5 h-5 text-emerald-600" />;
      default: return <Truck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Sleek Enterprise Top Ribbon */}
      <div className="bg-slate-50 border-b border-slate-200/80 text-slate-600 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs whitespace-nowrap overflow-hidden">
            <span className="inline-flex items-center text-emerald-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5 shrink-0"></span>
              Govt AIS-140 Certified Telematics
            </span>
            <span className="text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-500 font-medium truncate">
              100,000+ Vehicles Monitored Pan-India
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 text-xs whitespace-nowrap ml-auto">
            <a 
              href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
              className="flex items-center space-x-1.5 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sales Hotline: <strong className="font-semibold text-slate-900">{ZASCO_CONTACT.salesPhone}</strong></span>
            </a>
            <button
              onClick={() => setLeadModalOpen(true)}
              className="hidden md:inline-flex items-center text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-md font-semibold transition shadow-sm"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div className={`transition-shadow duration-200 ${isScrolled ? 'shadow-md border-b border-slate-200 bg-white/95 backdrop-blur-md' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <img 
              src="/images/logo.png" 
              alt="ZASCO GPS" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/' ? 'text-emerald-600 font-semibold' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Solutions Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1 px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  location.pathname.startsWith('/solutions')
                    ? 'text-emerald-600 font-semibold' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full -left-12 w-[680px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-100 mb-2">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Enterprise Telematics Verticals
                      </span>
                      <span className="text-xs text-slate-500">Industry-specific telematics and sensor suites</span>
                    </div>
                    <Link 
                      to="/solutions" 
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
                    >
                      <span>All Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {SOLUTIONS_NAV.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                      >
                        <div className="p-2.5 bg-slate-100 rounded-lg group-hover:bg-emerald-50 group-hover:text-emerald-600 text-slate-600 transition shrink-0">
                          {getSolutionIcon(item.iconName)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 flex items-center space-x-1.5">
                            <span className="truncate">{item.label}</span>
                            {item.badge && (
                              <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-1.5 py-0.2 rounded-md shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                    {/* 8th Slot: Complete 4x2 Grid Symmetry */}
                    <Link
                      to="/solutions"
                      className="flex items-start space-x-3 p-2.5 rounded-xl bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-200/60 hover:border-emerald-300 transition group"
                    >
                      <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition shrink-0">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 flex items-center space-x-1.5">
                          <span>Browse All 7 Verticals</span>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">Explore school, fuel, cold chain, and fleet hubs</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Supported Devices */}
            <Link 
              to="/supported-devices" 
              className={`px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors flex items-center space-x-1.5 whitespace-nowrap ${
                location.pathname === '/supported-devices' ? 'text-emerald-600 font-semibold' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              <span>Supported Devices</span>
              <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-1.5 py-0.5 rounded-full">
                650+
              </span>
            </Link>

            {/* Software */}
            <Link 
              to="/software" 
              className={`px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/software' ? 'text-emerald-600 font-semibold' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Software
            </Link>

            {/* Business Model Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={() => setBusinessOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1 px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  location.pathname.includes('business') || location.pathname.includes('distribution') || location.pathname.includes('white-label') || location.pathname.includes('franchising')
                    ? 'text-emerald-600 font-semibold' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                <span>Business Model</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} />
              </button>

              {businessOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 shadow-xl rounded-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Partnership Programs
                  </div>
                  {BUSINESS_MODEL_NAV.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition group"
                    >
                      <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition shrink-0">
                        {getBusinessIcon(item.iconName)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 flex items-center space-x-2">
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2 px-3">
                    <Link to="/business-model" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center justify-between">
                      <span>View All Business Models</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link 
              to="/about-us" 
              className={`px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/about-us' ? 'text-emerald-600 font-semibold' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* Contact */}
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                location.pathname === '/contact' ? 'text-emerald-600 font-semibold' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
            {/* WhatsApp Direct Chat */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200/80 whitespace-nowrap transition"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Buy Now / Production Shop Button */}
            <a
              href={ZASCO_CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition whitespace-nowrap group"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Shop GPS</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={ZASCO_CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
              title="Shop Online"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[115px] bottom-0 bg-white z-40 overflow-y-auto border-t border-slate-200 p-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-2 pb-8">
            <Link 
              to="/" 
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Home
            </Link>

            {/* Mobile Business Model Accordion */}
            <div className="border border-slate-100 rounded-lg p-2 bg-slate-50/50">
              <div className="px-2 py-1 font-bold text-xs uppercase text-slate-400 tracking-wider">
                Business Models
              </div>
              {BUSINESS_MODEL_NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <Link 
              to="/supported-devices" 
              className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              <span>Supported Devices</span>
              <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">650+ Models</span>
            </Link>

            <Link 
              to="/software" 
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Software Platform
            </Link>

            {/* Mobile Solutions Accordion */}
            <div className="border border-slate-100 rounded-lg p-2 bg-slate-50/50">
              <div className="px-2 py-1 font-bold text-xs uppercase text-slate-400 tracking-wider">
                Fleet Solutions
              </div>
              {SOLUTIONS_NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <Link 
              to="/about-us" 
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href={ZASCO_CONTACT.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-base shadow"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>BUY NOW / SHOP ONLINE</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-base"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Chat on WhatsApp (+91 97164 67527)</span>
              </a>

              <button
                onClick={() => setLeadModalOpen(true)}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm"
              >
                Request Callback / Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instant Lead Modal */}
      <LeadCaptureModal 
        isOpen={leadModalOpen} 
        onClose={() => setLeadModalOpen(false)} 
        title="Request ZASCO GPS Product Catalog & Quote" 
      />
    </header>
  );
};
