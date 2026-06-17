'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#0a0f1a]/40 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            {/* Slow pulse ring (optional, remove if you want) */}
            <span className="absolute inset-0 rounded-full bg-amber-400/10 animate-ping opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500/20 to-amber-500/20 ring-1 ring-white/10 group-hover:ring-cyan-400/40 transition-all duration-500">
              <FiSun className="text-xl text-amber-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <span className="text-xl font-semibold tracking-tight text-white group-hover:tracking-wider transition-all duration-500">
            SunTech
            <span className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-500"> Pakistan</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {routes.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <FiX className="text-xl text-white" /> : <FiMenu className="text-xl text-white" />}
        </button>
      </div>

      {/* Simple Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0f1a]/90 backdrop-blur-2xl">
          <nav className="flex flex-col px-6 py-4 space-y-2">
            {routes.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors
                    ${isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}