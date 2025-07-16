'use client';

import { useState, useEffect } from 'react';

const stats = [
  { number: 10000, suffix: '+', label: 'Shipments Delivered', duration: 2000 },
  { number: 500, suffix: '+', label: 'Happy Customers', duration: 2500 },
  { number: 99.9, suffix: '%', label: 'On-Time Delivery', duration: 2200 },
  { number: 50, suffix: '+', label: 'States Covered', duration: 1800 }
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
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Nationwide
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the numbers that showcase 
            our commitment to excellence in logistics services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                <AnimatedNumber 
                  number={stat.number} 
                  suffix={stat.suffix} 
                  duration={stat.duration} 
                />
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-800 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Industry Leading</div>
              <div className="text-blue-200">Technology & Innovation</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-800 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Certified & Insured</div>
              <div className="text-blue-200">Full Coverage Protection</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-800 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-blue-200">Always Here When You Need Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}