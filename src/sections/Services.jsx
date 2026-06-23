import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden bg-brand-cream border-b border-brand-line">
      {/* Background warm light glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] radial-glow-amber opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-brand-line pb-6"
          >
            <span className="font-display italic text-2xl md:text-3xl text-brand-amber">
              04
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Custom Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              Services.
            </h2>
          </motion.div>
        </div>

        {/* Numbered list format separated by thin hairline dividers - no icon-cards */}
        <div className="max-w-4xl mx-auto divide-y divide-brand-line border-t border-b border-brand-line">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-baseline"
            >
              {/* Large serif numeral */}
              <span className="font-display italic text-4xl md:text-5xl text-brand-amber font-semibold shrink-0 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              
              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-brand-ink md:w-1/3 shrink-0">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-brand-inkSoft text-sm leading-relaxed font-sans flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
