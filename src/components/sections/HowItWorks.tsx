// src/components/sections/HowItWorks.tsx
'use client';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Consultation', desc: 'Site survey & energy audit.' },
  { step: '02', title: 'Design', desc: 'Custom solution tailored to you.' },
  { step: '03', title: 'Installation', desc: 'Certified team installs within 48h.' },
  { step: '04', title: 'Enjoy Savings', desc: 'Monitor generation & save.' },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
        >
          How We Work
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line – visible only on md+ */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50" />

          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl font-bold text-black shadow-lg shadow-cyan-500/20 mb-5 group-hover:scale-110 transition-transform duration-300 z-10">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}