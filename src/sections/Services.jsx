import { Globe, Cpu, CreditCard, Smartphone } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { services } from "../data/services";

export default function Services() {
  // Resolve string icon references dynamically from Lucide library
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Cpu":
        return Cpu;
      case "CreditCard":
        return CreditCard;
      case "Smartphone":
        return Smartphone;
      default:
        return Globe;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-darker bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[40%] w-[600px] h-[600px] radial-glow-violet opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            04 . Custom Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight font-sans">
            How I Can Add Value To Your Team
          </h2>
          <p className="text-brand-textSecondary text-sm sm:text-base mt-3">
            I specialize in combining raw technology capabilities with refined user experience design to ship products that deliver business results.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4 mx-auto" />
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            return (
              <GlassCard
                key={service.id}
                delay={idx * 0.1}
                hoverEffect={true}
                className="flex flex-col h-full p-6 md:p-8"
              >
                {/* Icon wrapper with hover scaling */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-400 mb-6 shrink-0 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-brand-textPrimary font-sans">
                    {service.title}
                  </h3>
                  <p className="text-brand-textSecondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
