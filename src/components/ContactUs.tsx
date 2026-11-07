import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    originCity: '',
    destCity: '',
    service: 'Full Truckload (FTL)',
    weight: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 6 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        originCity: '',
        destCity: '',
        service: 'Full Truckload (FTL)',
        weight: '',
        message: '',
      });
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#FE6B00] text-xs font-bold uppercase tracking-wider">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight">
            Contact Our Transport & Logistics Desk
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Have freight to move? Need a reliable long-term logistics partner? Speak directly with our commercial dispatch specialists or visit our corporate office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#0F2744] border-b border-slate-100 pb-3">
                Corporate Office Contact
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FE6B00] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">Phone Numbers</span>
                  <a href="tel:+919820012345" className="font-bold text-slate-800 hover:text-[#FE6B00] block transition-colors">
                    +91 98200 12345 <span className="text-xs text-slate-500 font-normal">(Direct Dispatch)</span>
                  </a>
                  <a href="tel:18002098899" className="font-semibold text-slate-700 hover:text-[#FE6B00] block text-xs mt-0.5 transition-colors">
                    1800-209-8899 <span className="text-emerald-700 font-bold">(Toll-Free Customer Care)</span>
                  </a>
                  <a href="tel:+912227814400" className="text-slate-600 text-xs block mt-0.5">
                    +91 (022) 2781 4400 / 4401 (Boardline)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-sm border-t border-slate-100 pt-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F2744] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">Email Addresses</span>
                  <a href="mailto:contact@bharatfreightlogistics.com" className="font-bold text-slate-800 hover:text-[#FE6B00] block transition-colors">
                    contact@bharatfreightlogistics.com
                  </a>
                  <a href="mailto:quotes@bharatfreightlogistics.com" className="text-slate-600 text-xs block mt-0.5">
                    quotes@bharatfreightlogistics.com (Rate Inquiries)
                  </a>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-sm border-t border-slate-100 pt-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0F2744] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">Corporate Headquarters</span>
                  <p className="font-bold text-slate-800 leading-snug">
                    Bharat Freight Tower, Plot No. 42, Sector 18
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Near Vashi Railway Station Commercial Complex, Navi Mumbai, Maharashtra – 400703, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 text-sm border-t border-slate-100 pt-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">Business Hours</span>
                  <p className="font-semibold text-slate-800 text-xs">
                    Monday to Saturday: 8:00 AM – 8:00 PM IST
                  </p>
                  <p className="text-[11px] text-emerald-700 font-bold mt-0.5">
                    Highway Dispatch & Driver Assistance: 24/7/365 Non-Stop
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Contact Button */}
            <a
              href="https://wa.me/919820012345?text=Hello%20Bharat%20Freight%2C%20I%20would%20like%20to%20inquire%20about%20commercial%20transportation%20and%20freight%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block opacity-90">
                    Direct WhatsApp Support
                  </span>
                  <span className="text-base font-extrabold block">
                    Chat with Dispatch on WhatsApp
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Regional Branch Hubs List */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-2">
              <span className="font-bold text-[#0F2744] uppercase tracking-wider text-[11px] block">
                Regional Hub Offices Across India
              </span>
              <div className="grid grid-cols-2 gap-2 text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FE6B00]" />
                  <span><strong>Delhi NCR:</strong> Dadri ICD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FE6B00]" />
                  <span><strong>Bengaluru:</strong> Whitefield</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FE6B00]" />
                  <span><strong>Chennai:</strong> Ambattur</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FE6B00]" />
                  <span><strong>Ahmedabad:</strong> Sanand</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FE6B00]" />
                  <span><strong>Kolkata:</strong> Dankuni</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FE6B00]" />
                  <span><strong>Hyderabad:</strong> Sanathnagar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote / Inquiry Form & Google Maps */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg relative">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-extrabold text-[#0F2744]">
                  Request a Free Freight Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your transport requirements and our route coordinator will get back to you with competitive pricing within 30 minutes.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Quote Request Received Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our regional dispatch team has received your freight details from <strong>{formData.originCity || 'Origin'}</strong> to <strong>{formData.destCity || 'Destination'}</strong>. A dedicated logistics manager will contact you shortly at <strong>{formData.phone || 'your phone number'}</strong> with the official tariff estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Company / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Industrial Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
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
                        placeholder="+91 98200 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Pickup Location (City / State) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pune, Maharashtra"
                        value={formData.originCity}
                        onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Delivery Destination (City / State) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gurugram, Haryana"
                        value={formData.destCity}
                        onChange={(e) => setFormData({ ...formData, destCity: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white"
                      >
                        <option value="Full Truckload (FTL)">Full Truckload (FTL)</option>
                        <option value="Part Truckload (PTL)">Part Truckload (PTL) / LTL</option>
                        <option value="Express Surface Freight">Express Surface Freight</option>
                        <option value="Cold Chain Reefer">Cold Chain Refrigerated</option>
                        <option value="Over-Dimensional Cargo (ODC)">Over-Dimensional Cargo (ODC)</option>
                        <option value="Warehousing & 3PL">Warehousing & Distribution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Approximate Cargo Weight (Tonnage)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 24 Metric Tonnes"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Cargo Description & Any Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify material type (e.g. auto components, steel coils, pharma, machinery), loading dock preferences, or urgent timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#FE6B00] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#FE6B00] hover:bg-[#EA580C] text-white font-bold text-sm shadow-md transition-all border border-orange-400/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Freight Quote Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Location Preview Frame */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FE6B00]" />
                  <span className="font-bold text-xs text-[#0F2744]">
                    Google Maps Location – Navi Mumbai Headquarters
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Vashi+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative h-64 w-full bg-slate-200">
                <iframe
                  title="Bharat Freight Headquarters Navi Mumbai Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.827299097728!2d72.9961683!3d19.0713374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1340b10ab4f%3A0xe54e339178ad8b84!2sVashi%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
