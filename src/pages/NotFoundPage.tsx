import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingCart } from 'lucide-react';
import { ZASCO_CONTACT } from '@/lib/crm';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The requested page or telematics resource could not be found. It may have moved or been updated during the website transition.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/supported-devices"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition"
          >
            <Search className="w-4 h-4" />
            <span>Search Devices</span>
          </Link>
          <a
            href={ZASCO_CONTACT.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold transition"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Visit Shop</span>
          </a>
        </div>
      </div>
    </div>
  );
};
