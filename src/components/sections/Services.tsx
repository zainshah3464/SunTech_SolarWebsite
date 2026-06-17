// src/components/sections/Services.tsx
'use client';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase, FiTool, FiCheck } from 'react-icons/fi';

const services = [
  {
    icon: <FiHome className="text-4xl" />,
    title: 'Residential Solar',
    desc: 'Rooftop solutions with net metering, battery backup, and 25‑year performance warranty.',
    features: ['Free site survey', 'Zero downpayment', 'Net metering support'],
  },
  {
    icon: <FiBriefcase className="text-4xl" />,
    title: 'Commercial Solar',
    desc: 'Custom industrial plants, carports, and ground‑mount systems with PPA financing.',
    features: ['Up to 1 MW projects', 'O&M contracts', 'Rapid ROI'],
  },
  {
    icon: <FiTool className="text-4xl" />,
    title: 'Maintenance',
    desc: 'Annual cleaning, inverter health checks, and real‑time monitoring via our app.',
    features: ['24/7 support', 'Performance reports', 'Instant alerts'],
  },
];

export default function Services() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16"
        >
          Our Core Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
            >
              {/* Icon container with glow */}
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 ring-1 ring-cyan-400/20 group-hover:ring-cyan-400/40">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center">
                {s.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <FiCheck className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}