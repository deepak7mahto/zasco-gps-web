import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Core Pages
import { HomePage } from '@/pages/HomePage';
import { BusinessModelPage } from '@/pages/BusinessModelPage';
import { DistributionPage } from '@/pages/DistributionPage';
import { WhiteLabelPage } from '@/pages/WhiteLabelPage';
import { FranchisingPage } from '@/pages/FranchisingPage';
import { SupportedDevicesPage } from '@/pages/SupportedDevicesPage';
import { SoftwarePage } from '@/pages/SoftwarePage';

// Solutions Pages
import { SolutionsHubPage } from '@/pages/solutions/SolutionsHubPage';
import { SolutionTemplatePage } from '@/pages/solutions/SolutionTemplatePage';

// Company & Legal Pages
import { AboutUsPage } from '@/pages/AboutUsPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from '@/pages/TermsAndConditionsPage';
import { ReturnRefundPolicyPage } from '@/pages/ReturnRefundPolicyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Shop Redirection Page
import { ZASCO_CONTACT } from '@/lib/crm';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Seamless Shop Redirect / Portal Component
const ShopRedirectPage: React.FC = () => {
  useEffect(() => {
    window.location.href = ZASCO_CONTACT.shopUrl;
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4" />
      <h2 className="text-xl font-bold text-slate-900 mb-2">Redirecting to ZASCO Online Store...</h2>
      <p className="text-sm text-slate-500 mb-4">
        Taking you to the official e-commerce store at <span className="font-mono text-emerald-600">shop.zascogps.com</span>
      </p>
      <a
        href={ZASCO_CONTACT.shopUrl}
        className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs shadow"
      >
        Click here if not redirected automatically
      </a>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/business-model" element={<BusinessModelPage />} />
            <Route path="/distribution" element={<DistributionPage />} />
            <Route path="/white-label" element={<WhiteLabelPage />} />
            <Route path="/zasco-franchising" element={<FranchisingPage />} />
            <Route path="/supported-devices" element={<SupportedDevicesPage />} />
            <Route path="/software" element={<SoftwarePage />} />

            {/* Solutions Hub & 7 Dedicated Solution Routes */}
            <Route path="/solutions" element={<SolutionsHubPage />} />
            <Route path="/solutions/:slug" element={<SolutionTemplatePage />} />
            <Route path="/solutions/school-bus" element={<SolutionTemplatePage forcedSlug="school-bus" />} />
            <Route path="/solutions/employee" element={<SolutionTemplatePage forcedSlug="employee" />} />
            <Route path="/solutions/analytics" element={<SolutionTemplatePage forcedSlug="analytics" />} />
            <Route path="/solutions/route" element={<SolutionTemplatePage forcedSlug="route" />} />
            <Route path="/solutions/temperature" element={<SolutionTemplatePage forcedSlug="temperature" />} />
            <Route path="/solutions/sensor" element={<SolutionTemplatePage forcedSlug="sensor" />} />
            <Route path="/solutions/fuel" element={<SolutionTemplatePage forcedSlug="fuel" />} />

            {/* Legacy WordPress URL Aliases for 1:1 Crawl Fidelity & SEO Redirection */}
            <Route path="/solution-2" element={<Navigate to="/solutions" replace />} />
            <Route path="/school-tracking-management" element={<Navigate to="/solutions/school-bus" replace />} />
            <Route path="/employee-management-2" element={<Navigate to="/solutions/employee" replace />} />
            <Route path="/location-based-analytics" element={<Navigate to="/solutions/analytics" replace />} />
            <Route path="/route-2" element={<Navigate to="/solutions/route" replace />} />
            <Route path="/temperature-2" element={<Navigate to="/solutions/temperature" replace />} />
            <Route path="/sensor" element={<Navigate to="/solutions/sensor" replace />} />
            <Route path="/fuel-2" element={<Navigate to="/solutions/fuel" replace />} />

            {/* Company & Policies */}
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-and-policy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/refund-policy" element={<ReturnRefundPolicyPage />} />
            <Route path="/return-and-refund-policy" element={<Navigate to="/refund-policy" replace />} />

            {/* Production E-Commerce Store Integration */}
            <Route path="/shop" element={<ShopRedirectPage />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
