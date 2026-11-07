import React from 'react';
import { 
  Truck, 
  Package, 
  Zap, 
  Thermometer, 
  Layers, 
  Warehouse, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'ftl',
      title: 'Full Truckload (FTL) Freight',
      subtitle: 'Dedicated Direct Transportation',
      icon: Truck,
      description: 'Exclusive point-to-point commercial truck transport designed for high-volume manufacturing, raw materials, finished automotive parts, and bulk industrial cargo with dedicated delivery schedules.',
      features: [
        'Dedicated vehicle assigned exclusively to your shipment',
        'Direct factory-to-distribution center transit with zero transshipment handling',
        'Payload capacity range from 9 to 55 Metric Tonnes',
        'Customized loading configurations: Multi-axle, containerized, or flatbed',
      ],
      tag: 'Core Specialization',
    },
    {
      id: 'ptl',
      title: 'Part Truckload (PTL) / LTL Cargo',
      subtitle: 'Consolidated Road Transportation',
      icon: Package,
      description: 'Flexible, cost-effective transportation for shipments that do not require an entire trailer. Your cargo is safely consolidated with other commercial freight traveling on scheduled corridor routes.',
      features: [
        'Pay strictly for the space and tonnage your cargo occupies',
        'Scheduled daily and weekly departures across major Indian trade lanes',
        'Carefully barcoded and segregated pallet handling to prevent mixing',
        'Ideal for small-to-medium enterprises (SMEs) and seasonal distributors',
      ],
      tag: 'Economical & Flexible',
    },
    {
      id: 'express',
      title: 'Express Surface Freight',
      subtitle: 'Time-Critical Highway Dispatch',
      icon: Zap,
      description: 'Expedited highway transport engineered for urgent deliveries, high-value electronics, retail inventory replenishments, and critical manufacturing line-down components.',
      features: [
        'Double-driver relay protocols ensuring near non-stop transit',
        'Guaranteed transit time windows between major metros (Delhi, Mumbai, Bengaluru, etc.)',
        'Priority loading, expedited toll bypass, and express dock turnaround',
        'Special handling procedures for delicate and high-value cargo',
      ],
      tag: 'Fastest Highway Transit',
    },
    {
      id: 'cold-chain',
      title: 'Cold Chain & Refrigerated Logistics',
      subtitle: 'Temperature-Controlled Transport',
      icon: Thermometer,
      description: 'Specialized refrigerated reefer container trucks maintaining precision climate settings (-25°C to +20°C) for pharmaceuticals, biologics, vaccines, dairy, chocolates, and perishable foods.',
      features: [
        'Carrier and ThermoKing high-performance integrated cooling units',
        'Continuous multi-point temperature data logging throughout journey',
        'Insulated heavy-duty composite container bodies with backup generators',
        'Compliant with Good Distribution Practices (GDP) for pharmaceuticals',
      ],
      tag: 'Pharma & Perishables',
    },
    {
      id: 'odc',
      title: 'Project Cargo & Over-Dimensional (ODC)',
      subtitle: 'Heavy Industrial Haulage',
      icon: Layers,
      description: 'Engineered transport solutions for oversized industrial equipment, power turbines, infrastructure girders, metro rail segments, and heavy transformers exceeding standard dimensions.',
      features: [
        'Hydraulic multi-axle modular trailers capable of up to 150+ Tonnes',
        'Comprehensive route surveys, bridge load assessments, and civil clearances',
        'Dedicated pilot vehicle escort and highway traffic coordination teams',
        'Turnkey heavy lifting, crane offloading, and site staging support',
      ],
      tag: 'Heavy Engineering',
    },
    {
      id: 'warehousing',
      title: 'Warehousing & 3PL Transit Hubs',
      subtitle: 'Strategic Staging & Cross-Docking',
      icon: Warehouse,
      description: 'Modern transit warehouse facilities located along key logistics arteries offering cross-docking, temporary cargo staging, palletization, and distribution support.',
      features: [
        'Secure transit warehouses in Navi Mumbai, Dadri NCR, Chennai, and Bengaluru',
        'Dock-levelers, reach trucks, and modern material handling infrastructure',
        'Fire-safety compliant with round-the-clock security and CCTV monitoring',
        'First-mile pickup and last-mile retail distribution integration',
      ],
      tag: 'Integrated Storage',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#FE6B00] text-xs font-bold uppercase tracking-wider">
            <span>Our Commercial Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight">
            Comprehensive Freight & Transportation Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Tailored road transport and logistics solutions engineered for industrial reliability, regulatory compliance, and seamless supply chain integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Orange Indicator Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#FE6B00] transition-colors" />

                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0F2744] group-hover:bg-[#FE6B00] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 group-hover:bg-orange-50 group-hover:text-[#FE6B00] px-2.5 py-1 rounded-full transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0F2744] group-hover:text-[#FE6B00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 hover:bg-[#FE6B00] text-slate-800 hover:text-white text-xs font-bold transition-all group-hover:shadow-md"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
