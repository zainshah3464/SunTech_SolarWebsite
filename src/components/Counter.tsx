// src/components/Counter.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.floor(latest));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const controls = animate(motionVal, end, {
            duration,
            ease: 'easeOut',
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.3 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration, hasAnimated, motionVal]);

  return (
    <div ref={ref} className="text-4xl font-bold text-cyan-400 tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}