'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSun, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
  ],
  services: [
    { label: 'Residential Solar', href: '/services' },
    { label: 'Commercial Solar', href: '/services' },
    { label: 'Maintenance', href: '/services' },
    { label: 'Energy Audit', href: '/services' },
  ],
  contact: [
    { icon: <FiPhone className="w-4 h-4" />, text: '+92 300 1234567' },
    { icon: <FiMail className="w-4 h-4" />, text: 'hello@suntech.pk' },
    { icon: <FiMapPin className="w-4 h-4" />, text: 'Lahore, Pakistan' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0f1a]/80 backdrop-blur-2xl">
      {/* Top subtle gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <FiSun className="text-cyan-400" />
              SunTech Pakistan
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Powering Pakistan’s future with clean, affordable solar energy. 12,500+ installations since 2018.
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} SunTech. All rights reserved.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-cyan-400 shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs"
        >
          <p>🌍 Built for Pakistan · Powered by the Sun</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Warranty Info
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}