// src/components/sections/Testimonials.tsx
'use client';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Ahmed Raza',
    city: 'Lahore',
    quote:
      'SunTech installed 5kW system at my home. The team was professional, and the net metering process was handled smoothly. My bill is now zero!',
    rating: 5,
    project: '5 kW Residential',
  },
  {
    name: 'Sara Khan',
    city: 'Karachi',
    quote:
      'Best decision ever. After‑sales service is excellent. Their monitoring app keeps me updated on daily generation. Highly recommended.',
    rating: 5,
    project: '3.5 kW Residential',
  },
  {
    name: 'Bilal Siddiqui',
    city: 'Islamabad',
    quote:
      'Commercial installation for our office. The entire process from design to commissioning was seamless. Great ROI in just 2 years.',
    rating: 5,
    project: '20 kW Commercial',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,229,255,0.1)] group"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 text-6xl text-cyan-400/10 select-none">
                “
              </div>
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <FiStar
                    key={idx}
                    className="text-cyan-400 fill-cyan-400 w-4 h-4"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-5 relative z-10 text-sm md:text-base">
                {t.quote}
              </p>
              <p className="font-semibold text-cyan-400">{t.name}</p>
              <p className="text-sm text-gray-500">
                {t.city}, Pakistan · {t.project}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}