import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { ZASCO_CONTACT } from '@/lib/crm';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Privacy Policy"
        badge="Legal & Compliance"
        description="Learn how ZASCO GPS collects, processes, and protects your personal telemetry and account data in accordance with the Indian Information Technology Act."
        breadcrumbs={[
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm leading-relaxed space-y-6">
          <p className="text-slate-500 text-xs">
            <strong>Last Updated:</strong> October 2024 | Legal Entity: <strong>{ZASCO_CONTACT.companyName}</strong> (Brand: <strong>{ZASCO_CONTACT.brandName}</strong>)
          </p>

          <h3 className="text-lg font-bold text-slate-900">1. Information Collection and Use</h3>
          <p className="text-slate-600">
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, telephone number, email address, postal address, vehicle registration number, and telemetry location coordinates ("Personal Information").
          </p>

          <h3 className="text-lg font-bold text-slate-900">2. Use of Personal & Telemetry Information</h3>
          <p className="text-slate-600">
            We use your personal and telemetry information strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Provide real-time vehicle tracking, geofence status, and historical route playback.</li>
            <li>Dispatch automated emergency notifications (speeding alerts, engine cut-off confirmations, accident SOS, and fuel theft warnings).</li>
            <li>Verify subscriptions, generate GST tax invoices, and process renewal payments.</li>
            <li>Maintain server performance, debug protocol errors, and prevent fraudulent intrusion.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900">3. Log Data & Device Telemetry</h3>
          <p className="text-slate-600">
            We collect information that your GPS tracker or mobile app sends whenever you connect to our server ("Log Data"). This Log Data may include information such as your device Internet Protocol ("IP") address, GSM cell ID, satellite signal fix, battery voltage, ignition status, sensor telemetry, and exact timestamps.
          </p>

          <h3 className="text-lg font-bold text-slate-900">4. Cookies & Session Storage</h3>
          <p className="text-slate-600">
            Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. We use session cookies to remember your authenticated fleet manager login and map display preferences. You can instruct your browser to refuse all cookies.
          </p>

          <h3 className="text-lg font-bold text-slate-900">5. Service Providers & Third Parties</h3>
          <p className="text-slate-600">
            We may employ third-party companies and individuals to facilitate our Service (e.g. telecom M2M SIM providers, map tile providers like Google Maps, and payment gateways). These third parties have access to your Personal Information only to perform these specific tasks on our behalf and are strictly obligated not to disclose or use it for any other purpose.
          </p>

          <h3 className="text-lg font-bold text-slate-900">6. Security of Data</h3>
          <p className="text-slate-600">
            The security of your Personal Information is critically important to us. We employ TLS 1.3 encryption for all data in transit, encrypted storage volumes, and strict role-based access control. However, remember that no method of transmission over the Internet or electronic storage is 100% secure, and we strive to use commercially acceptable means to protect your information.
          </p>

          <h3 className="text-lg font-bold text-slate-900">7. Changes to This Privacy Policy</h3>
          <p className="text-slate-600">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h3 className="text-lg font-bold text-slate-900">8. Contact Us</h3>
          <p className="text-slate-600">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Legal Entity:</strong> {ZASCO_CONTACT.companyName}
            <br />
            <strong>Address:</strong> {ZASCO_CONTACT.delhiAddress}
            <br />
            <strong>Email:</strong> {ZASCO_CONTACT.emailInfo} | {ZASCO_CONTACT.emailGeneral}
            <br />
            <strong>Phone:</strong> {ZASCO_CONTACT.salesPhone}
          </p>
        </div>
      </section>
    </div>
  );
};
