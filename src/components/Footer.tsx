import React from 'react';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A192F] text-slate-300 text-xs border-t border-[#1E3A5F]">
      {/* Pre-footer Callout Banner */}
      <div className="bg-[#0F2744] border-b border-[#1E3A5F] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Ready to streamline your enterprise road transportation?
            </h4>
            <p className="text-xs text-slate-300">
              Speak with our commercial logistics directors for customized contract rates and dedicated fleet deployment.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="tel:18002098899"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1A385E] hover:bg-[#234979] text-white font-bold text-xs border border-sky-400/30 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FE6B00]" />
              <span>1800-209-8899 (Toll Free)</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FE6B00] hover:bg-[#EA580C] text-white font-bold text-xs shadow-md shadow-orange-950/40 transition-all border border-orange-400/40"
            >
              <span>Request Transport Quote</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FE6B00] flex items-center justify-center text-white shadow-md">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  BHARAT FREIGHT
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Transport & Logistics Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Premier Indian commercial road freight carrier operating nationwide full truckload (FTL), express surface cargo, refrigerated cold-chain, and heavy haulage services across all 28 states and major industrial corridors.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FE6B00] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">
                  Bharat Freight Tower, Plot 42, Sector 18, Vashi, Navi Mumbai, Maharashtra – 400703
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FE6B00] shrink-0" />
                <a href="tel:+919820012345" className="hover:text-white transition-colors">
                  +91 98200 12345 / 1800-209-8899
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FE6B00] shrink-0" />
                <a href="mailto:contact@bharatfreightlogistics.com" className="hover:text-white transition-colors">
                  contact@bharatfreightlogistics.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-700/60 pb-2">
              Company
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-[#FE6B00] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#FE6B00] transition-colors">Transport Services</a></li>
              <li><a href="#fleet" className="hover:text-[#FE6B00] transition-colors">Commercial Fleet</a></li>
              <li><a href="#why-us" className="hover:text-[#FE6B00] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-[#FE6B00] transition-colors">Contact Dispatch Office</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-700/60 pb-2">
              Our Services
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Full Truckload (FTL)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Part Truckload (PTL / LTL)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Express Surface Cargo</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cold Chain & Reefer</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Project Cargo & ODC</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Warehousing & 3PL</a></li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-700/60 pb-2">
              Key Transport Hubs
            </h5>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>• Navi Mumbai & JNPT Port (HQ)</li>
              <li>• Delhi NCR & Dadri Logistics Park</li>
              <li>• Bengaluru Industrial Corridor</li>
              <li>• Chennai Ennore Port Siding</li>
              <li>• Ahmedabad & Sanand SEZ</li>
              <li>• Kolkata & Dankuni Freight Hub</li>
              <li>• Hyderabad Sanathnagar Depot</li>
              <li>• Pune Chakan Auto Cluster</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="bg-[#06101E] py-6 px-4 sm:px-8 border-t border-[#132742]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bharat Freight & Logistics Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Carriage by Road Act 2007 Registered</span>
            <span>•</span>
            <span>ISO 9001:2015 Quality Certified</span>
            <span>•</span>
            <a 
              href="https://wa.me/919820012345" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us: +91 98200 12345</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
