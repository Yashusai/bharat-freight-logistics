import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare,
  Clock,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Contact Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-[#1A2E46] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919820012345" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FE6B00]" />
              <span>Direct: +91 98200 12345</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href="mailto:contact@bharatfreightlogistics.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FE6B00]" />
              <span>contact@bharatfreightlogistics.com</span>
            </a>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM IST</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#FE6B00]" />
              <span>HQ: Navi Mumbai, Maharashtra</span>
            </span>
            <span className="text-slate-600">•</span>
            <a 
              href="https://wa.me/919820012345?text=Hello%20Bharat%20Freight%2C%20I%20would%20like%20to%20inquire%20about%20transportation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F2744]/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-[#0F2744] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Company Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#FE6B00] flex items-center justify-center text-white shadow-md shadow-orange-950/40 group-hover:bg-[#EA580C] transition-all">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  BHARAT FREIGHT
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                Transport & Logistics Pvt. Ltd.
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#FE6B00] transition-colors relative py-1 hover:font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:18002098899"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-[#1A385E] hover:bg-[#234979] border border-sky-400/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FE6B00]" />
              <span>1800-209-8899</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FE6B00] hover:bg-[#EA580C] active:bg-[#C2410C] text-white text-xs font-bold shadow-md shadow-orange-950/30 transition-all border border-orange-400/40"
            >
              <span>Get a Free Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A192F] border-t border-[#1E3A5F] px-5 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm font-semibold text-slate-200 hover:text-white hover:bg-[#152B47] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-700/60 space-y-2.5">
              <a
                href="tel:+919820012345"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#152B47] text-slate-200 font-semibold text-xs border border-slate-600"
              >
                <Phone className="w-4 h-4 text-[#FE6B00]" />
                <span>Call Us: +91 98200 12345</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#FE6B00] hover:bg-[#EA580C] text-white font-bold text-xs shadow-md"
              >
                <span>Request a Free Freight Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919820012345?text=Hello%20Bharat%20Freight%2C%20I%20would%20like%20to%20inquire%20about%20transportation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
