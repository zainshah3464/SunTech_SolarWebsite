// src/components/sections/CTA.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5" />
      {/* Glowing orb */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Ready to switch to solar?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto"
        >
          Join 8,000+ Pakistani households and businesses already saving with SunTech.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="block w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-colors shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_60px_rgba(0,229,255,0.5)]"
          >
            Get Your Free Quote
          </Link>
        </motion.div>
        <p className="text-gray-500 text-xs mt-6">
          No commitment · Free site survey · Response within 24 hours
        </p>
      </div>
    </section>
  );
}