import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { FEATURED_DEVICES, DEVICE_MANUFACTURERS, DeviceItem } from '@/data/devices';
import { ZASCO_CONTACT, getWhatsAppUrl } from '@/lib/crm';
import { 
  Search, 
  Cpu, 
  ShoppingCart, 
  MessageSquare, 
  ShieldCheck,
  Radio
} from 'lucide-react';
import { LeadCaptureModal } from '@/components/common/LeadCaptureModal';
import { DeviceConfigModal } from '@/components/devices/DeviceConfigModal';

export const SupportedDevicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('All');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [configModalOpen, setConfigModalOpen] = useState(false);
  const [activeDevice, setActiveDevice] = useState<DeviceItem | null>(null);

  const categories = ['All', 'AIS-140', 'Fuel & Sensor', '4G Wire-In', 'OBD-II', 'Magnetic & Portable', 'Asset & Personal'];

  const filteredDevices = useMemo(() => {
    return FEATURED_DEVICES.filter((device) => {
      const matchesSearch = 
        device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.protocol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(device.port).includes(searchQuery);

      const matchesCat = selectedCategory === 'All' || device.category === selectedCategory;
      const matchesMfg = selectedManufacturer === 'All' || device.manufacturer.toLowerCase() === selectedManufacturer.toLowerCase();

      return matchesSearch && matchesCat && matchesMfg;
    });
  }, [searchQuery, selectedCategory, selectedManufacturer]);

  const handleRequestConfig = (device: DeviceItem) => {
    setActiveDevice(device);
    setConfigModalOpen(true);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Supported GPS Devices & Protocols (650+ Models)"
        description="Search 650+ pre-integrated GPS trackers, telematics protocols, server ports, and SMS configuration commands on ZASCO GPS."
        path="/supported-devices"
      />
      <PageHeader
        title="Supported GPS Devices & Telematics Protocols"
        badge="650+ Pre-Integrated Terminals"
        description="Our high-throughput server architecture is designed to communicate with a wide variety of GPS trackers. Connect your existing hardware or deploy pre-configured devices."
        breadcrumbs={[
          { label: 'Supported Devices' },
        ]}
      />

      {/* Protocol Banner & Device Explanation */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <Radio className="w-5 h-5 text-emerald-600 animate-pulse" />
                <span>Got Your Own Tracking Device?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                Run your existing trackers on the ZASCO GPS high-performance server. There is often confusion about device clones and firmware revisions. If your device uses TCP/IP or UDP, share your protocol documentation and our engineering team will configure your custom port.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={getWhatsAppUrl('Hi, I need help configuring my GPS tracker port on the ZASCO server.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Device Config Support</span>
              </a>
              <a
                href={ZASCO_CONTACT.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Shop Certified Devices</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by device model, manufacturer, protocol, port..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition"
              />
            </div>

            {/* Manufacturer Dropdown */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 shrink-0">Manufacturer:</span>
              <select
                value={selectedManufacturer}
                onChange={(e) => setSelectedManufacturer(e.target.value)}
                className="px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none w-full md:w-48"
              >
                <option value="All">All Manufacturers</option>
                {DEVICE_MANUFACTURERS.map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Results Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Showing {filteredDevices.length} Hardware Models
            </span>
            <span className="text-xs text-slate-400">
              Need custom firmware? Contact our protocol team.
            </span>
          </div>

          {filteredDevices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDevices.map((device) => (
                <div
                  key={device.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition flex flex-col justify-between p-6"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        {device.category}
                      </span>
                      <div className="px-2 py-0.5 bg-slate-900 text-white rounded text-[11px] font-mono">
                        Port: {device.port}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="h-44 w-full bg-slate-50 rounded-xl mb-4 p-4 flex items-center justify-center border border-slate-100">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Titles */}
                    <div className="text-xs font-semibold text-emerald-600 uppercase">
                      {device.manufacturer}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2 line-clamp-1">
                      {device.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {device.description}
                    </p>

                    {/* Technical Specs Box */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 text-[11px] mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Protocol:</span>
                        <span className="font-mono text-slate-800 font-semibold">{device.protocol}</span>
                      </div>
                      {device.specs.voltage && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Operating Voltage:</span>
                          <span className="text-slate-800 font-medium">{device.specs.voltage}</span>
                        </div>
                      )}
                      {device.specs.cellular && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Cellular:</span>
                          <span className="text-slate-800 font-medium">{device.specs.cellular}</span>
                        </div>
                      )}
                    </div>

                    {/* Feature Bullets */}
                    <div className="space-y-1 text-xs">
                      {device.features.map((f, i) => (
                        <div key={i} className="flex items-center space-x-1.5 text-slate-600 text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={`${ZASCO_CONTACT.shopUrl}?search=${encodeURIComponent(device.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Buy Hardware</span>
                    </a>
                    <button
                      onClick={() => handleRequestConfig(device)}
                      className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
                    >
                      SMS & Port Setup
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center max-w-lg mx-auto">
              <Cpu className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No Direct Matches Found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                We support over 650+ unlisted protocols. Send us your device protocol manual and our server team will activate it within 24 hours.
              </p>
              <a
                href={getWhatsAppUrl(`Hi, I am looking for server integration support for tracker model: "${searchQuery}"`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Device SMS & Port Config Cheat Sheet Modal */}
      <DeviceConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
        device={activeDevice}
      />

      <LeadCaptureModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        title={activeDevice ? `Setup & Port Details: ${activeDevice.name}` : 'Request Device Protocol Setup'}
        defaultMessage={activeDevice ? `I need server configuration, port details, and bulk pricing for ${activeDevice.name} (Port: ${activeDevice.port}).` : ''}
        source="Supported Devices Catalog"
      />
    </div>
  );
};
