import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);
  const [preSelectedVehicle, setPreSelectedVehicle] = useState<string | undefined>(undefined);

  const handleOpenQuoteWithService = (serviceName: string) => {
    setPreSelectedService(serviceName);
    setPreSelectedVehicle(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithVehicle = (vehicleName: string) => {
    setPreSelectedVehicle(vehicleName);
    setPreSelectedService(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setPreSelectedService(undefined);
    setPreSelectedVehicle(undefined);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FE6B00] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenGeneralQuote} />

      <main>
        {/* 1. Home / Hero Banner */}
        <Hero onOpenQuoteModal={handleOpenGeneralQuote} />

        {/* 2. Our Services */}
        <Services onSelectService={handleOpenQuoteWithService} />

        {/* 4. Our Fleet */}
        <Fleet onSelectVehicle={handleOpenQuoteWithVehicle} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Contact Us */}
        <ContactUs />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/919820012345?text=Hello%20Bharat%20Freight%2C%20I%20would%20like%20to%20inquire%20about%20transportation%20and%20freight%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-2xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all group"
          title="Chat with our dispatch team on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-semibold">WhatsApp Inquiries</span>
        </a>

        <a
          href="tel:18002098899"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0F2744] hover:bg-[#001229] text-white font-bold text-xs shadow-xl border border-sky-400/30 hover:scale-105 active:scale-95 transition-all sm:hidden"
          title="Toll-free telephone call"
        >
          <Phone className="w-4 h-4 text-[#FE6B00]" />
          <span>Call 1800-209-8899</span>
        </a>
      </aside>

      {/* Request Freight Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preSelectedService={preSelectedService}
        preSelectedVehicle={preSelectedVehicle}
      />
    </div>
  );
}
