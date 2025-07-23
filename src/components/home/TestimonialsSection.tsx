'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    content: 'Simba Dispatch Services LLC transformed our FBA prep process. Their attention to detail and competitive pricing helped us scale our Amazon business significantly.',
    rating: 5
  },
  {
    name: 'Mike Rodriguez',
    content: 'The dispatching service is outstanding. They consistently find high-paying loads and their support team is available 24/7. Highly recommended!',
    rating: 5
  },
  {
    name: 'Jennifer Chen',
    content: 'From freight shipping to pallet storage, Simba Dispatch Services LLC handles all our logistics needs. Their technology platform makes everything seamless.',
    rating: 5
  },
  {
    name: 'David Thompson',
    content: 'Reliable, professional, and cost-effective. Simba Dispatch Services LLC has been our trusted partner for over two years. Excellent service every time.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses across America 
            are saying about their experience with Simba Dispatch Services LLC.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-opacity-80">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 italic relative">
                <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-800 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                "{testimonials[currentTestimonial].content}"
                <svg className="absolute bottom-0 right-0 transform translate-x-6 translate-y-8 h-16 w-16 text-gray-800 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M22.648 28C27.544 24.544 31 18.88 31 12.64c0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
                </svg>
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-900 border border-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-900 border border-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}