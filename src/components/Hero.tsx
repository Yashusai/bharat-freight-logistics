import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Award, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* High-Resolution Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85"
          alt="Heavy commercial trucks on modern national highway in India"
          className="w-full h-full object-cover object-center"
        />
        {/* Navy Blue Corporate Gradient Overlays for optimal readability and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001229]/95 via-[#0F2744]/90 to-[#0A192F]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A385E]/90 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-sm shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#FE6B00] animate-pulse"></span>
            <span className="tracking-wide uppercase text-[11px]">
              India's Trusted Commercial Road Freight & Transport Partner
            </span>
          </div>

          {/* Company Tagline & Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Nationwide Heavy Haulage & <span className="text-[#FE6B00]">Express Road Freight</span> Services
          </h1>

          {/* Subtitle / Company Overview Hook */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
            Delivering industrial peace of mind across India. We operate dedicated Full Truckload (FTL), Express Cargo, and heavy multi-axle freight operations connecting 500+ commercial hubs, major seaports, and manufacturing corridors nationwide.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-lg bg-[#FE6B00] hover:bg-[#EA580C] active:bg-[#C2410C] text-white text-sm sm:text-base font-bold shadow-xl shadow-orange-950/40 transition-all border border-orange-400/50 group"
            >
              <span>Request a Free Freight Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FE6B00]" />
              <span>Contact Dispatch Office</span>
            </a>
          </div>

          {/* Key Trust Checkmarks */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>24/7 Dedicated Driver Crew</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All-India Transport Permits</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Comprehensive Transit Safety</span>
            </div>
          </div>
        </div>

        {/* Corporate Highlights Bar / Stat Strip */}
        <div className="mt-14 pt-8 border-t border-slate-700/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FE6B00]">
              25+ Years
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              Industry Experience
            </div>
            <div className="text-[11px] text-slate-400">
              Serving India's core sectors since 2001
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              500+ Hubs
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              Pan-India Network
            </div>
            <div className="text-[11px] text-slate-400">
              Covering all 28 states & major corridors
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FE6B00]">
              1,200+ Assets
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              Commercial Fleet Vehicles
            </div>
            <div className="text-[11px] text-slate-400">
              Prime movers, multi-axles & reefer trucks
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400">
              99.4%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              On-Time Delivery SLA
            </div>
            <div className="text-[11px] text-slate-400">
              Punctual execution on Indian highways
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
