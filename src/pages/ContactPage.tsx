import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { QuickInquiryForm } from '@/components/common/QuickInquiryForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Building2 
} from 'lucide-react';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Contact ZASCO GPS"
        badge="24×7 Operations & Support"
        description="Connect with our technical support team, corporate sales desk, or visit our central offices in New Delhi. We are here to assist you 365 days a year."
        breadcrumbs={[
          { label: 'Contact Us' },
        ]}
      />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Office Details & Contact Channels */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Direct Contact Desk
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                  Get in Touch with our Telematics Specialists
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Have inquiries regarding bulk fleet discounts, device installation coupler harnesses, or white-label server onboarding? Contact us immediately.
                </p>
              </div>

              {/* Office Coordinates Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Head Office & Dispatch Center</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {ZASCO_CONTACT.delhiAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Regional Branch & Tech Support Center</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {ZASCO_CONTACT.sec21Address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotlines Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs uppercase mb-1">
                    <Phone className="w-4 h-4" />
                    <span>Direct Sales Hotline</span>
                  </div>
                  <a 
                    href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
                    className="text-base font-extrabold text-slate-900 hover:text-emerald-600 transition"
                  >
                    {ZASCO_CONTACT.salesPhone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sales & Partner Inquiries</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs uppercase mb-1">
                    <Phone className="w-4 h-4" />
                    <span>24×7 Tech Support</span>
                  </div>
                  <a 
                    href={`tel:919868090012`}
                    className="text-base font-extrabold text-slate-900 hover:text-emerald-600 transition"
                  >
                    {ZASCO_CONTACT.supportPhone1}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Device Setup & Wiring Desk</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center space-x-2 text-slate-700 font-bold text-xs uppercase mb-1">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>Primary Email</span>
                  </div>
                  <a 
                    href={`mailto:${ZASCO_CONTACT.emailInfo}`}
                    className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition truncate block"
                  >
                    {ZASCO_CONTACT.emailInfo}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ZASCO_CONTACT.emailGeneral}</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center space-x-2 text-slate-700 font-bold text-xs uppercase mb-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Business Hours</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900">Monday – Saturday</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">9:30 AM to 7:00 PM IST (Emergency 24×7)</p>
                </div>
              </div>

              {/* Company Legal Registration Box */}
              <div className="p-4 bg-slate-900 text-slate-300 rounded-xl text-xs space-y-1">
                <div><strong className="text-white">Legal Entity:</strong> {ZASCO_CONTACT.companyName}</div>
                <div><strong className="text-white">GSTIN Registration:</strong> {ZASCO_CONTACT.gstin}</div>
              </div>
            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-6">
              <QuickInquiryForm
                source="Contact Page"
                defaultMessage="Hello Zasco Team, I want to inquire about GPS tracking services."
              />

              {/* Instant WhatsApp Ribbon */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-emerald-900">Need Immediate Assistance?</h5>
                    <p className="text-[11px] text-emerald-700">Chat directly with senior sales engineer on WhatsApp.</p>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-80 w-full bg-slate-100 relative overflow-hidden border-b border-slate-200">
        <iframe
          title="ZASCO GPS Corporate Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.46973307511!2d77.06019566270966!3d28.73087094056157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0716c5db38cb%3A0x6b69cfc9d300e47!2sSector%2020%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1698500000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
