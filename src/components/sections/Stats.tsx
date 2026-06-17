// src/components/sections/Stats.tsx
import Counter from '@/components/Counter';
import { FiZap, FiUsers, FiAward } from 'react-icons/fi';

const stats = [
  {
    icon: <FiZap className="text-4xl md:text-5xl text-cyan-400" />,
    end: 12500,
    suffix: '+',
    label: 'Installations',
    detail: 'Panels across Pakistan',
  },
  {
    icon: <FiUsers className="text-4xl md:text-5xl text-blue-400" />,
    end: 8000,
    suffix: '+',
    label: 'Happy Clients',
    detail: 'Served since 2018',
  },
  {
    icon: <FiAward className="text-4xl md:text-5xl text-cyan-300" />,
    end: 98,
    suffix: '%',
    label: 'Satisfaction',
    detail: 'Based on surveys',
  },
];

export default function Stats() {
  return (
    <section className="relative py-12 md:py-20 bg-black/20 backdrop-blur-sm border-y border-white/5 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 60%22 width=%2260%22 height=%2260%22><path d=%22M30 10 L30 30 L10 30%22 stroke=%22white%22 stroke-width=%220.5%22 fill=%22none%22 opacity=%220.03%22/></svg>')] pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center relative z-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {s.icon}
              </div>
              <Counter end={s.end} suffix={s.suffix} />
              <p className="text-gray-300 mt-2 text-lg md:text-xl font-medium">
                {s.label}
              </p>
              <p className="text-gray-500 text-sm mt-1">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}