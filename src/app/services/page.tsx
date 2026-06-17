'use client';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase, FiTool, FiClipboard, FiCheck } from 'react-icons/fi';

const services = [
  {
    icon: <FiHome className="text-4xl" />,
    title: 'Residential Solar',
    desc: 'Rooftop systems designed for Pakistani homes with net‑metering, battery backup, and 25‑year panel warranty.',
    details: [
      'Free site survey & shading analysis',
      'Zero‑downpayment EMI plans',
      '25‑year linear power warranty',
      'Real‑time monitoring app',
    ],
  },
  {
    icon: <FiBriefcase className="text-4xl" />,
    title: 'Commercial & Industrial',
    desc: 'Large‑scale solar plants, carports, and ground‑mount solutions with PPA financing and rapid ROI.',
    details: [
      'Up to 1 MW+ projects',
      'Energy audit & consumption profiling',
      'CAPEX & OPEX models',
      'O&M contracts included',
    ],
  },
  {
    icon: <FiTool className="text-4xl" />,
    title: 'Operation & Maintenance',
    desc: 'Annual contracts covering cleaning, inverter health checks, and 24/7 performance monitoring.',
    details: [
      'Quarterly panel cleaning',
      'Inverter & battery inspection',
      'Performance guarantee reports',
      'Dedicated support manager',
    ],
  },
  {
    icon: <FiClipboard className="text-4xl" />,
    title: 'Energy Auditing',
    desc: 'Free shadow analysis, consumption study, and custom ROI report for your property.',
    details: [
      'On‑site walkthrough',
      'Shadow & tilt analysis',
      'Expected generation report',
      'Payback period calculation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-sm md:text-base"
        >
          End‑to‑end solar solutions tailored for Pakistani homes and businesses — from consultation to maintenance.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,229,255,0.1)]"
            >
              {/* Glow orb on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-b from-cyan-500/10 to-transparent blur-xl" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-5 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 ring-1 ring-cyan-400/20 group-hover:ring-cyan-400/40">
                    {s.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 mb-5 leading-relaxed text-sm md:text-base">
                    {s.desc}
                  </p>
                  <ul className="space-y-2">
                    {s.details.map((d, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <FiCheck className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}