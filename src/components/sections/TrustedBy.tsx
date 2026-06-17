import { FiShield, FiSun, FiAward, FiZap } from 'react-icons/fi';

const certifications = [
  {
    icon: <FiShield className="w-5 h-5 text-cyan-400" />,
    label: 'AEDB Certified',
    detail: 'Govt. Approved Installer',
  },
  {
    icon: <FiSun className="w-5 h-5 text-cyan-400" />,
    label: 'Tier‑1 Panels',
    detail: 'Mono PERC, 25‑Yr Warranty',
  },
  {
    icon: <FiAward className="w-5 h-5 text-cyan-400" />,
    label: '5‑Year Workmanship',
    detail: 'End‑to‑end coverage',
  },
  {
    icon: <FiZap className="w-5 h-5 text-cyan-400" />,
    label: 'Net Metering',
    detail: 'Seamless DISCO approval',
  },
];

export default function TrustedBy() {
  return (
    <section className="border-b border-white/5 py-10 md:py-14">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-8">
          Trusted & Certified
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {cert.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-white">
                {cert.label}
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 tracking-wide">
                {cert.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}