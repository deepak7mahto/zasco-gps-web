import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { ZASCO_CONTACT } from '@/lib/crm';

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Terms and Conditions"
        badge="Legal Agreement"
        description="Please read these terms and conditions carefully before availing of any ZASCO GPS hardware, platform software, or SIM connectivity services."
        breadcrumbs={[
          { label: 'Terms and Conditions' },
        ]}
      />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm leading-relaxed space-y-6">
          <p className="text-slate-500 text-xs">
            <strong>Operating Company:</strong> {ZASCO_CONTACT.companyName} | GSTIN: {ZASCO_CONTACT.gstin} | Brand: {ZASCO_CONTACT.brandName}
          </p>

          <h3 className="text-lg font-bold text-slate-900">1. Agreement to Terms</h3>
          <p className="text-slate-600">
            By purchasing, installing, or activating a ZASCO GPS tracking device, software platform account, or mobile application, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h3 className="text-lg font-bold text-slate-900">2. Eligibility</h3>
          <p className="text-slate-600">
            You must be at least 18 years of age or an authorized legal corporate entity to subscribe to ZASCO GPS telematics. By agreeing to these Terms, you represent and warrant that you possess the legal authority to bind yourself or your company.
          </p>

          <h3 className="text-lg font-bold text-slate-900">3. Prohibited Conduct & Lawful Use</h3>
          <p className="text-slate-600">
            You agree that you shall use ZASCO GPS hardware and software strictly for lawful fleet management, vehicle safety, or consented asset tracking purposes. You expressly agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Install tracking units on any vehicle, asset, or person without prior legal ownership or explicit written authorization.</li>
            <li>Attempt to reverse-engineer, decompile, or intercept server protocol communications.</li>
            <li>Use the software or API to harass, stalk, or violate the privacy of any individual.</li>
            <li>Resell or redistribute the tracking software without an authorized White Label or Dealer agreement.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900">4. Hardware Installation & Vehicle Warranty</h3>
          <p className="text-slate-600">
            While ZASCO GPS devices are designed for coupler-to-coupler, zero-wire-cut installation, installations must be performed by certified automotive technicians. ZASCO GPS shall not be held liable for damages resulting from improper third-party wiring or unauthorized modification of OEM vehicle harnesses.
          </p>

          <h3 className="text-lg font-bold text-slate-900">5. Service Availability & Cellular Coverage</h3>
          <p className="text-slate-600">
            ZASCO GPS relies on third-party satellite networks (GPS, GLONASS, NavIC) and commercial cellular telecom providers (Airtel, Jio, Vi, BSNL). We are not responsible for tracking outages or telemetry delays caused by regional telecom carrier downtime, underground basement parking dead zones, or atmospheric satellite signal interference.
          </p>

          <h3 className="text-lg font-bold text-slate-900">6. Subscription Renewals & Termination</h3>
          <p className="text-slate-600">
            Telematics subscriptions (software cloud access and M2M SIM data) are billed on an annual or multi-year basis. Accounts that fail to renew within the 15-day grace period may be suspended and associated telecom SIMs deactivated.
          </p>

          <h3 className="text-lg font-bold text-slate-900">7. Limitation of Liability</h3>
          <p className="text-slate-600">
            To the maximum extent permitted by applicable law, in no event shall {ZASCO_CONTACT.companyName} or its directors be liable for any indirect, punitive, incidental, special, or consequential damages arising out of the use or inability to use the GPS service or hardware.
          </p>

          <h3 className="text-lg font-bold text-slate-900">8. Governing Law & Jurisdiction</h3>
          <p className="text-slate-600">
            These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
          </p>
        </div>
      </section>
    </div>
  );
};
