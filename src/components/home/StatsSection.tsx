'use client';

import { useState, useEffect } from 'react';

const stats = [
  { number: 10000, suffix: '+', label: 'Loads Dispatched', duration: 2000 },
  { number: 50, suffix: '+', label: 'Happy Customers', duration: 2500 },
  { number: 99.9, suffix: '%', label: 'On-Time Delivery', duration: 2200 },
  { number: 25, suffix: '+', label: 'States Covered', duration: 1800 }
];

function AnimatedNumber({ number, suffix, duration }: { number: number; suffix: string; duration: number }) {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setDisplayNumber(Math.floor(progress * number));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [number, duration]);

  return (
    <span>
      {displayNumber.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          <svg width="100%" height="100%">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Businesses Nationwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the numbers that showcase
            our commitment to excellence in logistics services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <AnimatedNumber
                  number={stat.number}
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 h-full shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <div className="text-2xl font-bold mb-2 text-white">Industry Leading</div>
              <div className="text-gray-300">Technology & Innovation</div>
            </div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 h-full shadow-lg">
              <div className="text-4xl mb-4">📞</div>
              <div className="text-2xl font-bold mb-2 text-white">24/7 Support</div>
              <div className="text-gray-300">Always Here When You Need Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}