/**
 * Zasco CRM Lead Integration Service
 * Posts visitor leads to Zasco Support CRM Lead Log Book
 * with fallback to WhatsApp Instant Connect.
 */

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  source?: string;
}

export const ZASCO_CONTACT = {
  salesPhone: '+91 97164 67527',
  salesPhoneRaw: '919716467527',
  supportPhone1: '+91 98680 90012',
  supportPhone2: '+91 86429 89898',
  supportPhone3: '+91 86868 64260',
  emailInfo: 'Info@zascogps.com',
  emailGeneral: 'zascogps@gmail.com',
  shopUrl: 'https://shop.zascogps.com',
  crmApiUrl: 'https://support.zascogps.com/api/client/visitor/lead',
  companyName: 'E TRENDZ INDIA',
  brandName: 'ZASCO GPS',
  gstin: '07CNSPS4538N1ZY',
  delhiAddress: '1st floor, 47, Pocket 10, Sector 20, Rohini, New Delhi, Delhi 110086, INDIA',
  sec21Address: '1st floor, 143, Pocket 5, Sector 21, Rohini, New Delhi, Delhi 110086 INDIA',
};

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(ZASCO_CONTACT.crmApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        phoneNumber: payload.phone,
        email: payload.email || undefined,
        initialMessage: payload.message || `Website Inquiry from ${payload.source || 'Zasco Web'}`,
        currentPage: window.location.pathname,
        referrer: document.referrer,
      }),
    });

    if (res.ok) {
      return { success: true, message: 'Thank you! Your inquiry has been dispatched to our sales team.' };
    } else {
      const data = await res.json().catch(() => ({}));
      return { 
        success: false, 
        message: data.error || 'Server error. Please connect with our team on WhatsApp directly.' 
      };
    }
  } catch (err) {
    console.warn('CRM dispatch error, switching to direct WhatsApp bridge:', err);
    return {
      success: false,
      message: 'Could not connect to CRM server. Redirecting to WhatsApp...',
    };
  }
}

export function getWhatsAppUrl(text?: string, phone = ZASCO_CONTACT.salesPhoneRaw): string {
  const defaultText = 'Hi Zasco GPS Team, I am interested in your GPS vehicle tracking and telematics solutions. Please provide pricing and product catalog.';
  const encoded = encodeURIComponent(text || defaultText);
  return `https://wa.me/${phone}?text=${encoded}`;
}
