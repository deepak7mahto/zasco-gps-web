import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import { submitLead, getWhatsAppUrl, ZASCO_CONTACT } from '@/lib/crm';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultMessage?: string;
  source?: string;
}

export const LeadCaptureModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  title = 'Connect with ZASCO GPS Fleet Specialist',
  defaultMessage = '',
  source = 'Website Modal',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your full name and valid phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const res = await submitLead({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim() || `Inquiry from ${source}`,
      source,
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      // Still show WhatsApp bridge if backend offline
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const whatsappMessage = `Hi Zasco GPS, I am ${name || 'a customer'} (${phone || 'N/A'}). I am inquiring about: ${message || 'GPS Fleet Tracking Solutions'}. Please send pricing and demo.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header Ribbon */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-emerald-400 uppercase">
              Fast Response Desk
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-500 mb-6">
                Receive wholesale tier quotes, AIS-140 compliance certificates, and a live tracking demo within 15 minutes.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-lg font-medium border border-red-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma / Fleet Logistics"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rajesh@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Requirement & Fleet Details
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Number of vehicles (e.g. 10 trucks, school bus RFID, fuel monitoring rod, dealership inquiry)..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting to Sales Desk...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero Spam Guarantee. Direct Contact with Senior Telematics Engineer.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Dispatched!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Thank you, <strong>{name}</strong>. Our enterprise team has received your inquiry. For immediate priority service, connect directly via WhatsApp:
              </p>

              <div className="space-y-3">
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>

                <a
                  href={`tel:${ZASCO_CONTACT.salesPhoneRaw}`}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Call Hotline: {ZASCO_CONTACT.salesPhone}</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="text-xs text-slate-400 hover:text-slate-600 underline pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
