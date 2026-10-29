import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldAlert, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LeadCaptureModal } from './LeadCaptureModal';
import { getWhatsAppUrl } from '@/lib/crm';

interface FleetRoiCalculatorProps {
  className?: string;
  sourceContext?: string;
}

export const FleetRoiCalculator: React.FC<FleetRoiCalculatorProps> = ({ 
  className = '',
  sourceContext = 'Fleet ROI Calculator'
}) => {
  const [vehicleCount, setVehicleCount] = useState<number>(15);
  const [monthlyFuelPerVehicle, setMonthlyFuelPerVehicle] = useState<number>(45000);
  const [fleetType, setFleetType] = useState<string>('trucks');
  const [leadModalOpen, setLeadModalOpen] = useState<boolean>(false);

  // ROI Estimation Logic
  const fleetTypeMultipliers: Record<string, { label: string; pilferagePct: number; idlePct: number }> = {
    trucks: { label: 'Heavy Commercial Trucks', pilferagePct: 0.08, idlePct: 0.05 },
    vans: { label: 'Intra-City Delivery Vans', pilferagePct: 0.05, idlePct: 0.06 },
    buses: { label: 'School & Passenger Buses', pilferagePct: 0.06, idlePct: 0.07 },
    construction: { label: 'Excavators & Heavy Equipment', pilferagePct: 0.10, idlePct: 0.06 },
  };

  const currentMultiplier = fleetTypeMultipliers[fleetType] || fleetTypeMultipliers.trucks;

  const totalMonthlyFuel = vehicleCount * monthlyFuelPerVehicle;
  const pilferageSaved = Math.round(totalMonthlyFuel * currentMultiplier.pilferagePct);
  const idleSaved = Math.round(totalMonthlyFuel * currentMultiplier.idlePct);
  const totalMonthlySavings = pilferageSaved + idleSaved;
  const totalAnnualSavings = totalMonthlySavings * 12;
  
  // Approximate hardware + installation cost per vehicle (~₹3,500)
  const hardwareInvestment = vehicleCount * 3500;
  const paybackDays = Math.max(12, Math.round((hardwareInvestment / (totalMonthlySavings / 30))));

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const whatsappMessage = `Hi ZASCO GPS, I calculated my fleet ROI for ${vehicleCount} ${currentMultiplier.label}. Estimated savings: ${formatINR(totalAnnualSavings)}/year. I want to book a fleet trial.`;

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Fleet ROI & Fuel Savings Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            See Exactly How Much Your Fleet Can Save Every Month
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real telematics telemetry eliminates fuel drain theft, route detours, and engine idling waste. Adjust your fleet metrics below:
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Inputs (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-700/80 backdrop-blur-sm">
            {/* 1. Fleet Vehicle Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                1. Select Fleet Operation Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.entries(fleetTypeMultipliers).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFleetType(key)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition border text-left truncate ${
                      fleetType === key
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                        : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {val.label.split(' ')[0]} {val.label.split(' ')[1] || ''}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Number of Vehicles Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Number of Vehicles
                </label>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">
                  {vehicleCount} <span className="text-xs text-slate-400 font-sans font-normal">Vehicles</span>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="250"
                step="1"
                value={vehicleCount}
                onChange={(e) => setVehicleCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 vehicle</span>
                <span>50</span>
                <span>100</span>
                <span>250+ vehicles</span>
              </div>
            </div>

            {/* 3. Monthly Fuel Bill Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Average Monthly Fuel Expense (Per Vehicle)
                </label>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">
                  {formatINR(monthlyFuelPerVehicle)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="5000"
                value={monthlyFuelPerVehicle}
                onChange={(e) => setMonthlyFuelPerVehicle(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹10,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-2 border-t border-slate-700/60 grid grid-cols-2 gap-2 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>98% Sensor Accuracy</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero Mandatory Monthly Fee</span>
              </div>
            </div>
          </div>

          {/* Results Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-slate-850 p-6 sm:p-8 rounded-2xl border border-emerald-500/40 shadow-xl relative">
            <span className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wide">
              Estimated Return
            </span>

            <div className="space-y-5">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Estimated Total Monthly Savings
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                  {formatINR(totalMonthlySavings)}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Based on fuel theft prevention and idle time cuts for {vehicleCount} vehicles.
                </p>
              </div>

              <div className="border-t border-slate-700/80 pt-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 flex items-center space-x-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fuel Pilferage Prevented:</span>
                  </span>
                  <span className="font-bold text-white font-mono">{formatINR(pilferageSaved)}/mo</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Engine Idle Waste Eliminated:</span>
                  </span>
                  <span className="font-bold text-white font-mono">{formatINR(idleSaved)}/mo</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 flex items-center space-x-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Projected Annual Savings:</span>
                  </span>
                  <span className="font-black text-emerald-300 font-mono text-sm">{formatINR(totalAnnualSavings)}/yr</span>
                </div>
              </div>

              {/* Payback period indicator */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 text-center">
                <span className="text-xs text-slate-400">Hardware Payback Period:</span>
                <div className="text-lg font-bold text-white mt-0.5">
                  Full Return in ~<span className="text-emerald-400 font-mono">{paybackDays} Days</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => setLeadModalOpen(true)}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/20 transition group"
                >
                  <span>Claim Your Fleet Savings Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 transition"
                >
                  <span>Chat on WhatsApp with Calculations</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Trigger */}
      <LeadCaptureModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        title={`Custom Fleet Quote for ${vehicleCount} Vehicles`}
        defaultMessage={`Fleet ROI Calculation: ${vehicleCount} ${currentMultiplier.label}, Monthly Fuel: ${formatINR(monthlyFuelPerVehicle)}/vehicle. Source: ${sourceContext}`}
      />
    </div>
  );
};
