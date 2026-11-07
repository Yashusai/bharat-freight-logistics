import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Phone 
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
  preSelectedVehicle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preSelectedVehicle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    origin: '',
    destination: '',
    service: preSelectedService || 'Full Truckload (FTL)',
    vehiclePreference: preSelectedVehicle || 'Heavy Multi-Axle Prime Mover (35-55 MT)',
    tonnage: '',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-300 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#0F2744] text-white px-6 py-4 flex items-center justify-between border-b border-[#1E3A5F]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FE6B00] flex items-center justify-center text-white">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight text-white">
                Request a Commercial Freight Quote
              </h3>
              <p className="text-xs text-slate-300">
                Direct tariff estimate from Bharat Freight & Logistics dispatch desk
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto text-xs text-slate-800">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200 p-6 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-emerald-950">
                Thank You, {formData.name || 'Valued Client'}!
              </h4>
              <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                Your freight quote inquiry from <strong>{formData.origin || 'Origin'}</strong> to <strong>{formData.destination || 'Destination'}</strong> has been assigned to our route coordinator. We will call you back at <strong>{formData.phone || 'your phone'}</strong> with rate confirmation.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 font-medium">
                For urgent immediate dispatches, call our toll-free desk: <strong className="text-slate-800">1800-209-8899</strong>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bharat Auto Parts Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Origin / Pickup City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Navi Mumbai / JNPT"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Destination City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dadri / Delhi NCR"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#FE6B00]"
                  >
                    <option value="Full Truckload (FTL)">Full Truckload (FTL)</option>
                    <option value="Part Truckload (PTL / LTL)">Part Truckload (PTL / LTL)</option>
                    <option value="Express Surface Cargo">Express Surface Cargo</option>
                    <option value="Cold Chain Reefer Transport">Cold Chain Reefer Transport</option>
                    <option value="Project Cargo & ODC Heavy Haul">Project Cargo & ODC Heavy Haul</option>
                    <option value="Warehousing & Transit Staging">Warehousing & Transit Staging</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Estimated Cargo Weight (Tonnes)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 28 Metric Tonnes"
                    value={formData.tonnage}
                    onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Cargo Description & Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the material, dimensions, loading schedule, or frequency of shipment..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#FE6B00]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#FE6B00] hover:bg-[#EA580C] text-white text-xs font-bold shadow-md transition-all border border-orange-400/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
