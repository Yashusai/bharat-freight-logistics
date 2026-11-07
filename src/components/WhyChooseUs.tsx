import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Star, 
  Award,
  ThumbsUp,
  Headphones
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: '99.4% On-Time Delivery Record',
      description: 'Punctuality is the cornerstone of industrial logistics. Our scheduled line-haul operations and experienced highway drivers ensure your raw materials and finished goods arrive right on schedule.',
      icon: Clock,
      stat: '99.4%',
      statLabel: 'On-Time SLA',
    },
    {
      title: 'Uncompromising Cargo Safety & Care',
      description: 'Every consignment is protected by comprehensive transit insurance, proper cargo lashing, secure seals, and disciplined vehicle maintenance routines before every departure.',
      icon: ShieldCheck,
      stat: '100%',
      statLabel: 'Insured Transit',
    },
    {
      title: 'Comprehensive Pan-India Network',
      description: 'Covering 500+ commercial destinations across all 28 Indian states. Direct line-haul routes connecting major seaports, dry ports, and manufacturing corridors nationwide.',
      icon: MapPin,
      stat: '500+',
      statLabel: 'Destination Hubs',
    },
    {
      title: 'Dedicated 24/7 Account Management',
      description: 'No generic call centers. Every enterprise partner is paired with an experienced Key Account Manager who handles dispatch schedules, documentation, and prompt status updates.',
      icon: Headphones,
      stat: '24/7',
      statLabel: 'Operational Support',
    },
  ];

  const testimonials = [
    {
      quote: 'Bharat Freight has managed our inter-plant automotive haulage between Pune and Chennai for over four years. Their punctuality, fleet condition, and zero-damage record are exceptional.',
      clientName: 'Sanjay Deshmukh',
      designation: 'VP of Supply Chain & Logistics',
      company: 'Premier Automotive Components Ltd, Pune',
      rating: 5,
    },
    {
      quote: 'During high-demand festive seasons, truck availability is typically a nightmare in India. Bharat Freight consistently fulfills our full truckload orders on time with complete transparency.',
      clientName: 'Sunita Mehra',
      designation: 'Director of National Distribution',
      company: 'Heritage Consumer Goods & Foods, Delhi NCR',
      rating: 5,
    },
    {
      quote: 'Transporting heavy over-dimensional power equipment requires meticulous route surveys and experienced drivers. The team handled our 58-tonne project cargo with utmost professionalism.',
      clientName: 'Rajeev Nambiar',
      designation: 'General Manager - Infrastructure Projects',
      company: 'Trans-India Energy Engineering, Hyderabad',
      rating: 5,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#FE6B00] text-xs font-bold uppercase tracking-wider">
            <span>Why Partner With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight">
            Reliability, Safety, and Guaranteed Peace of Mind
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            In an industry where delays cost money and damages break trust, Bharat Freight delivers the consistency and operational discipline your business demands.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#FE6B00] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#0F2744] group-hover:bg-[#FE6B00] group-hover:text-white flex items-center justify-center transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F2744] group-hover:text-[#FE6B00] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-[#0F2744] group-hover:text-[#FE6B00] transition-colors">
                      {pillar.stat}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">
                      {pillar.statLabel}
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Trust & Testimonials */}
        <div className="bg-[#0F2744] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE6B00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Client Testimonials & Industry Trust
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Trusted by India's Foremost Enterprises
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Here is what supply chain leaders say about our commercial freight services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#132742] rounded-2xl p-6 border border-[#233F63] flex flex-col justify-between space-y-4 shadow-lg hover:border-orange-500/40 transition-colors"
                >
                  <div className="space-y-3">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-[#FE6B00]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60">
                    <h5 className="font-bold text-white text-sm">{t.clientName}</h5>
                    <p className="text-[11px] text-orange-300 font-medium">{t.designation}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
