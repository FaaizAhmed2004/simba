
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
