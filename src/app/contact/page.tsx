'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Valid phone number required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const contactDetails = [
  {
    icon: <FiPhone className="text-cyan-400 w-5 h-5" />,
    label: 'Call Us',
    value: '+92 300 1234567',
    sub: 'Mon‑Sat, 9am‑6pm',
  },
  {
    icon: <FiMail className="text-cyan-400 w-5 h-5" />,
    label: 'Email',
    value: 'hello@suntech.pk',
    sub: 'We reply within 24h',
  },
  {
    icon: <FiMapPin className="text-cyan-400 w-5 h-5" />,
    label: 'Visit Us',
    value: 'Lahore, Pakistan',
    sub: 'Karachi · Islamabad',
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus('loading');
    // Simulate API call – replace with real Resend integration later
    setTimeout(() => {
      setStatus('success');
      reset();
    }, 1500);
  }

  return (
    <div className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
      >
        Get in Touch
      </motion.h1>
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 text-sm md:text-base">
        Ready to harness the sun? Fill out the form and our energy expert will reach out within 24 hours.
      </p>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Contact Info Sidebar — Glass Cards */}
        <div className="md:col-span-2 space-y-6">
          {contactDetails.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0 ring-1 ring-cyan-400/20">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white font-semibold">{item.value}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                  <FiClock className="w-3 h-3" />
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Additional trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
          >
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Response Time</p>
            <p className="text-2xl font-bold text-cyan-400">&lt; 24 Hours</p>
            <p className="text-gray-500 text-sm">Guaranteed</p>
          </motion.div>
        </div>

        {/* Form — Glassmorphism Container */}
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300 shadow-lg"
          >
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 p-4 rounded-lg mb-6 text-center backdrop-blur-sm"
              >
                <FiSend className="inline-block mr-2" />
                Thank you! We’ll contact you shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register('name')}
                    placeholder="Full Name"
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email')}
                    placeholder="Email Address"
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register('phone')}
                    placeholder="Phone (03XX-XXXXXXX)"
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <select
                    {...register('service')}
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0a0f1a] text-gray-500">
                      Select Service
                    </option>
                    <option className="bg-[#0a0f1a]">Residential Solar</option>
                    <option className="bg-[#0a0f1a]">Commercial Solar</option>
                    <option className="bg-[#0a0f1a]">Maintenance</option>
                    <option className="bg-[#0a0f1a]">Energy Audit</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>
              </div>
              <div>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold rounded-xl transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}