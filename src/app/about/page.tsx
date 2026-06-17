'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Counter from '@/components/Counter';
import { FiTarget, FiShield, FiTrendingUp, FiHeart } from 'react-icons/fi';

export default function AboutPage() {
  const stats = [
    { value: 12500, label: 'Installations', suffix: '+' },
    { value: 200, label: 'Engineers', suffix: '+' },
    { value: 4, label: 'City Offices' },
  ];

  const values = [
    {
      icon: <FiTarget className="text-cyan-400 text-2xl" />,
      title: 'Quality First',
      desc: 'Only Tier‑1 panels, certified installers, and 25‑year warranty.',
    },
    {
      icon: <FiShield className="text-cyan-400 text-2xl" />,
      title: 'Trust & Transparency',
      desc: '8,000+ clients and 98% satisfaction rate speak for us.',
    },
    {
      icon: <FiTrendingUp className="text-cyan-400 text-2xl" />,
      title: 'Innovation',
      desc: 'Smart monitoring, real‑time analytics, and AI‑based energy optimization.',
    },
    {
      icon: <FiHeart className="text-cyan-400 text-2xl" />,
      title: 'Sustainability',
      desc: 'Reducing carbon footprint and building a greener Pakistan.',
    },
  ];

  const timeline = [
    { year: '2018', text: 'Founded in Lahore with a team of 5 engineers.' },
    { year: '2019', text: 'Completed first 500 residential installations.' },
    { year: '2021', text: 'Expanded to Karachi & Islamabad; crossed 5,000 installations.' },
    { year: '2023', text: 'Launched smart monitoring app; 12,500+ systems commissioned.' },
  ];

  return (
    <div className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Hero Section with Glassmorphism */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SunTech Pakistan</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Pakistan’s most trusted solar company. Since 2018, we’ve powered over 12,500 homes and businesses with cutting‑edge solar technology — making energy independence a reality.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            From residential rooftops to megawatt industrial plants, our team handles design, installation, net‑metering, and lifelong maintenance. All under one roof, with zero hidden costs.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,229,255,0.1)] transition-all duration-300"
              >
                <Counter end={s.value} suffix={s.suffix || ''} />
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image with Glassmorphism overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
        >
          <Image
            src="/about-us.jpg"
            alt="Solar installation"
            width={600}
            height={400}
            className="object-cover w-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/30">
            <p className="text-white text-sm font-medium">Our installation team at work — Lahore, 2023</p>
          </div>
        </motion.div>
      </div>

      {/* Values with true glassmorphism */}
      <div className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 ring-1 ring-cyan-400/20">
                {v.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Journey Timeline with Glass Cards */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Our Journey
        </motion.h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent hidden md:block" />

          {timeline.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`flex items-center gap-6 mb-10 flex-col md:flex-row ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-cyan-500/20 z-10">
                {m.year}
              </div>
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl p-5 flex-1 hover:border-cyan-400/30 transition-all duration-300">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}