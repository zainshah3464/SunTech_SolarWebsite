'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const headingWords = "Pakistan’s Solar Future Starts Here.".split(' ');

// Stagger animation variants for heading words
const headingWordAnimation = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.6 + i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

// Orbs configuration – only cyan/blue shades, very low opacity
const orbs = [
  { size: 400, x: '5%', y: '15%', color: 'rgba(0,229,255,0.06)', blur: '90px' },
  { size: 500, x: '85%', y: '70%', color: 'rgba(59,130,246,0.04)', blur: '100px' },
  { size: 350, x: '55%', y: '5%', color: 'rgba(6,182,212,0.05)', blur: '80px' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax background zoom
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.12]);

  // 3D tilt effect for the content card
  const rotateX = useTransform(scrollY, [0, 500], [0, 3]); // subtle forward tilt

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-[#0a0f1a]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg4.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Pakistan’s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Solar Future
            </span>{' '}
            Starts Here.
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            SunTech delivers cutting‑edge solar systems for homes & businesses. Save up to 80% on electricity bills with zero downpayment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition shadow-lg shadow-cyan-500/30">
              Get Free Quote
            </Link>
            <Link href="/services" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-[#0a0f1a]">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg4.jpg')",
          scale: bgScale,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Subtle moving orbs – cyan/blue only */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            filter: `blur(${orb.blur})`,
          }}
          animate={{
            x: [0, 12, -8, 0],
            y: [0, -12, 8, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content with 3D tilt card */}
      <motion.div
        style={{ rotateX }}
        className="relative z-10 max-w-5xl w-full px-6 perspective-1000"
      >
        {/* Heading – staggered word reveal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          {headingWords.map((word, i) => {
            const isGradient = word === 'Solar' || word === 'Future';
            return (
              <motion.span
                key={i}
                custom={i}
                variants={headingWordAnimation}
                initial="hidden"
                animate="visible"
                className={isGradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500' : ''}
              >
                {word}{' '}
              </motion.span>
            );
          })}
        </h1>

        {/* Subtitle blur-in */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          SunTech delivers cutting‑edge solar systems for homes & businesses. Save up to 80% on electricity bills with zero downpayment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-5 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-colors shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)]"
            >
              Get Free Quote
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/services"
              className="inline-block px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator – now in flow, never overlaps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-11 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Inline style for 3D perspective (minimal) */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}