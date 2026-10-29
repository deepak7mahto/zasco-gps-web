import React, { useState } from 'react';
import { DeviceItem } from '@/data/devices';
import { getWhatsAppUrl } from '@/lib/crm';
import { X, Copy, Check, Radio, MessageSquare, Terminal, ExternalLink } from 'lucide-react';

interface DeviceConfigModalProps {
  device: DeviceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DeviceConfigModal: React.FC<DeviceConfigModalProps> = ({ device, isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen || !device) return null;

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Generate typical SMS configuration based on protocol
  const getSmsCommands = () => {
    const p = device.protocol.toLowerCase();
    if (p.includes('concox') || p.includes('gt06')) {
      return [
        { label: '1. Set APN (Airtel)', cmd: 'APN,airtelgprs.com#' },
        { label: '2. Set Server IP & Port', cmd: `SERVER,1,129.121.170.63,${device.port},0#` },
        { label: '3. Set Upload Interval (10s)', cmd: 'TIMER,10,10#' },
        { label: '4. Check Device Status', cmd: 'STATUS#' }
      ];
    } else if (p.includes('coban') || p.includes('tk103')) {
      return [
        { label: '1. Initialize Device', cmd: 'begin123456' },
        { label: '2. Set APN (Airtel)', cmd: 'apn123456 airtelgprs.com' },
        { label: '3. Set Server IP & Port', cmd: `adminip123456 129.121.170.63 ${device.port}` },
        { label: '4. Set GPRS Mode', cmd: 'gprs123456' },
        { label: '5. Check Parameters', cmd: 'check123456' }
      ];
    } else if (p.includes('teltonika')) {
      return [
        { label: '1. Set APN', cmd: 'setparam 2001:airtelgprs.com' },
        { label: '2. Set Server IP & Port', cmd: `setparam 2004:129.121.170.63;2005:${device.port};2006:0` },
        { label: '3. Query Info', cmd: 'getinfo' }
      ];
    } else {
      return [
        { label: '1. Set APN', cmd: 'APN#airtelgprs.com#' },
        { label: '2. Set Server IP & Port', cmd: `IP#129.121.170.63#${device.port}#` },
        { label: '3. Check Status', cmd: 'STATUS#' }
      ];
    }
  };

  const commands = getSmsCommands();
  const whatsappMsg = `Hi ZASCO GPS, I need server setup & port configuration support for ${device.name} (Port: ${device.port}, Protocol: ${device.protocol}).`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
            <Radio className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              {device.manufacturer} Quick Setup Guide
            </div>
            <h3 className="text-lg font-bold text-slate-900">{device.name}</h3>
          </div>
        </div>

        {/* Server & Port Credentials Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 mb-5 border border-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>ZASCO Live Telematics Server</span>
            <span className="text-emerald-400 font-mono">TCP / UDP</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Server Domain / IP:</span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="font-mono text-emerald-400 font-bold">129.121.170.63</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard('ip', '129.121.170.63')}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                  title="Copy IP"
                >
                  {copiedKey === 'ip' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Dedicated Listener Port:</span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="font-mono text-emerald-400 font-bold">{device.port}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard('port', String(device.port))}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                  title="Copy Port"
                >
                  {copiedKey === 'port' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Commands List */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            <span>Standard SMS Configuration Strings</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Send these commands via SMS from your registered admin mobile to the tracker's SIM number:
          </p>

          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {commands.map((c, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs"
              >
                <div>
                  <span className="text-[10px] text-slate-500 block">{c.label}</span>
                  <code className="font-mono text-slate-900 font-semibold">{c.cmd}</code>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(`cmd-${idx}`, c.cmd)}
                  className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition"
                  title="Copy command"
                >
                  {copiedKey === `cmd-${idx}` ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect with Engineer on WhatsApp</span>
          </a>

          <a
            href={`https://shop.zascogps.com?search=${encodeURIComponent(device.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
          >
            <span>Search Device on Store</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};
