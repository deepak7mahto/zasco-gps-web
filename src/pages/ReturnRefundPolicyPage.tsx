import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { ZASCO_CONTACT } from '@/lib/crm';

export const ReturnRefundPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Return & Refund Policy"
        badge="Customer Assurance"
        description="Review our guidelines regarding hardware warranty, 7-day replacement guarantee, return merchandise authorization, and subscription refunds."
        breadcrumbs={[
          { label: 'Return & Refund Policy' },
        ]}
      />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm leading-relaxed space-y-6">
          <p className="text-slate-500 text-xs">
            <strong>Operating Entity:</strong> {ZASCO_CONTACT.companyName} | Brand: <strong>{ZASCO_CONTACT.brandName}</strong>
          </p>

          <h3 className="text-lg font-bold text-slate-900">1. Returns & 7-Day Replacement Policy</h3>
          <p className="text-slate-600">
            Thank you for your purchase. We hope you are satisfied with your ZASCO GPS tracking system. However, if you are not completely satisfied with your purchase for any valid technical defect or damaged shipment, you may return it to us for a full refund or an exchange within seven (7) days of receipt.
          </p>
          <p className="text-slate-600">
            All returned items must be in new and unused condition, with all original harness wires, SIM cards, instruction manuals, stickers, and original manufacturer packaging intact.
          </p>

          <h3 className="text-lg font-bold text-slate-900">2. Return Merchandise Authorization (RMA) Process</h3>
          <p className="text-slate-600">
            To return an item, please contact our customer service desk at <strong>{ZASCO_CONTACT.emailInfo}</strong> or call <strong>{ZASCO_CONTACT.supportPhone1}</strong> to obtain a Return Merchandise Authorization (RMA) tracking number.
          </p>
          <p className="text-slate-600">
            After receiving an RMA number, place the device securely in its original packaging along with proof of purchase, and ship your return to the following address:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
            <strong>ZASCO GPS (E TRENDZ INDIA)</strong><br />
            Attn: Returns Department (RMA Desk)<br />
            {ZASCO_CONTACT.delhiAddress}
          </div>

          <h3 className="text-lg font-bold text-slate-900">3. Inspection & Refunds</h3>
          <p className="text-slate-600">
            After receiving your returned unit and inspecting the condition of the hardware, we will process your replacement or refund. Please allow at least seven (7) working days from the receipt of your item to complete processing. Refunds will be issued directly to your original payment method (UPI, bank transfer, or credit card).
          </p>

          <h3 className="text-lg font-bold text-slate-900">4. Exceptions & Warranty Terms</h3>
          <p className="text-slate-600">
            The following items and circumstances are non-refundable:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Telecom SIM card monthly data packs that have already been activated on the carrier network.</li>
            <li>Custom white-label development fees or custom domain SSL deployment fees.</li>
            <li>Devices that have suffered physical water damage beyond their IP rating, burnt electrical components from short-circuiting outside rated voltage specifications, or sliced antenna cables.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900">5. Questions & Assistance</h3>
          <p className="text-slate-600">
            If you have any questions concerning our return policy, please reach out to us:
            <br />
            <strong>Phone:</strong> {ZASCO_CONTACT.supportPhone1} / {ZASCO_CONTACT.salesPhone}
            <br />
            <strong>Email:</strong> {ZASCO_CONTACT.emailInfo} / {ZASCO_CONTACT.emailGeneral}
          </p>
        </div>
      </section>
    </div>
  );
};
