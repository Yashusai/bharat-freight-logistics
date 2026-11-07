import React, { useState } from 'react';
import { 
  Truck, 
  Layers, 
  Weight, 
  Ruler, 
  CheckCircle2, 
  Filter, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'HEAVY' | 'CONTAINER' | 'REEFER' | 'ODC'>('ALL');

  const fleetAssets = [
    {
      id: 'fleet-1',
      name: 'Multi-Axle Heavy Haulage Prime Mover',
      model: 'Tata Prima 5530.S / BharatBenz 5528.T',
      category: 'HEAVY',
      payload: '35 - 55 Metric Tonnes',
      dimensions: '40ft x 8.5ft x 8.5ft (Triple-Axle Bed)',
      axles: '6x4 / 8x4 Heavy Haul Axle Configuration',
      idealCargo: 'Industrial Steel Coils, Heavy Castings, Cement & Raw Bulk',
      imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
      tag: 'Heavy Industrial',
      specs: ['High-torque 300HP diesel powertrain', 'Air-suspension rear bogies for load balance', 'FASTag & dual-driver long haul cabin'],
    },
    {
      id: 'fleet-2',
      name: 'Closed Container Body Express Truck',
      model: 'Ashok Leyland 4220 14-Wheeler High-Cube',
      category: 'CONTAINER',
      payload: '20 - 28 Metric Tonnes',
      dimensions: '32ft Multi-Axle Container (32ft MXL x 8.5ft x 9ft)',
      axles: '10x2 / 14-Wheel Rigid Chassis',
      idealCargo: 'FMCG Goods, Packaged Consumer Electronics, Apparel & E-Commerce',
      imageUrl: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=900&q=80',
      tag: 'Weatherproof & Secure',
      specs: ['Corrugated weatherproof steel container body', 'Container rear doors with customs seal brackets', 'Internal cargo lashing & tie-down hooks'],
    },
    {
      id: 'fleet-3',
      name: 'Cold-Chain Refrigerated Reefer Container',
      model: 'BharatBenz 2823R Carrier Supra Reefer',
      category: 'REEFER',
      payload: '15 - 22 Metric Tonnes',
      dimensions: '24ft to 32ft Insulated Cold Chamber',
      axles: '6x2 Multi-Axle Reefer Configuration',
      idealCargo: 'Vaccines, Biologics, Finished Pharmaceuticals, Dairy, Chocolates',
      imageUrl: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=900&q=80',
      tag: 'Temperature Controlled',
      specs: ['Precision climate range (-25°C to +20°C)', 'Multi-point digital temperature data logger', 'Independent diesel generator with electric standby'],
    },
    {
      id: 'fleet-4',
      name: 'High-Capacity Flatbed Industrial Trailer',
      model: 'Volvo FH / Scania Heavy Flatbed Series',
      category: 'HEAVY',
      payload: '32 - 45 Metric Tonnes',
      dimensions: '40ft x 8.5ft Heavy Steel Bed with Side Stanchions',
      axles: 'Tri-Axle Trailer with Heavy Duty Kingpin',
      idealCargo: 'Structural Steel Girders, Heavy Pipes, Precast Concrete Blocks',
      imageUrl: 'https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=900&q=80',
      tag: 'Versatile Heavy Bed',
      specs: ['Heavy-gauge chequered steel deck plate', 'Removable side bolsters & twist locks for containers', 'Heavy-duty hydraulic landing legs'],
    },
    {
      id: 'fleet-5',
      name: 'Hydraulic Modular Multi-Axle Trailer',
      model: 'Goldhofer / Scheuerle Heavy Transport Modules',
      category: 'ODC',
      payload: '60 - 150+ Metric Tonnes',
      dimensions: 'Custom Modular Configuration (Expandable Length & Width)',
      axles: '8 to 16 Hydraulic Steerable Axle Lines',
      idealCargo: 'Supercritical Power Turbines, Defense Vehicles, Metro Rail Coaches',
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
      tag: 'Over-Dimensional Cargo',
      specs: ['Hydraulic compensation for bridge and uneven road crossing', 'All-wheel hydraulic steering for tight turns', 'Supported by dedicated pilot vehicle escort crew'],
    },
    {
      id: 'fleet-6',
      name: 'Medium Commercial Vehicle (MCV) Regional Truck',
      model: 'Eicher Pro 3019 / Tata Ultra 1918.T',
      category: 'CONTAINER',
      payload: '9 - 14 Metric Tonnes',
      dimensions: '20ft x 7.5ft x 7.5ft Weatherproof Box',
      axles: '4x2 Medium Commercial Chassis',
      idealCargo: 'Regional Inter-City Distribution, Retail Staging, Hub Feeder',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
      tag: 'Regional Express',
      specs: ['Optimal fuel efficiency for short-to-medium haul routes', 'Easy maneuverability in urban and industrial hub approaches', 'Fast turnaround loading dock clearance'],
    },
  ];

  const filteredAssets = fleetAssets.filter(item => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="fleet" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#FE6B00] text-xs font-bold uppercase tracking-wider">
            <span>Modern Transportation Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2744] tracking-tight">
            Our Commercial Fleet & Transport Vehicles
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Maintained to exacting OEM standards, our modern fleet of over 1,200 commercial vehicles delivers reliability, safety, and capacity across all freight categories.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {[
            { label: 'All Vehicles', value: 'ALL' },
            { label: 'Heavy Prime Movers', value: 'HEAVY' },
            { label: 'Closed Container Trucks', value: 'CONTAINER' },
            { label: 'Refrigerated Reefer', value: 'REEFER' },
            { label: 'ODC & Hydraulic Modular', value: 'ODC' },
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value as any)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === tab.value
                  ? 'bg-[#0F2744] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-[#0F2744]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    {vehicle.tag}
                  </span>

                  {/* Vehicle Model Name Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] text-orange-300 font-semibold uppercase tracking-wider block">
                      {vehicle.model}
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Payload Capacity</span>
                      <strong className="text-[#0F2744] text-sm font-extrabold">{vehicle.payload}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Axle Setup</span>
                      <strong className="text-slate-800 text-xs font-bold">{vehicle.axles.split(' ')[0]}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <Ruler className="w-4 h-4 text-[#FE6B00] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Dimensions:</strong> {vehicle.dimensions}
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Ideal Cargo:</strong> {vehicle.idealCargo}
                      </div>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="border-t border-slate-100 pt-3 space-y-1 text-[11px] text-slate-500">
                    {vehicle.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FE6B00]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectVehicle(vehicle.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0F2744] hover:bg-[#FE6B00] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <span>Book This Vehicle Type</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
