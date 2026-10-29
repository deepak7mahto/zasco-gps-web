import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { submitLead, getWhatsAppUrl, ZASCO_CONTACT } from '@/lib/crm';

interface QuickInquiryFormProps {
  source?: string;
  defaultMessage?: string;
  compact?: boolean;
}

export const QuickInquiryForm: React.FC<QuickInquiryFormProps> = ({
  source = 'Quick Form',
  defaultMessage = '',
  compact = false,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [vehicleCount, setVehicleCount] = useState('1-5');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    await submitLead({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: `${message || 'Quote Request'} | Fleet Size: ${vehicleCount} | Source: ${source}`,
      source,
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const whatsappText = `Hello ZASCO GPS, my name is ${name || 'Prospective Client'} (${phone}). Interested in: ${message || 'GPS Fleet Tracking System'} for ${vehicleCount} vehicles. Please send pricing.`;

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-md text-center">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-1">Inquiry Received!</h4>
        <p className="text-xs text-slate-600 mb-4">
          Our sales consultant will call back within 15 minutes. Or chat immediately on WhatsApp:
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={getWhatsAppUrl(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
            className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg text-xs transition"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Call Hotline</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
      <div className="mb-4">
        <h4 className="text-lg font-bold text-slate-900">Request Instant Fleet Quote</h4>
        <p className="text-xs text-slate-500">Free demo account + wholesale pricing schedule</p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Your Name / Business Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Kumar / Star Logistics"
            className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Number (WhatsApp) *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Number of Vehicles
          </label>
          <select
            value={vehicleCount}
            onChange={(e) => setVehicleCount(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none"
          >
            <option value="1-5">1 – 5 Vehicles</option>
            <option value="6-20">6 – 20 Vehicles</option>
            <option value="21-50">21 – 50 Vehicles</option>
            <option value="50+">50+ Commercial Fleet</option>
            <option value="Dealership">Dealer / White Label Partner</option>
          </select>
        </div>

        {!compact && (
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Specific Requirements (Sensors, AIS-140, Fuel)
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. School bus RFID tracking, fuel theft rod, temperature probes..."
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none resize-none"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center space-x-1.5 disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Get Wholesale Price & Live Demo</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
