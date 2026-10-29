import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  ShoppingCart,
  MessageSquare
} from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';
import { FOOTER_SECTIONS } from '@/data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Enterprise Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="ZASCO GPS" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India's premier GPS vehicle tracking, IoT sensor telemetry, and fleet management software platform. Powering over 100,000+ commercial trucks, school buses, cabs, and heavy earthmovers across India.
            </p>

            <div className="pt-2 space-y-1 text-xs text-slate-400 font-mono">
              <div><strong className="text-slate-300">Legal Entity:</strong> {ZASCO_CONTACT.companyName}</div>
              <div><strong className="text-slate-300">GSTIN:</strong> {ZASCO_CONTACT.gstin}</div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 text-[11px] text-emerald-400 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>MoRTH AIS-140 Certified</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO 9001:2015 Quality</span>
              </span>
            </div>

            <div className="pt-3 flex items-center space-x-3">
              <a
                href={ZASCO_CONTACT.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Shop Online (shop.zascogps.com)</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-medium border border-slate-700 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns from Navigation Config */}
          {FOOTER_SECTIONS.slice(0, 2).map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 flex items-center space-x-1 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Registered Offices Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Offices & Hotlines
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{ZASCO_CONTACT.delhiAddress}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Sales: {ZASCO_CONTACT.salesPhone}</div>
                  <div>Support: {ZASCO_CONTACT.supportPhone1}</div>
                  <div>Accounts: {ZASCO_CONTACT.supportPhone2}</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div>{ZASCO_CONTACT.emailInfo}</div>
                  <div>{ZASCO_CONTACT.emailGeneral}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Server & Supported Protocols Ribbon */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-slate-300">Server Integration Guides: </span>
              <span className="text-slate-400">
                Teltonika FMB series, Concox GT06N / WeTrack2, Coban TK103, CalAmp PEG, Bitrek BI 820, SinoTrack ST-901, Ruptela Eco4, Meitrack T333, AutoFon & Xirgo Global trackers.
              </span>
            </div>
            <Link to="/supported-devices" className="text-emerald-400 hover:underline shrink-0 font-medium">
              View All 650+ Devices →
            </Link>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © 2021–2026 <strong>ZASCO GPS</strong> | Legal Entity: <strong>{ZASCO_CONTACT.companyName}</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy & Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-slate-300 transition">
              Return & Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
