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

export function getContextualWhatsAppUrl(pathname: string = typeof window !== 'undefined' ? window.location.pathname : '/'): string {
  let message = 'Hi ZASCO GPS, I am interested in your GPS vehicle tracking solutions. Please share pricing and catalog.';
  
  if (pathname.includes('/school-bus')) {
    message = 'Hi ZASCO GPS, I need a quote for School Bus GPS Tracking & Student RFID Attendance system.';
  } else if (pathname.includes('/employee')) {
    message = 'Hi ZASCO GPS, I would like to inquire about Employee Transport & Corporate Cab Management software.';
  } else if (pathname.includes('/fuel')) {
    message = 'Hi ZASCO GPS, I want to inquire about High-Precision Fuel Sensors & Theft Drain SMS alarms.';
  } else if (pathname.includes('/temperature')) {
    message = 'Hi ZASCO GPS, I need Cold Chain Temperature Monitoring & BLE Telemetry Probes for my vehicles.';
  } else if (pathname.includes('/route')) {
    message = 'Hi ZASCO GPS, I would like to inquire about Route Optimization & Multi-Stop Dispatch software.';
  } else if (pathname.includes('/sensor')) {
    message = 'Hi ZASCO GPS, I need custom Sensor Telemetry (PTO, AC, Door Sensor, Cement Mixer) for my machines.';
  } else if (pathname.includes('/analytics')) {
    message = 'Hi ZASCO GPS, I want to explore Fleet Analytics, Idling Reduction & Driver Scorecards.';
  } else if (pathname.includes('/white-label')) {
    message = 'Hi ZASCO GPS, I want details on starting a White Label GPS Tracking Business with branded apps.';
  } else if (pathname.includes('/distribution')) {
    message = 'Hi ZASCO GPS, I would like to apply for the ZASCO GPS Dealership & Wholesale Distribution tier.';
  } else if (pathname.includes('/franchising')) {
    message = 'Hi ZASCO GPS, I am interested in opening a ZASCO GPS City/State Franchise showroom.';
  } else if (pathname.includes('/supported-devices')) {
    message = 'Hi ZASCO GPS, I need hardware prices and bulk procurement for GPS tracker devices.';
  } else if (pathname.includes('/software')) {
    message = 'Hi ZASCO GPS, I want to schedule a live software demo for the ZASCO Fleet Platform & Mobile App.';
  } else if (pathname.includes('/contact')) {
    message = 'Hi ZASCO GPS, I am contacting you from the website contact page for business inquiry.';
  }
  
  return getWhatsAppUrl(message);
}
