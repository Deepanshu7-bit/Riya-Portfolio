'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const element = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // Smooth exponential deceleration for counter
      onUpdate(latest) {
        if (element) {
          const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
          element.textContent = `${prefix}${formatted}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, delay, prefix, suffix, decimals]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{from}{suffix}
    </span>
  );
}
